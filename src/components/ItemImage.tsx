import Image from "next/image";

export const ItemImage = ({ itemName }: { itemName: string }) => {
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${itemName}`;
  return <Image src={imageUrl} width={200} height={100} alt={itemName} className="m-auto"/>;
};