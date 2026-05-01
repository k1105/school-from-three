import { milestones } from "@/content/timeline";

export default function TimelinePage() {
  return (
    <section>
      <h2>timeline</h2>
      <ul className="timeline">
        {milestones.map((m) => (
          <li key={m.date + m.label} className={m.status}>
            <div className="date">{m.date}</div>
            <div className="label">{m.label}</div>
            {m.detail && <div className="detail">{m.detail}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
}
