export type Voice = {
  speaker: "山岸" | "森島" | "横澤" | "3人合意" | "未確認";
  text: string;
  date?: string;
};

export type Discussion = {
  id: string;
  topic: string;
  status: "open" | "stuck" | "resolved";
  summary: string;
  voices: Voice[];
  questionsLeft?: string[];
};

export const discussions: Discussion[] = [
  {
    id: "statement-question-set",
    topic: "ステートメント v2 の小問いセット",
    status: "open",
    summary:
      "大問い『学校って、どうやってつくるの？』は固まった。3つの小問い（一員意識／先生⇄生徒／ブランディングとAI運営）はv2自身が『微妙』と自己評価しており、再考が必要。",
    voices: [
      {
        speaker: "山岸",
        text: "感情・切実さが薄い。方法論に寄りすぎ。〇〇学との接続が弱い。3年通底モチーフとして固すぎる。",
        date: "2026-04-15",
      },
      {
        speaker: "未確認",
        text: "森島さん・横澤さんからの v2 へのフィードバックは未記録。",
      },
    ],
    questionsLeft: [
      "感情・切実さを含んだ問いに書き換えるなら、どの方向か？",
      "〇〇学（個人探究）と小問い（学校運営）の架橋をどう設計するか？",
    ],
  },
  {
    id: "gaku-content",
    topic: "各自の〇〇学の内容精度",
    status: "open",
    summary:
      "GW明け展示までの最大ブロッカー。共通パネル（〇〇学宣言）とトライアル展示の中身を3人それぞれが詰める必要がある。",
    voices: [
      {
        speaker: "山岸",
        text: "Ludic Friction は『信念』であり『探究テーマ』ではない、と4/9ブレストで判明。物語×世界構築×システム設計の交差点が関心の核。モキュメント・グラフィックデザイン学が再浮上。",
        date: "2026-04-09",
      },
      {
        speaker: "未確認",
        text: "森島さん・横澤さんの〇〇学は本人からの更新待ち。",
      },
    ],
    questionsLeft: [
      "各自のトライアル展示の具体的な中身は何にするか？",
      "共通パネルのフォーマットを誰がいつまでに固めるか？",
    ],
  },
  {
    id: "entrance-task",
    topic: "入学課題「〇〇しなさい。」の具体的な問い",
    status: "open",
    summary:
      "入口壁面に掲げる『入学課題：〇〇しなさい。』の具体的な問いが未確定。来場者への要求ではなく、3人がその問いに向き合った答えを展示する。",
    voices: [
      {
        speaker: "3人合意",
        text: "入学課題は、来場者への行動要求ではなく、自分たちがその問いに向き合った答えを展示するもの。",
        date: "2026-04-08",
      },
    ],
    questionsLeft: [
      "問いの具体は？",
      "3人が答える方法（テキスト／作品／図解）の統一・非統一の方針？",
    ],
  },
  {
    id: "budget-tracking",
    topic: "予算管理（約30万円）",
    status: "open",
    summary:
      "10万×3人で約30万。会場費（Hot Space）、印刷、設営費の配分が未整理。",
    voices: [],
    questionsLeft: [
      "Hot Space の単価・日数で会場費はいくらか？",
      "残予算で何ができるか（印刷・什器・告知）？",
    ],
  },
  {
    id: "operating-distance",
    topic: "manager-for-three（このbot）との距離感",
    status: "open",
    summary:
      "GW期間中（5/2-5/6）の bot の関わり方は『進捗の集約・可視化』中心、口出し最小、で開始。3人それぞれ望む距離感が違う前提で運用する。",
    voices: [
      {
        speaker: "山岸",
        text: "GWはbがよさそう（口出しでなく集約・可視化中心）。個人チャンネルでリアクション。requireMention false でも、硬直時・割れ時・長文サマリ以外は反応しない方針でいい。",
        date: "2026-05-01",
      },
      {
        speaker: "未確認",
        text: "森島さん・横澤さんからのフィードバックはこれから。",
      },
    ],
    questionsLeft: [
      "森島さん・横澤さんそれぞれが個人チャンネルで望む距離感は？",
    ],
  },
];
