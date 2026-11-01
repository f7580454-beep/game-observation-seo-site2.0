import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "遊戲觀察室｜遊戲規則、機率知識與攻略",
    template: "%s｜遊戲觀察室",
  },
  description: "以清楚易懂的方式認識遊戲規則、機率原理與隨機性，提供知識型攻略與教育內容。",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    siteName: "遊戲觀察室",
    title: "遊戲觀察室｜遊戲規則、機率知識與攻略",
    description: "認識遊戲規則、機率原理與隨機性。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-TW">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/" aria-label="遊戲觀察室首頁">
              <span className="brand-mark">觀</span>
              <span><b>遊戲觀察室</b><small>GAME INSIGHT</small></span>
            </a>
            <nav aria-label="主要導覽">
              <a href="/">首頁</a><a href="/guides">攻略文章</a><a href="/about">關於本站</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container">
            <b>遊戲觀察室</b>
            <p>以知識與教育為目的的遊戲規則、機率與隨機性內容網站。</p>
            <div className="footer-links"><a href="/about">關於本站</a><a href="/privacy">隱私權政策</a><a href="/disclaimer">內容聲明</a></div>
            <small>© {new Date().getFullYear()} 遊戲觀察室</small>
          </div>
        </footer>
      </body>
    </html>
  );
}