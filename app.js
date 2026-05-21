// ╔══════════════════════════════════════════════════════════╗
// ║ COINAVERSE — APP LOGIC                                    ║
// ║ State management, routing, screen templates               ║
// ╚══════════════════════════════════════════════════════════╝

const ASSETS = {
  // ORB
  orb_hero:      'assets/characters/01_ai_guide_hero.png',
  orb_alt:       'assets/characters/01_ai_guide_hero_alt.png',
  orb_explain:   'assets/characters/02_ai_guide_pose_explain.png',
  orb_welcome:   'assets/characters/03_ai_guide_pose_welcome.png',
  orb_celebrate: 'assets/characters/04_ai_guide_pose_celebrate.png',
  orb_shrug:     'assets/characters/71_empty_state_orb_shrug.png',
  
  // Splash
  splash_land:   'assets/splash/05_splash_universe_landscape.jpeg',
  splash_port:   'assets/splash/06_splash_universe_portrait.jpeg',
  splash_logobg: 'assets/splash/07_splash_logo_reveal_bg.jpeg',
  
  // Portal
  portal_giant:  'assets/scenes/08_scene_portal_giant_opening.jpeg',
  portal_kid:    'assets/scenes/51_scene_portal_kid_entering.jpeg',
  
  // Archetype cards
  card_strategist: 'assets/archetypes/09_archetype_strategist_card.jpeg',
  card_builder:    'assets/archetypes/10_archetype_builder_card.jpeg',
  card_investor:   'assets/archetypes/11_archetype_investor_card.jpeg',
  card_guardian:   'assets/archetypes/12_archetype_guardian_card.jpeg',
  card_risktaker:  'assets/archetypes/13_archetype_risktaker_card.jpeg',
  card_rebuilder:  'assets/archetypes/14_archetype_rebuilder_card.jpeg',
  
  // Worlds
  world_budgetron: 'assets/worlds/15_world_budgetron_base.jpeg',
  world_launchlab: 'assets/worlds/16_world_launch_lab_realm.jpeg',
  world_investopia: 'assets/worlds/17_world_investopia.jpeg',
  world_savescape: 'assets/worlds/18_world_savescape_orbit.jpeg',
  world_bitstream: 'assets/worlds/19_world_bitstream_valley.jpeg',
  world_debtdetox: 'assets/worlds/20_world_debt_detox_district.jpeg',
  world_credtech:  'assets/worlds/21_world_credtech_galaxy.jpeg',
  
  // UI items
  xp_coin:       'assets/ui/22_ui_xp_coin.png',
  first_badge:   'assets/ui/23_ui_first_badge.png',
  chest_closed:  'assets/ui/25_ui_reward_chest_closed.png',
  chest_open:    'assets/ui/26_ui_reward_chest_open.png',
  avatar_frame:  'assets/ui/48_ui_avatar_preview_frame.png',
  shield_badge:  'assets/ui/50_ui_safety_shield_badge.png',
  zone_portal:   'assets/ui/55_ui_zone_portal_generic.jpeg',
  friends_frame: 'assets/ui/59_ui_friends_list_frame.png',
  daily_card:    'assets/ui/60_ui_daily_login_card.png',
  quest_card:    'assets/ui/62_ui_quest_card_frame.png',
  
  // FX
  levelup_burst: 'assets/fx/24_fx_levelup_burst.png',
  hologram_fx:   'assets/fx/46_hologram_projection_effect.png',
  streak_flame:  'assets/fx/61_fx_streak_flame_futuristic.png',
  unlock_doors:  'assets/fx/63_fx_unlock_reveal.png',
  portal_warp:   'assets/fx/70_fx_portal_warp.jpeg',
  
  // Scenes
  central_hub:   'assets/scenes/27_scene_central_hub_wide.jpeg',
  signin_term:   'assets/scenes/47_scene_signin_terminal.jpeg',
  parent_verify_scene: 'assets/scenes/49_scene_parent_verify.jpeg',
  archetype_chamber:   'assets/scenes/52_scene_archetype_chamber.jpeg',
  avatar_studio:       'assets/scenes/54_scene_avatar_studio.jpeg',
  marketplace:         'assets/scenes/56_scene_marketplace_interior.jpeg',
  events_arena:        'assets/scenes/57_scene_events_arena.jpeg',
  leaderboard:         'assets/scenes/58_scene_leaderboard_podium.jpeg',
  parent_dashboard:    'assets/scenes/64_scene_parent_dashboard_hero.jpeg',
  boss_arena:          'assets/scenes/65_scene_boss_arena_coinaverse.jpeg',
  
  // Villains
  villain_rat:    'assets/villains/28_villain_rat_action_coinaverse.png',
  villain_dollar: 'assets/villains/29_villain_dollar_action_coinaverse.png',
  villain_penny:  'assets/villains/30_villain_penny_action_coinaverse.png',
  
  // Tutorial
  tut_earn:    'assets/tutorials/31_tutorial_earn_scene.jpeg',
  tut_save:    'assets/tutorials/32_tutorial_save_scene.jpeg',
  tut_invest:  'assets/tutorials/33_tutorial_invest_scene.jpeg',
  tut_credit:  'assets/tutorials/34_tutorial_credit_scene.jpeg',
  
  // Avatars
  avatar_strategist: 'assets/avatars/35_avatar_starter_strategist.png',
  avatar_builder:    'assets/avatars/36_avatar_starter_builder.png',
  avatar_investor:   'assets/avatars/37_avatar_starter_investor.png',
  avatar_guardian:   'assets/avatars/38_avatar_starter_guardian.png',
  avatar_risktaker:  'assets/avatars/39_avatar_starter_risktaker.png',
  avatar_rebuilder:  'assets/avatars/40_avatar_starter_rebuilder.png',
  
  // Heroes
  hero_victory:    'assets/characters/66_hero_victory_pose.jpeg',
  hero_thinking:   'assets/characters/67_hero_thinking_pose.png',
  hero_running:    'assets/characters/68_hero_running_pose.png',
  hero_defending:  'assets/characters/69_hero_defending_pose.png',
  
  // Events
  event_warriors:     'assets/events/41_event_wealth_warriors.jpeg',
  event_entrepreneur: 'assets/events/42_event_entrepreneur_challenge.jpeg',
  event_stock:        'assets/events/43_event_stock_market_frenzy.jpeg',
  event_champion:     'assets/events/44_event_coinaverse_championship.jpeg',
  event_survival:     'assets/events/45_event_financial_survival.jpeg',
};

