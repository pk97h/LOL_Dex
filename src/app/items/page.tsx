import { ItemImage } from "@/components/ItemImage";
import { fetchItemList } from "@/utils/serverApi";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "아이템 목록",
  description: "리그 오브 레전드 아이템 목록",
};

export default async function Item() {
  const items = await fetchItemList();

  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold m-4">아이템 목록</h1>
      <div className="flex flex-wrap gap-4 m-4">
        {items.map((item) => (
          <Link href={`/items/${item.name}`} key={item.image.full} className="flex-1 min-w-[200px] max-w-[300px]">
            <div className="border rounded p-4 ">
              <ItemImage itemName={item.image.full} />
              <p className="text-red-500 text-xl font-bold">{item.name}</p>
              <p className="text-stone-400">{item.plaintext}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
