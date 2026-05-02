import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "School from Three",
  description:
    "3人で始める3年間の自走的な学校。ディスカッションとプロジェクト進行のダッシュボード。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="layout">
          <header className="site">
            <div className="brand">SCHOOL FROM THREE</div>
            <h1>sf3 / progress dashboard</h1>
            <p className="tagline">
              3人（山岸さん・森島さん・横澤さん）で始める、3年間の自走的な学校。
            </p>
            <nav className="primary">
              <Link href="/">overview</Link>
              <Link href="/timeline">timeline</Link>
              <Link href="/discussions">discussions</Link>
              <Link href="/members">members</Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site">
            updated by manager-for-three · 3人並列の原則で記録 · github.com/k1105/school-from-three
          </footer>
        </div>
      </body>
    </html>
  );
}
