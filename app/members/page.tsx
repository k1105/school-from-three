import { members } from "@/content/members";

export default function MembersPage() {
  return (
    <section>
      <h2>members</h2>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 32 }}>
        3人それぞれの〇〇学（個人探究テーマ）。本人からの更新で精度を上げていく。
      </p>
      <div className="member-grid">
        {members.map((m) => (
          <div className="member-card" key={m.id}>
            <div className="role">{m.role}</div>
            <h3>{m.name}</h3>
            <div className="background">{m.background}</div>
            <div className="gaku-status">〇〇学：{m.gakuStatus}</div>
            {m.gakuCandidates.length > 0 ? (
              <ul className="gaku-list">
                {m.gakuCandidates.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ul>
            ) : (
              <p className="empty">候補は本人から共有待ち</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
