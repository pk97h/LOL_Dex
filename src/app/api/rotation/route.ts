import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey as string,
      },
    }
  );

  const championRotation: ChampionRotation = await response.json();

  return NextResponse.json(championRotation);
}
