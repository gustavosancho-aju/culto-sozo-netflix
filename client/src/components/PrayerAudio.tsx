import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { recordEngagement } from '../lib/engagementAnalytics';

type Voice = 'feminina' | 'masculina';
export default function PrayerAudio({ date, voices }: { date: string; voices: Record<Voice, string> }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const started = useRef(false);
  const [voice, setVoice] = useState<Voice>('feminina');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;
    return () => { audio?.pause(); };
  }, []);
  function selectVoice(next: Voice) {
    audioRef.current?.pause();
    started.current = false;
    setError(false);
    setVisible(false);
    setVoice(next);
  }
  function play() {
    setVisible(true);
    setError(false);
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.error) audio.load();
    void audio.play().catch(() => setError(true));
  }
  return <div className="prayer-audio">
    <label htmlFor={`prayer-voice-${date}`}>Escolha a voz</label>
    <select id={`prayer-voice-${date}`} value={voice} onChange={event => selectVoice(event.target.value as Voice)}>
      <option value="feminina">Voz feminina</option>
      <option value="masculina">Voz masculina</option>
    </select>
    {!visible && <button type="button" onClick={play} className="prayer-audio-button"><Play size={17} aria-hidden="true" /> Ouvir oração</button>}
    <audio ref={audioRef} src={voices[voice]} controls={visible} preload="none" aria-label={`Oração com voz ${voice}`} style={{ display: visible ? 'block' : 'none' }}
      onPlaying={() => { if (!started.current) { started.current = true; recordEngagement('Oração iniciada', { data: date, voz: voice }); } }}
      onEnded={() => { recordEngagement('Reprodução da oração encerrada', { data: date, voz: voice }); started.current = false; }}
      onError={() => setError(true)} />
    {error && <p role="alert">Não foi possível reproduzir o áudio. <button type="button" onClick={play}>Tentar novamente</button></p>}
  </div>;
}
