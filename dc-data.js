/* ========================================================
   Health DataCheck EU — all static data
   ======================================================== */
window.DCEU = window.DCEU || {};

DCEU.GRADES = {
  A: { color: '#6db89a', bg: 'rgba(109,184,154,0.10)', range: '85–100%', label: 'Excellent' },
  B: { color: '#8dba58', bg: 'rgba(141,186,88,0.10)',  range: '70–84%',  label: 'Good' },
  C: { color: '#c9a227', bg: 'rgba(201,162,39,0.10)',  range: '50–69%',  label: 'Moderate' },
  D: { color: '#d4617a', bg: 'rgba(212,97,122,0.10)',  range: '35–49%',  label: 'Poor' },
  E: { color: '#c0443a', bg: 'rgba(192,68,58,0.10)',   range: '0–34%',   label: 'Failing' }
};

DCEU.SCORE_COLORS = { 5: '#6db89a', 4: '#8dba58', 3: '#c9a227', 2: '#d4617a', 1: '#c0443a' };

DCEU.APPS = [
  { id:1,  name:'Strava',              category:'Fitness',            grade:'D', score:36.2, summary:'Poor privacy practices, harmful defaults' },
  { id:2,  name:'Flo',                 category:'Period & Fertility',  grade:'C', score:51.8, summary:'Some transparency, but FTC history & TikTok sharing' },
  { id:3,  name:'Yuka',                category:'Nutrition',           grade:'B', score:70.0, summary:'Transparent but hurt by OpenAI sharing' },
  { id:4,  name:'Clue',                category:'Period & Fertility',  grade:'B', score:74.5, summary:'Strong GDPR record, named partners' },
  { id:5,  name:'MyFitnessPal',        category:'Nutrition',           grade:'D', score:38.1, summary:'Broad data collection, vague sharing terms' },
  { id:6,  name:'Headspace',           category:'Mental Health',       grade:'C', score:58.3, summary:'Mixed transparency, third-party ads present' },
  { id:7,  name:'Calm',                category:'Mental Health',       grade:'C', score:54.7, summary:'Sells anonymised data, limited opt-out' },
  { id:8,  name:'BetterHelp',          category:'Mental Health',       grade:'E', score:22.4, summary:'FTC violation, sold therapy data to advertisers' },
  { id:9,  name:'Noom',                category:'Nutrition',           grade:'D', score:41.0, summary:'Inferred health data, vague partner list' },
  { id:10, name:'Sleep Cycle',         category:'Sleep',               grade:'B', score:71.2, summary:'Good defaults, minor AI processing concern' },
  { id:11, name:'Oura',                category:'Sleep',               grade:'B', score:68.4, summary:'Named partners, biometric data concern' },
  { id:12, name:'Whoop',               category:'Fitness',             grade:'C', score:55.9, summary:'Biometric collection, limited deletion path' },
  { id:13, name:'Natural Cycles',      category:'Period & Fertility',  grade:'A', score:87.3, summary:'Native GDPR, explicit consent, minimal sharing' },
  { id:14, name:'Ada Health',          category:'Symptom Checker',     grade:'B', score:72.1, summary:'Medical-grade privacy, active DPO' },
  { id:15, name:'Symptomate',          category:'Symptom Checker',     grade:'C', score:60.5, summary:'GDPR compliant, some vague partner language' },
  { id:16, name:'Lifesum',             category:'Nutrition',           grade:'C', score:57.2, summary:'Moderate sharing, analytics opt-out partial' },
  { id:17, name:'Garmin Connect',      category:'Fitness',             grade:'C', score:52.6, summary:'US-based, GDPR via EU entity, broad collection' },
  { id:18, name:'Google Fit',          category:'Fitness',             grade:'E', score:29.8, summary:'Tied to Google ad ecosystem, minimal control' },
  { id:19, name:'Samsung Health',      category:'Fitness',             grade:'D', score:43.5, summary:'Broad device data, sharing not fully disclosed' },
  { id:20, name:'Withings Health Mate',category:'Sleep',               grade:'B', score:73.8, summary:'French company, GDPR native, named vendors' },
  { id:21, name:'Vivo Habit',          category:'Health & Fitness',    grade:'A', score:91.2, summary:'No third-party connections — all data on-device' },
  { id:22, name:'SleepCast',           category:'Sleep',               grade:'B', score:76.8, summary:'Subscription model, EU servers, Firebase analytics only' }
];

