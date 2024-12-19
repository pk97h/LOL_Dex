"use client";

import { ChampionImage } from "@/components/ChampionImage";
import { fetchChampionList } from "@/utils/serverApi";
import Link from "next/link";
import { useEffect, useState } from "react";

const Rotation = () => {
  const [rotation, setRotation] = useState<number[] | null>(null);
  const [champions, setChampions] = useState<Champion[] | null>(null);

  useEffect(() => {
    const fetchChampionRotation = async () => {
      const response = await fetch("/api/rotation");
      const data = await response.json();
      setRotation(data.freeChampionIds);
    };

    const fetchChampions = async () => {
      const championsList = await fetchChampionList();
      setChampions(championsList);
    };

    fetchChampionRotation();
    fetchChampions();
  }, []);

  const filteredChampions = champions?.filter((champion) =>
    rotation?.includes(Number(champion.key))
  );

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold m-4">챔피언 로테이션 (이번주 무료로 플레이 할 수 있어요!)</h1>
      <div className="flex flex-wrap gap-4 m-4">
        {filteredChampions?.map((champion) => (
          <Link href={`/champions/${champion.id}`} key={champion.key} className="flex-1 min-w-[200px] max-w-[300px]">
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
};

export default Rotation;
