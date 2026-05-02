export const project = {
  name: "School from Three",
  shortName: "sf3",
  tagline: "3人で始める、3年間の自走的な学校。",
  hypothesis:
    "「学校」というフレームが社会人の自主制作を最大化するのではないか。",
  bigQuestion: "学校って、どうやってつくるの？",
  period: "2026 - 2029",
  members: ["山岸 奏大", "森島", "横澤"],
  principles: [
    {
      title: "〇〇学が前、人は後ろ",
      detail:
        "「この3人」を前に出すのではなく、各自の研究テーマ（〇〇学）を主役にする。",
    },
    {
      title: "展示自体に面白さを背負わせすぎない",
      detail:
        "今回の展示は3年後の卒展で検証されて完成する布石。今ここで全部解決しようとしない。",
    },
    {
      title: "最小構造で自治",
      detail: "Black Mountain College的な、合議制と柔軟運営。",
    },
    {
      title: "問いは更新される。固定しない",
      detail: "3年かけて問いそのものを磨いていく前提で組み立てる。",
    },
  ],
} as const;

export type Project = typeof project;