DCEU.CATEGORIES = ['All','Mental Health','Period & Fertility','Fitness','Sleep','Nutrition','Symptom Checker','Health & Fitness'];

DCEU.BELIEFS = [
  { num:'01', title:'Health data is not ordinary data',
    body:'Your cycle, your mental health, your conditions. This data can affect your insurance, employment, and safety. It deserves the highest standard of protection.' },
  { num:'02', title:'Informed consent requires actual information',
    body:"Tapping 'I agree' on a 12,000-word policy is not consent. Genuine consent means understanding what you are agreeing to, in plain language, at the moment it matters." },
  { num:'03', title:'Transparency is not a favour. It is a right.',
    body:'Under GDPR, you have the right to know what is held about you and how to have it removed. Companies that obscure this are undermining a legal guarantee.' },
  { num:'04', title:'The burden should not fall on the individual',
    body:'Any intervention must bring information to people — not require people to go looking for it.' },
  { num:'05', title:'Independence is not optional',
    body:'We do not accept funding from the industry we review. Our findings are credible because our incentives are aligned with users, not companies.' },
  { num:'06', title:'App marketplaces must be held accountable',
    body:'Google Play and the App Store are gatekeepers. Governments must require them to independently verify data disclosures — not just publish what companies self-report.' }
];

/* ---- Strava comparison apps ---- */
DCEU.COMPARISON_APPS = [
  {
    name:'Strava', category:'Fitness', grade:'D', score:36.2,
    summary:'Strava — poor privacy practices, harmful defaults',
    sentence:'Activities and GPS routes are public by default. Third-party partners are never named, and deidentified movement data is commercially licensed without opt-out.',
    keyFindings:[
      { severity:'high',   title:'Public by default',                           detail:'Your routes, times, and home neighbourhood are visible to anyone online until you go digging through the settings to lock it down.' },
      { severity:'high',   title:'Zero named partners',                          detail:"Strava admits it shares your data with other companies but won't name a single one, so you have no idea who actually ends up with your GPS history." },
      { severity:'high',   title:'Global Heatmap still active',                  detail:"Your runs still feed a public worldwide heatmap that once accidentally exposed secret military bases, and Strava hasn't changed a thing about it since." },
      { severity:'high',   title:'AI training on personal data',                 detail:'Strava uses your location history and heart rate to train its AI, and the option to stop it is buried where most people will never look.' },
      { severity:'medium', title:'Acquisition clause — no health data carve-out',detail:'If Strava gets bought, every route and heartbeat they have on you goes straight to the new owner with no restrictions and no say for you.' },
    ]
  },
  {
    name:'Flo', category:'Period & Fertility', grade:'C', score:51.8,
    summary:'Flo — some transparency, but FTC history & TikTok sharing',
    sentence:'Fined by the FTC for sharing health data after promising not to. One mandatory AppsFlyer share cannot be refused. Chain sharing reaches TikTok, Meta and Pinterest.',
    keyFindings:[
      { severity:'high',   title:'TikTok Ad Manager connection',             detail:'Your subscription status and device ID get sent to TikTok, which can match it to your TikTok profile and likely figure out you\'re tracking a pregnancy or fertility issue.' },
      { severity:'high',   title:'Mandatory data share — cannot be refused', detail:'One data transfer to AppsFlyer happens at sign-up and cannot be blocked no matter what privacy settings you pick.' },
      { severity:'high',   title:'Chain sharing through AppsFlyer',          detail:'From AppsFlyer your data gets passed along to TikTok, Pinterest, Meta and Google Ads, and Flo has no control over what any of them do with it after that.' },
      { severity:'high',   title:'FTC settlement — proven misuse',           detail:'Flo promised never to share your health data, then shared menstrual cycle and pregnancy information with Facebook and Google for ad targeting and got caught and fined for it.' },
      { severity:'medium', title:'Gender inferred from usage',               detail:'Flo works out your sex or gender just from how you use the app and stores that guess in your profile, even if you never said anything.' },
    ]
  },
  {
    name:'Yuka', category:'Nutrition', grade:'B', score:70.0,
    summary:'Yuka — transparent & ad-free, hurt by OpenAI sharing',
    sentence:'The most transparent of the three: subscription-only, all vendors named, no advertising. Every food scan passes through OpenAI with no opt-out — the central irony of an app about hidden ingredients.',
    keyFindings:[
      { severity:'high',   title:'OpenAI processes every food scan',                          detail:"Every barcode you scan gets sent to OpenAI, and Yuka doesn't say how long it keeps your scans or whether they could end up training a future AI model." },
      { severity:'high',   title:'Call-out feature shifts legal liability to users',           detail:'If you email a food brand through Yuka and the brand decides to take legal action over your message, it\'s you personally who would face that, not Yuka.' },
      { severity:'high',   title:'Yuka receives your email signature via call-out CC',        detail:'When you contact a brand through Yuka, the app copies itself into the email so it can read your message, your address, and your email signature with your name, job and phone number.' },
      { severity:'high',   title:"Scan data reveals health conditions — legally 'not sensitive'", detail:'Scanning gluten-free, diabetic-safe or pregnancy products regularly paints a pretty clear picture of your health, even though Yuka officially calls none of that sensitive data.' },
      { severity:'medium', title:'Google Analytics Demographics & Interests enabled',          detail:'Yuka sends your usage to Google with advertising features switched on, so Google can build a profile of your age, interests and income that then flows across its ad network.' },
    ]
  },
];

