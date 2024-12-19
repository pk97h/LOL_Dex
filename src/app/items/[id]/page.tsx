import { ItemImage } from "@/components/ItemImage";
import { fetchItemList } from "@/utils/serverApi";

export async function generateMetadata({ params }: { params: Props }) {
  const items = await fetchItemList()
  const decodedId = decodeURIComponent(params.id);
  const item = items.find((item) => item.name === decodedId);

  return {
    title: `${item?.name}`,
    description: `${item?.name}의 정보`,
  };
}

export default async function Item({ params }: { params: Props }) {
  const items = await fetchItemList()
  const decodedId = decodeURIComponent(params.id);
  const item = items.find((item) => item.name === decodedId);

    if (!item) {
        return <p>해당 아이템을 찾을 수 없습니다.</p>;
      }

  return (
    <div className="text-red-500 max-w-3xl mx-auto">
      <div key={item.name}>
        <ItemImage itemName={item.image.full} />
        <p className="text-3xl font-bold">{item.name}</p>
        <p className="text-stone-400 text-xl mt-1">{item.plaintext}</p>
      </div>
    </div>
  );
}
