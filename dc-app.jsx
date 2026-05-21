/* ========================================================
   DataCheck EU — Navigation + App root + render
   ======================================================== */

const Nav = ({ page, navigate }) => {
  const links = [
    { id: 'home',       label: 'Home' },
    { id: 'library',    label: 'App Library' },
    { id: 'whitepaper', label: 'Whitepaper' },
    { id: 'rubric',     label: 'Score Rubric' }
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => navigate('home')}>
          <span className="nav-logo-dot" />
          DataCheck EU
        </button>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.id}>
              <button
                className={`nav-link${page === l.id ? ' active' : ''}`}
                onClick={() => navigate(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  const [page, setPage] = useState('home');
  const [initialAppId, setInitialAppId] = useState(null);

  // If opened with a hash (e.g., DataCheck EU.html#strava), jump straight to
  // that app's detail page in the library.
  useEffect(() => {
    const hash = window.location.hash.slice(1).toLowerCase();
    if (hash) {
      setPage('library');
      setInitialAppId(hash);
    }
  }, []);

  const navigate = (p) => {
    setPage(p);
    setInitialAppId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="app-root">
      <Nav page={page} navigate={navigate} />
      <div className="page-wrapper">
        {page === 'home'       && <HomePage navigate={navigate} />}
        {page === 'library'    && <AppLibraryPage initialAppId={initialAppId} />}
        {page === 'whitepaper' && <WhitepaperPage />}
        {page === 'rubric'     && <ScoreRubricPage />}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
