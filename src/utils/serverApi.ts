// 버전 정보

export async function getLatestVersion(): Promise<string> {
  const versionRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions = await versionRes.json();
  return versions[0];
}

// 챔피언 목록

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

// 아이템 목록

export async function fetchItemList() {
  const latestVersion = await getLatestVersion();

  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
  );

  const data = await res.json();
  const items: Item[] = Object.values(data.data);

  return items;
}
