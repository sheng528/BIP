// Full audit page — opened by tapping QR on the receipt.

function FullAuditPage({ app, onBack, mobile }) {
  const overallScore =
    Math.round(
      Object.values(app.dimensions).reduce((s, d) => s + d.score, 0) /
        Object.values(app.dimensions).length
    );
  const g = GRADES[app.grade];

  const dims = [
    { key: "collection", label: "Data Collection" },
    { key: "sharing", label: "Data Sharing" },
    { key: "control", label: "User Control" },
    { key: "transparency", label: "Transparency" },
    { key: "storage", label: "Storage & Security" },
  ];

  return (
    <div style={{ height: "100%", overflow: "auto", background: "#FBFAF7" }}>
      <header
        style={{
          padding: mobile ? "14px 18px" : "18px 32px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1px solid #ECE8DF",
          background: "#FBFAF7",
          position: "sticky",
          top: 0,
          zIndex: 5,
        }}
      >
        <button
          onClick={onBack}
          style={{ border: "none", background: "none", color: "#1A1814", fontSize: 14, cursor: "pointer", padding: "6px 8px", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          <span style={{ fontSize: 18 }}>‹</span> Back to receipt
        </button>
        <div style={{ flex: 1 }}></div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#7A7468", letterSpacing: "0.08em" }}>
          /audit/{app.id}
        </div>
      </header>

      <div style={{ padding: mobile ? "20px 18px 32px" : "28px 32px 40px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#7A7468", letterSpacing: "0.18em" }}>
          DATACHECK EU · FULL AUDIT REPORT
        </div>
        <h1 style={{ margin: "8px 0 0", fontSize: mobile ? 28 : 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#1A1814" }}>
          {app.name}
        </h1>
        <div style={{ fontSize: 13, color: "#7A7468", marginTop: 6 }}>
          {app.developer} · Audited {new Date().toLocaleString("en", { month: "long", year: "numeric" })}
        </div>

        {/* Overall */}
        <div
          style={{
            marginTop: 24,
            border: "1px solid #ECE8DF",
            background: "#fff",
            borderRadius: 14,
            padding: 20,
            display: "flex",
            gap: 18,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: 14,
              background: g.color + "12",
              display: "grid",
              placeItems: "center",
              border: `1.5px solid ${g.color}40`,
            }}
          >
            <div style={{ fontSize: 56, fontWeight: 900, color: g.color, letterSpacing: "-0.03em", lineHeight: 1 }}>
              {app.grade}
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7A7468", fontWeight: 700 }}>
              Overall grade
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1814", marginTop: 4 }}>
              {g.label} · {overallScore}/100
            </div>
            <div style={{ marginTop: 10, height: 6, background: "#F0EBDE", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${overallScore}%`, background: g.color }}></div>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div style={{ marginTop: 28 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7468", fontWeight: 700, marginBottom: 12 }}>
            Breakdown by dimension
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {dims.map(({ key, label }, idx) => {
              const d = app.dimensions[key];
              const dg = GRADES[d.grade];
              return (
                <div
                  key={key}
                  style={{
                    background: "#fff",
                    border: "1px solid #ECE8DF",
                    borderRadius: 12,
                    padding: 16,
                    display: "grid",
                    gridTemplateColumns: mobile ? "auto 1fr" : "32px auto 1fr auto",
                    gap: mobile ? 12 : 16,
                    alignItems: "center",
                  }}
                >
                  {!mobile && (
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#7A7468" }}>
                      0{idx + 1}
                    </div>
                  )}
                  <GradeChip grade={d.grade} size={32} />
                  <div style={mobile ? { gridColumn: "1 / -1", marginTop: 4 } : {}}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1814" }}>{label}</div>
                    <div style={{ fontSize: 12, color: "#7A7468", marginTop: 4, textWrap: "pretty" }}>{d.note}</div>
                    <div style={{ marginTop: 8, height: 4, background: "#F0EBDE", borderRadius: 2, overflow: "hidden", maxWidth: mobile ? "100%" : 280 }}>
                      <div style={{ height: "100%", width: `${d.score}%`, background: dg.color }}></div>
                    </div>
                  </div>
                  {!mobile && (
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#1A1814", letterSpacing: "0.02em" }}>
                      {d.score}<span style={{ color: "#7A7468" }}>/100</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div style={{ marginTop: 28, padding: 16, border: "1px dashed #D8D2C4", borderRadius: 12 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#7A7468", fontWeight: 700, marginBottom: 10 }}>
            Grade legend
          </div>
          <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(5, 1fr)", gap: 10 }}>
            {Object.entries(GRADES).map(([k, v]) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <GradeChip grade={k} size={24} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 11, color: "#1A1814", fontWeight: 600 }}>{v.label}</div>
                  <div style={{ fontSize: 10, color: "#7A7468", fontFamily: "'JetBrains Mono', monospace" }}>{v.range}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 24, fontSize: 11, color: "#7A7468", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em", textAlign: "center" }}>
          DataCheck EU is an independent privacy audit foundation. Audits are public and reproducible.
        </div>
      </div>
    </div>
  );
}

// Download progress / installed screen overlaid on store
function DownloadProgress({ app, onDone, onOpen, mobile }) {
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const i = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(i);
          setDone(true);
          return 100;
        }
        return p + 4 + Math.random() * 5;
      });
    }, 90);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 60,
        background: "rgba(0,0,0,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: mobile ? "100%" : 420,
          maxWidth: 460,
          background: "#FBFAF5",
          borderRadius: 14,
          padding: 24,
          boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <AppIcon app={app} size={56} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: "#7A7468", letterSpacing: "0.1em" }}>
              {done ? "INSTALLED" : "INSTALLING"}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#1A1814", marginTop: 2 }}>{app.name}</div>
          </div>
        </div>
        <div style={{ marginTop: 18, height: 6, background: "#E6E1D6", borderRadius: 3, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, progress)}%`,
              background: done ? "#2e7d32" : "#1976d2",
              transition: "width 120ms linear",
            }}
          ></div>
        </div>
        <div style={{ marginTop: 8, fontSize: 12, color: "#7A7468", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.04em" }}>
          {done ? "✓ Install complete · privacy receipt saved" : `Downloading… ${Math.min(100, Math.round(progress))}%`}
        </div>
        {done && (
          <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <button
              onClick={onOpen}
              style={{
                height: 44, borderRadius: 8, border: "none", background: "#1976d2", color: "#fff",
                fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Open app
            </button>
            <button
              onClick={onDone}
              style={{
                height: 44, borderRadius: 8, background: "#FBFAF5", color: "#1A1814",
                border: "1.5px solid #4A463E",
                fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer",
              }}
            >
              Back to store
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { FullAuditPage, DownloadProgress });
