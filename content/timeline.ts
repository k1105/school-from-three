export type Milestone = {
  date: string;
  label: string;
  status: "done" | "active" | "upcoming";
  detail?: string;
};

export const milestones: Milestone[] = [
  {
    date: "2026-03-25",
    label: "初回カリキュラム検討会議",
    status: "done",
  },
  {
    date: "2026-03-29",
    label: "カリキュラム叩き台 v1.0 / 教育機関サーベイ8校完了",
    status: "done",
  },
  {
    date: "2026-03-30",
    label: "6/6 開学記念展の開催決定",
    status: "done",
    detail: "予算 約30万円（10万×3人）。会場候補を複数検討。",
  },
  {
    date: "2026-04-08",
    label: "ミニマルプラン固定",
    status: "done",
    detail:
      "sf3=自主制作最大化のフレーム、と位置付け。展示は『学校』に振り切る方針。",
  },
  {
    date: "2026-04-10",
    label: "会場決定 → Hot Space",
    status: "done",
    detail: "前川さんと連絡（山岸対応）。",
  },
  {
    date: "2026-04-15",
    label: "ステートメント v2 ドラフト",
    status: "done",
    detail:
      "v1（仮説検証型）→ v2（問いを掲げ3年で答える型）に転換。小問いセットは要再考。",
  },
  {
    date: "2026-04-30",
    label: "Hot Space 下見完了",
    status: "done",
    detail: "大方針が固まる。GW制作集中の判断。",
  },
  {
    date: "2026-05-01",
    label: "sf3 Discord bot セットアップ",
    status: "active",
    detail: "manager-for-three 起動。3人並列の運用へ。",
  },
  {
    date: "2026-05-02 〜 05-06",
    label: "GW 制作集中フェーズ",
    status: "upcoming",
  },
  {
    date: "2026-05-17",
    label: "コンテンツ制作完了（目標）",
    status: "upcoming",
  },
  {
    date: "2026-06-06 〜 06-07",
    label: "開学記念展 @ Hot Space",
    status: "upcoming",
  },
  {
    date: "2027 〜 2029",
    label: "Year 1 → Year 2 → Year 3（卒展）",
    status: "upcoming",
  },
];