// ──────── ARCHETYPE DATA ────────
const ARCHETYPES = {
  strategist: {
    id: 'strategist',
    name: 'The Strategist',
    tagline: 'Master Planner',
    desc: 'Master planner. Budgeting, efficiency & smart decisions.',
    card: ASSETS.card_strategist,
    avatar: ASSETS.avatar_strategist,
    world: 'budgetron',
    orbLine: 'Smart move. Strategists see ten moves ahead.',
    color: '#3B82F6'
  },
  builder: {
    id: 'builder',
    name: 'The Builder',
    tagline: 'Empire Creator',
    desc: 'Creative entrepreneur. Builds businesses & opportunities.',
    card: ASSETS.card_builder,
    avatar: ASSETS.avatar_builder,
    world: 'launchlab',
    orbLine: 'Builders shape worlds. Welcome aboard.',
    color: '#F97316'
  },
  investor: {
    id: 'investor',
    name: 'The Investor',
    tagline: 'Long Game Player',
    desc: 'Long-term thinker. Grows wealth and assets.',
    card: ASSETS.card_investor,
    avatar: ASSETS.avatar_investor,
    world: 'investopia',
    orbLine: 'Investors play the long game. Welcome aboard.',
    color: '#10B981'
  },
  guardian: {
    id: 'guardian',
    name: 'The Guardian',
    tagline: 'Wealth Protector',
    desc: 'Protector. Savings, stability & financial security.',
    card: ASSETS.card_guardian,
    avatar: ASSETS.avatar_guardian,
    world: 'savescape',
    orbLine: 'Guardians protect what matters. Including their own future.',
    color: '#06B6D4'
  },
  risktaker: {
    id: 'risktaker',
    name: 'The Risk Taker',
    tagline: 'High Stakes Player',
    desc: 'High-risk/high-reward. Fast-moving, bold plays.',
    card: ASSETS.card_risktaker,
    avatar: ASSETS.avatar_risktaker,
    world: 'bitstream',
    orbLine: 'Bold pick. Risk takers find what others miss.',
    color: '#EF4444'
  },
  rebuilder: {
    id: 'rebuilder',
    name: 'The Rebuilder',
    tagline: 'Phoenix Spirit',
    desc: 'Resilient player. Overcomes setbacks & rebuilds success.',
    card: ASSETS.card_rebuilder,
    avatar: ASSETS.avatar_rebuilder,
    world: 'debtdetox',
    orbLine: 'Rebuilders rise stronger. Your story starts now.',
    color: '#A855F7'
  }
};

// ──────── WORLDS DATA ────────
const WORLDS = {
  budgetron: { name: 'BUDGETRON BASE', desc: 'Strategy command center', img: ASSETS.world_budgetron, color: '#3B82F6' },
  launchlab: { name: 'LAUNCH LAB REALM', desc: 'Entrepreneur city', img: ASSETS.world_launchlab, color: '#F97316' },
  investopia: { name: 'INVESTOPIA', desc: 'Wealth-growing world', img: ASSETS.world_investopia, color: '#10B981' },
  savescape: { name: 'SAVESCAPE ORBIT', desc: 'Protective fortress orbit', img: ASSETS.world_savescape, color: '#06B6D4' },
  bitstream: { name: 'BITSTREAM VALLEY', desc: 'High-volatility valley', img: ASSETS.world_bitstream, color: '#EF4444' },
  debtdetox: { name: 'DEBT DETOX DISTRICT', desc: 'Recovery & rebuild zone', img: ASSETS.world_debtdetox, color: '#A855F7' },
  credtech:  { name: 'CREDTECH GALAXY',  desc: 'Universal credit cosmos', img: ASSETS.world_credtech, color: '#FFB300', universal: true }
};

// ──────── STATE ────────
let state = {
  currentScreen: 'splash',
  username: 'Player',
  archetype: null,
  hubWorld: null,
  xp: 0,
  level: 1,
  credScore: 350,
  coins: 100,
  badges: 1,
  unlockedWorlds: [],
};

// ──────── ROUTES (for dev nav) ────────
const ROUTES = [
  ['splash',          '01 · Splash'],
  ['ai_welcome',      '02 · ORB Welcome'],
  ['signup',          '03 · Sign In'],
  ['parent_verify',   '04 · Parent Gate'],
  ['portal_enter',    '05 · Portal Open'],
  ['archetype_pick',  '06 · Pick Identity'],
  ['archetype_confirm','07 · Confirm Aura'],
  ['avatar_custom',   '08 · Avatar Setup'],
  ['hub_assignment',  '09 · Hub Reveal'],
  ['tutorial',        '10 · Tutorial'],
  ['reward_levelup',  '11 · Level Up'],
  ['central_hub',     '12 · Central Hub'],
  ['world_view',      '13 · World View'],
  ['live_events',     '14 · Live Events'],
  ['marketplace_view','15 · Marketplace'],
  ['leaderboard',     '16 · Leaderboards'],
  ['parent_dashboard','17 · Parent Panel'],
  ['boss_battle',     '18 · Boss Battle'],
  ['cred_score_view', '19 · Cred Score'],
  ['profile',         '20 · Profile'],
  ['empty_state',     '21 · Empty State'],
];

// ──────── ROUTING ────────
function goTo(screen, delay = 0) {
  setTimeout(() => {
    state.currentScreen = screen;
    render();
    document.querySelector('.phone-frame')?.scrollTo(0,0);
  }, delay);
}

function showModal(html, autoClose = false) {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `<div class="modal-content">${html}</div>`;
  overlay.classList.add('active');
  if (autoClose) setTimeout(() => closeModal(), autoClose);
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

function showBurst(asset = ASSETS.levelup_burst, duration = 1500) {
  const el = document.createElement('div');
  el.className = 'fx-burst';
  el.innerHTML = `<img src="${asset}" alt="">`;
  document.querySelector('.phone-frame').appendChild(el);
  setTimeout(() => el.remove(), duration);
}

// ──────── ORB DIALOGUE COMPONENT ────────
function orbBubble(text, pose = 'welcome') {
  const poseMap = {
    welcome: ASSETS.orb_welcome,
    explain: ASSETS.orb_explain,
    celebrate: ASSETS.orb_celebrate,
    hero: ASSETS.orb_hero,
    shrug: ASSETS.orb_shrug,
  };
  return `
    <div class="orb-dialogue">
      <img class="orb-avatar" src="${poseMap[pose] || poseMap.welcome}" alt="ORB">
      <div class="orb-bubble">
        <div class="speaker">ORB · AI GUIDE</div>
        ${text}
      </div>
    </div>
  `;
}

// ──────── HEADER COMPONENT ────────
function header(showStats = true) {
  if (!showStats) return `<div class="header"><span class="logo-wordmark">COINAVERSE</span></div>`;
  return `
    <div class="header">
      <span class="logo-wordmark" style="font-size:1.2rem">COINAVERSE</span>
      <div class="header-stats">
        <div class="stat-pill gold"><img src="${ASSETS.xp_coin}" alt="">${state.coins}</div>
        <div class="stat-pill"><span>⚡</span>LVL ${state.level}</div>
        <div class="stat-pill purple"><span>💎</span>${state.credScore}</div>
      </div>
    </div>
  `;
}

// ──────── BOTTOM NAV ────────
function bottomNav(active) {
  return `
    <div class="bottom-nav">
      <div class="nav-item ${active === 'home' ? 'active' : ''}" onclick="goTo('central_hub')">
        <div class="icon">🌀</div><span>HUB</span>
      </div>
      <div class="nav-item ${active === 'events' ? 'active' : ''}" onclick="goTo('live_events')">
        <div class="icon">⚡</div><span>EVENTS</span>
      </div>
      <div class="nav-item ${active === 'boss' ? 'active' : ''}" onclick="goTo('boss_battle')">
        <div class="icon">⚔️</div><span>MISSIONS</span>
      </div>
      <div class="nav-item ${active === 'cred' ? 'active' : ''}" onclick="goTo('cred_score_view')">
        <div class="icon">💎</div><span>CRED</span>
      </div>
      <div class="nav-item ${active === 'profile' ? 'active' : ''}" onclick="goTo('profile')">
        <div class="icon">👤</div><span>YOU</span>
      </div>
    </div>
  `;
}

// ──────── SCREEN: 01 SPLASH ────────
const SCREENS = {};

SCREENS.splash = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.splash_port}')">
    <div class="splash-container">
      <div style="flex:1"></div>
      <div class="splash-logo">COINAVERSE</div>
      <div class="splash-tagline">THE FUTURE OF FINANCIAL LITERACY</div>
      <div class="splash-tagline" style="color:var(--gold-glow); margin-top:4px;">NOT SCHOOL. NOT HOMEWORK. A WORLD.</div>
      <div style="flex:1"></div>
      <button class="btn btn-primary btn-large" onclick="goTo('ai_welcome')">
        ENTER THE COINAVERSE
      </button>
      <div class="splash-tagline mt-md" style="font-size:0.7rem">Tap to begin</div>
    </div>
  </div>
