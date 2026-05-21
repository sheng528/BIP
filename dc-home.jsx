/* ========================================================
   Health DataCheck EU — Home Page
   ======================================================== */
const HomePage = ({ navigate }) => {
  const beliefs = DCEU.BELIEFS;
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Independent health-app transparency</p>
          <h1 className="hero-headline">
            Your health data is being shared.{' '}
            <span className="accent">Do you know who has it?</span>
          </h1>
          <p className="hero-sub">
            Health apps track your mental health, your cycle, your sleep, your symptoms.
            Health DataCheck EU publishes what they actually do with that data — in plain language,
            for free, for everyone.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => navigate('library')}>
              Explore the app library
            </button>
            <button className="btn-secondary" onClick={() => navigate('whitepaper')}>
              Read our whitepaper
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: '12,000',  label: 'Average words in a health app privacy policy' },
              { num: '34 days', label: 'Average wait for a GDPR data access request' },
              { num: '7 in 10', label: 'Health apps that share data with third parties' }
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── What we do ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What we do</h2>
          <div className="cards-grid-3">
            {[
              { Icon: IconSearch, title: 'We review apps',
                body: 'We read the privacy policies, test deletion flows, and document what companies actually do with your data.' },
              { Icon: IconShield, title: 'We score transparently',
                body: 'Every app receives an A–E rating based on a published rubric. Our methodology is open — anyone can verify our work.' },
              { Icon: IconDoc,    title: 'We publish your rights',
                body: 'We translate GDPR rights into plain language and give you tools to act on them.' }
            ].map(({ Icon, title, body }, i) => (
              <div key={i} className="card">
                <div className="card-icon"><Icon /></div>
                <h3 className="card-title">{title}</h3>
                <p className="card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we believe ── */}
      <section className="section beliefs-section">
        <div className="container">
          <h2 className="section-title">What we believe</h2>
          <div className="beliefs-grid">
            {beliefs.map((b) => (
              <div key={b.num} className="belief-item">
                <span className="belief-num accent">{b.num}</span>
                <h3 className="belief-title">{b.title}</h3>
                <p className="belief-body">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <p>
            Health DataCheck EU is an independent foundation registered in the European Union.
            Our app library, methodology, and rights guides are available on this site.
          </p>
        </div>
      </footer>
    </main>
  );
};

Object.assign(window, { HomePage });
