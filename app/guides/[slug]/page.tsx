import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return { title: "找不到文章" };
  const url = `/guides/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.seoTitle, description: article.metaDescription, url, publishedTime: article.date },
    robots: { index: true, follow: true },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const url = `${origin}/guides/${article.slug}`;
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article",
    headline: article.title, description: article.metaDescription,
    datePublished: article.date, dateModified: article.date,
    mainEntityOfPage: url, url, inLanguage: "zh-Hant-TW",
    author: { "@type": "Organization", name: "遊戲觀察室" },
    publisher: { "@type": "Organization", name: "遊戲觀察室" },
  };
  const faqSchema = article.faq?.length ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question", name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  } : null;
  return <main className="content-wrap">
    <nav className="muted" style={{fontSize:13,marginBottom:18}} aria-label="麵包屑">
      <Link href="/">首頁</Link>　/　<Link href="/guides">攻略文章</Link>　/　{article.title}
    </nav>
    <article>
      <header className="article-head">
        <span className="category">{article.category}</span>
        <h1>{article.title}</h1>
        <p className="muted" style={{fontSize:13}}>{article.date} · 閱讀時間 {article.readingTime}</p>
        <p className="muted">{article.excerpt}</p>
      </header>
      <nav className="toc" aria-label="文章目錄"><b>文章目錄</b>
        {article.sections.map((section, i) => <a href={`#section-${i}`} key={section.heading}>{i+1}. {section.heading}</a>)}
        {article.faq?.length ? <a href="#faq">常見問題</a> : null}
      </nav>
      <div className="article-body">
        {article.sections.map((section, i) => <section id={`section-${i}`} key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
          {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
        </section>)}
      </div>
      {article.faq?.length ? <section className="faq" id="faq">
        <h2>常見問題</h2>
        {article.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
      </section> : null}
      <div className="notice">內容聲明：本文為一般知識與教育資訊，不構成獲利保證、投資建議或特定遊戲結果預測。請以遊戲官方規則及適用法規為準。</div>
      <section className="related"><div className="section-heading"><h2>更多攻略</h2><Link className="muted" href="/guides">查看全部 →</Link></div>
        <div className="grid">{articles.filter((a) => a.slug !== article.slug).slice(0,3).map((a) => <Link className="card" href={`/guides/${a.slug}`} key={a.slug}><span className="category">{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p></Link>)}</div>
      </section>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema).replace(/</g,"\\u003c")}} />
    {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema).replace(/</g,"\\u003c")}} /> : null}
  </main>;
}