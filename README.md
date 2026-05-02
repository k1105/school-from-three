# School from Three

3人（山岸・森島・横澤）で始める3年間の自走的な学校 — の進行ダッシュボード。

このリポジトリは sf3 のディスカッションポイントとプロジェクト進行を可視化するための Next.js アプリケーション。

## 構成

- `app/` — Next.js App Router
- `content/` — プロジェクトコンテンツ（TypeScriptで定義）
- `styles/` — グローバルスタイル

## 開発

```bash
npm install
npm run dev
```

→ http://localhost:3000

## デプロイ

Vercel に自動デプロイ（`main` ブランチへの push がトリガー）。
