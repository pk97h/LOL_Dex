import { getLatestVersion } from "./getLatestVersion";

export async function fetchChampionList(options: RequestInit = {}) {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`,
    options
  );

  const championData = await res.json();
  const champions: Champion[] = Object.values(championData.data);

  return champions;
}
