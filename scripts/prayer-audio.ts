import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, rename, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { october2026Weeks } from '../client/src/data/weeklyDevotionals';

const model = 'microsoft/mai-voice-2.1-flash';
const voices = { feminina: 'pt-BR-Luana:MAI-Voice-2.1-Flash', masculina: 'pt-BR-Caio:MAI-Voice-2.1-Flash' } as const;
const key = process.env.OPENROUTER_API_KEY;
const mode = process.argv[2];

if (!key) throw new Error('Configure OPENROUTER_API_KEY no ambiente de execução.');
if (mode !== 'samples' && mode !== 'generate') throw new Error('Uso: node --import tsx scripts/prayer-audio.ts samples | generate');
const modelsResponse = await fetch('https://openrouter.ai/api/v1/models?output_modalities=speech', { headers: { Authorization: `Bearer ${key}` } });
if (!modelsResponse.ok) throw new Error(`Não foi possível verificar modelos e preços: HTTP ${modelsResponse.status}`);
const models = await modelsResponse.json() as { data: { id: string; pricing?: unknown; supported_voices?: string[] }[] };
const selected = models.data.find(item => item.id === model);
if (!selected || !selected.pricing) throw new Error('Modelo ou preço indisponível na OpenRouter; geração cancelada.');
console.log('Modelo:', model, 'Preço informado pela OpenRouter:', JSON.stringify(selected.pricing));
const week = october2026Weeks.find(w => w.number === 4 && w.startsOn === '2026-10-26');
if (!week) throw new Error('Semana 4 não encontrada.');
const manifestPath = 'client/src/data/prayerAudio.json';
type Entry = { src: string; text: string; textHash: string; model: string; voice: string };
const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as Record<string, Record<string, Entry>>;
async function synthesize(text: string, selectedVoice: string): Promise<Buffer> {
  const response = await fetch('https://openrouter.ai/api/v1/audio/speech', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, input: text, voice: selectedVoice, response_format: 'mp3', instructions: 'Leia em português brasileiro, com voz acolhedora e ritmo tranquilo, sem música. Leia exatamente o texto.' }),
  });
  if (!response.ok) throw new Error(`Falha ao gerar áudio (${selectedVoice}): HTTP ${response.status}`);
  if (!response.headers.get('content-type')?.startsWith('audio/')) throw new Error('Resposta da OpenRouter não é áudio.');
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1000) throw new Error('Áudio vazio ou incompleto.');
  return bytes;
}
function prayer(date: string) {
  const d = week!.devotionals[date];
  if (!d) throw new Error(`Devocional ausente: ${date}`);
  return d.format === 'document' ? d.sections.find(s => s.title.toUpperCase() === 'ORAÇÃO')!.paragraphs.join('\n\n') : d.prayer;
}
if (mode === 'samples') {
  const text = prayer('2026-10-31').split('\n\n')[0];
  const dir = '/workspace/amostras-oracao';
  await mkdir(dir, { recursive: true });
  for (const [v, id] of Object.entries(voices)) {
    const bytes = await synthesize(text, id);
    await writeFile(join(dir, `${v}.mp3`), bytes);
    console.log('Amostra salva:', join(dir, `${v}.mp3`));
  }
} else {
  const dir = 'client/public/audio/oracoes';
  await mkdir(dir, { recursive: true });
  for (const [date] of Object.entries(week.devotionals).sort()) {
    const text = prayer(date);
    const textHash = createHash('sha256').update(text).digest('hex');
    for (const [label, voice] of Object.entries(voices)) {
    const previous = manifest[date]?.[label];
    if (previous?.textHash === textHash && previous.model === model && previous.voice === voice && previous.text === text && await stat(`client/public${previous.src}`).then(s => s.size > 1000).catch(() => false)) {
      console.log('Áudio existente mantido:', date); continue;
    }
    const bytes = await synthesize(text, voice!);
    const nameHash = createHash('sha256').update(JSON.stringify([text, model, voice])).digest('hex').slice(0, 16);
    const file = `${date}-${nameHash}.mp3`;
    await writeFile(join(dir, `${file}.tmp`), bytes);
    await rename(join(dir, `${file}.tmp`), join(dir, file));
    manifest[date] ??= {};
    manifest[date][label] = { src: `/audio/oracoes/${file}`, text, textHash, model, voice: voice! };
    await writeFile(`${manifestPath}.tmp`, `${JSON.stringify(manifest, null, 2)}\n`);
    await rename(`${manifestPath}.tmp`, manifestPath);
    console.log('Gerado:', date, label);
    }
  }
}
