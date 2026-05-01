import { project } from "@/content/project";
import { exhibition } from "@/content/exhibition";
import { milestones } from "@/content/timeline";
import { discussions } from "@/content/discussions";

export default function HomePage() {
  const activeMilestone = milestones.find((m) => m.status === "active");
  const nextMilestone = milestones.find((m) => m.status === "upcoming");
  const openDiscussions = discussions.filter((d) => d.status !== "resolved");

  return (
    <>
      <section>
        <p className="lead">
          {project.hypothesis}
          <br />
          大問い：<strong>{project.bigQuestion}</strong>
        </p>
      </section>

      <section>
        <h2>now</h2>
        <div className="card soft">
          <dl className="kv">
            <dt>phase</dt>
            <dd>{activeMilestone ? activeMilestone.label : "—"}</dd>
            <dt>next</dt>
            <dd>
              {nextMilestone ? (
                <>
                  {nextMilestone.date} — {nextMilestone.label}
                </>
              ) : (
                "—"
              )}
            </dd>
            <dt>open issues</dt>
            <dd>{openDiscussions.length} 件のディスカッション</dd>
          </dl>
        </div>
      </section>

      <section>
        <h2>upcoming exhibition</h2>
        <h3>{exhibition.name}</h3>
        <dl className="kv">
          <dt>dates</dt>
          <dd>{exhibition.dates}</dd>
          <dt>venue</dt>
          <dd>{exhibition.venue}</dd>
          <dt>budget</dt>
          <dd>{exhibition.budget}</dd>
          <dt>contact</dt>
          <dd>{exhibition.contact}</dd>
        </dl>
        <h4 style={{ marginTop: 24, marginBottom: 12 }}>残ブロッカー</h4>
        <ul className="gaku-list">
          {exhibition.remainingBlockers.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>運営原則</h2>
        <div className="principles">
          {project.principles.map((p) => (
            <div className="principle" key={p.title}>
              <h4>{p.title}</h4>
              <p>{p.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
