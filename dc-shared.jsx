/* ========================================================
   Health DataCheck EU — shared utility functions + micro-components
   ======================================================== */
const { useState, useEffect, useRef, useMemo } = React;

const gradeInfo = (g) => DCEU.GRADES[g] || { color: '#888', bg: 'rgba(128,128,128,0.1)', range: '', label: '' };
const scoreColor = (s) => DCEU.SCORE_COLORS[s] || '#888';

/* App icon: real image for Strava/Flo/Yuka, else coloured circle */
const DC_ICON_FILES = { 'Strava': 'strava.png', 'Flo': 'unnamed.png', 'Yuka': 'yuka.webp' };

const AppIcon = ({ name, size = 40 }) => {
  const imgSrc = DC_ICON_FILES[name];
  if (imgSrc) {
    const r = Math.round(size * 0.22);
    return (
      <img src={imgSrc} alt={name}
        style={{ width: size, height: size, borderRadius: r, objectFit: 'cover', flexShrink: 0, display: 'block' }} />
    );
  }
  const palette = ['#6db89a','#8dba58','#c9a227','#d4617a','#5b9bd5','#9b7dc4','#d4a056','#5bbcc4'];
  const color = palette[name.charCodeAt(0) % palette.length];
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `${color}1a`, border: `1.5px solid ${color}44`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 700, color,
      flexShrink: 0, letterSpacing: '-0.01em', userSelect: 'none'
    }}>
      {name[0].toUpperCase()}
    </div>
  );
};

/* Score circle: coloured ring with score number */
const ScoreCircle = ({ score, size = 34 }) => {
  const color = scoreColor(score);
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: `${color}18`, border: `2px solid ${color}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.4, fontWeight: 700, color, flexShrink: 0
    }}>
      {score}
    </div>
  );
};

/* Thin progress bar */
const ProgressBar = ({ pct, max = 100, color, height = 3 }) => (
  <div style={{ height, background: '#2a2a2a', borderRadius: 2, width: '100%' }}>
    <div style={{
      height: '100%', borderRadius: 2,
      width: `${Math.min(100, (pct / max) * 100)}%`,
      background: color, transition: 'width 0.4s ease'
    }} />
  </div>
);

/* Icon primitives */
const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const IconArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5"/><path d="m12 5-7 7 7 7"/>
  </svg>
);

const IconDownload = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

Object.assign(window, {
  gradeInfo, scoreColor,
  AppIcon, ScoreCircle, ProgressBar,
  IconSearch, IconShield, IconDoc, IconArrowLeft, IconDownload
});
