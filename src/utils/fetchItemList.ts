import { getLatestVersion } from "./getLatestVersion";

export async function fetchItemList() {
    const latestVersion = await getLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );
  
    const data = await res.json();
    const items: Item[] = Object.values(data.data);

  return items;
}
