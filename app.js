// ╔══════════════════════════════════════════════════════════╗
// ║ COINAVERSE — V14.1 FULL APP (May 22, 2026)                ║
// ║ Self-contained · 7 hubs · 13 screens · MOBA-style home    ║
// ╚══════════════════════════════════════════════════════════╝

(function() {
  'use strict';

  window.state = {
    coins: 100, cred: 350, credPct: 41,
    level: 1, streak: 3, xp: 60, xpMax: 100,
    playerName: 'Hero', archetype: null, selectedArchetype: null,
    viewingWorld: null, inventory: [], completedMissions: 0,
    friends: [], party: [], dailyClaimed: [true,true,true,false,false,false,false],
  };

  // 7 HUBS METADATA
  const WORLDS = {
    strategist: {
      id:'strategist', name:'BUDGETRON', zone:'BUDGETRON BASE',
      archetype:'THE STRATEGIST', tagline:'Strategy command center · Plan, allocate, master your money.',
      power:'Tactical Planning · Resource Allocation', icon:'🧠',
      sceneBg:'assets/worlds/budgetron.jpeg', character:'assets/characters/strategist.png', color:'strategist',
      progressLabel:'Strategy Index', rewardName:'Tactical Cache',
      missions:[
        {name:'Build 3 Budgets', done:0, total:3, reward:'XP 200'},
        {name:'Save 50 Coins', done:10, total:50, reward:'💰 100'},
        {name:'Plan Weekly Spend', done:4, total:10, reward:'XP 150'},
      ],
    },
    builder: {
      id:'builder', name:'LAUNCH LAB', zone:'LAUNCH LAB REALM',
      archetype:'THE BUILDER', tagline:'Entrepreneur lab · Build, ship, launch your first venture.',
      power:'Innovation · Idea-to-Product', icon:'🚀',
      sceneBg:'assets/worlds/launch_lab.jpeg', character:'assets/characters/builder.png', color:'builder',
      progressLabel:'Build Progress', rewardName:'Founder Crate',
      missions:[
        {name:'Ship 1 Mini Product', done:0, total:1, reward:'XP 200'},
        {name:'Sell 50 Coins Worth', done:12, total:50, reward:'💰 100'},
        {name:'Launch 3 Ideas', done:1, total:3, reward:'XP 150'},
      ],
    },
    investor: {
      id:'investor', name:'INVESTOPIA', zone:'INVESTOPIA',
      archetype:'THE INVESTOR', tagline:'Wealth-growing world · Invest, grow, and build your legacy.',
      power:'Patient Growth · Compounding', icon:'📈',
      sceneBg:'assets/worlds/investopia.jpeg', character:'assets/characters/investor.png', color:'investor',
      progressLabel:'Wealth Index', rewardName:'Legendary Investor Chest',
      missions:[
        {name:'Make 3 Investments', done:0, total:3, reward:'XP 200'},
        {name:'Earn 50 Coins', done:10, total:50, reward:'💰 100'},
        {name:'Grow Portfolio 10%', done:4, total:10, reward:'XP 150'},
      ],
    },
    guardian: {
      id:'guardian', name:'SAVESCAPE ORBIT', zone:'SAVESCAPE ORBIT',
      archetype:'THE GUARDIAN', tagline:'Saving fortress · Protect, secure, defend your treasure.',
      power:'Discipline · Vault Defense', icon:'🛡️',
      sceneBg:'assets/worlds/savescape_orbit.jpeg', character:'assets/characters/guardian.png', color:'guardian',
      progressLabel:'Savings Vault', rewardName:'Defender Reward',
      missions:[
        {name:'Save 7 Days in a Row', done:3, total:7, reward:'XP 200'},
        {name:'Lock 100 Coins', done:25, total:100, reward:'💰 100'},
        {name:'Hit 1 Vault Goal', done:0, total:1, reward:'XP 150'},
      ],
    },
    risktaker: {
      id:'risktaker', name:'BITSTREAM VALLEY', zone:'BITSTREAM VALLEY',
      archetype:'THE RISK TAKER', tagline:'High-risk arena · Trade smart, embrace volatility, win big.',
      power:'Bold Moves · Market Reading', icon:'⚡',
      sceneBg:'assets/worlds/bitstream_valley.jpeg', character:'assets/characters/risktaker.png', color:'risktaker',
      progressLabel:'Risk Mastery', rewardName:'Volatility Vault',
      missions:[
        {name:'Win 3 Trades', done:1, total:3, reward:'XP 200'},
        {name:'Earn 100 Coins', done:35, total:100, reward:'💰 100'},
        {name:'Survive 5 Streaks', done:2, total:5, reward:'XP 150'},
      ],
    },
    rebuilder: {
      id:'rebuilder', name:'DEBT DETOX', zone:'DEBT DETOX DISTRICT',
      archetype:'THE REBUILDER', tagline:'Recovery & rebuild zone · Complete missions to restore and earn rewards.',
      power:'Resilience · Phoenix Comeback', icon:'☠️',
      sceneBg:'assets/worlds/debt_detox.jpeg', character:'assets/characters/rebuilder.png', color:'rebuilder',
      progressLabel:'District Recovery', rewardName:'Epic Supply Crate',
      missions:[
        {name:'Complete 3 Missions', done:0, total:3, reward:'XP 200'},
        {name:'Earn 50 Coins', done:10, total:50, reward:'💰 100'},
        {name:'Defeat 10 Enemies', done:4, total:10, reward:'XP 150'},
      ],
    },
    credtech: {
      id:'credtech', name:'CREDTECH GALAXY', zone:'CREDTECH GALAXY · CENTRAL HUB',
      archetype:'THE CREDIT MASTER', tagline:'The central nexus · Master your Cred Score and unlock the universe.',
      power:'Credit Mastery · Trust Building', icon:'⭐',
      sceneBg:'assets/bg/home_galaxy_map.png', character:'assets/characters/guardian.png', color:'credtech',
      progressLabel:'Cred Score', rewardName:'Master Hub Reward',
      missions:[
        {name:'Boost Cred Score +50', done:20, total:50, reward:'XP 300'},
        {name:'Visit All 6 Hubs', done:3, total:6, reward:'💰 200'},
        {name:'Maintain 7-Day Streak', done:3, total:7, reward:'XP 200'},
      ],
    },
  };
  window.WORLDS = WORLDS;

  const EPISODES = [
    {id:'ep01', title:'The Origins', subtitle:'Episode 01 · Season 01', cover:'assets/movies/ep01_origins.jpeg', duration:'24 min', tag:'NEW', desc:'Eight kids discover the Coinverse and unlock their archetype powers for the first time.'},
    {id:'ep02', title:'Debt Phantom', subtitle:'Episode 02 · Season 01', cover:'assets/movies/ep02_debt_phantom.jpeg', duration:'22 min', tag:'', desc:'Heroes face the Debt Phantom in the ruined district.'},
    {id:'ep03', title:'Dimensional Run', subtitle:'Episode 03 · Season 01', cover:'assets/movies/ep03_dimensional.jpeg', duration:'25 min', tag:'HOT', desc:'A reality-warping journey across the Coinverse zones.'},
    {id:'ep04', title:'Squad Assemble', subtitle:'Episode 04 · Season 01', cover:'assets/movies/ep04_squad.jpeg', duration:'28 min', tag:'', desc:'The eight heroes unite to form the Coinverse Squad.'},
    {id:'ep05', title:'Team United', subtitle:'Episode 05 · Season 01', cover:'assets/movies/ep05_team_united.jpeg', duration:'21 min', tag:'', desc:'Five heroes lead the charge against rising villains.'},
    {id:'ep06', title:"Bahati's Leap", subtitle:'Spotlight · Investor', cover:'assets/movies/ep06_bahati.jpeg', duration:'18 min', tag:'', desc:'Bahati makes her first investment — the stakes have never been higher.'},
    {id:'ep07', title:'Pluto Saves', subtitle:'Spotlight · Guardian', cover:'assets/movies/ep07_pluto.jpeg', duration:'17 min', tag:'', desc:'Pluto guards the savings vault from the greatest heist of the year.'},
    {id:'ep08', title:'Zuna Builds', subtitle:'Spotlight · Builder', cover:'assets/movies/ep08_zuna.jpeg', duration:'19 min', tag:'', desc:'Zuna launches her own business and reshapes Launch Lab.'},
    {id:'ep09', title:"Mr. JQ's Lesson", subtitle:'Mentor · Special', cover:'assets/movies/ep09_mentor.jpeg', duration:'15 min', tag:'', desc:'The mentor returns with the secrets of credit, compound, and consequence.'},
    {id:'ep10', title:'Coin City Rises', subtitle:'Mid-Season Finale', cover:'assets/movies/ep10_coin_city.jpeg', duration:'34 min', tag:'EVENT', desc:'Coin City becomes the center of the universe — and the target.'},
    {id:'ep11', title:'Dollar Villain', subtitle:'Episode 11 · Season 01', cover:'assets/movies/ep11_dollar_villain.jpeg', duration:'26 min', tag:'', desc:'The Dollar Villain unleashes the money flood that drowns Investopia.'},
    {id:'ep12', title:'Season Finale', subtitle:'Episode 12 · Season 01', cover:'assets/movies/ep12_finale.jpeg', duration:'42 min', tag:'FINALE', desc:'The final stand. Heroes vs villains — the fate of every world hangs in the balance.'},
  ];

  const SHOP_ITEMS = [
    {id:'m01', cat:'Drinks', name:'Investor Tonic', desc:'Glowing gold liquid — +10% earn boost / 24h.', price:350, tag:'NEW', tagClass:'', img:'assets/shop/merch_jar_gold.jpeg'},
    {id:'m02', cat:'Drinks', name:'Builder Brew', desc:'Emerald spark — speeds up Launch Lab missions.', price:280, tag:'', tagClass:'', img:'assets/shop/merch_jar_green.jpeg'},
    {id:'m03', cat:'Drinks', name:'Guardian Frost', desc:'Ice blue elixir — saves bonus +15% / week.', price:320, tag:'HOT', tagClass:'gold', img:'assets/shop/merch_jar_blue.jpeg'},
    {id:'m04', cat:'Drinks', name:'Squad Drink Set', desc:'All four signature flavors — collector pack.', price:1200, tag:'-20%', tagClass:'red', img:'assets/shop/merch_drink_set.jpeg'},
    {id:'m05', cat:'Crystals', name:'Aqua Resource Gem', desc:'Cyan crystal — unlocks Bitstream resources.', price:480, tag:'', tagClass:'', img:'assets/shop/merch_crystal_blue.jpeg'},
    {id:'m06', cat:'Crystals', name:'Purple Voidstone', desc:'Rare violet crystal — Debt Detox boost.', price:620, tag:'RARE', tagClass:'purple', img:'assets/shop/merch_crystal_purple.jpeg'},
    {id:'m07', cat:'Crystals', name:'Cosmic Gold Crystal', desc:'Legendary gem — daily XP multiplier ×2.', price:1500, tag:'LEGEND', tagClass:'gold', img:'assets/shop/merch_crystal_gold.jpeg'},
    {id:'m08', cat:'Currency', name:'Cosmic Coin Stack', desc:'+500 Coins immediately added to your account.', price:999, tag:'', tagClass:'', img:'assets/shop/merch_coin_cosmic.jpeg'},
    {id:'m09', cat:'Apparel', name:'Hero Shield Badge', desc:'Equip-able badge for your profile avatar.', price:200, tag:'', tagClass:'', img:'assets/shop/merch_badge.jpeg'},
    {id:'m10', cat:'Apparel', name:'Victory Star Cape', desc:'Golden star cape — show off your wins.', price:450, tag:'', tagClass:'', img:'assets/shop/merch_star.jpeg'},
    {id:'m11', cat:'Apparel', name:'Squad Sticker Pack', desc:'12 signature character stickers.', price:150, tag:'', tagClass:'', img:'assets/shop/merch_stickers.jpeg'},
    {id:'m12', cat:'Decor', name:'Squad TV Screen', desc:'Decor — hangs in your profile background.', price:380, tag:'NEW', tagClass:'', img:'assets/shop/merch_tv.jpeg'},
  ];

  // FRIENDS DATA
  const FRIENDS = [
    {id:'f1', name:'Bahati K.',  arch:'INVESTOR',   char:'assets/characters/investor.png',   online:true,  status:'In Investopia',     lvl:14},
    {id:'f2', name:'Zuna T.',    arch:'BUILDER',    char:'assets/characters/builder.png',     online:true,  status:'Crafting in Launch Lab', lvl:11},
    {id:'f3', name:'Kojo M.',    arch:'STRATEGIST', char:'assets/characters/strategist.png',  online:true,  status:'Planning quarterly budget', lvl:18},
    {id:'f4', name:'Pluto S.',   arch:'GUARDIAN',   char:'assets/characters/guardian.png',    online:false, status:'Last seen 2h ago',  lvl:9 },
    {id:'f5', name:'Nova R.',    arch:'RISK TAKER', char:'assets/characters/risktaker.png',   online:true,  status:'Trading in Bitstream', lvl:16},
    {id:'f6', name:'Aria J.',    arch:'REBUILDER',  char:'assets/characters/rebuilder.png',   online:false, status:'Last seen 1d ago',  lvl:7 },
    {id:'f7', name:'Echo D.',    arch:'STRATEGIST', char:'assets/characters/strategist.png',  online:true,  status:'On Coinaverse',     lvl:12},
    {id:'f8', name:'Lumen P.',   arch:'INVESTOR',   char:'assets/characters/investor.png',    online:false, status:'Offline · 3h ago',  lvl:13},
  ];

  // LEADERBOARDS DATA
  const LEADERBOARDS = {
    weekly: [
      {rank:1, name:'Bahati K.', arch:'INVESTOR',   char:'assets/characters/investor.png',  score:14820, change:'up'},
      {rank:2, name:'Kojo M.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:13950, change:'eq'},
      {rank:3, name:'Nova R.',   arch:'RISK TAKER', char:'assets/characters/risktaker.png',  score:12100, change:'up'},
      {rank:4, name:'Zuna T.',   arch:'BUILDER',    char:'assets/characters/builder.png',    score:11680, change:'dn'},
      {rank:5, name:'Echo D.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:10240, change:'up'},
      {rank:6, name:'Lumen P.',  arch:'INVESTOR',   char:'assets/characters/investor.png',   score:9670,  change:'eq'},
      {rank:7, name:'Pluto S.',  arch:'GUARDIAN',   char:'assets/characters/guardian.png',   score:8900,  change:'dn'},
      {rank:8, name:'You',       arch:'GUARDIAN',   char:'assets/characters/guardian.png',   score:7350,  change:'up', isYou:true},
      {rank:9, name:'Aria J.',   arch:'REBUILDER',  char:'assets/characters/rebuilder.png',  score:6820,  change:'up'},
      {rank:10,name:'Cipher Z.', arch:'RISK TAKER', char:'assets/characters/risktaker.png',  score:6210,  change:'dn'},
    ],
    monthly: [
      {rank:1, name:'Kojo M.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:48200, change:'up'},
      {rank:2, name:'Bahati K.', arch:'INVESTOR',   char:'assets/characters/investor.png',   score:45600, change:'eq'},
      {rank:3, name:'Echo D.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:39100, change:'up'},
      {rank:4, name:'Nova R.',   arch:'RISK TAKER', char:'assets/characters/risktaker.png',  score:36480, change:'dn'},
      {rank:5, name:'Zuna T.',   arch:'BUILDER',    char:'assets/characters/builder.png',    score:32800, change:'up'},
      {rank:6, name:'You',       arch:'GUARDIAN',   char:'assets/characters/guardian.png',   score:28500, change:'up', isYou:true},
      {rank:7, name:'Lumen P.',  arch:'INVESTOR',   char:'assets/characters/investor.png',   score:26900, change:'dn'},
    ],
    alltime: [
      {rank:1, name:'Kojo M.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:182400, change:'eq'},
      {rank:2, name:'Bahati K.', arch:'INVESTOR',   char:'assets/characters/investor.png',   score:178300, change:'eq'},
      {rank:3, name:'Nova R.',   arch:'RISK TAKER', char:'assets/characters/risktaker.png',  score:152100, change:'up'},
      {rank:4, name:'Zuna T.',   arch:'BUILDER',    char:'assets/characters/builder.png',    score:144700, change:'dn'},
      {rank:5, name:'Echo D.',   arch:'STRATEGIST', char:'assets/characters/strategist.png', score:131500, change:'eq'},
      {rank:18, name:'You',      arch:'GUARDIAN',   char:'assets/characters/guardian.png',   score:42800,  change:'up', isYou:true},
    ],
  };

  // ROUTING
  window.SCREENS = {};
  window.goTo = function(screenId, opts) {
    const app = document.getElementById('app');
    if (typeof SCREENS[screenId] !== 'function') {
      app.innerHTML = `<div style="padding:80px;text-align:center;color:#fff;font-family:Orbitron">${screenId} not registered</div>`;
      return;
    }
    app.innerHTML = SCREENS[screenId](opts);
    state.currentScreen = screenId;
    window.scrollTo(0, 0);
  };

  // ───────── SCREEN: SPLASH ─────────
  SCREENS.splash = function() {
    setTimeout(() => goTo('signin'), 2400);
    return `
      <div class="v14-splash">
        <div class="v14-splash-logo">COINAVERSE</div>
        <div class="v14-splash-tagline">EXPLORE · LEARN · EARN · GROW</div>
        <div class="v14-splash-bar"><div class="v14-splash-bar-fill"></div></div>
        <div class="v14-splash-pct">LOADING UNIVERSE...</div>
      </div>`;
  };

  // ───────── SCREEN: SIGNIN ─────────
  SCREENS.signin = function() {
    return `
      <div class="v14-signin">
        <div class="v14-signin-left">
          <div class="v14-signin-eyebrow">COINAVERSE · KIDS FINANCE UNIVERSE</div>
          <h1 class="v14-signin-h1">Master your money.<br>Save the universe.</h1>
          <p class="v14-signin-desc">Pick your hero. Conquer 7 worlds. Learn real-life finance skills — budgeting, saving, investing, building — through interactive gameplay and cinematic stories.</p>
          <div class="v14-signin-tags">
            <span class="v14-signin-tag">AGES 7-14</span>
            <span class="v14-signin-tag">7 WORLDS</span>
            <span class="v14-signin-tag">12 EPISODES</span>
            <span class="v14-signin-tag">PARENT-APPROVED</span>
          </div>
        </div>
        <div class="v14-signin-right">
          <div class="v14-signin-card">
            <h2>JUMP IN</h2>
            <p>Create your hero profile to start earning, learning, and growing.</p>
            <button class="v14-signin-btn">📧  Continue with Google</button>
            <button class="v14-signin-btn">🍎  Continue with Apple</button>
            <div class="v14-signin-divider">OR EMAIL</div>
            <input class="v14-signin-input" type="email" placeholder="Email">
            <input class="v14-signin-input" type="password" placeholder="Password">
            <button class="v14-signin-cta" onclick="goTo('greet')">CREATE ACCOUNT →</button>
            <button class="v14-signin-guest" onclick="goTo('greet')">CONTINUE AS GUEST →</button>
          </div>
        </div>
      </div>`;
  };

  // ───────── SCREEN: GREET ─────────
  SCREENS.greet = function() {
    return `
      <div class="v14-greet">
        <div class="v14-greet-robot">
          <img src="assets/robot/wave.png" alt="">
        </div>
        <div class="v14-greet-card">
          <div class="v14-greet-eyebrow">YOUR AI GUIDE</div>
          <h1 class="v14-greet-h1">Hey Hero!<br>I'm CIRCUIT.</h1>
          <p class="v14-greet-desc">I'll be your guide across the Coinverse. First step: discover which archetype you are. Each archetype unlocks a different world and a different way to master money. Ready?</p>
          <button class="v14-greet-cta" onclick="goTo('identity')">DISCOVER MY ARCHETYPE →</button>
        </div>
      </div>`;
  };

  // ───────── SCREEN: IDENTITY (6 archetypes only, credtech is meta-hub) ─────────
  SCREENS.identity = function() {
    const archIds = ['strategist','builder','investor','guardian','risktaker','rebuilder'];
    const cards = archIds.map(id => {
      const w = WORLDS[id];
      return `
        <div class="v14-id-card id--${w.color} ${state.selectedArchetype === id ? 'selected' : ''}"
             onclick="pickArchetype('${id}')">
          <div class="v14-id-portrait" style="background-image:url('${w.character}')"></div>
          <div class="v14-id-body">
            <h3 class="v14-id-name">${w.archetype.replace('THE ','')}</h3>
            <div class="v14-id-zone">${w.zone}</div>
            <p class="v14-id-tagline">${w.tagline.split('·')[0].trim()}</p>
            <span class="v14-id-power">⚡ ${w.power.split('·')[0].trim()}</span>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="v14-identity">
        <div class="v14-identity-head">
          <div class="v14-identity-eyebrow">STEP 1 OF 2 · CHOOSE YOUR HERO</div>
          <h1 class="v14-identity-h1">WHO ARE YOU IN THE COINVERSE?</h1>
          <p class="v14-identity-sub">Each archetype has its own world, hero, and superpower. Pick the one that fits YOU.</p>
        </div>
        <div class="v14-identity-grid">${cards}</div>
        <button id="confirmArchBtn" class="v14-identity-confirm ${state.selectedArchetype ? 'show' : ''}" onclick="confirmArchetype()">
          CONFIRM IDENTITY →
        </button>
      </div>`;
  };

  window.pickArchetype = function(id) { state.selectedArchetype = id; goTo('identity'); };
  window.confirmArchetype = function() {
    if (!state.selectedArchetype) return;
    state.archetype = state.selectedArchetype;
    goTo('welcome');
  };

  // ───────── SCREEN: WELCOME ─────────
  SCREENS.welcome = function() {
    const w = WORLDS[state.archetype] || WORLDS.guardian;
    return `
      <div class="v14-welcome" style="--player-c: var(--c-${w.color})">
        <div class="v14-welcome-info">
          <span class="v14-welcome-badge">✨ IDENTITY CONFIRMED</span>
          <h1 class="v14-welcome-h1">Welcome,<br>${w.archetype}.</h1>
          <p class="v14-welcome-desc">Your home world is <strong style="color:var(--c-${w.color})">${w.zone}</strong>. Your starting power: ${w.power}. Time to explore the Coinverse — seven worlds, your archetype's home highlighted.</p>
          <button class="v14-welcome-cta" onclick="goTo('home')">ENTER THE COINVERSE →</button>
        </div>
        <div class="v14-welcome-character">
          <img src="${w.character}" alt="">
        </div>
      </div>`;
  };

  // ───────── SCREEN: HOME (uses ref image 1 as bg + 7 hotspots) ─────────
  SCREENS.home = function() {
    const playerArch = state.archetype || 'guardian';
    const playerW = WORLDS[playerArch];
    const playerChar = playerW.character;
    const playerColor = playerW.color;

    const hubs = [
      {cls:'h-budgetron',  id:'strategist', label:'BUDGETRON'},
      {cls:'h-launch_lab', id:'builder',    label:'LAUNCH LAB'},
      {cls:'h-bitstream',  id:'risktaker',  label:'BITSTREAM VALLEY'},
      {cls:'h-savescape',  id:'guardian',   label:'SAVESCAPE ORBIT'},
      {cls:'h-investopia', id:'investor',   label:'INVESTOPIA'},
      {cls:'h-debt_detox', id:'rebuilder',  label:'DEBT DETOX'},
      {cls:'h-credtech',   id:'credtech',   label:'CREDTECH GALAXY'},
    ];

    const hotspots = hubs.map(h => `
      <div class="home-hotspot ${h.cls} ${h.id === playerArch ? 'is-default' : ''}"
           onclick="walkToHub('${h.id}')">
        <div class="home-hotspot-label">${h.label}</div>
      </div>`).join('');

    return `
      <div class="home-screen">
        <!-- Background = ref image 1 -->
        <div class="home-bg-image"></div>

        <!-- TOP HUD -->
        <header class="home-topbar">
          <div class="home-brand">
            <div class="home-brand-icon">C</div>
            <div class="home-brand-text">COINAVERSE</div>
          </div>
          <div class="home-hud">
            <div class="home-pill coins"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span><span class="l">COINS</span></div>
            <div class="home-pill lvl"><span class="n">LVL ${state.level}</span><span class="l">RANK</span></div>
            <div class="home-pill streak"><span class="n">DAY ${state.streak}</span><span class="l">STREAK</span></div>
            <div class="home-pill cred"><span class="n">${state.cred}</span><span class="l">CRED · ${state.credPct}%</span></div>
          </div>
          <div class="home-actions">
            <div class="home-icon-btn" onclick="alert('Profile')">👤</div>
            <div class="home-icon-btn" onclick="alert('Inbox')">✉️</div>
            <div class="home-icon-btn" onclick="alert('Settings')">⚙️</div>
          </div>
        </header>

        <!-- 7 clickable hub hotspots -->
        <div class="home-hotspots">${hotspots}</div>

        <!-- Path road below + character walking -->
        <div class="home-character-stage">
          <div class="home-path-road"></div>
          <div class="home-character" id="home-character" style="background-image:url('${playerChar}'); --player-c: var(--c-${playerColor})"></div>
        </div>

        <!-- LEFT SIDEBAR -->
        <aside class="home-sidebar">
          <button class="home-sb-btn" onclick="goTo('party')"><span class="ic">👥</span>PARTY &amp; FRIENDS</button>
          <button class="home-sb-btn" onclick="alert('Daily Missions')"><span class="ic">📋</span>DAILY MISSIONS</button>
          <button class="home-sb-btn" onclick="goTo('leaderboards')"><span class="ic">🏆</span>LEADERBOARDS</button>
          <button class="home-sb-btn" onclick="goTo('cinema')"><span class="ic">🎬</span>EVENT ARENA</button>
          <button class="home-sb-btn" onclick="goTo('shop')"><span class="ic">🛒</span>MARKETPLACE</button>
          <button class="home-sb-btn" onclick="goTo('reward_center')"><span class="ic">🎁</span>REWARD CENTER</button>
          <button class="home-sb-btn" onclick="alert('Multiplayer Lobby')"><span class="ic">🎮</span>MULTIPLAYER<br>LOBBY</button>
        </aside>

        <!-- YOUR HUB -->
        <div class="home-hubcard">
          <div class="home-hubcard-head">
            <div class="home-hubcard-title">YOUR HUB</div>
            <div class="home-hubcard-close">✕</div>
          </div>
          <div class="home-hubcard-welcome">Welcome back, ${state.playerName}!</div>
          <div class="home-hubcard-desc">Click any island to walk there and enter the hub.</div>
          <div class="home-hubcard-xp"><span>Next Level</span><span class="xp">${state.xp} / ${state.xpMax} XP</span></div>
          <div class="home-hubcard-bar"><div class="home-hubcard-bar-fill" style="width:${(state.xp/state.xpMax)*100}%"></div></div>
        </div>

        <!-- DAILY MISSION -->
        <div class="home-misscard">
          <div>
            <div class="home-misscard-title">DAILY MISSION</div>
            <div class="home-misscard-name">Complete 3 Missions</div>
            <div class="home-misscard-meta">Earn 50 Coins &amp; 20 XP</div>
            <div class="home-misscard-progress">
              <div class="home-misscard-bar"><div class="home-misscard-bar-fill" style="width:${(state.completedMissions/3)*100}%"></div></div>
              <span class="home-misscard-count">${state.completedMissions} / 3</span>
            </div>
          </div>
          <div class="home-misscard-chest" style="background-image:url('assets/ui/star_3d.jpeg')"></div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="home-bottom-cta">
          <button class="home-play-btn" onclick="walkToHub('${playerArch}')">
            <span class="arrow">»»</span>PLAY NOW<span class="arrow">««</span>
          </button>
          <div class="home-action-row">
            <button class="home-action-btn" onclick="alert('Customize avatar')"><span class="player-mini" style="background-image:url('${playerChar}')"></span>CUSTOMIZE</button>
            <button class="home-action-btn" onclick="alert('Inventory')"><span class="ic">🎒</span>INVENTORY</button>
            <button class="home-action-btn" onclick="alert('Skills tree')"><span class="ic">⚡</span>SKILLS</button>
          </div>
        </div>
      </div>`;
  };

  // Walking character animation — move toward hub's hotspot, then enter
  window.walkToHub = function(hubId) {
    const char = document.getElementById('home-character');
    if (!char) { state.viewingWorld = hubId; goTo('world_detail'); return; }
    const hotspot = document.querySelector('.home-hotspot.h-' + (hubId === 'rebuilder' ? 'debt_detox' :
                                                                   hubId === 'guardian' ? 'savescape' :
                                                                   hubId === 'risktaker' ? 'bitstream' :
                                                                   hubId === 'investor' ? 'investopia' :
                                                                   hubId === 'strategist' ? 'budgetron' :
                                                                   hubId === 'builder' ? 'launch_lab' :
                                                                   'credtech'));
    if (!hotspot) { state.viewingWorld = hubId; goTo('world_detail'); return; }
    const rect = hotspot.getBoundingClientRect();
    const targetX = rect.left + rect.width / 2;
    const targetY = rect.top + rect.height / 2;
    char.classList.add('walking');
    char.style.left = targetX + 'px';
    char.style.bottom = (window.innerHeight - targetY - 60) + 'px';
    char.style.transform = 'translateX(-50%) scale(0.55)';
    setTimeout(() => {
      state.viewingWorld = hubId;
      if (hubId === 'credtech') goTo('credtech_hub');
      else goTo('world_detail');
    }, 1300);
  };

  // ───────── SCREEN: PARTY & FRIENDS ─────────
  SCREENS.party = function() {
    const slots = [0,1,2,3].map(i => {
      const f = state.party[i];
      if (f) return `
        <div class="party-slot filled" onclick="alert('Manage party member')">
          <div class="party-slot-avatar" style="background-image:url('${f.char}')"></div>
          <div class="party-slot-name">${f.name}</div>
          <div class="party-slot-arch">${f.arch}</div>
          <div class="party-slot-lvl">LVL ${f.lvl}</div>
        </div>`;
      return `
        <div class="party-slot" onclick="alert('Invite a friend to slot ${i+1}')">
          <div class="party-slot-empty-ic">+</div>
          <div class="party-slot-empty-text">EMPTY SLOT</div>
        </div>`;
    }).join('');

    const friendsList = FRIENDS.map(f => `
      <div class="friend-card">
        <div class="friend-avatar ${f.online ? 'online' : 'offline'}" style="background-image:url('${f.char}')"></div>
        <div class="friend-info">
          <div class="friend-name">${f.name}</div>
          <div class="arch">${f.arch} · LVL ${f.lvl}</div>
          <div class="friend-status">${f.status}</div>
        </div>
        <div class="friend-actions">
          ${f.online ? `<button class="friend-action-btn" onclick="alert('Invite ${f.name} to party')" title="Invite">⚔️</button>` : ''}
          <button class="friend-action-btn" onclick="alert('Message ${f.name}')" title="Message">💬</button>
        </div>
      </div>`).join('');

    return `
      <div class="v14-screen v14-page">
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">PARTY &amp; FRIENDS</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="v14-page-wrap">
          <div class="party-hero">
            <div class="party-banner">
              <h1>YOUR PARTY</h1>
              <p>Team up with friends to take on missions together. Earn bonus XP, share loot, and climb the leaderboards as a squad.</p>
              <div class="party-banner-actions">
                <button class="party-btn primary" onclick="alert('Find friends to invite')">+ INVITE FRIENDS</button>
                <button class="party-btn ghost" onclick="alert('Create new party')">⚔️ CREATE PARTY</button>
              </div>
            </div>
            <div class="party-stats">
              <div class="party-stat-card"><div class="lbl">FRIENDS</div><div class="v">${FRIENDS.length}</div></div>
              <div class="party-stat-card gold"><div class="lbl">PARTIES WON</div><div class="v">23</div></div>
              <div class="party-stat-card pink"><div class="lbl">ONLINE NOW</div><div class="v">${FRIENDS.filter(f=>f.online).length}</div></div>
              <div class="party-stat-card green"><div class="lbl">RANK</div><div class="v">#${LEADERBOARDS.weekly.find(r=>r.isYou)?.rank || '—'}</div></div>
            </div>
          </div>

          <h2 class="party-section-title">⚔️ ACTIVE PARTY · ${state.party.length}/4</h2>
          <div class="party-slots">${slots}</div>

          <h2 class="party-section-title">👥 FRIENDS · ${FRIENDS.length}</h2>
          <div class="friends-list">${friendsList}</div>
        </div>
      </div>`;
  };

  // ───────── SCREEN: LEADERBOARDS ─────────
  let _lbTab = 'weekly';
  SCREENS.leaderboards = function() {
    const data = LEADERBOARDS[_lbTab] || LEADERBOARDS.weekly;
    const top3 = data.slice(0,3);
    const rest = data.slice(3);

    const podium = top3.map(p => `
      <div class="lb-podium-card rank-${p.rank}">
        <div class="lb-podium-medal">${p.rank}</div>
        <div class="lb-podium-avatar" style="background-image:url('${p.char}')"></div>
        <div class="lb-podium-name">${p.name}</div>
        <div class="lb-podium-arch">${p.arch}</div>
        <div class="lb-podium-score">${p.score.toLocaleString()}</div>
        <div class="lb-podium-score-lbl">XP EARNED</div>
      </div>`).join('');

    const rows = rest.map(r => `
      <div class="lb-row ${r.isYou ? 'is-you' : ''}">
        <div class="lb-rank">${r.rank}</div>
        <div class="lb-avatar" style="background-image:url('${r.char}')"></div>
        <div class="lb-name-block"><div class="name">${r.name}</div><div class="arch">${r.arch}</div></div>
        <div style="text-align:right">
          <div class="lb-score">${r.score.toLocaleString()}</div>
          <div class="lb-score-lbl">XP</div>
        </div>
        <div class="lb-change ${r.change}">${r.change === 'up' ? '▲' : r.change === 'dn' ? '▼' : '—'}</div>
      </div>`).join('');

    return `
      <div class="v14-screen v14-page">
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">LEADERBOARDS</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="v14-page-wrap">
          <div class="party-banner" style="margin-bottom:24px">
            <h1>🏆 GLOBAL RANKINGS</h1>
            <p>Compete with players across the Coinverse. Top players earn exclusive rewards each week, month, and season.</p>
          </div>

          <div class="lb-tabs">
            <button class="lb-tab ${_lbTab==='weekly'?'active':''}" onclick="lbTab('weekly')">WEEKLY</button>
            <button class="lb-tab ${_lbTab==='monthly'?'active':''}" onclick="lbTab('monthly')">MONTHLY</button>
            <button class="lb-tab ${_lbTab==='alltime'?'active':''}" onclick="lbTab('alltime')">ALL TIME</button>
            <button class="lb-tab" onclick="alert('Coming soon — by-archetype filters')">BY ARCHETYPE</button>
            <button class="lb-tab" onclick="alert('Coming soon — friends-only leaderboard')">FRIENDS ONLY</button>
          </div>

          <div class="lb-podium">${podium}</div>
          <div class="lb-list">${rows}</div>
        </div>
      </div>`;
  };
  window.lbTab = (t) => { _lbTab = t; goTo('leaderboards'); };

  // ───────── SCREEN: REWARD CENTER ─────────
  SCREENS.reward_center = function() {
    const days = [
      {n:1, r:'💰', amount:'+10', },
      {n:2, r:'💰', amount:'+20', },
      {n:3, r:'⚡', amount:'+50 XP'},
      {n:4, r:'💰', amount:'+40', },
      {n:5, r:'💎', amount:'GEM'},
      {n:6, r:'🎁', amount:'CHEST'},
      {n:7, r:'⭐', amount:'LEGENDARY'},
    ];
    const todayIdx = state.dailyClaimed.findIndex(c => !c);
    const daysHtml = days.map((d, i) => {
      const claimed = state.dailyClaimed[i];
      const isToday = i === todayIdx;
      return `
        <div class="reward-day ${claimed ? 'claimed' : ''} ${isToday ? 'today' : ''}">
          <div class="d">DAY ${d.n}</div>
          <div class="r">${d.r}</div>
          <div class="d">${d.amount}</div>
        </div>`;
    }).join('');

    const claimedCount = state.dailyClaimed.filter(Boolean).length;
    const streakPct = (claimedCount / 7) * 100;

    const challenges = [
      {ic:'🎯', name:'Quest Hunter',     desc:'Complete 5 daily missions across any zone.',          done:2, total:5, reward:'💰 200 + XP 100'},
      {ic:'🌍', name:'World Explorer',   desc:'Visit all 7 hubs on the Coinverse map.',              done:3, total:7, reward:'💎 RARE CRYSTAL'},
      {ic:'🎮', name:'Game Master',      desc:'Win 10 rounds of Coin Catcher.',                       done:4, total:10, reward:'🎁 LOOT CHEST'},
      {ic:'🛒', name:'Big Spender',      desc:'Purchase 3 items from the Marketplace.',               done:1, total:3, reward:'⚡ ×2 XP / 24h'},
      {ic:'⚔️', name:'Team Player',     desc:'Join 5 party missions with friends.',                  done:0, total:5, reward:'🌟 EXCLUSIVE BADGE'},
      {ic:'📈', name:'Score Climber',    desc:'Reach top 50 on weekly leaderboards.',                 done:0, total:1, reward:'💎 LEGENDARY GEM'},
    ];
    const challCards = challenges.map(c => `
      <div class="reward-card">
        <div class="reward-card-icon">${c.ic}</div>
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <div class="reward-card-bar"><div class="reward-card-bar-fill" style="width:${(c.done/c.total)*100}%"></div></div>
        <div class="reward-card-footer">
          <span class="reward-card-progress">${c.done} / ${c.total}</span>
          <span class="reward-card-reward">${c.reward}</span>
        </div>
      </div>`).join('');

    return `
      <div class="v14-screen v14-page">
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">REWARD CENTER</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="v14-page-wrap">
          <div class="reward-streak">
            <div class="reward-streak-info">
              <h2>🔥 DAILY LOGIN STREAK · ${claimedCount} / 7</h2>
              <p>Log in daily to claim escalating rewards. Hit Day 7 for a LEGENDARY reward — then the cycle restarts.</p>
              <div class="reward-streak-bar"><div class="reward-streak-bar-fill" style="width:${streakPct}%"></div></div>
              <div class="reward-streak-days">${daysHtml}</div>
            </div>
            ${todayIdx >= 0 ? `<button class="reward-claim-btn" onclick="claimDaily()">
              <div class="v">${days[todayIdx].amount}</div>
              <div class="l">CLAIM DAY ${todayIdx+1}</div>
            </button>` : `<div style="text-align:center;color:var(--gold);font-family:'Orbitron';font-size:0.8rem;letter-spacing:0.18em">✓ ALL CLAIMED<br><span style="color:var(--text-mute);font-size:0.7rem">Resets in 18h 23m</span></div>`}
          </div>

          <h2 class="party-section-title">🎯 WEEKLY CHALLENGES · ${challenges.filter(c=>c.done>=c.total).length}/${challenges.length} COMPLETE</h2>
          <div class="reward-grid">${challCards}</div>
        </div>
      </div>`;
  };

  window.claimDaily = function() {
    const idx = state.dailyClaimed.findIndex(c => !c);
    if (idx < 0) return;
    state.dailyClaimed[idx] = true;
    const rewards = [10, 20, 50, 40, 100, 200, 500];
    state.coins += rewards[idx];
    alert(`✨ Day ${idx+1} claimed! +${rewards[idx]} 💰\nNew balance: ${state.coins} coins`);
    goTo('reward_center');
  };

  // ───────── SCREEN: CREDTECH GALAXY HUB (7th) ─────────
  SCREENS.credtech_hub = function() {
    const w = WORLDS.credtech;
    const playerArch = state.archetype || 'guardian';
    const playerW = WORLDS[playerArch];

    return `
      <div class="v14-screen v14-page">
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">CREDTECH GALAXY</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="v14-page-wrap">
          <div class="reward-streak" style="background:linear-gradient(135deg, rgba(251,191,36,0.3), rgba(0,229,255,0.2));border-color:var(--gold)">
            <div class="reward-streak-info">
              <h2>⭐ CREDTECH GALAXY · THE CENTRAL HUB</h2>
              <p>This is the heart of the Coinverse. Your <strong style="color:var(--gold)">Cred Score</strong> is the master metric that unlocks all 6 worlds. Build trust, master your finances, and rise.</p>
              <div style="display:flex;align-items:center;gap:16px;margin-top:12px">
                <div style="flex:1">
                  <div style="font-family:'Orbitron';font-size:0.7rem;letter-spacing:0.18em;color:var(--text-mute);margin-bottom:4px">YOUR CRED SCORE</div>
                  <div style="font-family:'Anton';font-size:2.4rem;color:var(--gold);text-shadow:0 0 20px var(--gold)">${state.cred}</div>
                  <div class="reward-streak-bar"><div class="reward-streak-bar-fill" style="width:${state.credPct}%"></div></div>
                  <div style="display:flex;justify-content:space-between;margin-top:4px;font-family:'Orbitron';font-size:0.62rem;letter-spacing:0.14em;color:var(--text-mute)"><span>${state.credPct}% TO NEXT TIER</span><span>NEXT: 500</span></div>
                </div>
              </div>
            </div>
          </div>

          <h2 class="party-section-title">⭐ CRED MISSIONS</h2>
          <div class="reward-grid">
            ${w.missions.map(m => `
              <div class="reward-card">
                <div class="reward-card-icon">⚡</div>
                <h3>${m.name}</h3>
                <p>Progress your Cred Score and unlock new tier rewards across all 7 hubs.</p>
                <div class="reward-card-bar"><div class="reward-card-bar-fill" style="width:${(m.done/m.total)*100}%"></div></div>
                <div class="reward-card-footer">
                  <span class="reward-card-progress">${m.done} / ${m.total}</span>
                  <span class="reward-card-reward">${m.reward}</span>
                </div>
              </div>`).join('')}
          </div>

          <h2 class="party-section-title">🌌 EXPLORE OTHER HUBS</h2>
          <div class="reward-grid">
            ${['strategist','builder','investor','guardian','risktaker','rebuilder'].map(id => {
              const ww = WORLDS[id];
              return `
                <div class="reward-card" style="cursor:pointer;border-color:var(--c-${ww.color})" onclick="state.viewingWorld='${id}';goTo('world_detail')">
                  <div class="reward-card-icon">${ww.icon}</div>
                  <h3 style="color:var(--c-${ww.color})">${ww.name}</h3>
                  <p>${ww.tagline.split('·')[0].trim()}</p>
                  <div class="reward-card-footer">
                    <span class="reward-card-progress">${ww.archetype}</span>
                    <span class="reward-card-reward">ENTER →</span>
                  </div>
                </div>`;
            }).join('')}
          </div>
        </div>
      </div>`;
  };

  // ───────── SCREEN: CINEMA ─────────
  SCREENS.cinema = function() {
    const featured = EPISODES[2];
    const newRow = EPISODES.slice(0, 4);
    const charSpotRow = EPISODES.slice(5, 9);
    const eventRow = [EPISODES[9], EPISODES[11], EPISODES[10], EPISODES[1]];
    const allRow = EPISODES;
    const epCard = (e) => `
      <div class="cinema-card" onclick="playEp('${e.id}')" style="background-image:url('${e.cover}')">
        <div class="cinema-card-play">▶</div>
        <div class="cinema-card-overlay">
          <div class="cinema-card-ep">${e.subtitle}</div>
          <div class="cinema-card-title">${e.title}</div>
        </div>
      </div>`;
    return `
      <div class="v14-screen cinema-screen">
        <div class="cinema-bg"></div>
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">COINAVERSE CINEMA</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="cinema-wrap">
          <section class="cinema-hero" style="background-image:url('${featured.cover}')">
            <div class="cinema-hero-content">
              <span class="cinema-hero-badge">🔥 TRENDING NOW</span>
              <h1 class="cinema-hero-title">${featured.title}</h1>
              <div class="cinema-hero-meta"><span>2026</span><span class="pip"></span><span>${featured.duration}</span><span class="pip"></span><span>${featured.subtitle}</span></div>
              <p class="cinema-hero-desc">${featured.desc}</p>
              <div class="cinema-hero-actions">
                <button class="cinema-hero-play" onclick="playEp('${featured.id}')">▶ PLAY EPISODE</button>
                <button class="cinema-hero-info" onclick="epInfo('${featured.id}')">+ MORE INFO</button>
              </div>
            </div>
          </section>
          <section class="cinema-row"><div class="cinema-row-head"><h2 class="cinema-row-title">New This Week</h2><span class="cinema-row-more">SEE ALL →</span></div><div class="cinema-track">${newRow.map(epCard).join('')}</div></section>
          <section class="cinema-row"><div class="cinema-row-head"><h2 class="cinema-row-title">Hero Spotlights</h2><span class="cinema-row-more">SEE ALL →</span></div><div class="cinema-track">${charSpotRow.map(epCard).join('')}</div></section>
          <section class="cinema-row"><div class="cinema-row-head"><h2 class="cinema-row-title">Big Events &amp; Finale</h2><span class="cinema-row-more">SEE ALL →</span></div><div class="cinema-track">${eventRow.map(epCard).join('')}</div></section>
          <section class="cinema-row"><div class="cinema-row-head"><h2 class="cinema-row-title">All Episodes — Season 01</h2><span class="cinema-row-more">SEASON 02 SOON</span></div><div class="cinema-track">${allRow.map(epCard).join('')}</div></section>
        </div>
      </div>`;
  };
  window.playEp = (id) => { const e = EPISODES.find(x=>x.id===id); alert(`▶ ${e.title}\n${e.duration} · ${e.subtitle}\n\n(Video player not in HTML demo)`); };
  window.epInfo = (id) => { const e = EPISODES.find(x=>x.id===id); alert(`📖 ${e.title}\n${e.subtitle}\n${e.duration}\n\n${e.desc}`); };

  // ───────── SCREEN: SHOP ─────────
  let _activeCat = 'All';
  SCREENS.shop = function() {
    const cats = ['All', ...new Set(SHOP_ITEMS.map(i => i.cat))];
    const list = _activeCat === 'All' ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.cat === _activeCat);
    const card = (it) => `
      <div class="shop-card" onclick="buyItem('${it.id}')">
        <div class="shop-card-img" style="background-image:url('${it.img}')">
          ${it.tag ? `<span class="shop-card-tag ${it.tagClass}">${it.tag}</span>` : ''}
          <button class="shop-card-fav" onclick="event.stopPropagation();favItem(this)">♡</button>
        </div>
        <div class="shop-card-body">
          <div class="shop-card-cat">${it.cat}</div>
          <h3 class="shop-card-name">${it.name}</h3>
          <p class="shop-card-desc">${it.desc}</p>
          <div class="shop-card-footer">
            <div class="shop-card-price"><img src="assets/ui/coin_3d.png"><span class="n">${it.price}</span></div>
            <button class="shop-card-buy" onclick="event.stopPropagation();buyItem('${it.id}')">BUY</button>
          </div>
        </div>
      </div>`;
    return `
      <div class="v14-screen shop-screen">
        <div class="shop-bg"></div>
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="goTo('home')">← HOME</button>
            <div class="v14-title">MARKETPLACE</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n">${state.coins}</span></div>
          </div>
        </div>
        <div class="shop-wrap">
          <div class="shop-header">
            <div class="shop-header-eyebrow">COINAVERSE MERCH STORE</div>
            <h1>SQUAD GEAR &amp; POWER-UPS</h1>
            <p>Unlock boosts, equip cosmetics, and collect signature gear from the Coinaverse heroes.</p>
          </div>
          <div class="shop-tabs">
            ${cats.map(c => `<button class="shop-tab ${c === _activeCat ? 'active' : ''}" onclick="shopCat('${c}')">${c.toUpperCase()}</button>`).join('')}
          </div>
          <div class="shop-grid">${list.map(card).join('')}</div>
        </div>
      </div>`;
  };
  window.shopCat = (c) => { _activeCat = c; goTo('shop'); };
  window.buyItem = (id) => {
    const it = SHOP_ITEMS.find(x => x.id === id);
    if (state.coins < it.price) { alert(`❌ Not enough coins.\nHave ${state.coins} · need ${it.price}.`); return; }
    if (confirm(`Buy "${it.name}" for ${it.price} 💰?`)) {
      state.coins -= it.price; state.inventory.push(it.id);
      alert(`✅ Purchased ${it.name}!\nCoins left: ${state.coins}`); goTo('shop');
    }
  };
  window.favItem = (el) => {
    el.textContent = el.textContent === '♡' ? '♥' : '♡';
    el.style.color = el.textContent === '♥' ? 'var(--pink-hot)' : '';
  };

  // ───────── SCREEN: GAME (Coin Catcher) ─────────
  let _gameState = {running:false, score:0, timeLeft:30, coinsCollected:0, intervalSpawn:null, intervalTimer:null};
  SCREENS.game = function() {
    _gameState = {running:false, score:0, timeLeft:30, coinsCollected:0, intervalSpawn:null, intervalTimer:null};
    return `
      <div class="v14-screen game-screen">
        <div class="game-bg" style="background-image:url('assets/game/bg_coin_rain.jpeg')"></div>
        <div class="v14-topbar">
          <div class="v14-topbar-left">
            <button class="v14-back" onclick="gameExit()">← BACK</button>
            <div class="v14-title">COIN CATCHER</div>
          </div>
          <div class="v14-topbar-right">
            <div class="v14-coin-pill"><img src="assets/ui/coin_3d.png"><span class="n" id="game-coins-hud">${state.coins}</span></div>
          </div>
        </div>
        <div class="game-wrap" id="game-wrap">
          <div class="game-start" id="game-start-panel">
            <h2>COIN CATCHER</h2>
            <p>Tap falling gold coins to collect them. Avoid the red bombs.</p>
            <ul class="game-rules">
              <li>+10 coins · gold coin tap</li>
              <li>-5 coins · red bomb tap</li>
              <li>30 seconds · go fast</li>
              <li>Earn coins to spend in MARKETPLACE</li>
            </ul>
            <button class="game-start-btn" onclick="gameStart()">START GAME ▶</button>
          </div>
        </div>
      </div>`;
  };
  window.gameStart = () => {
    _gameState.running = true; _gameState.score = 0; _gameState.timeLeft = 30; _gameState.coinsCollected = 0;
    const wrap = document.getElementById('game-wrap');
    wrap.innerHTML = `
      <div class="game-hud">
        <div class="game-stat score"><span class="lbl">SCORE</span><span class="v" id="game-score">0</span></div>
        <div class="game-stat time"><span class="lbl">TIME</span><span class="v" id="game-time">30</span></div>
        <div class="game-stat"><span class="lbl">COINS</span><span class="v" id="game-collected">0</span></div>
      </div>
      <div class="game-arena" id="game-arena"></div>`;
    const arena = document.getElementById('game-arena');
    const spawnCoin = () => {
      if (!_gameState.running) return;
      const isBomb = Math.random() < 0.18;
      const coin = document.createElement('div');
      coin.className = 'coin-drop' + (isBomb ? ' bomb' : '');
      coin.style.backgroundImage = `url('assets/ui/coin_3d.png')`;
      coin.style.left = (10 + Math.random() * 80) + '%';
      coin.style.top = '-80px';
      const dur = 2.4 + Math.random() * 1.6;
      coin.style.transition = `top ${dur}s linear`;
      arena.appendChild(coin);
      requestAnimationFrame(() => { coin.style.top = '110%'; });
      coin.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = coin.getBoundingClientRect();
        const burst = document.createElement('div');
        burst.className = 'coin-collected';
        burst.textContent = isBomb ? '-5' : '+10';
        burst.style.color = isBomb ? 'var(--red-electric)' : 'var(--gold)';
        burst.style.left = (rect.left + rect.width / 2) + 'px';
        burst.style.top = rect.top + 'px';
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 800);
        if (isBomb) _gameState.score = Math.max(0, _gameState.score - 5);
        else { _gameState.score += 10; _gameState.coinsCollected += 1; }
        document.getElementById('game-score').textContent = _gameState.score;
        document.getElementById('game-collected').textContent = _gameState.coinsCollected;
        coin.remove();
      });
      setTimeout(() => { if (coin.parentNode) coin.remove(); }, dur * 1000 + 100);
    };
    _gameState.intervalSpawn = setInterval(spawnCoin, 600);
    _gameState.intervalTimer = setInterval(() => {
      _gameState.timeLeft -= 1;
      document.getElementById('game-time').textContent = _gameState.timeLeft;
      if (_gameState.timeLeft <= 0) gameEnd();
    }, 1000);
  };
  window.gameEnd = () => {
    _gameState.running = false;
    clearInterval(_gameState.intervalSpawn); clearInterval(_gameState.intervalTimer);
    const earned = _gameState.score; state.coins += earned;
    const arena = document.getElementById('game-arena');
    if (arena) arena.innerHTML = '';
    const wrap = document.getElementById('game-wrap');
    const panel = document.createElement('div');
    panel.className = 'game-over';
    panel.innerHTML = `
      <h2>GAME OVER</h2>
      <div class="final-score">${earned}</div>
      <div class="reward-info">+${earned} 💰 added to your wallet · ${_gameState.coinsCollected} coins caught</div>
      <div class="game-over-actions">
        <button class="game-over-btn replay" onclick="gameStart();this.closest('.game-over').remove()">PLAY AGAIN</button>
        <button class="game-over-btn exit" onclick="gameExit()">EXIT</button>
      </div>`;
    wrap.appendChild(panel);
    document.getElementById('game-coins-hud').textContent = state.coins;
  };
  window.gameExit = () => {
    _gameState.running = false;
    clearInterval(_gameState.intervalSpawn); clearInterval(_gameState.intervalTimer);
    goTo('home');
  };

  // ───────── SCREEN: WORLD DETAIL ─────────
  SCREENS.world_detail = function() {
    const wid = state.viewingWorld || state.archetype || 'rebuilder';
    if (wid === 'credtech') return SCREENS.credtech_hub();
    const w = WORLDS[wid] || WORLDS.rebuilder;
    const playerArch = state.archetype || 'guardian';
    const playerW = WORLDS[playerArch];
    const mission = (m) => `
      <div class="wd-mission-row">
        <div class="wd-mission-name">${m.name}</div>
        <div class="wd-mission-progress">${m.done}/${m.total}</div>
        <span class="wd-mission-reward">${m.reward}</span>
      </div>`;
    const progressPct = Math.round((w.missions.reduce((s,m) => s + m.done/m.total, 0) / w.missions.length) * 100);
    return `
      <div class="v14-screen wd-screen wd--${w.color}">
        <div class="wd-bg" style="background-image:url('${w.sceneBg}')"></div>
        <div class="wd-topbar">
          <div class="wd-topbar-left">
            <button class="wd-crumb" onclick="goTo('home')">← HOME</button>
            <div class="wd-crumb-title">${w.zone}</div>
          </div>
          <div class="wd-stats">
            <div class="wd-player-pill">
              <div class="av" style="background-image:url('${playerW.character}')"></div>
              <div><div class="n">${state.playerName}</div><div class="a">${playerW.archetype}</div></div>
            </div>
            <div class="stat-pill"><span class="num">${state.coins}</span><span class="lbl">COINS</span></div>
            <div class="stat-pill"><span class="num">LVL ${state.level}</span><span class="lbl">RANK</span></div>
            <div class="stat-pill"><span class="num">${state.streak}</span><span class="lbl">STREAK</span></div>
          </div>
        </div>
        <aside class="wd-sidebar">
          <div class="wd-zone-card">
            <div class="lbl">CURRENT ZONE</div>
            <div class="name"><span class="icon">${w.icon}</span>${w.name}</div>
          </div>
          <div class="wd-side-menu">
            <div class="wd-side-item" onclick="goTo('leaderboards')"><span class="ic">🏆</span>LEADERBOARDS</div>
            <div class="wd-side-item" onclick="alert('Inventory')"><span class="ic">🎒</span>INVENTORY</div>
            <div class="wd-side-item" onclick="goTo('reward_center')"><span class="ic">🎖️</span>ACHIEVEMENTS</div>
            <div class="wd-side-item" onclick="goTo('cinema')"><span class="ic">🎬</span>CINEMA</div>
            <div class="wd-side-item" onclick="goTo('shop')"><span class="ic">🛒</span>MARKETPLACE</div>
            <div class="wd-side-item" onclick="alert('Settings')"><span class="ic">⚙️</span>SETTINGS</div>
          </div>
        </aside>
        <main class="wd-hero">
          <div class="wd-hero-scene" style="background-image:url('${w.sceneBg}')"></div>
          <h1 class="wd-hero-title">${w.zone}</h1>
          <div class="wd-hero-desc">${w.tagline}</div>
          <div class="wd-hero-character" style="background-image:url('${w.character}')"></div>
        </main>
        <aside class="wd-right">
          <div class="wd-panel">
            <div class="wd-panel-head"><span class="ic">${w.icon}</span>ZONE OVERVIEW</div>
            <div class="wd-overview-thumb" style="background-image:url('${w.sceneBg}')"></div>
            <div class="wd-overview-desc">${w.tagline}<br><br>Complete missions to restore and earn rewards.</div>
            <div class="wd-panel-head" style="margin-top:14px">⚡ ZONE REWARDS</div>
            <div class="wd-rewards-grid">
              <div class="wd-reward-cell"><span class="ic">💰</span><span class="lbl">COINS</span></div>
              <div class="wd-reward-cell"><span class="ic">⚡</span><span class="lbl">XP</span></div>
              <div class="wd-reward-cell"><span class="ic">💎</span><span class="lbl">RESOURCES</span></div>
              <div class="wd-reward-cell"><span class="ic">🎁</span><span class="lbl">LOOT</span></div>
            </div>
            <button class="wd-enter-btn" onclick="goTo('game')">ENTER ${w.name} →</button>
          </div>
          <div class="wd-panel">
            <div class="wd-panel-head"><span class="ic">📊</span>ZONE PROGRESS</div>
            <div class="wd-progress-label"><span>${w.progressLabel}</span><span class="wd-progress-num">${progressPct}%</span></div>
            <div class="wd-progress-bar"><div class="wd-progress-fill" style="width:${progressPct}%"></div></div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:8px">
              <div style="flex:1;font-size:0.78rem;color:var(--text-soft)">Next Milestone:<br><strong style="color:var(--gold)">${w.rewardName}</strong><br><span style="font-size:0.7rem">Unlocks at 50%</span></div>
              <div class="wd-bottomprog-chest" style="background-image:url('assets/ui/star_3d.jpeg')"></div>
            </div>
          </div>
        </aside>
        <div class="wd-missions">
          <div class="wd-missions-head">
            <span class="wd-missions-title">⚡ DAILY MISSIONS</span>
            <span class="wd-missions-timer">⏱ 17:45:12</span>
          </div>
          ${w.missions.map(mission).join('')}
          <button class="wd-view-all" onclick="alert('All missions list')">VIEW ALL MISSIONS →</button>
        </div>
        <nav class="wd-bottomnav">
          <div class="wd-tab active" onclick="goTo('home')"><span class="ic">🌍</span>HUBS</div>
          <div class="wd-tab" onclick="goTo('party')"><span class="ic">⚔️</span>PARTY</div>
          <div class="wd-tab" onclick="goTo('leaderboards')"><span class="ic">🏆</span>RANKS</div>
          <div class="wd-tab" onclick="goTo('reward_center')"><span class="ic">🎁</span>REWARDS</div>
          <div class="wd-tab" onclick="goTo('shop')"><span class="ic">🛒</span>SHOP</div>
          <div class="wd-tab" onclick="alert('Profile')"><span class="ic">👤</span>PROFILE</div>
        </nav>
        <div class="wd-bottomprog">
          <div class="wd-bottomprog-head">DAILY REWARD</div>
          <div style="display:flex;align-items:center;gap:10px;font-size:0.7rem;color:var(--text-soft)">
            <div class="wd-bottomprog-chest" style="background-image:url('assets/ui/star_3d.jpeg')"></div>
            <div>Complete 3 missions<br>to claim reward<br><span style="color:var(--gold)">1/3</span></div>
          </div>
        </div>
      </div>`;
  };

  SCREENS.central_hub = SCREENS.home;
  SCREENS.world_view = SCREENS.world_detail;
  SCREENS.marketplace = SCREENS.shop;

  function boot() {
    const qs = new URLSearchParams(location.search);
    const start = qs.get('screen') || 'splash';
    if (qs.get('arch')) { state.archetype = qs.get('arch'); state.selectedArchetype = qs.get('arch'); }
    goTo(start);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