`;

// ──────── SCREEN: 02 AI WELCOME ────────
SCREENS.ai_welcome = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.splash_logobg}')">
    ${header(false)}
    <div class="content" style="padding:var(--space-md);display:flex;flex-direction:column;justify-content:center">
      <div style="text-align:center;padding:var(--space-xl) var(--space-md)">
        <img src="${ASSETS.orb_hero}" alt="ORB" style="width:240px;margin:0 auto;filter:drop-shadow(0 0 40px rgba(0,229,255,0.6));animation:orbFloat 3s ease-in-out infinite">
        <h1 style="font-family:var(--font-display);font-size:1.8rem;margin-top:var(--space-md);background:linear-gradient(135deg,var(--cyan),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">MEET ORB</h1>
        <div class="splash-tagline">YOUR AI FINANCIAL GUIDE</div>
      </div>
    </div>
    ${orbBubble(`Welcome to the Coinaverse. Every choice shapes your financial future. This isn't a game — it's a world. <strong>Yours.</strong>`, 'welcome')}
    <div style="padding:0 var(--space-lg) var(--space-lg)">
      <button class="btn btn-primary btn-full btn-large" onclick="goTo('signup')">CONTINUE</button>
    </div>
  </div>
`;

// ──────── SCREEN: 03 SIGN UP ────────
SCREENS.signup = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.signin_term}')">
    ${header(false)}
    <div class="content" style="padding:var(--space-lg);display:flex;flex-direction:column;justify-content:center">
      <div class="card">
        <h2 style="font-family:var(--font-display);font-size:1.5rem;text-align:center;margin-bottom:var(--space-lg)">CREATE YOUR IDENTITY</h2>
        <input class="input mb-md" type="text" placeholder="Choose a username" id="username-input" value="${state.username !== 'Player' ? state.username : ''}">
        <input class="input mb-md" type="email" placeholder="Parent email (for safety)">
        <button class="btn btn-primary btn-full" onclick="handleSignup()">CREATE ACCOUNT</button>
        <div class="text-muted center mt-md" style="font-size:0.8rem">— or continue with —</div>
        <div class="flex gap-md mt-md">
          <button class="btn btn-secondary" style="flex:1" onclick="handleSignup()">🍎 Apple</button>
          <button class="btn btn-secondary" style="flex:1" onclick="handleSignup()">🇬 Google</button>
        </div>
        <button class="btn btn-secondary btn-full mt-md" onclick="handleSignup()" style="font-size:0.8rem;padding:10px">Continue as Guest</button>
      </div>
      <div class="flex items-center gap-md mt-lg" style="padding:0 var(--space-sm)">
        <img src="${ASSETS.shield_badge}" alt="" style="width:32px">
        <div style="font-size:0.75rem;color:var(--text-secondary)">COPPA compliant · Parent-supervised · Encrypted</div>
      </div>
    </div>
  </div>
`;

window.handleSignup = function() {
  const input = document.getElementById('username-input');
  state.username = input?.value || 'Player';
  goTo('parent_verify');
};

// ──────── SCREEN: 04 PARENT VERIFY ────────
SCREENS.parent_verify = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.parent_verify_scene}')">
    ${header(false)}
    <div class="content" style="padding:var(--space-lg);display:flex;flex-direction:column;justify-content:center">
      <div class="card">
        <div class="center mb-md">
          <img src="${ASSETS.shield_badge}" alt="" style="width:80px;margin:0 auto;filter:drop-shadow(0 0 16px rgba(0,229,255,0.5))">
        </div>
        <h2 style="font-family:var(--font-display);font-size:1.3rem;text-align:center">PARENT PERMISSION</h2>
        <p class="text-secondary center mt-md" style="font-size:0.9rem">A verification email has been sent. Coinaverse requires parent approval for players under 13.</p>
        <div class="card mt-md" style="padding:var(--space-md);background:rgba(0,229,255,0.06)">
          <div style="font-family:var(--font-display);font-size:0.75rem;color:var(--cyan);letter-spacing:0.1em">SAFETY FEATURES</div>
          <ul style="margin-top:var(--space-sm);font-size:0.85rem;color:var(--text-secondary);line-height:1.6;list-style:none;padding-left:0">
            <li>✓ Moderated communication</li>
            <li>✓ Safe multiplayer systems</li>
            <li>✓ No real-money transactions</li>
            <li>✓ Parent dashboard included</li>
          </ul>
        </div>
        <button class="btn btn-primary btn-full mt-lg" onclick="goTo('portal_enter')">VERIFIED · CONTINUE</button>
      </div>
    </div>
  </div>
`;

// ──────── SCREEN: 05 PORTAL ENTER ────────
SCREENS.portal_enter = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.portal_giant}')">
    <div class="portal-stage" style="z-index:2">
      <div style="text-align:center;padding:var(--space-xl)">
        <div style="font-family:var(--font-display);font-size:0.85rem;letter-spacing:0.3em;color:var(--cyan);margin-bottom:var(--space-md)">PORTAL OPENING</div>
        <h1 style="font-family:var(--font-display);font-size:2.2rem;background:linear-gradient(135deg,var(--cyan),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;">DISCOVER<br>WHO YOU ARE</h1>
      </div>
    </div>
    ${orbBubble(`Now it's time to discover who you are in the Coinaverse. Step through the portal, <strong>${state.username}</strong>.`, 'explain')}
    <div style="padding:0 var(--space-lg) var(--space-lg);position:relative;z-index:2">
      <button class="btn btn-gold btn-full btn-large" onclick="goTo('archetype_pick')">ENTER PORTAL ⟶</button>
    </div>
  </div>
`;

// ──────── SCREEN: 06 ARCHETYPE PICK ────────
SCREENS.archetype_pick = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.archetype_chamber}')">
    ${header(false)}
    <div class="content">
      <div class="section-title">
        <div>
          <h2>CHOOSE YOUR IDENTITY</h2>
          <div class="text-secondary mt-sm" style="font-size:0.85rem">Pick the financial archetype that shapes your journey</div>
        </div>
      </div>
      <div class="archetype-grid">
        ${Object.values(ARCHETYPES).map(a => `
          <div class="archetype-card ${state.archetype === a.id ? 'selected' : ''}" onclick="selectArchetype('${a.id}')">
            <img src="${a.card}" alt="${a.name}">
            <div class="archetype-card-info">
              <h3 style="color:${a.color}">${a.name}</h3>
              <p>${a.tagline}</p>
            </div>
          </div>
        `).join('')}
      </div>
      ${state.archetype ? `
        <div style="padding:var(--space-lg)">
          <button class="btn btn-gold btn-full btn-large" onclick="confirmArchetype()">
            CONFIRM IDENTITY ⟶
          </button>
        </div>
      ` : ''}
    </div>
  </div>
`;

