import Link from "next/link";
import { articles } from "@/lib/articles";

export default function HomePage() {
  const featured = articles.slice(0, 6);
  return <main className="container">
    <section className="hero">
      <div className="eyebrow">遊戲知識 · 理性分析</div>
      <h1>看懂遊戲，<br/><span style={{color:"#67e8f9"}}>從理解規則開始。</span></h1>
      <p>探索遊戲規則、機率原理與隨機性。以清楚的說明，讓每一次閱讀都更有依據。</p>
      <Link className="button" href="/guides">探索攻略文章 →</Link>
    </section>
    <div className="section-heading"><div><div className="eyebrow">KNOWLEDGE LIBRARY</div><h2>熱門攻略</h2></div><Link className="muted" href="/guides">全部文章 →</Link></div>
    <section className="grid">
      {featured.map((a) => <Link className="card" href={`/guides/${a.slug}`} key={a.slug}>
        <span className="category">{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p><div className="card-meta">{a.date} · 閱讀 {a.readingTime}</div>
      </Link>)}
    </section>
    <div className="notice">本站提供一般遊戲知識與教育內容。機率及統計資訊不代表特定結果或獲利保證。</div>
  </main>;
}