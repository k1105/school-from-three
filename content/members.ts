export type Member = {
  id: "yamagishi" | "morishima" | "yokozawa";
  name: string;
  role: string;
  background: string;
  gakuStatus: string;
  gakuCandidates: string[];
};

export const members: Member[] = [
  {
    id: "yamagishi",
    name: "山岸 奏大",
    role: "クリエイティブ・テクノロジスト",
    background: "東京理科大 → IAMAS",
    gakuStatus: "継続ディスカッション中",
    gakuCandidates: [
      "Ludic Friction（遊戯摩擦学）— 「慣れと耐え」から発展",
      "モキュメント・グラフィックデザイン学（4/9ブレストで再浮上）",
      "物語×世界構築×システム設計の交差点",
    ],
  },
  {
    id: "morishima",
    name: "森島",
    role: "アートディレクター",
    background: "武蔵美 基礎デザイン",
    gakuStatus: "未確定（本人からの更新待ち）",
    gakuCandidates: [],
  },
  {
    id: "yokozawa",
    name: "横澤",
    role: "アートディレクター",
    background: "多摩美 グラフィック",
    gakuStatus: "未確定（本人からの更新待ち）",
    gakuCandidates: [],
  },
];
