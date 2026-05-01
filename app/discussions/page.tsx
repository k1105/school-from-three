import { discussions, type Voice } from "@/content/discussions";

const voiceClass = (v: Voice) => {
  switch (v.speaker) {
    case "山岸": return "voice yamagishi";
    case "森島": return "voice morishima";
    case "横澤": return "voice yokozawa";
    case "3人合意": return "voice agreed";
    case "未確認": return "voice unknown";
  }
};

export default function DiscussionsPage() {
  return (
    <section>
      <h2>discussions</h2>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 32 }}>
        現在開いている論点。発言は誰のものかをラベルする（3人並列の原則）。
        既存ドキュメントは山岸視点に偏っているため、森島・横澤の意見が記録されていない箇所は「未確認」と明記する。
      </p>

      {discussions.map((d) => (
        <div className="discussion" key={d.id}>
          <div className="discussion-header">
            <h3>{d.topic}</h3>
            <span className={`status-badge ${d.status}`}>{d.status}</span>
          </div>
          <p style={{ color: "var(--muted)", fontSize: 14 }}>{d.summary}</p>

          {d.voices.length > 0 && (
            <div style={{ marginTop: 12 }}>
              {d.voices.map((v, i) => (
                <div className={voiceClass(v)} key={i}>
                  <span className="speaker">{v.speaker}</span>
                  <span className="text">
                    {v.text}
                    {v.date && <span className="meta">{v.date}</span>}
                  </span>
                </div>
              ))}
            </div>
          )}

          {d.questionsLeft && d.questionsLeft.length > 0 && (
            <div className="questions-left">
              <h5>残された問い</h5>
              <ul>
                {d.questionsLeft.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