window.selectArchetype = function(id) {
  state.archetype = id;
  render();
};
window.confirmArchetype = function() {
  showBurst(ASSETS.levelup_burst, 1500);
  goTo('archetype_confirm', 600);
};

// ──────── SCREEN: 07 ARCHETYPE CONFIRM ────────
SCREENS.archetype_confirm = () => {
  const a = ARCHETYPES[state.archetype];
  return `
    <div class="screen active bg-image" style="background-image: url('${ASSETS.archetype_chamber}')">
      ${header(false)}
      <div class="content" style="display:flex;flex-direction:column;justify-content:center;padding:var(--space-lg)">
        <div class="center">
          <div style="font-family:var(--font-display);letter-spacing:0.2em;color:${a.color};font-size:0.85rem">YOU ARE</div>
          <h1 style="font-family:var(--font-display);font-size:2rem;color:${a.color};margin-top:var(--space-sm);filter:drop-shadow(0 0 20px ${a.color}80)">${a.name.toUpperCase()}</h1>
          <div class="text-secondary mt-sm" style="font-size:0.9rem">${a.tagline}</div>
        </div>
        <div class="card mt-lg" style="border-color:${a.color}50;box-shadow:0 0 24px ${a.color}40">
          <p style="line-height:1.5">${a.desc}</p>
          <div class="mt-md" style="padding-top:var(--space-md);border-top:1px solid ${a.color}40">
            <div style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.15em;color:${a.color}">YOUR HUB WORLD</div>
            <div style="font-family:var(--font-display);font-size:1.1rem;margin-top:4px">${WORLDS[a.world].name}</div>
          </div>
        </div>
      </div>
      ${orbBubble(`<strong>${a.orbLine}</strong>`, 'celebrate')}
      <div style="padding:0 var(--space-lg) var(--space-lg)">
        <button class="btn btn-primary btn-full btn-large" onclick="goTo('avatar_custom')">CUSTOMIZE AVATAR ⟶</button>
      </div>
    </div>
  `;
};

// ──────── SCREEN: 08 AVATAR CUSTOM ────────
SCREENS.avatar_custom = () => {
  const a = ARCHETYPES[state.archetype];
  return `
    <div class="screen active bg-image" style="background-image: url('${ASSETS.avatar_studio}')">
      ${header(false)}
      <div class="content">
        <div class="section-title">
          <div>
            <h2>YOUR AVATAR</h2>
            <div class="text-secondary mt-sm" style="font-size:0.85rem">${a.tagline} starter outfit equipped</div>
          </div>
        </div>
        <div class="avatar-stage">
          <div class="avatar-display">
            <img src="${a.avatar}" alt="">
          </div>
          <div class="avatar-platform"></div>
        </div>
        <div class="quick-actions" style="padding:var(--space-lg)">
          <div class="quick-action"><span style="font-size:1.4rem">👤</span><span>FACE</span></div>
          <div class="quick-action"><span style="font-size:1.4rem">💇</span><span>HAIR</span></div>
          <div class="quick-action"><span style="font-size:1.4rem">👕</span><span>OUTFIT</span></div>
          <div class="quick-action"><span style="font-size:1.4rem">⚡</span><span>EMOTE</span></div>
        </div>
      </div>
      <div style="padding:0 var(--space-lg) var(--space-lg)">
        <button class="btn btn-primary btn-full btn-large" onclick="goTo('hub_assignment')">LOCK IN AVATAR ⟶</button>
      </div>
    </div>
  `;
};

// ──────── SCREEN: 09 HUB ASSIGNMENT ────────
SCREENS.hub_assignment = () => {
  const a = ARCHETYPES[state.archetype];
  const w = WORLDS[a.world];
  state.hubWorld = a.world;
  state.unlockedWorlds = [a.world];
  return `
    <div class="screen active bg-image" style="background-image: url('${w.img}')">
      ${header(false)}
      <div class="content" style="display:flex;flex-direction:column;justify-content:flex-end;padding:var(--space-lg)">
        <div class="card" style="border-color:${a.color}80">
          <div style="font-family:var(--font-display);letter-spacing:0.2em;color:${a.color};font-size:0.75rem">WELCOME TO YOUR HUB</div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;margin-top:var(--space-sm)">${w.name}</h1>
          <p class="text-secondary mt-sm">${w.desc}</p>
        </div>
      </div>
      ${orbBubble(`Your starter world is <strong>${w.name}</strong>. Master this zone, then unlock the rest of the Coinaverse.`, 'explain')}
      <div style="padding:0 var(--space-lg) var(--space-lg)">
        <button class="btn btn-gold btn-full btn-large" onclick="goTo('tutorial')">START FIRST MISSION ⟶</button>
      </div>
    </div>
  `;
};

// ──────── SCREEN: 10 TUTORIAL ────────
let tutorialStep = 0;
const TUTORIAL_STEPS = [
  { img: ASSETS.tut_earn,   title: 'EARN', desc: 'Complete missions to earn coins. Every action has value.' },
  { img: ASSETS.tut_save,   title: 'SAVE', desc: 'Deposit into your vault. Compound returns over time.' },
  { img: ASSETS.tut_invest, title: 'INVEST', desc: 'Plant coin seeds in Investopia. Grow your future.' },
  { img: ASSETS.tut_credit, title: 'CRED SCORE', desc: 'Build your reputation. Unlock bigger opportunities.' },
];

SCREENS.tutorial = () => {
  const step = TUTORIAL_STEPS[tutorialStep];
  return `
    <div class="screen active" style="background:var(--bg-deep)">
      ${header()}
      <div class="content">
        <div class="section-title">
          <div>
            <h2>FIRST MISSION</h2>
            <div class="text-secondary mt-sm" style="font-size:0.85rem">Step ${tutorialStep + 1} of ${TUTORIAL_STEPS.length}</div>
          </div>
        </div>
        <div style="padding:0 var(--space-md)">
          <div style="position:relative;border-radius:var(--r-lg);overflow:hidden;aspect-ratio:16/9">
            <img src="${step.img}" alt="" style="width:100%;height:100%;object-fit:cover">
          </div>
        </div>
        <div class="card" style="margin:var(--space-md);text-align:center">
          <div style="font-family:var(--font-display);font-size:0.8rem;letter-spacing:0.2em;color:var(--cyan)">LESSON ${tutorialStep + 1}</div>
          <h2 style="font-family:var(--font-display);font-size:1.5rem;margin-top:var(--space-sm)">${step.title}</h2>
          <p class="text-secondary mt-sm">${step.desc}</p>
        </div>
        <div style="display:flex;gap:8px;justify-content:center;padding:var(--space-md)">
          ${TUTORIAL_STEPS.map((_, i) => `
            <div style="width:${i === tutorialStep ? '32px' : '8px'};height:8px;border-radius:4px;background:${i === tutorialStep ? 'var(--cyan)' : 'rgba(255,255,255,0.2)'};transition:all 0.3s"></div>
          `).join('')}
        </div>
      </div>
      <div style="padding:0 var(--space-lg) var(--space-lg)">
        <button class="btn btn-primary btn-full btn-large" onclick="nextTutorialStep()">
          ${tutorialStep < TUTORIAL_STEPS.length - 1 ? 'NEXT ⟶' : 'COMPLETE MISSION ⟶'}
        </button>
      </div>
    </div>
  `;
};

