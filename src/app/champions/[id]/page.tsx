import { ChampionImage } from "@/components/ChampionImage";
import { fetchChampionList } from "@/utils/fetchChampionList";

export async function generateMetadata({ params }: { params: Props }) {
  const champions = await fetchChampionList({
    next: {
      revalidate: 86400,
    },
  });
  const champion = champions.find((champion) => champion.id === params.id);

  return {
    title: `${champion?.name}`,
    description: `${champion?.name}의 정보`,
  };
}

export default async function Champion({ params }: { params: Props }) {
  const champions = await fetchChampionList({
    next: {
      revalidate: 86400,
    },
  });
  const champion = champions.find((champion) => champion.id === params.id);

  if (!champion) {
    return <p>해당 챔피언을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="text-red-500 max-w-3xl mx-auto">
      <div key={champion.key}>
        <p className="text-3xl font-bold">{champion.name}</p>
        <p className="text-stone-400 text-xl mt-1">{champion.title}</p>
        <ChampionImage championName={champion.id} />
        <p className="mt-4">{champion.blurb}</p>

        <p className="mt-10 mb-4 font-bold text-xl">스탯</p>
        <ul>
          <li>- 공격력 : {champion.info.attack}</li>
          <li>- 방어력 : {champion.info.defense}</li>
          <li>- 마법력 : {champion.info.magic}</li>
          <li>- 난이도 : {champion.info.difficulty}</li>
        </ul>
      </div>
    </div>
  );
}
