const items = [
  "Web Design",
  "Bubble Dev",
  "App Development",
  "AI SaaS",
  "MVP in 4 Weeks",
  "Digital Marketing",
  "Product Strategy",
  "Growth Systems",
  "UI/UX Design",
  "No-Code Builds",
  "Full-Stack Eng",
  "CraftDexa",
];

export default function Marquee() {
  return (
    <div
      style={{
        background: "#6C63FF",
        padding: "0.75rem 0",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <div
        className="flex animate-marquee"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 whitespace-nowrap px-5">
            <span
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F0EEF8",
              }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(240,238,248,0.4)", fontSize: "0.45rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