window.nextTutorialStep = function() {
  if (tutorialStep < TUTORIAL_STEPS.length - 1) {
    tutorialStep++;
    render();
  } else {
    state.xp += 100;
    state.coins += 250;
    state.credScore += 50;
    state.level = 2;
    state.badges = 1;
    goTo('reward_levelup');
  }
};

// ──────── SCREEN: 11 REWARD / LEVEL UP ────────
SCREENS.reward_levelup = () => `
  <div class="screen active" style="background:radial-gradient(circle at center, rgba(255,179,0,0.15) 0%, var(--bg-deep) 70%)">
    <div class="content" style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:var(--space-xl);text-align:center">
      <div style="position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center">
        <img src="${ASSETS.chest_open}" alt="" style="width:200px;filter:drop-shadow(0 0 32px rgba(255,179,0,0.7));animation:bobUp 2s ease-in-out infinite">
      </div>
      <div style="font-family:var(--font-display);letter-spacing:0.3em;color:var(--gold-glow);font-size:0.9rem;margin-top:var(--space-md)">MISSION COMPLETE</div>
      <h1 style="font-family:var(--font-display);font-size:2.5rem;background:linear-gradient(135deg,var(--gold-glow),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-top:var(--space-sm)">LEVEL UP!</h1>
      <div style="font-family:var(--font-display);font-size:1.8rem;color:var(--cyan);margin-top:var(--space-sm)">LVL ${state.level - 1} → <span style="color:var(--gold-glow)">LVL ${state.level}</span></div>
      <div class="card mt-lg" style="width:100%;max-width:320px">
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          <div class="flex items-center gap-md">
            <img src="${ASSETS.xp_coin}" alt="" style="width:40px">
            <div style="flex:1;text-align:left">
              <div style="font-family:var(--font-display);font-size:0.75rem;color:var(--text-muted)">+ COINS EARNED</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--gold-glow)">+250</div>
            </div>
          </div>
          <div class="flex items-center gap-md">
            <img src="${ASSETS.first_badge}" alt="" style="width:40px">
            <div style="flex:1;text-align:left">
              <div style="font-family:var(--font-display);font-size:0.75rem;color:var(--text-muted)">BADGE UNLOCKED</div>
              <div style="font-size:1rem;font-weight:700">First Steps</div>
            </div>
          </div>
          <div class="flex items-center gap-md">
            <span style="font-size:2rem">💎</span>
            <div style="flex:1;text-align:left">
              <div style="font-family:var(--font-display);font-size:0.75rem;color:var(--text-muted)">CRED SCORE</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--purple-glow)">+50 → ${state.credScore}</div>
            </div>
          </div>
        </div>
      </div>
      ${orbBubble(`Earned it. That's the only kind of reward worth having.`, 'celebrate')}
    </div>
    <div style="padding:0 var(--space-lg) var(--space-lg)">
      <button class="btn btn-gold btn-full btn-large" onclick="goTo('central_hub')">ENTER CENTRAL HUB ⟶</button>
    </div>
  </div>
`;

// ──────── SCREEN: 12 CENTRAL HUB ────────
SCREENS.central_hub = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.central_hub}')">
    ${header()}
    <div class="content">
      <div class="section-title">
        <div>
          <h2>COINAVERSE HUB</h2>
          <div class="text-secondary mt-sm" style="font-size:0.85rem">${state.username} · ${ARCHETYPES[state.archetype]?.name || 'Player'}</div>
        </div>
      </div>
      
      <!-- Daily login banner -->
      <div class="card" style="margin:0 var(--space-md);padding:var(--space-md);display:flex;align-items:center;gap:var(--space-md);cursor:pointer;border-color:var(--gold-glow)" onclick="showDailyLogin()">
        <img src="${ASSETS.streak_flame}" alt="" style="width:48px">
        <div style="flex:1">
          <div style="font-family:var(--font-display);font-size:0.85rem;color:var(--gold-glow)">DAILY STREAK · DAY 3</div>
          <div class="text-secondary" style="font-size:0.8rem">Tap to claim reward</div>
        </div>
        <span style="color:var(--gold-glow)">⟶</span>
      </div>
      
      <!-- Worlds grid -->
      <div class="section-title mt-md">
        <h2>EXPLORE WORLDS</h2>
        <div class="sub">${state.unlockedWorlds.length} / 7 unlocked</div>
      </div>
      <div class="zone-grid">
        ${Object.entries(WORLDS).map(([id, w]) => {
          const isUnlocked = state.unlockedWorlds.includes(id) || id === state.hubWorld;
          const isCredtech = id === 'credtech';
          return `
            <div class="world-portal ${!isUnlocked && !isCredtech ? 'locked' : ''}" onclick="${isUnlocked || isCredtech ? `viewWorld('${id}')` : ''}">
              <img src="${w.img}" alt="${w.name}">
              <div class="world-portal-info">
                <h3 style="color:${w.color}">${w.name}</h3>
                <p>${w.desc}${isCredtech ? ' · UNIVERSAL' : ''}</p>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <!-- Quick action tiles -->
      <div class="section-title mt-md">
        <h2>QUICK ACTIONS</h2>
      </div>
      <div class="quick-actions" style="padding:0 var(--space-md) var(--space-md)">
        <div class="quick-action" onclick="goTo('boss_battle')">
          <img src="${ASSETS.villain_rat}" alt="" style="width:48px;height:48px;object-fit:cover;border-radius:8px">
          <span>BOSS</span>
        </div>
        <div class="quick-action" onclick="goTo('marketplace_view')">
          <span style="font-size:1.8rem">🛒</span><span>SHOP</span>
        </div>
        <div class="quick-action" onclick="goTo('leaderboard')">
          <img src="${ASSETS.first_badge}" alt="" style="width:48px;height:48px;object-fit:contain">
          <span>RANKS</span>
        </div>
        <div class="quick-action" onclick="goTo('live_events')">
          <span style="font-size:1.8rem">⚡</span><span>EVENTS</span>
        </div>
      </div>
    </div>
    ${bottomNav('home')}
  </div>
