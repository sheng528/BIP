// Receipt modal — the heart of the prototype.

function ReceiptModal({ app, timerSeconds, mobile, onDownload, onSkip, onViewAudit }) {
  const [remaining, setRemaining] = React.useState(timerSeconds);
  const [enabled, setEnabled] = React.useState(false);
  const [entered, setEntered] = React.useState(false);

  React.useEffect(() => {
    // trigger enter animation on next tick
    const t = setTimeout(() => setEntered(true), 20);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    setRemaining(timerSeconds);
    setEnabled(false);
    if (timerSeconds <= 0) {
      setEnabled(true);
      return;
    }
    const tick = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          clearInterval(tick);
          setEnabled(true);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(tick);
  }, [timerSeconds, app.id]);

  const g = GRADES[app.grade];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: mobile ? "flex-end" : "center",
        justifyContent: "center",
        pointerEvents: "auto",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          opacity: entered ? 1 : 0,
          transition: "opacity 300ms ease-out",
        }}
      ></div>

      {/* Modal */}
      <div
        style={{
          position: "relative",
          width: mobile ? "100%" : 560,
          maxHeight: mobile ? "92%" : "92%",
          background: "#FBFAF5",
          borderRadius: mobile ? "18px 18px 0 0" : 14,
          boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transform: entered
            ? "translateY(0) scale(1)"
            : mobile ? "translateY(100%) scale(1)" : "translateY(8px) scale(0.98)",
          opacity: entered ? 1 : 0,
          transition: "transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 280ms ease-out",
        }}
      >
        {/* Perforated top edge — receipt tear */}
        <div style={{ height: 8, background: "linear-gradient(180deg, #FBFAF5, #FBFAF5)", position: "relative" }}>
          <div style={{
            position: "absolute", inset: "0 0 auto 0", height: 8,
            backgroundImage: "radial-gradient(circle at 4px 0, transparent 3px, #FBFAF5 3.5px)",
            backgroundSize: "8px 8px",
            backgroundPosition: "0 -4px",
          }}></div>
        </div>

        <div style={{ overflow: "auto", padding: mobile ? "0 22px 0" : "0 32px 0" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 12,
              paddingBottom: 16,
              borderBottom: "1px dashed #C9C2B0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6, background: "#1A1814", color: "#FBFAF5",
                display: "grid", placeItems: "center", fontSize: 14,
              }}>🔐</div>
              <div>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#7A7468", letterSpacing: "0.1em" }}>
                  DataCheck EU
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#1A1814", letterSpacing: "0.04em" }}>
                  PRIVACY RECEIPT
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7A7468", lineHeight: 1.5 }}>
              <div>№ {receiptNo(app)}</div>
              <div>{new Date().toISOString().slice(0, 10)}</div>
            </div>
          </div>

          {/* Grade focal point */}
          <div style={{ padding: "20px 0 16px", textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#7A7468", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}>
              Audited app
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#1A1814", marginTop: 4, letterSpacing: "-0.01em" }}>
              {app.name}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 20 }}>
              {["A", "B", "C", "D", "E"].map(gradeKey => {
                const isSelected = gradeKey === app.grade;
                const gk = GRADES[gradeKey];
                return (
                  <div key={gradeKey} style={{
                    width: isSelected ? 76 : 40,
                    height: isSelected ? 76 : 40,
                    borderRadius: isSelected ? 18 : 10,
                    background: isSelected ? gk.color : "#E6E1D6",
                    color: isSelected ? "#fff" : "#B0A898",
                    display: "grid", placeItems: "center",
                    fontSize: isSelected ? 46 : 20,
                    fontWeight: 900,
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "-0.02em",
                    boxShadow: isSelected ? `0 4px 18px ${gk.color}55` : "none",
                    flexShrink: 0,
                  }}>
                    {gradeKey}
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 10, fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
              color: g.color, letterSpacing: "0.3em", fontWeight: 700,
            }}>
              {g.label}
            </div>
          </div>

          <Divider />

          {/* Audited Dimensions */}
          <Section label="Audited Dimensions">
            <DimensionRow label="Data Collection" dim={app.dimensions.collection} />
            <DimensionRow label="Data Sharing"    dim={app.dimensions.sharing} />
            <DimensionRow label="User Control"    dim={app.dimensions.control} />
          </Section>

          <Divider />

          {/* Verification */}
          <div style={{ padding: "16px 0" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7468", fontWeight: 600, marginBottom: 6 }}>
              Verified by
            </div>
            <div style={{ fontSize: 13, color: "#1A1814", fontWeight: 600 }}>DataCheck EU Foundation</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7A7468", marginTop: 4, letterSpacing: "0.04em" }}>
              audit · {new Date().toISOString().slice(0, 7)} · v2.1
            </div>
            <button
              onClick={onViewAudit}
              style={{ marginTop: 10, background: "none", border: "none", padding: 0, color: "#1976d2", fontSize: 12, cursor: "pointer", textDecoration: "underline", fontFamily: "inherit" }}
            >
              View full audit →
            </button>
          </div>

          {(app.grade === 'D' || app.grade === 'E') && (
            <div style={{
              margin: "16px 0 4px",
              background: "#1A1814",
              borderRadius: 8,
              padding: "12px 14px",
            }}>
              <div style={{
                fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#fff", fontWeight: 700, marginBottom: 6,
              }}>
                ⚠ DataCheck Warning
              </div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.55, margin: 0 }}>
                Apps rated D or E may use your personal health data in ways that could
                affect your insurance, employment, or financial decisions in the future,
                without clearly informing you.
              </p>
            </div>
          )}

          <Divider />

          {/* Timer */}
          <div style={{ padding: "14px 0 6px", textAlign: "center" }}>
            <div
              style={{
                fontSize: 13,
                fontFamily: "'JetBrains Mono', monospace",
                color: remaining > 0 ? "#7A7468" : "#2e7d32",
                letterSpacing: "0.06em",
              }}
            >
              {remaining > 0
                ? `⧗ ${remaining} second${remaining !== 1 ? "s" : ""} remaining…`
                : "✓ Ready to proceed"}
            </div>
            {/* Progress bar */}
            <div style={{ marginTop: 8, height: 3, background: "#E6E1D6", borderRadius: 2, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: remaining > 0 ? "#1A1814" : "#2e7d32",
                  width: `${100 - (remaining / timerSeconds) * 100}%`,
                  transition: "width 900ms linear, background 200ms ease",
                }}
              ></div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ padding: "14px 0 22px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <button disabled={!enabled} onClick={onDownload} style={btnStyle("primary", enabled)}>
              Download
            </button>
            <button disabled={!enabled} onClick={onSkip} style={btnStyle("ghost", enabled)}>
              Skip this app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DimensionRow({ label, dim }) {
  const g = GRADES[dim.grade];
  return (
    <div style={{ padding: "8px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <GradeChip grade={dim.grade} size={24} />
        <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: "#1A1814" }}>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7A7468" }}>{dim.score}/100</span>
      </div>
      <div style={{ height: 4, background: "#E6E1D6", borderRadius: 2, overflow: "hidden", marginLeft: 34 }}>
        <div style={{ height: "100%", background: g.color, width: `${dim.score}%`, borderRadius: 2 }} />
      </div>
      <div style={{ fontSize: 12, color: "#7A7468", marginTop: 5, marginLeft: 34, lineHeight: 1.45 }}>{dim.note}</div>
    </div>
  );
}

function Section({ label, children }) {
  return (
    <div style={{ padding: "14px 0" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7A7468", fontWeight: 700, marginBottom: 8 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background:
          "repeating-linear-gradient(90deg, #C9C2B0 0, #C9C2B0 4px, transparent 4px, transparent 8px)",
      }}
    ></div>
  );
}

function Mark({ type }) {
  if (type === "good")
    return <span style={{ color: "#2e7d32", fontWeight: 700, width: 14, display: "inline-block" }}>✓</span>;
  if (type === "bad")
    return <span style={{ color: "#d32f2f", fontWeight: 700, width: 14, display: "inline-block" }}>✗</span>;
  return <span style={{ color: "#7A7468", fontWeight: 700, width: 14, display: "inline-block" }}>~</span>;
}

function btnStyle(variant, enabled) {
  const base = {
    height: 48,
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    letterSpacing: "0.02em",
    transition: "background 200ms ease, color 200ms ease, border-color 200ms ease, opacity 200ms ease",
    cursor: enabled ? "pointer" : "not-allowed",
  };
  if (variant === "primary") {
    return {
      ...base,
      border: "none",
      background: enabled ? "#1976d2" : "#E0E0E0",
      color: enabled ? "#fff" : "#999",
      opacity: enabled ? 1 : 0.7,
      boxShadow: enabled ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 12px rgba(25,118,210,0.25)" : "none",
    };
  }
  return {
    ...base,
    background: "#FBFAF5",
    border: enabled ? "1.5px solid #4A463E" : "1.5px solid #D0D0D0",
    color: enabled ? "#1A1814" : "#999",
    opacity: enabled ? 1 : 0.7,
  };
}

function receiptNo(app) {
  const s = app.id + new Date().getMonth() + new Date().getDate();
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return String(h).slice(0, 4) + "-" + String(h).slice(4, 8);
}

Object.assign(window, { ReceiptModal });
