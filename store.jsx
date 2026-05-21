// Apple App Store–style store screens
// Detail page matches: apps.apple.com/us/app/yuka-food-cosmetic-scanner/id1092799236

// ── iOS design tokens ─────────────────────────────────────────────────────────
const AS = {
  bg:      "#F2F2F7",
  white:   "#FFFFFF",
  label:   "#000000",
  sec:     "#8E8E93",
  tert:    "#C7C7CC",
  sep:     "rgba(60,60,67,0.29)",
  blue:    "#007AFF",
  pill:    "rgba(118,118,128,0.12)",
  navBg:   "rgba(242,242,247,0.9)",
  tabBg:   "rgba(249,249,249,0.94)",
  font:    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
  display: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
};

// ── Mock reviews ──────────────────────────────────────────────────────────────
const MOCK_REVIEWS = {
  strava: [
    { user: "CyclistPro99", title: "Best cycling app — read the privacy cost", stars: 4, date: "Mar 14, 2025", body: "Nothing comes close for route planning and segments. But Health DataCheck EU's D rating is fair: GPS routes are public by default and partners are never named. Use it with open eyes." },
    { user: "TrailRunner_EU", title: "Love the community, hate the defaults", stars: 3, date: "Feb 2, 2025", body: "Incredible for running. The route maps are beautiful. But I had to spend 30 min fixing my privacy settings — everything was open to the world by default." },
    { user: "PrivacyPedaller", title: "Heatmap incident still concerns me", stars: 3, date: "Jan 19, 2025", body: "The 2018 military base exposure from the global heatmap was a wake-up call. Policy still permits this. App is great, trust is cautious." },
  ],
  flo: [
    { user: "CycleTracker2025", title: "Accurate but TikTok connection is a problem", stars: 3, date: "Mar 20, 2025", body: "The cycle predictions are scarily accurate. But sharing my subscription plan and device ID with TikTok Ad Manager? On a reproductive health app? Health DataCheck EU's C rating is generous." },
    { user: "HealthConscious_DE", title: "Better than before, still not great", stars: 4, date: "Feb 10, 2025", body: "Anonymous Mode is genuinely useful. ISO certifications mean something. But the FTC settlement history means I keep one eye on the news. Cautious recommend." },
    { user: "ReproductiveRights", title: "The FTC case changed everything for me", stars: 2, date: "Jan 5, 2025", body: "I was a loyal user until I read about the FTC settlement. They shared period and pregnancy data with Facebook after promising they wouldn't. Switched apps immediately." },
  ],
  yuka: [
    { user: "FoodScanner_FR", title: "The best scanner, with one big asterisk", stars: 4, date: "Mar 28, 2025", body: "Genuinely changes how you shop. The database is excellent. B from Health DataCheck EU is deserved — all vendors named, no ads. But every scan going to OpenAI is not ideal." },
    { user: "CleanEater_EU", title: "Actually honest about what they do", stars: 5, date: "Feb 22, 2025", body: "Yuka names every service provider in their policy. That alone puts them above 99% of health apps. The OpenAI thing is a real concern they should address." },
    { user: "AllergyMum", title: "Saved me countless times — privacy is OK", stars: 5, date: "Jan 30, 2025", body: "Essential for managing my daughter's allergies. Scan results are instant and reliable. I wish I could opt out of the AI processing but the product is too useful to quit." },
  ],
  vivo: [
    { user: "HabitHero_CH", title: "The only app I trust completely", stars: 5, date: "Mar 10, 2025", body: "Health DataCheck EU gives it an A and it's deserved. No account, no tracking, nothing leaves my phone. Habit streaks finally stick because I trust the tool I'm using." },
    { user: "MinimalistDev", title: "Rare: simple AND private", stars: 5, date: "Feb 5, 2025", body: "I checked the network traffic myself — zero outbound calls during normal use. Exactly what a habit tracker should be. Beautiful UI, no distractions." },
    { user: "PrivacyFirst_AT", title: "Wish more apps were like this", stars: 5, date: "Jan 12, 2025", body: "In a world where every app harvests data, Vivo Habit stands alone. A-grade from Health DataCheck EU, no analytics, no tracking. Habit building without the surveillance tax." },
  ],
  sleepcast: [
    { user: "InsomniacFixer", title: "Great sounds, honest privacy", stars: 4, date: "Mar 5, 2025", body: "Sleep quality genuinely improved in two weeks. B from Health DataCheck EU is fair — Firebase analytics is always on with no easy opt-out but there's no advertising and sleep data stays internal." },
    { user: "SoundSleeper_NL", title: "Best soundscape library available", stars: 5, date: "Feb 14, 2025", body: "The rain and forest sounds are incredibly high quality. Sleep score is useful. Would bump to 5 stars if Firebase analytics had an in-app opt-out." },
    { user: "WellrestReviewer", title: "Solid, privacy-conscious choice", stars: 4, date: "Jan 8, 2025", body: "EU servers, encrypted storage, no advertising. The motion-based sleep detection is clever and stays on-device. Minor gripe: deletion takes up to 30 days." },
  ],
};