`;

window.viewWorld = function(id) {
  state.viewingWorld = id;
  goTo('world_view');
};
window.showDailyLogin = function() {
  showModal(`
    <img src="${ASSETS.daily_card}" class="modal-img" style="width:280px">
    <div class="modal-title" style="color:var(--gold-glow)">DAILY REWARD</div>
    <div class="modal-desc">Day 3 streak. +75 coins + bonus chest.</div>
    <button class="btn btn-gold btn-full" onclick="claimDaily()">CLAIM ⟶</button>
  `);
};
window.claimDaily = function() {
  state.coins += 75;
  closeModal();
  showBurst(ASSETS.levelup_burst, 1200);
  setTimeout(render, 800);
};

// ──────── SCREEN: 13 WORLD VIEW (detail) ────────
SCREENS.world_view = () => {
  const w = WORLDS[state.viewingWorld || 'investopia'];
  return `
    <div class="screen active bg-image" style="background-image: url('${w.img}')">
      <button class="back-btn" onclick="goTo('central_hub')">←</button>
      <div class="content" style="display:flex;flex-direction:column;justify-content:flex-end">
        <div class="card" style="margin:var(--space-md);border-color:${w.color}80;box-shadow:0 0 24px ${w.color}40">
          <div style="font-family:var(--font-display);letter-spacing:0.2em;color:${w.color};font-size:0.75rem">WORLD</div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;margin-top:var(--space-sm)">${w.name}</h1>
          <p class="text-secondary mt-sm">${w.desc}</p>
          <div class="mt-md" style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-sm)">
            <div class="card" style="padding:var(--space-sm);text-align:center;border:none;background:rgba(0,229,255,0.08)">
              <div style="font-family:var(--font-display);font-size:1.2rem;color:var(--cyan)">12</div>
              <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">MISSIONS</div>
            </div>
            <div class="card" style="padding:var(--space-sm);text-align:center;border:none;background:rgba(255,179,0,0.08)">
              <div style="font-family:var(--font-display);font-size:1.2rem;color:var(--gold-glow)">5</div>
              <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">REWARDS</div>
            </div>
            <div class="card" style="padding:var(--space-sm);text-align:center;border:none;background:rgba(168,85,247,0.08)">
              <div style="font-family:var(--font-display);font-size:1.2rem;color:var(--purple-glow)">3</div>
              <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">BOSSES</div>
            </div>
          </div>
        </div>
        <div style="padding:0 var(--space-lg) var(--space-lg)">
          <button class="btn btn-primary btn-full btn-large" onclick="goTo('boss_battle')">ENTER WORLD ⟶</button>
        </div>
      </div>
    </div>
  `;
};

// ──────── SCREEN: 14 LIVE EVENTS ────────
const EVENTS_DATA = [
  { img: ASSETS.event_champion,     title: 'COINAVERSE CHAMPIONSHIP', sub: 'Annual global tournament', countdown: 'Ends in 3 days', color: '#FFB300' },
  { img: ASSETS.event_warriors,     title: 'WEALTH WARRIORS SEASON', sub: 'Competitive season-long', countdown: 'Day 12 of 30', color: '#EF4444' },
  { img: ASSETS.event_stock,        title: 'STOCK MARKET FRENZY',   sub: 'High-volatility event', countdown: 'Active · 4h left', color: '#10B981' },
  { img: ASSETS.event_entrepreneur, title: 'ENTREPRENEUR WEEK',     sub: 'Build a 7-day business', countdown: 'Starts tomorrow', color: '#F97316' },
  { img: ASSETS.event_survival,     title: 'FINANCIAL SURVIVAL',    sub: 'Limited-time stakes', countdown: 'Live Now', color: '#A855F7' },
];

SCREENS.live_events = () => `
  <div class="screen active" style="background:var(--bg-deep)">
    ${header()}
    <div class="content">
      <div class="section-title">
        <div>
          <h2>LIVE EVENTS</h2>
          <div class="text-secondary mt-sm" style="font-size:0.85rem">Limited-time challenges. Don't miss out.</div>
        </div>
      </div>
      ${EVENTS_DATA.map(e => `
        <div class="event-banner" onclick="showEventDetail('${e.title}')">
          <img src="${e.img}" alt="${e.title}">
          <div class="event-banner-overlay">
            <h3 style="color:${e.color}">${e.title}</h3>
            <div class="text-secondary" style="font-size:0.75rem">${e.sub}</div>
            <div class="countdown" style="color:${e.color}">⏱ ${e.countdown}</div>
          </div>
        </div>
      `).join('')}
    </div>
    ${bottomNav('events')}
  </div>
`;

window.showEventDetail = function(name) {
  showModal(`
    <div class="modal-title">${name}</div>
    <div class="modal-desc">Join this event to compete for exclusive rewards, badges, and Cred Score boosts.</div>
    <button class="btn btn-primary btn-full" onclick="joinEvent()">JOIN EVENT</button>
    <button class="btn btn-secondary btn-full mt-md" onclick="closeModal()">Maybe later</button>
  `);
};
window.joinEvent = function() {
  closeModal();
  state.credScore += 10;
  showBurst();
  setTimeout(render, 1000);
};

// ──────── SCREEN: 15 MARKETPLACE ────────
SCREENS.marketplace_view = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.marketplace}')">
    <button class="back-btn" onclick="goTo('central_hub')">←</button>
    ${header()}
    <div class="content">
      <div class="section-title">
        <h2>MARKETPLACE</h2>
      </div>
      <div style="padding:0 var(--space-md);display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md)">
        ${[
          { name: 'Cape · Gold Edition', cost: 250, img: ASSETS.hero_victory },
          { name: 'Boss Slayer Badge', cost: 500, img: ASSETS.first_badge },
          { name: 'Quest Booster Pack', cost: 150, img: ASSETS.quest_card },
          { name: 'Rare Chest', cost: 750, img: ASSETS.chest_closed },
        ].map(item => `
          <div class="card" style="padding:var(--space-md);text-align:center">
            <img src="${item.img}" alt="" style="width:80px;height:80px;margin:0 auto var(--space-sm);object-fit:contain">
            <div style="font-size:0.85rem;font-weight:600">${item.name}</div>
            <div class="flex items-center justify-center gap-md mt-sm" style="gap:4px">
              <img src="${ASSETS.xp_coin}" alt="" style="width:16px">
              <span style="font-family:var(--font-display);color:var(--gold-glow)">${item.cost}</span>
            </div>
            <button class="btn btn-secondary btn-full mt-md" style="font-size:0.75rem;padding:8px" onclick="purchaseItem('${item.name}', ${item.cost})">BUY</button>
          </div>
        `).join('')}
      </div>
    </div>
    ${bottomNav('home')}
  </div>
`;
window.purchaseItem = function(name, cost) {
  if (state.coins < cost) {
    showModal(`
      <img src="${ASSETS.orb_shrug}" class="modal-img" style="width:160px">
      <div class="modal-title">Not enough coins</div>
      <div class="modal-desc">Earn more by completing missions.</div>
      <button class="btn btn-primary btn-full" onclick="closeModal()">OK</button>
    `);
    return;
  }
  state.coins -= cost;
  showModal(`
    <img src="${ASSETS.chest_open}" class="modal-img" style="width:160px">
    <div class="modal-title">Purchased!</div>
    <div class="modal-desc">${name} added to your inventory.</div>
    <button class="btn btn-primary btn-full" onclick="closeModal()">SWEET</button>
  `);
  render();
};

