import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-red-500 text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
      <p className="text-stone-400 mt-5">Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>

      <Link href={"/champions"} className="flex flex-col items-center justify-center mt-10">
        <Image
          src={"/champion1.webp"}
          className="w-auto h-auto"
          width={500}
          height={100}
          alt="챔피언 목록 보기"
          priority
        />
        <p className="text-amber-300 mt-5">챔피언 목록 보기</p>
      </Link>

      <Link href={"/rotation"} className="flex flex-col items-center justify-center mt-10">
        <Image
          src={"/champion2.webp"}
          className="w-auto h-auto"
          width={500}
          height={100}
          alt="금주 로테이션 확인"
          priority
        />
        <p className="text-amber-300 mt-5">금주 로테이션 확인</p>
      </Link>

      <Link href={"/items"} className="flex flex-col items-center justify-center mt-10">
        <Image
          src={"/champion3.webp"}
          className="w-auto h-auto"
          width={500}
          height={100}
          alt="아이템 목록 보기"
          priority
        />
        <p className="text-amber-300 mt-5">아이템 목록 보기</p>
      </Link>
    </div>
  );
}