/* ---- Strava scoring tables ---- */
DCEU.SCORING_TABLES = [
  {
    name: 'Data Collection', weight: 25,
    rows: [
      { criterion:'Data types collected', weight:13, apps:[
        { score:1, desc:'GPS, heart rate, sleep, contacts — special category' },
        { score:1, desc:'Reproductive, mental health, sexual activity' },
        { score:2, desc:'Scan history infers health conditions — not formally classified' }
      ]},
      { criterion:'Default privacy settings', weight:12, apps:[
        { score:1, desc:'Public by default — indexed by search engines' },
        { score:4, desc:'Health data private by default' },
        { score:4, desc:'No social sharing — private by default' }
      ]}
    ],
    subtotals: [5.0, 12.2, 14.8]
  },
  {
    name: 'Data Sharing', weight: 45,
    rows: [
      { criterion:'Number of 3rd parties', weight:9, apps:[
        { score:1, desc:'"Partners" unnamed — unknown number' },
        { score:1, desc:'10+ effective (TikTok, Meta, Pinterest, Google, Apple…)' },
        { score:2, desc:'~8 named services (Google, OpenAI, MailChimp…)' }
      ]},
      { criterion:'Partners named', weight:9, apps:[
        { score:1, desc:'"Trusted partners" — zero names given' },
        { score:4, desc:'AppsFlyer, TikTok, Firebase explicitly named' },
        { score:5, desc:'Full list of 15+ named vendors with purposes' }
      ]},
      { criterion:'Data sold to 3rd parties', weight:10, apps:[
        { score:2, desc:'Licenses deidentified data commercially (Strava Metro)' },
        { score:4, desc:'Explicit pledge: "we do not sell or rent"' },
        { score:5, desc:'Subscription-only — no brand data relationships' }
      ]},
      { criterion:'AI processing', weight:8, apps:[
        { score:4, desc:'Internal AI only — no external providers' },
        { score:4, desc:'Internal ML for cycle prediction — no external AI' },
        { score:2, desc:'OpenAI + Google Cloud AI process every scan — no opt-out' }
      ]},
      { criterion:'Turn off data sharing', weight:9, apps:[
        { score:2, desc:'Cannot opt out of heatmap or Strava Metro' },
        { score:1, desc:'One AppsFlyer share is legally mandatory' },
        { score:3, desc:'Analytics opt-out available — not all sharing' }
      ]}
    ],
    subtotals: [18.0, 24.8, 31.2]
  },
  {
    name: 'User Rights & Control', weight: 30,
    rows: [
      { criterion:'Lawsuit history', weight:8, apps:[
        { score:3, desc:'Heatmap incident, no formal fine' },
        { score:1, desc:'FTC settlement 2021 — health data misuse' },
        { score:5, desc:'No regulatory actions on record' }
      ]},
      { criterion:'Time to delete data', weight:8, apps:[
        { score:2, desc:'45 days after account deletion' },
        { score:1, desc:'Up to 90 days from backup systems' },
        { score:3, desc:'Not specified — standard GDPR window assumed' }
      ]},
      { criterion:'Policy change notice', weight:7, apps:[
        { score:1, desc:'"May modify at any time" — no clear notice' },
        { score:4, desc:'Annual review, email + in-app notification' },
        { score:3, desc:'"May notify" — encourages users to check' }
      ]},
      { criterion:'GDPR compliance', weight:7, apps:[
        { score:3, desc:'US company — GDPR applied via Irish entity' },
        { score:4, desc:'UK-registered — GDPR is home law' },
        { score:5, desc:'French company — GDPR native jurisdiction' }
      ]}
    ],
    subtotals: [13.2, 14.8, 24.0]
  }
];