// ──────── SCREEN: 16 LEADERBOARD ────────
SCREENS.leaderboard = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.leaderboard}')">
    <button class="back-btn" onclick="goTo('central_hub')">←</button>
    ${header()}
    <div class="content">
      <div class="section-title">
        <h2>LEADERBOARDS</h2>
      </div>
      <div class="card" style="margin:0 var(--space-md);padding:var(--space-md)">
        ${[
          { rank: 1, name: 'Alex_Strategist', cred: 850, color: '#FFB300' },
          { rank: 2, name: 'Bahati_Investor', cred: 820, color: '#C0C0C0' },
          { rank: 3, name: 'Maya_Builder', cred: 780, color: '#CD7F32' },
          { rank: 4, name: 'Zuna_Guardian', cred: 720, color: '#6B7BA8' },
          { rank: 5, name: state.username + ' (You)', cred: state.credScore, color: 'var(--cyan)', self: true },
        ].map(p => `
          <div class="flex items-center gap-md" style="padding:var(--space-sm) 0;border-bottom:1px solid rgba(255,255,255,0.05);${p.self ? 'background:rgba(0,229,255,0.08);margin:0 -16px;padding:8px 16px;border-radius:8px' : ''}">
            <div style="font-family:var(--font-display);font-size:1.4rem;color:${p.color};width:32px">${p.rank}</div>
            <div style="flex:1;font-weight:600">${p.name}</div>
            <div style="display:flex;align-items:center;gap:4px;color:var(--purple-glow);font-family:var(--font-display)">
              <span>💎</span>${p.cred}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${bottomNav('cred')}
  </div>
`;

// ──────── SCREEN: 17 PARENT DASHBOARD ────────
SCREENS.parent_dashboard = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.parent_dashboard}')">
    <button class="back-btn" onclick="goTo('central_hub')">←</button>
    <div class="content">
      <div class="section-title">
        <h2>PARENT DASHBOARD</h2>
      </div>
      <div class="card" style="margin:0 var(--space-md)">
        <h3 style="font-family:var(--font-display);font-size:1rem;letter-spacing:0.08em">${state.username}'s PROGRESS</h3>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:var(--space-md);margin-top:var(--space-md)">
          <div class="card" style="padding:var(--space-md);background:rgba(0,229,255,0.05)">
            <div style="font-size:0.7rem;color:var(--text-muted);letter-spacing:0.1em">SCREEN TIME TODAY</div>
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--cyan);margin-top:4px">28 min</div>
          </div>
          <div class="card" style="padding:var(--space-md);background:rgba(255,179,0,0.05)">
            <div style="font-size:0.7rem;color:var(--text-muted);letter-spacing:0.1em">CRED SCORE</div>
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--gold-glow);margin-top:4px">${state.credScore}</div>
          </div>
          <div class="card" style="padding:var(--space-md);background:rgba(168,85,247,0.05)">
            <div style="font-size:0.7rem;color:var(--text-muted);letter-spacing:0.1em">CONCEPTS MASTERED</div>
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--purple-glow);margin-top:4px">7 / 24</div>
          </div>
          <div class="card" style="padding:var(--space-md);background:rgba(0,200,83,0.05)">
            <div style="font-size:0.7rem;color:var(--text-muted);letter-spacing:0.1em">WEEKLY STREAK</div>
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--green-light);margin-top:4px">5 days</div>
          </div>
        </div>
      </div>
      <div class="card" style="margin:var(--space-md)">
        <h3 style="font-family:var(--font-display);font-size:1rem;letter-spacing:0.08em">FINANCIAL CONCEPTS LEARNED</h3>
        <div style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-sm)">
          ${[
            { skill: 'Budgeting Basics', pct: 85 },
            { skill: 'Saving Strategies', pct: 60 },
            { skill: 'Investing 101', pct: 35 },
            { skill: 'Credit Awareness', pct: 20 },
          ].map(s => `
            <div>
              <div class="flex justify-center" style="justify-content:space-between"><span style="font-size:0.85rem">${s.skill}</span><span style="font-size:0.85rem;color:var(--cyan)">${s.pct}%</span></div>
              <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin-top:4px">
                <div style="height:100%;width:${s.pct}%;background:linear-gradient(90deg,var(--cyan),var(--green-light));border-radius:3px"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="padding:0 var(--space-md) var(--space-md);display:flex;gap:var(--space-md)">
        <button class="btn btn-secondary" style="flex:1">Set Limits</button>
        <button class="btn btn-secondary" style="flex:1">Settings</button>
      </div>
    </div>
  </div>
`;

// ──────── SCREEN: 18 BOSS BATTLE ────────
const BOSSES = [
  { name: 'The Rat',       img: ASSETS.villain_rat,    teaches: 'Scam Awareness', color: '#EF4444' },
  { name: 'Dollar Phantom',img: ASSETS.villain_dollar, teaches: 'Predatory Lending', color: '#10B981' },
  { name: 'Madam Penny',   img: ASSETS.villain_penny,  teaches: 'Overspending Traps', color: '#A855F7' },
];

SCREENS.boss_battle = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.boss_arena}')">
    <button class="back-btn" onclick="goTo('central_hub')">←</button>
    ${header()}
    <div class="content">
      <div class="section-title">
        <h2>BOSS BATTLES</h2>
        <div class="sub">Defeat villains, master the lesson</div>
      </div>
      <div style="padding:0 var(--space-md);display:flex;flex-direction:column;gap:var(--space-md)">
        ${BOSSES.map(b => `
          <div class="card card-glow" style="display:flex;gap:var(--space-md);align-items:center;border-color:${b.color}80;padding:var(--space-md);cursor:pointer" onclick="engageBoss('${b.name}', '${b.color}')">
            <div style="width:100px;height:120px;border-radius:var(--r-md);overflow:hidden;background:rgba(0,0,0,0.4);flex-shrink:0">
              <img src="${b.img}" alt="" style="width:100%;height:100%;object-fit:cover">
            </div>
            <div style="flex:1">
              <div style="font-family:var(--font-display);font-size:0.7rem;letter-spacing:0.15em;color:${b.color}">VILLAIN</div>
              <h3 style="font-family:var(--font-display);font-size:1.2rem;margin-top:4px">${b.name}</h3>
              <div class="text-secondary mt-sm" style="font-size:0.8rem">Lesson: ${b.teaches}</div>
              <button class="btn btn-primary mt-sm" style="font-size:0.7rem;padding:8px 14px">ENGAGE ⟶</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${bottomNav('boss')}
  </div>
`;

window.engageBoss = function(name, color) {
  showModal(`
    <div style="font-family:var(--font-display);letter-spacing:0.2em;color:${color};font-size:0.85rem">BOSS BATTLE</div>
    <div class="modal-title" style="color:${color}">VS ${name.toUpperCase()}</div>
    <div class="modal-desc">Master this lesson to defeat the villain.</div>
    <button class="btn btn-primary btn-full" onclick="defeatBoss('${name}')">START BATTLE ⟶</button>
    <button class="btn btn-secondary btn-full mt-md" onclick="closeModal()">Back</button>
  `);
};
window.defeatBoss = function(name) {
  closeModal();
  state.xp += 200;
  state.coins += 500;
  state.credScore += 75;
  state.badges += 1;
  showBurst(ASSETS.unlock_doors, 1500);
  setTimeout(() => {
    showModal(`
      <img src="${ASSETS.chest_open}" class="modal-img" style="width:160px">
      <div class="modal-title">VICTORY!</div>
      <div class="modal-desc">${name} defeated. Lesson mastered. +500 coins, +75 Cred Score.</div>
      <button class="btn btn-gold btn-full" onclick="closeModal()">SWEET</button>
    `);
    render();
  }, 1500);
};

// ──────── SCREEN: 19 CRED SCORE VIEW ────────
SCREENS.cred_score_view = () => `
  <div class="screen active bg-image" style="background-image: url('${ASSETS.world_credtech}')">
    <button class="back-btn" onclick="goTo('central_hub')">←</button>
    <div class="content" style="display:flex;flex-direction:column">
      <div class="section-title">
        <h2>CRED SCORE</h2>
        <div class="sub">Your financial reputation</div>
      </div>
      <div style="display:flex;justify-content:center;padding:var(--space-lg)">
        <div class="cred-gauge" style="--cred-pct: ${Math.min(100, state.credScore / 10)}">
          <div class="cred-circle">
            <div style="position:relative;z-index:1;text-align:center">
              <div class="cred-value">${state.credScore}</div>
              <div class="cred-label">CRED SCORE</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card" style="margin:0 var(--space-md)">
        <div style="font-family:var(--font-display);font-size:0.75rem;color:var(--cyan);letter-spacing:0.15em">SCORE BREAKDOWN</div>
        <div style="margin-top:var(--space-md);display:flex;flex-direction:column;gap:var(--space-sm)">
          ${[
            { label: 'Payment History', pct: 90 },
            { label: 'Mission Completion', pct: 65 },
            { label: 'Streak Consistency', pct: 80 },
            { label: 'Boss Defeats', pct: 45 },
          ].map(s => `
            <div>
              <div style="display:flex;justify-content:space-between"><span style="font-size:0.85rem">${s.label}</span><span style="font-size:0.85rem;color:var(--purple-glow)">${s.pct}%</span></div>
              <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:3px;margin-top:4px">
                <div style="height:100%;width:${s.pct}%;background:linear-gradient(90deg,var(--purple),var(--gold-glow));border-radius:3px"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="card" style="margin:var(--space-md);background:rgba(255,179,0,0.06);border-color:var(--gold-glow)">
        <div style="display:flex;align-items:center;gap:var(--space-md)">
          <span style="font-size:2rem">💎</span>
          <div style="flex:1">
            <div style="font-family:var(--font-display);font-size:0.9rem">CredTech Galaxy</div>
            <div class="text-secondary" style="font-size:0.75rem">${state.credScore < 500 ? `Reach 500 to unlock (${500 - state.credScore} to go)` : 'UNLOCKED'}</div>
          </div>
        </div>
      </div>
    </div>
    ${bottomNav('cred')}
  </div>
`;

// ──────── SCREEN: 20 PROFILE ────────
SCREENS.profile = () => {
  const a = ARCHETYPES[state.archetype];
  return `
    <div class="screen active" style="background:var(--bg-deep)">
      ${header()}
      <div class="content">
        <div class="avatar-stage" style="padding:var(--space-xl) var(--space-lg) var(--space-md)">
          <div class="avatar-display" style="width:160px;height:220px">
            ${a ? `<img src="${a.avatar}" alt="">` : `<img src="${ASSETS.orb_hero}" alt="">`}
          </div>
          <div class="avatar-platform"></div>
          <h2 style="font-family:var(--font-display);font-size:1.5rem;margin-top:var(--space-md)">${state.username}</h2>
          <div style="font-family:var(--font-display);letter-spacing:0.15em;color:${a?.color || 'var(--cyan)'};font-size:0.8rem;margin-top:4px">${a ? a.name.toUpperCase() : 'NEW PLAYER'}</div>
        </div>
        
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-sm);padding:0 var(--space-md)">
          <div class="card" style="padding:var(--space-sm);text-align:center">
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--cyan)">${state.level}</div>
            <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">LEVEL</div>
          </div>
          <div class="card" style="padding:var(--space-sm);text-align:center">
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--gold-glow)">${state.coins}</div>
            <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">COINS</div>
          </div>
          <div class="card" style="padding:var(--space-sm);text-align:center">
            <div style="font-family:var(--font-display);font-size:1.4rem;color:var(--purple-glow)">${state.badges}</div>
            <div style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">BADGES</div>
          </div>
        </div>
        
        <div class="section-title">
          <h2>ACHIEVEMENTS</h2>
        </div>
        <div style="padding:0 var(--space-md);display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-sm)">
          ${[ASSETS.first_badge, ASSETS.shield_badge, ASSETS.first_badge, ASSETS.first_badge].map((img, i) => `
            <div style="aspect-ratio:1;border-radius:var(--r-md);background:rgba(0,229,255,0.05);border:1px solid rgba(0,229,255,0.2);display:flex;align-items:center;justify-content:center;${i >= state.badges ? 'opacity:0.3' : ''}">
              <img src="${img}" alt="" style="width:60%;height:60%;object-fit:contain;${i >= state.badges ? 'filter:grayscale(1)' : ''}">
            </div>
          `).join('')}
        </div>
        
        <div class="section-title">
          <h2>SETTINGS</h2>
        </div>
        <div style="padding:0 var(--space-md)">
          <button class="btn btn-secondary btn-full" onclick="goTo('parent_dashboard')">👨‍👩‍👧 Parent Dashboard</button>
          <button class="btn btn-secondary btn-full mt-md" onclick="goTo('splash')">↻ Reset Demo</button>
        </div>
      </div>
      ${bottomNav('profile')}
    </div>
  `;
};

// ──────── SCREEN: 21 EMPTY STATE ────────
SCREENS.empty_state = () => `
  <div class="screen active" style="background:var(--bg-deep)">
    ${header()}
    <div class="content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--space-xl);text-align:center">
      <img src="${ASSETS.orb_shrug}" alt="" style="width:240px;filter:drop-shadow(0 0 20px rgba(0,229,255,0.4))">
      <h2 style="font-family:var(--font-display);font-size:1.5rem;margin-top:var(--space-md)">NOTHING HERE YET</h2>
      <p class="text-secondary mt-sm">No content found. Try exploring elsewhere.</p>
      <button class="btn btn-primary mt-lg" onclick="goTo('central_hub')">Back to Hub</button>
    </div>
    ${bottomNav('home')}
  </div>