const MOCK_WHATSNEW = {
  strava:     { version: "291.5", date: "Apr 2, 2025",  notes: "Route replay with 3D flyover\nNew challenge types for groups\nBug fixes & performance improvements" },
  flo:        { version: "9.44",  date: "Mar 28, 2025", notes: "Improved cycle prediction accuracy\nNew symptom and medication categories\nUI polish and accessibility improvements" },
  yuka:       { version: "6.12",  date: "Apr 10, 2025", notes: "Expanded food database to 4.8 million products\nFaster barcode scanning engine\nImproved allergen filter" },
  vivo:       { version: "3.2",   date: "Mar 15, 2025", notes: "New habit templates library\nImproved streak recovery feature\nMinor UI refinements and bug fixes" },
  sleepcast:  { version: "5.0",   date: "Apr 5, 2025",  notes: "12 new soundscape environments\nSleep stage visualization improved\nFitness integration with Apple Health" },
};

// ── SVG icons ─────────────────────────────────────────────────────────────────
function ChevronLeft({ color = AS.blue }) {
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ flexShrink: 0 }}>
      <path d="M10.5 1.5L2 10l8.5 8.5" stroke={color} strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MagnifyIcon({ color = AS.blue, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="7.5" stroke={color} strokeWidth="2" />
      <path d="M21.5 21.5L16 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ShareIcon({ color = AS.blue, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 6.5L12 2l4.5 4.5" stroke={color} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 12v7a1 1 0 001 1h12a1 1 0 001-1v-7" stroke={color}
            strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Star display ──────────────────────────────────────────────────────────────
function StarRow({ rating, size = 12, color = "#FF9500" }) {
  return (
    <span style={{ display: "inline-flex", gap: 1.5 }}>
      {[0,1,2,3,4].map(i => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} style={{ position: "relative", width: size, height: size, display: "inline-block", lineHeight: 1, fontSize: size }}>
            <span style={{ position: "absolute", inset: 0, color: "#E5E5EA" }}>★</span>
            <span style={{ position: "absolute", inset: 0, overflow: "hidden", width: `${fill * 100}%`, color }}>★</span>
          </span>
        );
      })}
    </span>
  );
}

