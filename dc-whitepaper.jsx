/* ========================================================
   Health DataCheck EU — Whitepaper Page
   ======================================================== */
const WhitepaperPage = () => {
  const beliefs = DCEU.BELIEFS;
  return (
    <main>
      <div className="whitepaper-wrap">
        <div className="wp-download-row">
          <button className="btn-secondary btn-sm">
            <IconDownload /> Download PDF
          </button>
        </div>

        <p className="wp-kicker">Health DataCheck EU — Briefing Paper</p>
        <h1 className="wp-title">
          Your Health Data Is Being Shared.{' '}
          You Just Don't Know With Whom.
        </h1>
        <p className="wp-subtitle">
          A briefing from Health DataCheck EU on the structural transparency failure
          in the health app market.
        </p>

        <div className="wp-divider" />

        <p className="wp-para">
          Across the European Union, hundreds of millions of people use health apps every
          day — to track their periods, monitor their mental health, log their sleep, and
          manage chronic conditions. These apps collect some of the most sensitive data that
          exists about a person. And the vast majority of users have no meaningful
          understanding of where that data goes. This is not a user problem. It is a
          structural one.
        </p>
        <p className="wp-para">
          The average health app privacy policy runs to 12,000 words of legal language.
          App Store data safety labels are self-reported and unverified. Phrases like
          'we may share with trusted partners' appear routinely in policies — without
          ever naming those partners. The system was not designed to inform users.
          It was designed to satisfy a legal minimum while keeping users in the dark.
        </p>

        <h2 className="wp-section-heading">What We Believe</h2>
        <div className="wp-beliefs">
          {beliefs.map(b => (
            <div key={b.num} className="wp-belief">
              <h3 className="wp-belief-title">
                <span className="wp-belief-num">{b.num} —</span> {b.title}
              </h3>
              <p className="wp-para">{b.body}</p>
            </div>
          ))}
        </div>

        <h2 className="wp-section-heading">The Solution</h2>
        <p className="wp-para">
          Health DataCheck EU is an independent foundation that reviews health apps and publishes
          what it finds — in plain language, for free, for everyone. We read the privacy
          policies. We test the data deletion flows. And we publish everything in a
          searchable library that any person can use in seconds to understand what the
          apps they rely on are doing with their most personal information.
        </p>
        <p className="wp-para">
          We also publish plain-language guides to GDPR rights — not as legal advice,
          but as practical tools that help people act. And we advocate for the regulatory
          changes that would make independent foundations like ours unnecessary — because
          the information would finally be available by default.
        </p>
        <p className="wp-para wp-para--accent">
          Health DataCheck EU exists for one reason: because people deserve to know.
        </p>

        <div className="wp-footer">
          Health DataCheck EU — independent foundation registered in the EU
          &nbsp;·&nbsp;
          <a href="mailto:press@datacheckeu.org" className="wp-link">press@datacheckeu.org</a>
        </div>
      </div>
    </main>
  );
};

Object.assign(window, { WhitepaperPage });