`;

// ──────── RENDER ────────
function render() {
  const root = document.getElementById('app-root');
  const screenFn = SCREENS[state.currentScreen];
  if (screenFn) {
    root.innerHTML = screenFn();
  } else {
    root.innerHTML = `<div class="screen active"><div class="content center" style="padding:var(--space-xl)"><h2>Screen "${state.currentScreen}" not found</h2><button class="btn btn-primary mt-md" onclick="goTo('splash')">Back to start</button></div></div>`;
  }
  renderDevNav();
}

// ──────── DEV NAV (collapsible) ────────
let devNavVisible = false;
function toggleDevNav() {
  devNavVisible = !devNavVisible;
  document.getElementById('dev-route-bar')?.classList.toggle('visible', devNavVisible);
}
window.toggleDevNav = toggleDevNav;

function renderDevNav() {
  let toggle = document.getElementById('dev-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'dev-toggle';
    toggle.className = 'dev-toggle';
    toggle.innerHTML = '☰';
    toggle.title = 'Dev Navigation';
    toggle.onclick = toggleDevNav;
    document.body.appendChild(toggle);
  }
  let bar = document.getElementById('dev-route-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'dev-route-bar';
    bar.className = 'dev-route-bar';
    document.body.appendChild(bar);
  }
  bar.innerHTML = `
    <div class="dev-title">⚡ NAVIGATE SCREENS</div>
    ${ROUTES.map(([id, label]) => `
      <button class="${state.currentScreen === id ? 'current' : ''}" onclick="goTo('${id}'); toggleDevNav();">${label}</button>
    `).join('')}
  `;
  if (devNavVisible) bar.classList.add('visible');
}

// ──────── INIT ────────
document.addEventListener('DOMContentLoaded', () => {
  render();
});

// Auto-init if DOMContentLoaded already fired
if (document.readyState === 'loading') {
  // wait
} else {
  setTimeout(() => render(), 50);
}
