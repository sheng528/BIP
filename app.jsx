// Main app — routing and tweaks panel. Full-screen, no device frame.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "timerSeconds": 5,
  "showReceiptDirect": false,
  "demoApp": "strava"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const apps = window.APPS_DB;

  // Derive mobile from actual viewport width so it's responsive.
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 768);
  React.useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Screens: "browse" | "detail"
  const [screen, setScreen] = React.useState("browse");
  const [selectedApp, setSelectedApp] = React.useState(null);
  const [showReceipt, setShowReceipt] = React.useState(false);
  const [installed, setInstalled] = React.useState({});
  const [installing, setInstalling] = React.useState(false);

  // Tweak: jump straight to receipt for a given app
  React.useEffect(() => {
    if (t.showReceiptDirect) {
      const app = apps.find((a) => a.id === t.demoApp) || apps[0];
      setSelectedApp(app);
      setScreen("detail");
      setShowReceipt(true);
    }
  }, [t.showReceiptDirect, t.demoApp]);

  const [rejected, setRejected] = React.useState([]);

  const handleSelect = (app) => { setSelectedApp(app); setScreen("detail"); };
  const handleDownloadFromDetail = () => setShowReceipt(true);
  const handleReceiptDownload = () => { setShowReceipt(false); setInstalling(true); };
  const handleInstallDone = () => {
    setInstalled((s) => ({ ...s, [selectedApp.id]: true }));
    setInstalling(false);
    setScreen("browse");
  };
  const handleSkip = () => {
    setRejected(r => r.includes(selectedApp.id) ? r : [...r, selectedApp.id]);
    setShowReceipt(false);
    setScreen("browse");
  };
  const handleViewAudit = () => {
    window.open(`DataCheck EU.html#${selectedApp.id}`, '_blank');
  };

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>

      {screen === "browse" && (
        <StoreSearchScreen
          apps={apps}
          onSelect={handleSelect}
          rejected={[]}
          mobile={mobile}
        />
      )}
      {screen === "detail" && selectedApp && (
        <AppDetailScreen
          app={selectedApp}
          onBack={() => setScreen("browse")}
          onDownload={handleDownloadFromDetail}
          installed={!!installed[selectedApp.id]}
          mobile={mobile}
          allApps={apps}
        />
      )}
      {showReceipt && selectedApp && (
        <ReceiptModal
          key={selectedApp.id + "-" + t.timerSeconds}
          app={selectedApp}
          timerSeconds={t.timerSeconds}
          mobile={mobile}
          onDownload={handleReceiptDownload}
          onSkip={handleSkip}
          onViewAudit={handleViewAudit}
        />
      )}

      {installing && selectedApp && (
        <DownloadProgress
          app={selectedApp}
          onDone={handleInstallDone}
          onOpen={handleInstallDone}
          mobile={mobile}
        />
      )}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Timer" />
        <TweakSlider
          label="Forced wait"
          value={t.timerSeconds}
          onChange={(v) => setTweak("timerSeconds", v)}
          min={0}
          max={6}
          step={1}
          unit="s"
        />

        <TweakSection label="Jump to receipt" />
        <TweakSelect
          label="Demo app"
          value={t.demoApp}
          onChange={(v) => {
            setTweak("demoApp", v);
            const app = apps.find((a) => a.id === v);
            if (app) {
              setSelectedApp(app);
              setScreen("detail");
              setShowReceipt(true);
            }
          }}
          options={apps.map((a) => ({ value: a.id, label: `${a.name} — Grade ${a.grade}` }))}
        />
        <div style={{ display: "flex", gap: 6, padding: "4px 14px 6px", flexWrap: "wrap" }}>
          {apps.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                setSelectedApp(a);
                setScreen("detail");
                setShowReceipt(true);
                setTweak("demoApp", a.id);
              }}
              style={{
                border: `1.5px solid ${GRADES[a.grade].color}`,
                background: GRADES[a.grade].color + "18",
                color: GRADES[a.grade].color,
                width: 32, height: 32,
                borderRadius: 6, fontWeight: 800, cursor: "pointer",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontSize: 13,
              }}
              title={a.name}
            >
              {a.grade}
            </button>
          ))}
        </div>

        <TweakSection label="State" />
        <TweakButton
          label="Reset prototype"
          onClick={() => {
            setInstalled({});
            setRejected([]);
            setScreen("browse");
            setShowReceipt(false);
            setInstalling(false);
          }}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
