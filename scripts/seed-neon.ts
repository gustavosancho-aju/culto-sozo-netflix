import snapshot from "../data/catalogo-conteudo.json";
import { getDb } from "../server/db";
import { episodes, series, syncConfig } from "../drizzle/schema";

async function main() {
  const db = await getDb();
  if (!db) throw new Error("DATABASE_URL não configurada");
  for (const item of snapshot.series) {
    await db.insert(series).values({
      id: item.id, titulo: item.titulo, descricao: item.descricao,
      destaque: Boolean(item.destaque), ordem: item.ordem, ano: item.ano,
    }).onConflictDoNothing();
  }
  for (const item of snapshot.episodes) {
    await db.insert(episodes).values({
      id: item.id, serieId: item.serieId, titulo: item.titulo,
      youtubeVideoId: item.youtubeVideoId, ordem: item.ordem,
      duracao: item.duracao, descricaoCurta: item.descricaoCurta,
    }).onConflictDoNothing();
  }
  if (!(await db.select({ id: syncConfig.id }).from(syncConfig).limit(1)).length) {
    await db.insert(syncConfig).values({ channelUrl: snapshot.syncConfiguration.channelUrl });
  }
  console.log(`Catálogo importado: ${snapshot.series.length} séries e ${snapshot.episodes.length} episódios`);
}

main().then(() => process.exit(0), error => { console.error(error); process.exit(1); });