// ── Bottom tab bar ─────────────────────────────────────────────────────────────
function AppStoreTabBar() {
  const tabs = [
    { label: "Today",
      icon: <><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="13" r="3.5" fill="currentColor"/><line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
    { label: "Games",
      icon: <><path d="M3 8.5l2-3h14l2 3v6l-2 3H5l-2-3V8.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><line x1="6" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="8" y1="9" x2="8" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="15" cy="10" r="1" fill="currentColor"/><circle cx="17" cy="12" r="1" fill="currentColor"/></> },
    { label: "Apps", active: true,
      icon: <><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor"/></> },
    { label: "Arcade",
      icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
    { label: "Search",
      icon: <><circle cx="10.5" cy="10.5" r="7" stroke="currentColor" strokeWidth="1.8"/><path d="M20 20l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
  ];
  return (
    <div style={{
      height: 49, background: AS.tabBg,
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderTop: `0.5px solid ${AS.sep}`,
      display: "flex", alignItems: "stretch", flexShrink: 0,
    }}>
      {tabs.map((t, i) => (
        <div key={i} style={{
          flex: 1, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 2,
          color: t.active ? AS.blue : AS.sec, fontFamily: AS.font,
          cursor: "pointer", padding: "4px 0 2px",
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>{t.icon}</svg>
          <span style={{ fontSize: 10, fontWeight: t.active ? 600 : 400, lineHeight: 1 }}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

// ── Search bar ────────────────────────────────────────────────────────────────
function SearchBar({ value, onChange, onCancel, inputRef }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, background: AS.pill, borderRadius: 10, padding: "7px 10px" }}>
        <MagnifyIcon color={AS.sec} size={16} />
        <input ref={inputRef} value={value} onChange={e => onChange(e.target.value)}
          placeholder="Search" autoFocus
          style={{ flex: 1, border: "none", background: "none", outline: "none", fontSize: 17, fontFamily: AS.font, color: AS.label, minWidth: 0 }} />
        {value && (
          <button onClick={() => onChange("")} style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex", lineHeight: 0 }}>
            <svg width="17" height="17" viewBox="0 0 17 17"><circle cx="8.5" cy="8.5" r="8.5" fill={AS.tert}/><path d="M5.5 5.5l6 6M11.5 5.5l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        )}
      </div>
      <button onClick={onCancel} style={{ border: "none", background: "none", color: AS.blue, fontSize: 17, cursor: "pointer", padding: 0, fontFamily: AS.font, whiteSpace: "nowrap" }}>Cancel</button>
    </div>
  );
}

// ── Section header (shared by detail page sections) ───────────────────────────
function SectionTitle({ children, action, actionLabel = "See All" }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
      <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", color: AS.label, fontFamily: AS.display }}>
        {children}
      </h2>
      {action && (
        <button onClick={action} style={{ border: "none", background: "none", color: AS.blue, fontSize: 15, cursor: "pointer", padding: 0, fontFamily: AS.font, flexShrink: 0 }}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// ── Charts list screen ────────────────────────────────────────────────────────
function StoreSearchScreen({ apps, onSelect, onGetDirect, rejected, mobile }) {
  const [chartTab, setChartTab] = React.useState("free");
  const [searching, setSearching] = React.useState(false);
  const [q, setQ] = React.useState("");
  const inputRef = React.useRef(null);

  const displayed = q
    ? apps.filter(a => a.name.toLowerCase().includes(q.toLowerCase()) || a.tagline.toLowerCase().includes(q.toLowerCase()))
    : apps;

  const pad = mobile ? 16 : 32;
  const sepInset = pad + 30 + 12 + 63 + 12;

  const openSearch = () => { setSearching(true); setTimeout(() => inputRef.current?.focus(), 30); };
  const closeSearch = () => { setSearching(false); setQ(""); };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: AS.bg, fontFamily: AS.font, overflow: "hidden" }}>

      {/* Nav bar */}
      <div style={{ background: AS.navBg, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: `0.5px solid ${AS.sep}`, padding: `0 ${pad}px`, display: "flex", alignItems: "center", gap: 8, flexShrink: 0, minHeight: 44, position: "relative" }}>
        {searching ? (
          <SearchBar value={q} onChange={setQ} onCancel={closeSearch} inputRef={inputRef} />
        ) : (
          <>
            <div style={{ width: 80, fontSize: 17, color: AS.blue }}>Apps</div>
            <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", fontSize: 17, fontWeight: 600, color: AS.label, letterSpacing: "-0.4px", pointerEvents: "none", whiteSpace: "nowrap" }}>
              Health &amp; Fitness
            </div>
            <div style={{ marginLeft: "auto" }}>
              <button onClick={openSearch} style={{ border: "none", background: "none", cursor: "pointer", padding: 4, display: "flex", lineHeight: 0 }}>
                <MagnifyIcon size={22} />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Large title + segmented control */}
      {!searching && (
        <div style={{ background: AS.bg, flexShrink: 0 }}>
          <div style={{ padding: `10px ${pad}px 4px` }}>
            <h1 style={{ margin: 0, fontSize: mobile ? 34 : 38, fontWeight: 700, letterSpacing: "-0.6px", color: AS.label, fontFamily: AS.display, lineHeight: 1.1 }}>
              Top Charts
            </h1>
          </div>
          <div style={{ padding: `8px ${pad}px 10px` }}>
            <div style={{ display: "flex", background: "rgba(118,118,128,0.12)", borderRadius: 9, padding: 2 }}>
              {[{ id: "free", label: "Top Free" }, { id: "paid", label: "Top Paid" }].map(opt => (
                <button key={opt.id} onClick={() => setChartTab(opt.id)} style={{
                  flex: 1, padding: "6px 0", borderRadius: 7, border: "none",
                  background: chartTab === opt.id ? AS.white : "transparent",
                  color: AS.label, fontFamily: AS.font, fontSize: 13, fontWeight: 600, cursor: "pointer",
                  transition: "background 0.15s, box-shadow 0.15s",
                  boxShadow: chartTab === opt.id ? "0 0.5px 4px rgba(0,0,0,0.12), 0 0 0 0.5px rgba(0,0,0,0.04)" : "none",
                }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* App list */}
      <div style={{ flex: 1, overflowY: "auto", background: AS.white }}>
        {q && displayed.length === 0 && (
          <div style={{ padding: "60px 20px", textAlign: "center", color: AS.sec, fontSize: 17 }}>No results for "{q}"</div>
        )}
        {displayed.map((app, index) => (
          <div key={app.id}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: `11px ${pad}px`, background: "transparent" }}>
              <button onClick={() => onSelect(app)} style={{
                display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0,
                background: "none", border: "none", cursor: "pointer", padding: 0,
                fontFamily: AS.font, textAlign: "left", WebkitTapHighlightColor: "transparent",
              }}>
                <div style={{ width: 30, textAlign: "right", fontSize: 17, color: AS.sec, flexShrink: 0, fontVariantNumeric: "tabular-nums", fontWeight: 500 }}>{index + 1}</div>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <AppIcon app={app} size={63} radius={14} />
                  <div style={{
                    position: "absolute", top: -4, right: -4,
                    width: 20, height: 20, borderRadius: "50%",
                    background: GRADES[app.grade]?.color ?? "#888",
                    color: "#fff", fontSize: 10, fontWeight: 800,
                    display: "grid", placeItems: "center",
                    border: "2px solid #fff",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    lineHeight: 1,
                  }}>
                    {app.grade}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 400, color: AS.label, lineHeight: 1.4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.name}</div>
                  <div style={{ fontSize: 13, color: AS.sec, marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.tagline}</div>
                  <div style={{ fontSize: 11, color: AS.sec, marginTop: 2 }}>In-App Purchases</div>
                </div>
              </button>
              <button onClick={() => onGetDirect(app)} style={{
                padding: "5px 18px", borderRadius: 100, background: AS.pill,
                color: AS.blue, fontSize: 15, fontWeight: 700,
                border: "none", cursor: "pointer", fontFamily: AS.font, flexShrink: 0,
              }}>GET</button>
            </div>
            {index < displayed.length - 1 && <div style={{ height: "0.5px", background: AS.sep, marginLeft: sepInset }} />}
          </div>
        ))}
      </div>

      {mobile && <AppStoreTabBar />}
    </div>
  );
}

// ── App detail / product page ─────────────────────────────────────────────────
function AppDetailScreen({ app, onBack, onDownload, mobile, installed, allApps }) {
  const [descExpanded, setDescExpanded] = React.useState(false);
  const pad = mobile ? 16 : 32;
  const g = GRADES[app.grade];

  const reviews = MOCK_REVIEWS[app.id] || [];
  const wn = MOCK_WHATSNEW[app.id] || { version: "1.0", date: "Apr 1, 2025", notes: "Bug fixes & performance improvements." };

  // Star distribution from rating
  const r = app.rating;
  const starBars = [
    { label: "5", pct: Math.round(Math.pow((r - 1) / 4, 1.5) * 65 + 25) },
    { label: "4", pct: Math.round((5 - r) * 6 + 5) },
    { label: "3", pct: Math.round((5 - r) * 3 + 2) },
    { label: "2", pct: Math.round((5 - r) * 1.5 + 1) },
    { label: "1", pct: Math.max(1, Math.round((5 - r) * 1 + 1)) },
  ];

  // Other apps for "You Might Also Like"
  const related = (allApps || []).filter(a => a.id !== app.id);

  const Divider = () => <div style={{ height: "0.5px", background: AS.sep, margin: `0 ${pad}px` }} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: AS.white, fontFamily: AS.font, overflow: "hidden" }}>

      {/* ── Nav bar ── */}
      <div style={{
        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderBottom: `0.5px solid ${AS.sep}`, padding: `0 ${pad}px`,
        display: "flex", alignItems: "center", gap: 8, flexShrink: 0, minHeight: 44,
      }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: AS.blue, fontSize: 17, cursor: "pointer", padding: 0, fontFamily: AS.font, display: "flex", alignItems: "center", gap: 5 }}>
          <ChevronLeft /> Top Charts
        </button>
        <div style={{ flex: 1 }} />
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", lineHeight: 0 }}>
          <ShareIcon />
        </button>
      </div>

      {/* ── Scrollable body ── */}
      <div style={{ flex: 1, overflowY: "auto" }}>

        {/* ── App hero header ── */}
        <div style={{ padding: `20px ${pad}px 0` }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <AppIcon app={app} size={mobile ? 116 : 130} radius={mobile ? 26 : 29} />
            <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
              <div style={{ fontSize: mobile ? 22 : 26, fontWeight: 700, color: AS.label, lineHeight: 1.2, letterSpacing: "-0.5px" }}>
                {app.name}
              </div>
              <div style={{ fontSize: 14, color: AS.blue, marginTop: 3 }}>{app.tagline}</div>
              <div style={{ fontSize: 13, color: AS.sec, marginTop: 2 }}>{app.developer}</div>
              <div style={{ marginTop: 14 }}>
                <button onClick={!installed ? onDownload : undefined} style={{
                  padding: "9px 24px", borderRadius: 100,
                  background: installed ? AS.sec : AS.blue,
                  color: "#fff", fontSize: 17, fontWeight: 700,
                  fontFamily: AS.font, border: "none",
                  cursor: installed ? "default" : "pointer",
                  display: "block",
                }}>
                  {installed ? "Open" : "Get"}
                </button>
                {!installed && <div style={{ fontSize: 11, color: AS.sec, marginTop: 4 }}>In-App Purchases</div>}
              </div>
            </div>
          </div>

          {/* Stars + rating count below hero */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, paddingBottom: 16 }}>
            <StarRow rating={app.rating} size={13} />
            <span style={{ fontSize: 13, color: AS.sec }}>{app.reviews} Ratings</span>
          </div>
        </div>

        <Divider />

        {/* ── Info strip (horizontal scroll) ── */}
        <div style={{ overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
          <div style={{ display: "flex", padding: `12px ${pad}px`, minWidth: "max-content", gap: 0 }}>
            {[
              { label: "Ratings", top: app.rating.toFixed(1), top2: <StarRow rating={app.rating} size={10} />, bot: `${app.reviews} Ratings` },
              { label: "Age Rating", top: app.age, bot: "Years Old" },
              { label: "Category", top: "🏃", bot: app.category },
              { label: "Developer", top: "👤", bot: app.developer.split(" ")[0] },
              { label: "Language", top: "EN", bot: "+ 4 More" },
              { label: "Size", top: app.size.split(" ")[0], bot: app.size.split(" ")[1] || "MB" },
              { label: "Privacy", top: () => <GradeChip grade={app.grade} size={20} />, bot: g.label },
            ].map((cell, i, arr) => (
              <div key={i} style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                padding: "4px 20px", textAlign: "center", gap: 2,
                borderRight: i < arr.length - 1 ? `0.5px solid ${AS.sep}` : "none",
                minWidth: 88,
              }}>
                <div style={{ fontSize: 10, color: AS.sec, textTransform: "uppercase", letterSpacing: "0.04em", fontWeight: 600, marginBottom: 2 }}>
                  {cell.label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: AS.label, lineHeight: 1.2, display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                  {typeof cell.top === "function" ? cell.top() : cell.top}
                  {cell.top2 && <div style={{ lineHeight: 1 }}>{cell.top2}</div>}
                </div>
                <div style={{ fontSize: 11, color: AS.sec, marginTop: 2 }}>{cell.bot}</div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Screenshots / Preview ── */}
        <div style={{ padding: `18px 0 18px ${pad}px` }}>
          <div style={{ paddingRight: pad, marginBottom: 12 }}>
            <SectionTitle>Preview</SectionTitle>
          </div>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingRight: pad, paddingBottom: 4, scrollbarWidth: "none" }}>
            {app.screenshots.map((s, i) => (
              <ScreenshotPlaceholder key={i} app={app} kind={s} w={mobile ? 150 : 188} h={mobile ? 268 : 334} />
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Description ── */}
        <div style={{ padding: `18px ${pad}px` }}>
          <SectionTitle>Description</SectionTitle>
          <div style={{ fontSize: 15, lineHeight: 1.65, color: AS.label, position: "relative" }}>
            <div style={{
              overflow: "hidden",
              maxHeight: descExpanded ? "none" : "4.8em",
              lineHeight: 1.6,
            }}>
              {app.description}
              {descExpanded && (
                <div style={{ marginTop: 12, color: AS.label }}>
                  This app has been independently reviewed by the Health DataCheck EU Foundation. Privacy grade: <strong style={{ color: g.color }}>{app.grade} — {g.label}</strong>.
                  <br /><br />
                  {app.sentence}
                </div>
              )}
            </div>
            {!descExpanded && (
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, white)" }}>
                <span style={{ display: "block", height: 20 }} />
              </div>
            )}
          </div>
          <button onClick={() => setDescExpanded(e => !e)}
            style={{ background: "none", border: "none", color: AS.blue, fontSize: 15, cursor: "pointer", padding: "8px 0 0", fontFamily: AS.font }}>
            {descExpanded ? "Less" : "more"}
          </button>
        </div>

        <Divider />

        {/* ── Ratings & Reviews ── */}
        <div style={{ padding: `18px ${pad}px` }}>
          <SectionTitle action={() => {}}>Ratings &amp; Reviews</SectionTitle>

          {/* Score + star bars */}
          <div style={{ display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 20 }}>
            {/* Big score */}
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 64, fontWeight: 700, color: AS.label, lineHeight: 1, letterSpacing: "-3px", fontFamily: AS.display }}>
                {app.rating.toFixed(1)}
              </div>
              <div style={{ fontSize: 13, color: AS.sec, marginTop: 2 }}>out of 5</div>
              <div style={{ marginTop: 6 }}><StarRow rating={app.rating} size={11} /></div>
              <div style={{ fontSize: 12, color: AS.sec, marginTop: 4 }}>{app.reviews} Ratings</div>
            </div>
            {/* Star bars */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5, paddingTop: 6 }}>
              {starBars.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, color: AS.sec, width: 8, textAlign: "right", flexShrink: 0 }}>{b.label}</span>
                  <div style={{ flex: 1, height: 4, background: "#E5E5EA", borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${b.pct}%`, background: AS.blue, borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {reviews.map((rv, i) => (
              <div key={rv.user}>
                <div style={{ padding: "16px 0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: AS.label }}>{rv.title}</div>
                    <div style={{ fontSize: 12, color: AS.sec, flexShrink: 0, marginLeft: 8 }}>{rv.date}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <StarRow rating={rv.stars} size={11} />
                  </div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: AS.label }}>{rv.body}</p>
                  <div style={{ fontSize: 13, color: AS.sec, marginTop: 8 }}>— {rv.user}</div>
                </div>
                {i < reviews.length - 1 && <div style={{ height: "0.5px", background: AS.sep }} />}
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── What's New ── */}
        <div style={{ padding: `18px ${pad}px` }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
            <SectionTitle>What's New</SectionTitle>
          </div>
          <div style={{ fontSize: 13, color: AS.sec, marginBottom: 10 }}>
            Version {wn.version} · {wn.date}
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.65, color: AS.label, whiteSpace: "pre-line" }}>
            {wn.notes}
          </div>
        </div>

        <Divider />

        {/* ── Information ── */}
        <div style={{ padding: `18px ${pad}px` }}>
          <SectionTitle>Information</SectionTitle>
          {[
            { label: "Seller",        value: app.developer },
            { label: "Size",          value: app.size },
            { label: "Category",      value: app.category },
            { label: "Compatibility", value: "iOS 15.5 or later" },
            { label: "Languages",     value: "English + 4 More" },
            { label: "Age Rating",    value: app.age + "+" },
            { label: "In-App Purchases", value: "Premium Plan — from €6.99/mo" },
          ].map((row, i, arr) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 0",
              borderBottom: i < arr.length - 1 ? `0.5px solid ${AS.sep}` : "none",
            }}>
              <span style={{ fontSize: 15, color: AS.sec }}>{row.label}</span>
              <span style={{ fontSize: 15, color: AS.label, textAlign: "right", maxWidth: "55%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.value}</span>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── Privacy (Health DataCheck EU) ── */}
        <div style={{ padding: `18px ${pad}px` }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
            <SectionTitle>Privacy</SectionTitle>
            <span style={{ fontSize: 13, color: AS.sec }}>Health DataCheck EU</span>
          </div>

          {/* Grade card */}
          <div style={{
            border: `0.5px solid ${AS.sep}`, borderRadius: 14,
            padding: 16, background: AS.bg, marginBottom: 12,
            display: "flex", alignItems: "center", gap: 14,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 12,
              background: g.color + "15", border: `1px solid ${g.color}30`,
              display: "grid", placeItems: "center", flexShrink: 0,
            }}>
              <span style={{ fontSize: 32, fontWeight: 900, color: g.color, fontFamily: "Helvetica, Arial, sans-serif", lineHeight: 1 }}>{app.grade}</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: AS.label }}>{g.label}</div>
              <div style={{ fontSize: 13, color: AS.sec, marginTop: 2, lineHeight: 1.45 }}>{app.sentence}</div>
            </div>
          </div>

          {/* Data categories */}
          {[
            { heading: "Data Linked to You", items: app.collects.slice(0, 3) },
            { heading: "Data Used to Track You", items: app.shares.filter(s => s.type === "bad").map(s => s.text) },
          ].map((cat, i) => (
            <div key={i} style={{
              border: `0.5px solid ${AS.sep}`, borderRadius: 14,
              overflow: "hidden", marginBottom: 10, background: AS.bg,
            }}>
              <div style={{ padding: "12px 14px 8px", fontSize: 13, fontWeight: 600, color: AS.sec, letterSpacing: "0.02em" }}>
                {cat.heading}
              </div>
              {cat.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 14px", borderTop: `0.5px solid ${AS.sep}` }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: "#E5E5EA", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke={AS.sec} strokeWidth="1.8"/><path d="M9 7h6M9 11h6M9 15h4" stroke={AS.sec} strokeWidth="1.8" strokeLinecap="round"/></svg>
                  </div>
                  <span style={{ fontSize: 13, color: AS.label }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <Divider />

        {/* ── You Might Also Like ── */}
        {related.length > 0 && (
          <div style={{ padding: `18px 0 18px ${pad}px` }}>
            <div style={{ paddingRight: pad, marginBottom: 12 }}>
              <SectionTitle>You Might Also Like</SectionTitle>
            </div>
            <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingRight: pad, paddingBottom: 4, scrollbarWidth: "none" }}>
              {related.map(a => (
                <div key={a.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, width: 72, flexShrink: 0 }}>
                  <AppIcon app={a} size={64} radius={14} />
                  <div style={{ fontSize: 12, color: AS.label, textAlign: "center", lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>
                    {a.name}
                  </div>
                  <div style={{ fontSize: 11, color: AS.sec, textAlign: "center", lineHeight: 1.2, width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {a.tagline}
                  </div>
                  <div style={{ padding: "4px 12px", borderRadius: 100, background: AS.pill, color: AS.blue, fontSize: 13, fontWeight: 700 }}>
                    GET
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ height: 32 }} />
      </div>

      {mobile && <AppStoreTabBar />}
    </div>
  );
}

Object.assign(window, { StoreSearchScreen, AppDetailScreen });
