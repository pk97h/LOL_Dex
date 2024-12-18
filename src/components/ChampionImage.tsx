import Image from "next/image";

export const ChampionImage = ({ championName }: { championName: string }) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${championName}.png`;
  return <Image src={imageUrl} width={200} height={100} alt="챔피언 이미지" className="m-auto"/>;
};