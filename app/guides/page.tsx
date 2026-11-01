import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "攻略文章總覽",
  description: "瀏覽遊戲規則、機率知識、策略概念與遊戲教育文章。",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return <main className="container">
    <section className="hero"><div className="eyebrow">ARTICLE LIBRARY</div><h1>攻略文章</h1><p>以知識為基礎，從規則、機率與隨機性理解遊戲。</p></section>
    <div className="section-heading"><h2>所有文章</h2><span className="muted">{articles.length} 篇</span></div>
    <section className="grid">
      {articles.map((a) => <Link className="card" href={`/guides/${a.slug}`} key={a.slug}>
        <span className="category">{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p><div className="card-meta">{a.date} · 閱讀 {a.readingTime}</div>
      </Link>)}
    </section>
  </main>;
}