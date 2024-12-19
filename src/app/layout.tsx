import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <header className="fixed top-0 left-0 right-0 text-white bg-slate-800 flex items-center justify-center h-14">
            <Link href={"/"} className="mx-auto">
              홈
            </Link>
            <Link href={"/champions"} className="mx-auto">
              챔피언 목록
            </Link>
            <Link href={"/items"} className="mx-auto">
              아이템 목록
            </Link>
            <Link href={"/rotation"} className="mx-auto">
              챔피언 로테이션
            </Link>
          </header>
          <div className="pt-24 pb-24">{children}</div>
          <footer className="fixed bottom-0 left-0 right-0 text-white bg-slate-800 flex items-center justify-center h-16">
            <p className="text-center">
              [Your Product Name] is not endorsed by Riot Games and does not
              reflect the views or opinions of Riot Games or anyone officially
              involved in producing or managing Riot Games properties. Riot
              Games and all associated properties are trademarks or registered
              trademarks of Riot Games, Inc.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
