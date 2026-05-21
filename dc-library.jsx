/* ========================================================
   Health DataCheck EU — App Library Page
   (grid view + detail view for individual apps)
   ======================================================== */

/* ── App Card (in the grid) ── */
const AppCard = ({ app, onSelect }) => {
  const info = gradeInfo(app.grade);
  return (
    <div className="app-card" onClick={() => onSelect(app)} role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(app)}>
      <div className="app-card-header">
        <AppIcon name={app.name} size={38} />
        <div className="app-card-info">
          <div className="app-card-name">{app.name}</div>
          <div className="app-card-category">{app.category}</div>
        </div>
      </div>
      <div className="app-card-grade-row">
        <span className="app-grade-letter" style={{ color: info.color }}>{app.grade}</span>
        <span className="app-grade-pct">{app.score}%</span>
      </div>
      <p className="app-card-summary">{app.summary}</p>
      <span className="app-card-link">View report →</span>
    </div>
  );
};

/* ── Library Grid view ── */
const LibraryGrid = ({ filterCategory, setFilterCategory, searchQuery, setSearchQuery, onSelect }) => {
  const apps = DCEU.APPS;
  const categories = DCEU.CATEGORIES;

  const filtered = useMemo(() => {
    return apps.filter(a => {
      const catMatch = filterCategory === 'All' || a.category === filterCategory;
      const q = searchQuery.toLowerCase();
      const searchMatch = !q || a.name.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q);
      return catMatch && searchMatch;
    });
  }, [filterCategory, searchQuery]);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">App Library</h1>
          <p className="page-subtitle">
            Health DataCheck EU has reviewed <strong>{apps.length}</strong> health apps.
            Click any app to see the full transparency report.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="library-controls">
          <div className="filter-bar">
            {categories.map(cat => (
              <button key={cat}
                className={`filter-pill${filterCategory === cat ? ' active' : ''}`}
                onClick={() => setFilterCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
          <div className="search-wrap">
            <span className="search-icon"><IconSearch /></span>
            <input
              className="search-box"
              type="text"
              placeholder="Search apps…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">No apps match your search.</div>
        ) : (
          <div className="app-grid">
            {filtered.map(app => <AppCard key={app.id} app={app} onSelect={onSelect} />)}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Score legend row ── */
const ScoreLegend = () => (
  <div className="score-legend">
    {[5,4,3,2,1].map(s => (
      <div key={s} className="legend-item">
        <ScoreCircle score={s} size={26} />
        <span>Score {s}</span>
      </div>
    ))}
  </div>
);

/* ── Single-app scoring table ── */
const SingleAppScoringTable = ({ table, appIndex }) => {
  const app = DCEU.COMPARISON_APPS[appIndex];
  const color = gradeInfo(app.grade).color;
  return (
    <div className="scoring-table-wrap">
      <div className="scoring-table">
        <div className="st-header">
          <span className="st-header-name">{table.name.toUpperCase()}</span>
          <span className="st-header-weight">{table.weight}% of total</span>
        </div>
        {table.rows.map((row, ri) => {
          const cell = row.apps[appIndex];
          return (
            <div key={ri} className="st-row">
              <div className="st-criterion">
                <div className="st-criterion-name">{row.criterion}</div>
                <div className="st-criterion-weight">{row.weight}% weight</div>
              </div>
              <div className="st-score-cell" style={{ flex: 1 }}>
                <ScoreCircle score={cell.score} />
                <p className="st-score-desc">{cell.desc}</p>
              </div>
            </div>
          );
        })}
        <div className="st-subtotals">
          <div className="st-subtotal-label">Category subtotal</div>
          <div className="st-subtotal-cell">
            <span className="st-subtotal-pct" style={{ color }}>{table.subtotals[appIndex]}%</span>
            <ProgressBar pct={table.subtotals[appIndex]} max={table.weight} color={color} height={3} />
            <span className="st-subtotal-max">of {table.weight}% possible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Full single-app detail (Strava / Flo / Yuka) ── */
const SingleAppDetail = ({ appName }) => {
  const appIndex = DCEU.COMPARISON_APPS.findIndex(a => a.name === appName);
  const app = DCEU.COMPARISON_APPS[appIndex];
  const tables = DCEU.SCORING_TABLES;
  const info = gradeInfo(app.grade);
  return (
    <div>
      <div className="simple-detail-card">
        <div className="cc-header" style={{ marginBottom: 16 }}>
          <AppIcon name={app.name} size={44} />
          <div>
            <div className="cc-name" style={{ fontSize: 20 }}>{app.name}</div>
            <div className="cc-category">{app.category}</div>
          </div>
        </div>
        <div className="cc-grade-row" style={{ marginBottom: 12 }}>
          <span className="cc-grade" style={{ color: info.color, fontSize: 52 }}>{app.grade}</span>
          <div>
            <div className="cc-pct" style={{ fontSize: 18 }}>{app.score}%</div>
            <ProgressBar pct={app.score} max={100} color={info.color} height={4} />
          </div>
        </div>
        <p className="cc-summary" style={{ fontSize: 14 }}>{app.summary}</p>
      </div>

      {app.sentence && (
        <div style={{
          padding: '16px 20px', background: '#131313',
          border: `1px solid ${info.color}30`, borderLeft: `3px solid ${info.color}`,
          borderRadius: 10, fontSize: 14, lineHeight: 1.65,
          color: '#aaa', fontStyle: 'italic', marginBottom: 32,
        }}>
          "{app.sentence}"
        </div>
      )}

      {app.keyFindings && app.keyFindings.filter(f => f.severity === 'high' || f.severity === 'medium').length > 0 && (
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#555', marginBottom: 16 }}>Top Weaknesses</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {app.keyFindings.filter(f => f.severity === 'high' || f.severity === 'medium').slice(0, 5).map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: '#131313', border: '1px solid #1e1e1e', borderRadius: 10, alignItems: 'flex-start' }}>
                <div style={{
                  width: 24, height: 24, borderRadius: 6, flexShrink: 0,
                  background: f.severity === 'high' ? '#d32f2f' : '#f57c00',
                  color: '#fff', display: 'grid', placeItems: 'center',
                  fontSize: 11, fontWeight: 800,
                }}>{i + 1}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#e0e0e0', marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.55 }}>{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ScoreLegend />

      {tables.map((t, i) => <SingleAppScoringTable key={i} table={t} appIndex={appIndex} />)}

      <div className="overall-row">
        <div className="overall-label">
          <div>Overall grade</div>
          <div className="overall-label-sub">100% weighted total</div>
        </div>
        <div className="overall-cell">
          <div className="overall-grade" style={{ color: info.color }}>{app.grade}</div>
          <div className="overall-pct">{app.score}%</div>
          <ProgressBar pct={app.score} max={100} color={info.color} height={3} />
          <p className="overall-summary">{app.summary}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Simple detail (non-Strava apps) ── */
const SimpleDetail = ({ app }) => {
  const info = gradeInfo(app.grade);
  return (
    <div className="simple-detail">
      <div className="simple-detail-card">
        <div className="cc-header" style={{ marginBottom: 16 }}>
          <AppIcon name={app.name} size={44} />
          <div>
            <div className="cc-name" style={{ fontSize: 20 }}>{app.name}</div>
            <div className="cc-category">{app.category}</div>
          </div>
        </div>
        <div className="cc-grade-row" style={{ marginBottom: 12 }}>
          <span className="cc-grade" style={{ color: info.color, fontSize: 52 }}>{app.grade}</span>
          <div>
            <div className="cc-pct" style={{ fontSize: 18 }}>{app.score}%</div>
            <ProgressBar pct={app.score} max={100} color={info.color} height={4} />
          </div>
        </div>
        <p className="cc-summary" style={{ fontSize: 14 }}>{app.summary}</p>
      </div>
      <div className="coming-soon">
        <div className="coming-soon-icon">⬜</div>
        <p>Full detailed report coming soon. Summary data shown above.</p>
      </div>
    </div>
  );
};

/* ── App Detail wrapper ── */
const AppDetail = ({ app, onBack }) => {
  const isFullDetail = ['Strava', 'Flo', 'Yuka'].includes(app.name);
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <button className="back-link" onClick={onBack}>
            <IconArrowLeft /> Back to App Library
          </button>
          <div className="detail-title-row">
            <AppIcon name={app.name} size={48} />
            <div>
              <h1 className="page-title" style={{ marginBottom: 4 }}>{app.name}</h1>
              <span className="page-subtitle">{app.category}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: 80 }}>
        {isFullDetail ? <SingleAppDetail appName={app.name} /> : <SimpleDetail app={app} />}
      </div>
    </div>
  );
};

/* ── App Library Page (top-level) ── */
const AppLibraryPage = ({ initialAppId }) => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Resolve initialAppId (e.g. "strava", "vivo") to an app object by matching
  // the first word of the app name (case-insensitive).
  const initialApp = initialAppId
    ? DCEU.APPS.find(a => a.name.toLowerCase().split(' ')[0] === initialAppId) || null
    : null;
  const [selectedApp, setSelectedApp] = useState(initialApp);

  const handleSelect = (app) => {
    setSelectedApp(app);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedApp(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedApp) {
    return <AppDetail app={selectedApp} onBack={handleBack} />;
  }

  return (
    <LibraryGrid
      filterCategory={filterCategory}
      setFilterCategory={setFilterCategory}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onSelect={handleSelect}
    />
  );
};

Object.assign(window, { AppLibraryPage });