/* ---- Rubric tables ---- */
DCEU.RUBRIC_TABLES = [
  {
    name: 'Data Collection', weight: 25,
    rows: [
      { criterion:'Data types collected', weight:13, scores:{
        5:'Basic usage stats only — no personal or health data collected',
        4:'Limited personal data, no special-category health data',
        3:'Personal data including health-adjacent (sleep, fitness)',
        2:'Sensitive data: precise location, behavioural patterns, inferred health',
        1:'Special category: reproductive health, mental health, biometrics, or medical history'
      }},
      { criterion:'Default privacy settings', weight:12, scores:{
        5:'Private by default — explicit opt-in required for any sharing',
        4:'Mostly private — minimal opt-out steps needed',
        3:'Mixed defaults — some data shared unless you opt out',
        2:'Mostly shared by default — significant effort to restrict',
        1:'Fully public by default — data visible to everyone including search engines'
      }}
    ]
  },
  {
    name: 'Data Sharing', weight: 45,
    rows: [
      { criterion:'Number of 3rd parties', weight:9, scores:{
        5:'0–1 third parties — essential service providers only',
        4:'2–3 named third parties',
        3:'4–6 named third parties',
        2:'7–10 third parties',
        1:'10+ third parties, or number unknown / unnamed'
      }},
      { criterion:'Partners named', weight:9, scores:{
        5:'All partners named with purpose, data type, and link to their own policy',
        4:'All partners named, limited detail on purpose',
        3:'Most partners named, some vague entries',
        2:'Some named, some described only as categories',
        1:'"Trusted partners" or similar — no names given'
      }},
      { criterion:'Data sold to 3rd parties', weight:10, scores:{
        5:'Explicit, legally binding pledge not to sell data — zero exceptions',
        4:'No selling stated, no commercial data sharing mechanism exists',
        3:'No selling, but data licensed or shared for research without payment',
        2:'"May share" language, no clear prohibition',
        1:'Data sold, licensed commercially, or deidentified data sold as a product'
      }},
      { criterion:'AI processing', weight:8, scores:{
        5:'No AI processing, or fully internal with no external data transfer',
        4:'Internal AI only, no third-party AI providers involved',
        3:'External AI provider used, named, opt-out available',
        2:'External AI provider used, no opt-out available',
        1:'External AI used, unnamed, no opt-out, possible training use of data'
      }},
      { criterion:'Turn off data sharing', weight:9, scores:{
        5:'Full opt-out for all sharing, one tap, easy to find in settings',
        4:'Opt-out available for most sharing categories',
        3:'Partial opt-out — some categories mandatory',
        2:'Limited opt-out — most sharing cannot be refused',
        1:'No opt-out at all — all sharing is mandatory to use the app'
      }}
    ]
  },
  {
    name: 'User Rights & Control', weight: 30,
    rows: [
      { criterion:'Lawsuit history', weight:8, scores:{
        5:'No regulatory actions or data incidents on record',
        4:'Minor incident, resolved quickly, no formal action taken',
        3:'Under investigation or minor fine issued',
        2:'Formal regulatory action / significant fine',
        1:'Multiple violations, major fine, ongoing enforcement'
      }},
      { criterion:'Time to delete data', weight:8, scores:{
        5:'Immediate or within 7 days, fully confirmed',
        4:'8–14 days with confirmation',
        3:'15–30 days, standard GDPR window',
        2:'31–60 days, backup copies persist',
        1:'60+ days, unspecified, or no deletion path'
      }},
      { criterion:'Policy change notice', weight:7, scores:{
        5:'30+ days advance notice, email and in-app notification',
        4:'14–30 days, direct notification guaranteed',
        3:'Some notice given, timeline vague',
        2:'Minimal — "may notify users"',
        1:'No notice required — "may change at any time"'
      }},
      { criterion:'GDPR compliance', weight:7, scores:{
        5:'Native GDPR jurisdiction, active DPO, all rights easy to exercise in-app',
        4:'Full GDPR compliance, rights accessible via email',
        3:'GDPR compliant but rights buried or hard to find',
        2:'Partial compliance, some rights missing or slow',
        1:'No GDPR coverage or non-compliant practices'
      }}
    ]
  }
];
