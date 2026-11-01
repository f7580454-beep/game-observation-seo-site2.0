# 遊戲觀察室 SEO 網站

Next.js App Router + TypeScript 的繁體中文 SEO 網站起始專案。

## 包含功能
- 首頁、文章列表、文章獨立頁
- 每篇文章獨立路由 `/guides/[slug]`
- SSR/靜態生成文章頁，文章內容存在 HTML 輸出中
- 每篇文章 SEO title、description、canonical、Open Graph
- Article JSON-LD；文章有 FAQ 時附 FAQPage JSON-LD
- 自動產生 `/sitemap.xml` 與 `/robots.txt`
- 關於本站、隱私權政策、內容聲明頁
- 初始示範文章資料

## 本機啟動
需要 Node.js 20 或更新版本。

```bash
npm install
cp .env.example .env.local
# 將 NEXT_PUBLIC_SITE_URL 改成正式網域，開發時可用 http://localhost:3000
npm run dev
```

開啟 http://localhost:3000

## 部署到 Vercel
1. 將專案解壓並推送至自己的 GitHub repository。
2. 在 Vercel 匯入該 repository。
3. 設定環境變數 `NEXT_PUBLIC_SITE_URL` 為正式網址（例如 `https://example.com`，不要加尾端斜線）。
4. Deploy。
5. 在網域 DNS 設定中依 Vercel 指示連接網域。
6. 上線後測試 `/sitemap.xml`、`/robots.txt` 與任一 `/guides/slug` 頁面。

## Google 收錄流程
1. 在 Google Search Console 新增並驗證網域資源。
2. 提交 `https://你的網域/sitemap.xml`。
3. 使用 URL Inspection 檢查首頁與文章頁，必要時要求建立索引。
4. 確認頁面回傳 HTTP 200、未被 robots 或 noindex 阻擋、canonical 指向正式網址。
5. 逐步發布具原創價值、經核實的內容。Google 不保證收錄或排名。

## 如何新增文章
編輯 `lib/articles.ts` 的 `articles` 陣列，新增一筆 Article：
- `slug`: 唯一英文網址片段
- `title`: 文章標題
- `category`: 分類
- `excerpt`: 列表摘要
- `seoTitle`: 搜尋標題
- `metaDescription`: 搜尋描述
- `sections`: 文章段落與小標題
- `faq`: 可選 FAQ

部署後，Next.js 會將文章頁列入 sitemap 並生成獨立頁面。

## 重要：此版本的範圍
這是一個可部署的 SEO 網站 MVP，但不是具備登入與資料庫的 CMS。文章以程式碼資料管理；要讓非技術管理員在後台編輯並持久保存，需要下一階段接入 Supabase/其他資料庫、登入驗證與安全的管理 API。隱私權頁為範本，正式營運前請依真實資料處理方式修訂。
