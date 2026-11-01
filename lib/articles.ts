export type Article = {
  slug: string; title: string; category: string; excerpt: string; date: string;
  readingTime: string; seoTitle: string; metaDescription: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq?: { question: string; answer: string }[];
};

export const articles: Article[] = [
  {
    slug:"baccarat-basic-guide", title:"百家樂基本規則完整入門", category:"規則教學",
    excerpt:"認識莊家、閒家、和局、點數計算與基本補牌規則。",
    date:"2026-10-20", readingTime:"6 分鐘",
    seoTitle:"百家樂基本規則｜點數、補牌與新手入門教學",
    metaDescription:"完整認識百家樂基本規則，了解莊家、閒家、點數計算與補牌條件。本文為一般知識介紹。",
    sections:[
      {heading:"什麼是百家樂？",paragraphs:["百家樂是一種比較莊家與閒家兩方牌面點數的紙牌遊戲。依照遊戲規則，雙方可能取得初始牌，並依特定條件決定是否補牌。","本文介紹一般規則概念；不同遊戲版本、平台或司法管轄區的規定可能不同，應以實際規則說明為準。"]},
      {heading:"基本點數如何計算？",paragraphs:["A 通常計為 1 點；2 至 9 按牌面計點；10、J、Q、K 通常計為 0 點。將牌面點數相加後，只取個位數作為該手牌點數。"],bullets:["例如：7 與 8 相加為 15，點數為 5。","例如：4、6、K 相加為 10，點數為 0。"]},
      {heading:"補牌規則的基本概念",paragraphs:["補牌條件通常由初始點數以及莊家手牌決定，並非每一手都能自由選擇。具體補牌表可能因規則版本而不同。","理解補牌規則有助於閱讀遊戲流程，但不代表能預測未來的隨機結果。"]},
      {heading:"常見結果",paragraphs:["遊戲通常比較莊家與閒家的最終點數，點數較高的一方獲勝；若點數相同，則依規則判定和局。實際結算方式請以遊戲規則為準。"]}
    ],
    faq:[{question:"百家樂的點數怎麼算？",answer:"A 通常為 1 點，2 至 9 按牌面計點，10 與人頭牌通常為 0 點，總和只取個位數。"},
      {question:"上一局結果能決定下一局嗎？",answer:"若發牌結果依獨立且充分隨機的機制產生，上一局結果本身不會決定下一局。"}]
  },
  {
    slug:"what-is-rtp", title:"RTP 是什麼？認識遊戲回報率", category:"機率知識",
    excerpt:"從長期統計理解 RTP，不把理論值當成單次結果保證。",
    date:"2026-10-18", readingTime:"5 分鐘",
    seoTitle:"RTP 是什麼？遊戲回報率與機率完整解說",
    metaDescription:"了解 RTP 的意思、計算概念與長期統計限制，認識遊戲回報率與短期波動。",
    sections:[
      {heading:"RTP 的定義",paragraphs:["RTP 是 Return to Player 的縮寫，常譯為玩家回報率。它通常用來描述遊戲在大量遊玩情境下，理論上返還給玩家的比例。","RTP 是一種統計或理論指標，不能當成單次遊玩或個人結果的保證。"]},
      {heading:"長期與短期結果",paragraphs:["短期結果可能出現很大的波動。即使某遊戲具有公布的理論回報率，個別玩家的實際結果仍可能與該比例有明顯差異。"]},
      {heading:"閱讀 RTP 時要留意什麼？",paragraphs:["確認數值適用的遊戲版本、規則與資料來源。不同版本可能有不同設定；第三方提供的數據也應核實。","不要將 RTP 解讀成「每次投入都會拿回相同比例」，也不要單憑 RTP 推斷下一次結果。"]}
    ],
    faq:[{question:"RTP 是每次遊玩的回報嗎？",answer:"不是。它是長期統計概念，不代表單次或個人實際回報。"},
      {question:"RTP 可以預測下一局嗎？",answer:"不能。單一理論回報率無法直接預測下一次隨機結果。"}]
  },
  {
    slug:"baccarat-card-counting", title:"百家算牌在計算什麼？", category:"策略解析",
    excerpt:"了解牌堆組成、已出現牌張與統計分析的基本概念。",
    date:"2026-10-16", readingTime:"8 分鐘",
    seoTitle:"百家算牌原理｜牌堆組成與統計偏差解析",
    metaDescription:"了解算牌的基本原理、牌堆組成與統計限制，避免把機率偏差當成結果預測。",
    sections:[
      {heading:"算牌的核心概念",paragraphs:["算牌通常是追蹤已出現的牌，並估計剩餘牌堆的組成。它不是在直接計算下一張牌一定會是什麼。","不同遊戲的規則、牌靴大小、洗牌方式與可觀察資訊，都會影響任何統計分析的意義。"]},
      {heading:"牌堆組成為何重要？",paragraphs:["當剩餘牌堆中不同點數的比例改變，某些遊戲規則下的結果機率可能出現變化。這是機率分布與條件資訊的概念。"]},
      {heading:"統計分析的限制",paragraphs:["觀察到的偏差不等於確定訊號。樣本量、洗牌程序、資訊完整性與計算方法都可能影響推論。","任何統計描述都不應被解讀為保證獲利或保證預測未來結果。"]}
    ],
    faq:[{question:"算牌能保證知道下一張牌嗎？",answer:"不能。它至多是在特定條件下估計牌堆組成或機率，不是確定預測。"}]
  },
  {
    slug:"rng-game-explained", title:"隨機數生成器 RNG 是如何運作？", category:"遊戲知識",
    excerpt:"從基礎原理了解數位遊戲的隨機結果與公平性驗證。",
    date:"2026-10-14", readingTime:"7 分鐘",
    seoTitle:"RNG 是什麼？遊戲隨機數生成器原理",
    metaDescription:"認識 RNG 隨機數生成器、遊戲隨機性與公平性驗證方式。",
    sections:[
      {heading:"RNG 的基本概念",paragraphs:["RNG 是 Random Number Generator 的縮寫，中文常稱隨機數生成器。它用於產生遊戲所需的數值或結果。","不同系統可能採用不同的演算法、熵來源與安全設計，不能只憑名稱判斷其品質。"]},
      {heading:"隨機性與公平性",paragraphs:["公平性需要適當的系統設計、測試、稽核與管理程序支持。對外公開的規則、測試報告與獨立驗證資訊，是評估系統時的重要參考。"]},
      {heading:"常見誤解",paragraphs:["連續出現相同或不同結果，不代表下一次一定會反向發生。對隨機序列過度尋找規律，容易產生認知偏誤。"]}
    ]
  },
  {
    slug:"expected-value-basics", title:"遊戲中的期望值：簡單理解", category:"規則教學",
    excerpt:"用基本數學概念認識平均結果、機率與風險。",
    date:"2026-10-12", readingTime:"4 分鐘",
    seoTitle:"期望值是什麼？遊戲機率與平均結果入門",
    metaDescription:"用簡單例子認識期望值、機率與長期平均的數學概念。",
    sections:[
      {heading:"期望值是什麼？",paragraphs:["期望值是把所有可能結果乘上各自發生機率，再將結果加總得到的理論平均值。它是機率論中的重要概念。"]},
      {heading:"如何解讀期望值？",paragraphs:["期望值描述大量重複試驗下的理論平均，不代表單次結果，也無法保證任何個人的實際結果。理解期望值有助於閱讀統計資料與風險說明。"]}
    ]
  },
  {
    slug:"streaks-and-randomness", title:"常見遊戲迷思：連勝與連敗", category:"策略解析",
    excerpt:"理解獨立事件、隨機性與玩家常見的認知偏誤。",
    date:"2026-10-10", readingTime:"5 分鐘",
    seoTitle:"連勝連敗代表什麼？隨機性與常見迷思",
    metaDescription:"認識連勝、連敗與獨立事件，了解隨機結果常見的認知偏誤。",
    sections:[
      {heading:"人為什麼會注意連續結果？",paragraphs:["人們容易在隨機序列中尋找規律。連續相同結果可能看起來特別有意義，但單靠短期觀察通常不足以判斷背後機制。"]},
      {heading:"獨立事件的意思",paragraphs:["若事件彼此獨立，前面發生的結果不會自動改變下一次事件的機率。判斷是否獨立，必須了解實際機制與規則。"]},
      {heading:"理性看待資料",paragraphs:["記錄結果可以協助描述資料，但不應把短期連續性視為確定的預測訊號。避免因追逐連勝或急於扳回連敗而做出衝動決策。"]}
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}