import { ChampionImage } from "@/components/ChampionImage";
import { fetchChampionList } from "@/utils/fetchChampionList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "챔피언 목록",
  description: "리그 오브 레전드 챔피언 목록",
};

export default async function Champions() {
  const champions = await fetchChampionList({
    next: {
      revalidate: 86400,
    },
  });

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold m-4">챔피언 목록</h1>
      <div className="flex flex-wrap gap-4 m-4">
        {champions.map((champion) => (
          <Link
            href={`/champions/${champion.id}`}
            key={champion.key}
            className="flex-1 min-w-[200px] max-w-[300px]"
          >
            <div className="border rounded p-4">
              <ChampionImage championName={champion.id} />
              <p className="text-red-500 text-xl font-bold">{champion.name}</p>
              <p className="text-stone-400">{champion.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
