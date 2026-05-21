// Shared UI bits — grade chip, icon tile, QR code SVG, etc.

const GRADES = {
  A: { color: "#2e7d32", label: "EXCELLENT", range: "90+" },
  B: { color: "#7cb342", label: "GOOD", range: "75–89" },
  C: { color: "#fbc02d", label: "MODERATE", range: "60–74" },
  D: { color: "#f57c00", label: "POOR", range: "45–59" },
  E: { color: "#d32f2f", label: "FAILING", range: "<45" },
};

const APP_ICON_FILES = { strava: "strava.png", flo: "unnamed.png", yuka: "yuka.webp" };

function AppIcon({ app, size = 56, radius }) {
  const r = radius ?? Math.round(size * 0.22);
  const imgSrc = APP_ICON_FILES[app.id];
  if (imgSrc) {
    return (
      <img src={imgSrc} alt={app.name}
        style={{ width: size, height: size, borderRadius: r, objectFit: "cover", flexShrink: 0, display: "block" }} />
    );
  }
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: r,
        background: app.iconBg,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: Math.round(size * 0.5),
        fontWeight: 800,
        letterSpacing: "-0.02em",
        flexShrink: 0,
        boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.18), 0 1px 2px rgba(0,0,0,0.08)",
      }}
    >
      {app.iconGlyph}
    </div>
  );
}

function GradeChip({ grade, size = 28 }) {
  const g = GRADES[grade];
  return (
    <span
      style={{
        display: "inline-grid",
        placeItems: "center",
        width: size,
        height: size,
        background: g.color,
        color: "#fff",
        borderRadius: 6,
        fontWeight: 900,
        fontSize: Math.round(size * 0.55),
        lineHeight: 1,
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      {grade}
    </span>
  );
}

// Deterministic QR-looking code (not a real QR, but visually convincing)
function FakeQR({ size = 120, seed = "stride" }) {
  const N = 21;
  // PRNG seeded by string
  const hash = (s) => {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return h >>> 0;
  };
  let s = hash(seed);
  const rand = () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
  const cells = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) cells.push(rand() > 0.55 ? 1 : 0);
  }
  // Force finder patterns (corners)
  const setFinder = (cx, cy) => {
    for (let dy = 0; dy < 7; dy++) {
      for (let dx = 0; dx < 7; dx++) {
        const x = cx + dx, y = cy + dy;
        const edge = dx === 0 || dy === 0 || dx === 6 || dy === 6;
        const inner = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        cells[y * N + x] = edge || inner ? 1 : 0;
      }
    }
    // 1-cell white border
    for (let dy = -1; dy <= 7; dy++) {
      for (let dx = -1; dx <= 7; dx++) {
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= N || y >= N) continue;
        if (dx === -1 || dy === -1 || dx === 7 || dy === 7) cells[y * N + x] = 0;
      }
    }
  };
  setFinder(0, 0);
  setFinder(N - 7, 0);
  setFinder(0, N - 7);
  const cs = size / N;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${N} ${N}`} style={{ display: "block", shapeRendering: "crispEdges" }}>
      <rect width={N} height={N} fill="#fff" />
      {cells.map((c, i) =>
        c ? <rect key={i} x={i % N} y={Math.floor(i / N)} width={1} height={1} fill="#111" /> : null
      )}
    </svg>
  );
}

// Stars row for app store rating
function Stars({ rating, color = "#F5A623", size = 12 }) {
  return (
    <span style={{ display: "inline-flex", gap: 1, color }}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} style={{ position: "relative", width: size, height: size, display: "inline-block" }}>
            <span style={{ position: "absolute", inset: 0, color: "#d8d8d8" }}>★</span>
            <span style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${fill * 100}%`, color }}>★</span>
          </span>
        );
      })}
    </span>
  );
}

// Placeholder screenshot for the app store detail page
function ScreenshotPlaceholder({ app, kind, w = 220, h = 380 }) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 18,
        background: `linear-gradient(160deg, ${app.iconBg}25, ${app.iconBg}08)`,
        border: `1px solid ${app.iconBg}30`,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 12,
          borderRadius: 12,
          background:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.5) 0 10px, rgba(255,255,255,0.2) 10px 20px)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 11,
            color: "#3338",
            background: "#ffffffcc",
            padding: "4px 8px",
            borderRadius: 4,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {kind} screenshot
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { GRADES, AppIcon, GradeChip, FakeQR, Stars, ScreenshotPlaceholder });
