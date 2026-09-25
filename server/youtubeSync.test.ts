import { describe, expect, it } from "vitest";
import { parseYouTubeFeed } from "./youtubeSync";

describe("YouTube RSS", () => {
  it("lê todos os vídeos em ordem cronológica e decodifica títulos", () => {
    const xml = `<feed>
      <entry><yt:videoId>abcdefghijk</yt:videoId><title>3º SEMANA | Fé &amp; graça | NOVA SÉRIE</title><published>2026-09-20T12:00:00Z</published></entry>
      <entry><yt:videoId>lmnopqrstuv</yt:videoId><title>2º SEMANA | Um começo | NOVA SÉRIE</title><published>2026-09-13T12:00:00Z</published></entry>
    </feed>`;
    const videos = parseYouTubeFeed(xml);
    expect(videos.map(video => video.videoId)).toEqual(["lmnopqrstuv", "abcdefghijk"]);
    expect(videos[1]).toMatchObject({ episodeTitle: "Fé & graça", seriesName: "NOVA SÉRIE", weekNumber: 3 });
  });
});
