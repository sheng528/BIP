/* ========================================================
   Health DataCheck EU — Score Rubric Page
   ======================================================== */
const ScoreRubricPage = () => {
  const tables = DCEU.RUBRIC_TABLES;
  const grades = ['A','B','C','D','E'];

  const gradeMeta = [
    { g:'A', range:'85–100%', label:'Excellent' },
    { g:'B', range:'70–84%',  label:'Good' },
    { g:'C', range:'50–69%',  label:'Moderate' },
    { g:'D', range:'35–49%',  label:'Poor' },
    { g:'E', range:'0–34%',   label:'Failing' }
  ];

  const colBg = (g) => {
    if (g === 'A' || g === 'B') return 'rgba(109,184,154,0.04)';
    if (g === 'C')               return 'rgba(201,162,39,0.04)';
    return                              'rgba(192,68,58,0.04)';
  };

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">How We Score Apps</h1>
          <p className="page-subtitle" style={{ maxWidth: 640 }}>
            Every app in our library receives a Health DataCheck EU rating from A to E — a single,
            readable signal of how transparently and fairly an app treats your data. The score
            is not a measure of how good an app is. It is a measure of how honestly it treats
            your data and your rights.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: 80 }}>

        {/* Grade legend */}
        <div className="rubric-grade-legend">
          {gradeMeta.map(({ g, range, label }) => {
            const info = gradeInfo(g);
            return (
              <div key={g} className="grade-legend-card" style={{ borderColor: `${info.color}33`, background: info.bg }}>
                <span className="grade-legend-letter" style={{ color: info.color }}>{g}</span>
                <span className="grade-legend-label">{label}</span>
                <span className="grade-legend-range">{range}</span>
              </div>
            );
          })}
        </div>

        {/* Rubric tables */}
        {tables.map((table, ti) => (
          <div key={ti} className="rubric-table-wrap">
            {/* Table header */}
            <div className="rubric-table-header">
              <span className="rubric-table-header-name">{table.name.toUpperCase()}</span>
              <span className="rubric-table-header-weight">{table.weight}% of total score</span>
            </div>
            <div className="rubric-scroll">
              <table className="rubric-table">
                <thead>
                  <tr>
                    <th className="rubric-th rubric-th--criterion">Criterion / weight</th>
                    {grades.map(g => (
                      <th key={g} className="rubric-th"
                        style={{ background: colBg(g), color: gradeInfo(g).color }}>
                        {g === 'A' ? '5 — A' : g === 'B' ? '4 — B' : g === 'C' ? '3 — C' : g === 'D' ? '2 — D' : '1 — E'}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, ri) => (
                    <tr key={ri} className="rubric-row">
                      <td className="rubric-td rubric-td--criterion">
                        <div className="rubric-criterion-name">{row.criterion}</div>
                        <div className="rubric-criterion-weight">{row.weight}%</div>
                      </td>
                      {[5,4,3,2,1].map((score, si) => (
                        <td key={score} className="rubric-td"
                          style={{ background: colBg(grades[si]) }}>
                          {row.scores[score]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Score calculation */}
        <div className="score-calc">
          <h2 className="score-calc-title">How the final score is calculated</h2>
          <p className="score-calc-body">
            Each criterion is scored from 1 to 5. That score is multiplied by the
            criterion's weight. All weighted scores are summed to produce a percentage
            out of 100. The percentage maps to a letter grade as shown in the legend above.
            All scores, criteria assessments, and source references are published in full
            for every app in our library. Our methodology is open — anyone can verify
            how we reached a conclusion.
          </p>
        </div>
      </div>
    </main>
  );
};

Object.assign(window, { ScoreRubricPage });
