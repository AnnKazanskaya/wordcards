// =========================================================
//  CONFIG
// =========================================================
const SUPABASE_URL = "https://mxysxubcklvjsgltogtp.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nLFuOAa_Wf2_zibgAk2KRQ_np2JfZv7";

const LEARNED_AT = 3;                 // слово "выучено" после 3 правильных подряд
const SRS_STEPS = [1, 3, 7, 14, 30, 60]; // через сколько дней повторять выученное
const DAY_MS = 86400000;

// =========================================================
//  Элементы
// =========================================================
const $ = (id) => document.getElementById(id);
const el = {
  notice: $("notice"), noticeText: $("noticeText"), noticeClose: $("noticeClose"),
  authScreen: $("authScreen"), appScreen: $("appScreen"),
  tabLogin: $("tabLogin"), tabRegister: $("tabRegister"),
  form: $("authForm"), email: $("email"), password: $("password"),
  submitBtn: $("submitBtn"), authMsg: $("authMsg"), forgotBtn: $("forgotBtn"), authTabs: document.querySelector(".tabs"),
  backBtn: $("backBtn"), viewTitle: $("viewTitle"), logoutBtn: $("logoutBtn"),
  soundBtn: $("soundBtn"), themeBtn: $("themeBtn"), tabbar: $("tabbar"),
  // home
  homeView: $("homeView"), streakFire: $("streakFire"), streakNum: $("streakNum"),
  streakLabel: $("streakLabel"), streakToday: $("streakToday"),
  reviewCta: $("reviewCta"), reviewCtaSub: $("reviewCtaSub"),
  homeTotal: $("homeTotal"), homeLearned: $("homeLearned"), homeInProgress: $("homeInProgress"),
  lastDeckCta: $("lastDeckCta"), lastDeckTitle: $("lastDeckTitle"), lastDeckSub: $("lastDeckSub"),
  homeReadCta: $("homeReadCta"), homeReadSub: $("homeReadSub"), homePacksCta: $("homePacksCta"),
  // decks / packs
  decksView: $("decksView"), decksList: $("decksList"),
  newDeckInput: $("newDeckInput"), newDeckBtn: $("newDeckBtn"), packsBtn: $("packsBtn"),
  packsView: $("packsView"), packsList: $("packsList"),
  // deck
  deckView: $("deckView"), cardsList: $("cardsList"), studyBtn: $("studyBtn"),
  deckActions: $("deckActions"), scopeSeg: $("scopeSeg"), quizBtn: $("quizBtn"),
  scrambleBtn: $("scrambleBtn"), matchBtn: $("matchBtn"),
  learnBtn: $("learnBtn"), writeBtn: $("writeBtn"),
  termInput: $("termInput"), defInput: $("defInput"), addCardBtn: $("addCardBtn"),
  batchBtn: $("batchBtn"), exportBtn: $("exportBtn"), dirSeg: $("dirSeg"),
  dictationBtn: $("dictationBtn"), pronBtn: $("pronBtn"),
  flashSub: $("flashSub"), flashHint: $("flashHint"), studyChoices: $("studyChoices"), introNext: $("introNext"),
  writeSide: $("writeSide"), writeSpeak: $("writeSpeak"),
  pronView: $("pronView"), pronPrompt: $("pronPrompt"), pronWord: $("pronWord"), pronDef: $("pronDef"),
  pronSpeak: $("pronSpeak"), pronMic: $("pronMic"), pronStatus: $("pronStatus"),
  pronOverride: $("pronOverride"), pronNext: $("pronNext"), pronProgress: $("pronProgress"),
  readSeg: $("readSeg"), readHint: $("readHint"), dialoguesList: $("dialoguesList"), booksList: $("booksList"),
  bookView: $("bookView"), bookCover: $("bookCover"), bookTitle: $("bookTitle"), bookAuthor: $("bookAuthor"),
  bookCredit: $("bookCredit"), bookChapters: $("bookChapters"), bookContinueBtn: $("bookContinueBtn"), readerCredit: $("readerCredit"),
  dialogueView: $("dialogueView"), chatWho: $("chatWho"), chatLog: $("chatLog"), chatOptions: $("chatOptions"),
  portionCta: $("portionCta"), portionSub: $("portionSub"), homeAchCta: $("homeAchCta"), homeAchSub: $("homeAchSub"),
  achGrid: $("achGrid"), achCount: $("achCount"),
  // read
  readView: $("readView"), storiesList: $("storiesList"),
  readerView: $("readerView"), readerTitle: $("readerTitle"), readerLevel: $("readerLevel"),
  readerText: $("readerText"), readerSpeakBtn: $("readerSpeakBtn"), readerTasksBtn: $("readerTasksBtn"),
  tasksView: $("tasksView"), taskPrompt: $("taskPrompt"), taskKind: $("taskKind"), taskText: $("taskText"),
  taskOptions: $("taskOptions"), taskFeedback: $("taskFeedback"), taskNext: $("taskNext"), taskProgress: $("taskProgress"),
  // stats
  statsView: $("statsView"), statsStreak: $("statsStreak"), statsBest: $("statsBest"), statsDays: $("statsDays"),
  heatmap: $("heatmap"), weekBars: $("weekBars"), statsTotal: $("statsTotal"), statsLearned: $("statsLearned"),
  statsAccuracy: $("statsAccuracy"), deckProgressList: $("deckProgressList"),
  // exercises
  writeView: $("writeView"), writeDef: $("writeDef"), writeInput: $("writeInput"), writePrompt: $("writePrompt"),
  writeFeedback: $("writeFeedback"), writeCheck: $("writeCheck"),
  writeOverride: $("writeOverride"), writeNext: $("writeNext"), writeProgress: $("writeProgress"),
  learnView: $("learnView"), learnSide: $("learnSide"), learnWord: $("learnWord"), learnPrompt: $("learnPrompt"),
  learnSpeak: $("learnSpeak"), learnOptions: $("learnOptions"), learnInput: $("learnInput"),
  learnFeedback: $("learnFeedback"), learnCheck: $("learnCheck"),
  learnOverride: $("learnOverride"), learnNext: $("learnNext"), learnProgress: $("learnProgress"),
  scrambleView: $("scrambleView"), scrambleHint: $("scrambleHint"), scramblePrompt: $("scramblePrompt"),
  answerSlots: $("answerSlots"), tilesArea: $("tilesArea"),
  scrambleClear: $("scrambleClear"), scrambleProgress: $("scrambleProgress"),
  scrambleCorrect: $("scrambleCorrect"), scrambleNext: $("scrambleNext"),
  matchView: $("matchView"), matchTimer: $("matchTimer"),
  matchGrid: $("matchGrid"), matchProgress: $("matchProgress"),
  resultView: $("resultView"), resultEmoji: $("resultEmoji"),
  resultStats: $("resultStats"), resultSub: $("resultSub"),
  reworkBtn: $("reworkBtn"), resultBackBtn: $("resultBackBtn"),
  studyView: $("studyView"), flashcard: $("flashcard"), flashSide: $("flashSide"),
  flashText: $("flashText"), speakBtn: $("speakBtn"),
  dontKnowBtn: $("dontKnowBtn"), knowBtn: $("knowBtn"), studyProgress: $("studyProgress"),
  quizView: $("quizView"), quizWord: $("quizWord"), quizSpeak: $("quizSpeak"), quizPrompt: $("quizPrompt"),
  quizOptions: $("quizOptions"), quizProgress: $("quizProgress"),
  // sheets
  overlay: $("overlay"),
  batchSheet: $("batchSheet"), batchText: $("batchText"), batchCount: $("batchCount"),
  batchAddBtn: $("batchAddBtn"), batchCloseBtn: $("batchCloseBtn"),
  exportSheet: $("exportSheet"), exportText: $("exportText"), exportCopyBtn: $("exportCopyBtn"), exportCloseBtn: $("exportCloseBtn"),
  wordSheet: $("wordSheet"), wsWord: $("wsWord"), wsSpeak: $("wsSpeak"), wsBase: $("wsBase"),
  wsTr: $("wsTr"), wsStatus: $("wsStatus"), wsAddBtn: $("wsAddBtn"), wsCloseBtn: $("wsCloseBtn"),
  pickSheet: $("pickSheet"), pickList: $("pickList"), pickNewInput: $("pickNewInput"),
  pickNewBtn: $("pickNewBtn"), pickCloseBtn: $("pickCloseBtn"),
  toast: $("toast"), confetti: $("confetti"), themeColorMeta: $("themeColorMeta"),
  selBar: $("selBar"), selText: $("selText"), selSpeak: $("selSpeak"), selTranslate: $("selTranslate"),
};

let mode = "login";
let client = null;
let user = null;

// app state
let currentView = "home";
let currentTab = "home";
let currentDeck = null;
let cards = [];          // слова открытого набора (или сессии повторения)
let decks = [];          // все наборы пользователя
let allCards = [];       // все слова пользователя (для главной, статистики, повторений)
let allCardsLoadedAt = 0;
let SRS_OK = false;      // в базе есть колонки повторений (migration.sql выполнена)
let LOG_OK = false;      // в базе есть таблица study_log

// study sessions
let session = { list: [], index: 0, flipped: false, correct: 0, missed: [] };
let scramble = { list: [], index: 0, score: 0, tiles: [], answer: [], display: "", targetLetters: "", locked: false, missed: [] };
let match = { items: [], selEl: null, matched: 0, total: 0, start: 0, timer: null, wrong: 0, missed: [] };
let write = { list: [], index: 0, score: 0, locked: false, missed: [] };
let learn = { list: [], index: 0, score: 0, locked: false, missed: [], mode: "choice" };
let quiz = { list: [], index: 0, score: 0, answered: false, missed: [] };
let lastResult = { type: null, missed: [] };

// =========================================================
//  Вспомогательное
// =========================================================
function toast(text) {
  el.toast.textContent = text;
  el.toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.toast.classList.remove("show"), 1800);
}

function speak(text) {
  if (!window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  const v = speechSynthesis.getVoices().find((v) => v.lang.startsWith("en"));
  if (v) u.voice = v;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function isLearned(card) { return card.correct_streak >= LEARNED_AT; }
function isDue(card) { return !!card.next_review_at && new Date(card.next_review_at) <= new Date(); }
function nextInterval(cur) { for (const s of SRS_STEPS) if (s > cur) return s; return SRS_STEPS[SRS_STEPS.length - 1]; }

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pop(node) { node.classList.remove("pop"); void node.offsetWidth; node.classList.add("pop"); }
function vibrate(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (_) {} }
function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}
function lsGet(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (_) { return fallback; } }
function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (_) {} }
function dayKey(d) {
  d = d || new Date();
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}
function shiftDay(key, delta) { const [y, m, d] = key.split("-").map(Number); return dayKey(new Date(y, m - 1, d + delta)); }

// =========================================================
//  Тема и звук
// =========================================================
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  el.themeBtn.textContent = t === "dark" ? "☀️" : "🌙";
  el.themeColorMeta.setAttribute("content", t === "dark" ? "#191a20" : "#4f46e5");
  lsSet("theme", t);
}
applyTheme(lsGet("theme", null) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
el.themeBtn.onclick = () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

let soundOn = lsGet("soundOn", true);
function renderSoundBtn() { el.soundBtn.textContent = soundOn ? "🔔" : "🔕"; }
renderSoundBtn();
el.soundBtn.onclick = () => { soundOn = !soundOn; lsSet("soundOn", soundOn); renderSoundBtn(); if (soundOn) sfx.correct(); };

// короткие звуки через Web Audio (без файлов)
const sfx = (() => {
  let ctx = null;
  function ac() { if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) {} } if (ctx && ctx.state === "suspended") ctx.resume(); return ctx; }
  function tone(freq, start, dur, type = "sine", vol = 0.18) {
    const c = ac(); if (!c) return;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime + start);
    g.gain.linearRampToValueAtTime(vol, c.currentTime + start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime + start); o.stop(c.currentTime + start + dur + 0.05);
  }
  return {
    unlock() { ac(); },
    correct() { if (!soundOn) return; tone(523, 0, 0.12); tone(784, 0.1, 0.16); },
    wrong() { if (!soundOn) return; tone(220, 0, 0.22, "triangle", 0.14); },
    learned() { if (!soundOn) return; tone(523, 0, 0.1); tone(659, 0.1, 0.1); tone(784, 0.2, 0.1); tone(1047, 0.3, 0.28); },
    finish() { if (!soundOn) return; tone(659, 0, 0.12); tone(784, 0.12, 0.12); tone(988, 0.24, 0.12); tone(1319, 0.36, 0.35); },
    tap() { if (!soundOn) return; tone(880, 0, 0.05, "sine", 0.06); },
  };
})();
window.addEventListener("pointerdown", () => sfx.unlock(), { once: true });

// конфетти
const confetti = (() => {
  const cv = el.confetti; const cx = cv.getContext("2d");
  let parts = [], raf = null;
  function resize() { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
  window.addEventListener("resize", resize); resize();
  const colors = ["#4f46e5", "#7c3aed", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#ec4899"];
  function burst(n = 100, x = innerWidth / 2, y = innerHeight * 0.35) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = 4 + Math.random() * 7;
      parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 4, g: 0.18 + Math.random() * 0.1, s: 4 + Math.random() * 5, c: colors[i % colors.length], r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3, life: 70 + Math.random() * 40 });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0 && p.y < innerHeight + 20);
    for (const p of parts) {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.vx *= 0.99; p.r += p.vr; p.life--;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.globalAlpha = Math.min(1, p.life / 25);
      cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); cx.restore();
    }
    if (parts.length) raf = requestAnimationFrame(tick); else { raf = null; cx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  return { burst };
})();

// =========================================================
//  Уведомление (баннер сверху)
// =========================================================
function showNotice(text) { el.noticeText.textContent = text; el.notice.classList.remove("hidden"); }
el.noticeClose.onclick = () => el.notice.classList.add("hidden");

// =========================================================
//  Экраны (auth vs app)
// =========================================================
function setMode(next) {
  mode = next;
  const isLogin = mode === "login", isRecovery = mode === "recovery";
  el.tabLogin.classList.toggle("active", isLogin);
  el.tabRegister.classList.toggle("active", mode === "register");
  el.authTabs.classList.toggle("hidden", isRecovery);
  el.email.parentElement.querySelector('label[for="email"]').classList.toggle("hidden", isRecovery);
  el.email.classList.toggle("hidden", isRecovery);
  el.email.required = !isRecovery;
  el.form.querySelector('label[for="password"]').textContent = isRecovery ? "Новый пароль" : "Пароль";
  el.submitBtn.textContent = isRecovery ? "Сохранить пароль" : (isLogin ? "Войти" : "Создать аккаунт");
  el.password.setAttribute("autocomplete", isLogin ? "current-password" : "new-password");
  el.forgotBtn.classList.toggle("hidden", !isLogin);
  showMsg("", "");
}

// «Забыла пароль?» — письмо со ссылкой; по ссылке приложение откроется с формой нового пароля
el.forgotBtn.onclick = async () => {
  const email = el.email.value.trim();
  if (!email) { showMsg("Введи почту в поле выше — пришлём ссылку для сброса.", "error"); el.email.focus(); return; }
  el.forgotBtn.disabled = true;
  try {
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.href.split("#")[0] });
    if (error) throw error;
    showMsg("Письмо отправлено. Открой ссылку из письма — появится форма нового пароля.", "success");
  } catch (err) { showMsg(translateError(err.message), "error"); }
  finally { el.forgotBtn.disabled = false; }
};
el.tabLogin.onclick = () => setMode("login");
el.tabRegister.onclick = () => setMode("register");
function showMsg(text, type) {
  el.authMsg.textContent = text;
  el.authMsg.className = "msg" + (type ? " " + type : "");
}

function showAuth() {
  el.authScreen.classList.remove("hidden");
  el.appScreen.classList.remove("active");
  if (mode !== "recovery") showMsg("", "");
}
let entering = false;
async function enterApp(u) {
  if (entering || (user && user.id === u.id && el.appScreen.classList.contains("active"))) return;
  entering = true;
  user = u;
  el.authScreen.classList.add("hidden");
  el.appScreen.classList.add("active");
  setTimeout(() => { entering = false; }, 1500);
  migratePendingQueue();
  await detectFeatures();
  flushProgress();
  flushLog();
  await goHome();
}

// проверяем, выполнена ли migration.sql (колонки повторений + дневник)
async function detectFeatures() {
  try {
    const { error } = await client.from("cards").select("next_review_at").limit(1);
    SRS_OK = !error;
  } catch (_) { SRS_OK = false; }
  try {
    const { error } = await client.from("study_log").select("day").limit(1);
    LOG_OK = !error;
  } catch (_) { LOG_OK = false; }
  if (!SRS_OK || !LOG_OK) {
    showNotice("Чтобы включить повторения и синхронизацию статистики между устройствами, выполни migration.sql в Supabase (SQL Editor).");
  }
}

// =========================================================
//  Навигация
// =========================================================
const EXERCISE_VIEWS = ["study", "quiz", "scramble", "match", "write", "learn", "pron", "tasks", "result"];
const VIEW_TAB = { home: "home", decks: "decks", packs: "decks", deck: "decks", read: "read", reader: "read", dialogue: "read", book: "read", tasks: "read", stats: "stats" };

function showView(name, title, showBack) {
  currentView = name;
  const all = ["home", "decks", "packs", "deck", "read", "reader", "dialogue", "book", "stats", ...EXERCISE_VIEWS];
  for (const v of all) el[v + "View"].classList.toggle("hidden", v !== name);
  if (name !== "match" && match.timer) { clearInterval(match.timer); match.timer = null; }
  if (name !== "reader" && name !== "dialogue" && window.speechSynthesis) speechSynthesis.cancel();
  el.viewTitle.textContent = title;
  el.backBtn.classList.toggle("hidden", !showBack);
  const hideTabs = EXERCISE_VIEWS.includes(name) || name === "reader" || name === "dialogue";
  el.tabbar.classList.toggle("hidden", hideTabs);
  if (VIEW_TAB[name]) currentTab = VIEW_TAB[name];
  el.tabbar.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.tab === currentTab));
  window.scrollTo(0, 0);
}

const inGame = () => EXERCISE_VIEWS.includes(currentView);
el.backBtn.onclick = () => {
  if (currentView === "tasks" || currentView === "dialogue" || (currentView === "result" && (lastResult.type === "tasks" || lastResult.type === "dialogue"))) { goRead(); return; }
  if (inGame()) { chain = null; if (currentDeck && currentDeck.virtual) goHome(); else openDeck(currentDeck); }
  else if (currentView === "deck" || currentView === "packs") goDecks();
  else if (currentView === "reader") { if (currentReading && currentReading.back) currentReading.back(); else goRead(); }
  else if (currentView === "book") goRead();
  else goHome();
};
el.tabbar.querySelectorAll("button").forEach((b) => {
  b.onclick = () => {
    sfx.tap();
    const t = b.dataset.tab;
    if (t === "home") goHome(); else if (t === "decks") goDecks(); else if (t === "read") goRead(); else goStats();
  };
});

// =========================================================
//  Все слова пользователя (для главной / статистики / повторений)
// =========================================================
function saveAllCardsCache() { lsSet("allCards", allCards); }
async function loadAllCards(force) {
  if (!allCards.length) allCards = lsGet("allCards", []);
  if (!force && Date.now() - allCardsLoadedAt < 20000) return;
  try {
    const { data, error } = await client.from("cards").select("*");
    if (error || !data) return;
    const pending = lsGet("pendingProgress", {});
    for (const c of data) if (c.id in pending) Object.assign(c, pending[c.id]);
    allCards = data;
    allCardsLoadedAt = Date.now();
    saveAllCardsCache();
  } catch (_) {}
}
async function loadDecksData(force) {
  if (!decks.length) decks = lsGet("decks", []);
  if (!force && decks.length && Date.now() - (loadDecksData._t || 0) < 20000) return;
  try {
    const { data, error } = await client.from("decks").select("*").order("created_at", { ascending: true });
    if (error || !data) return;
    decks = data; loadDecksData._t = Date.now(); lsSet("decks", decks);
  } catch (_) {}
}
function deckStats(deckId) {
  const list = allCards.filter((c) => c.deck_id === deckId);
  return { total: list.length, learned: list.filter(isLearned).length, due: list.filter(isDue).length };
}

// =========================================================
//  Дневник занятий: локально всегда, в облако — если есть таблица
// =========================================================
function bumpLog(store, key, r, c, l) {
  const row = store[key] || { reviewed: 0, correct: 0, learned: 0 };
  row.reviewed += r; row.correct += c; row.learned += l;
  store[key] = row;
}
function logStudy(reviewed, correct, learned) {
  if (!reviewed && !learned) return;
  const key = dayKey();
  const local = lsGet("studyLogLocal", {}); bumpLog(local, key, reviewed, correct, learned); lsSet("studyLogLocal", local);
  const pending = lsGet("pendingLog", {}); bumpLog(pending, key, reviewed, correct, learned); lsSet("pendingLog", pending);
  clearTimeout(logStudy._t);
  logStudy._t = setTimeout(flushLog, 1500);
}
let flushingLog = false, flushLogAgain = false;
async function flushLog() {
  if (!client || !user || !LOG_OK) return;
  if (flushingLog) { flushLogAgain = true; return; }   // не отправляем одну порцию дважды
  flushingLog = true;
  try {
    const pending = lsGet("pendingLog", {});
    for (const day of Object.keys(pending)) {
      const p = pending[day];
      // снимаем порцию с очереди до отправки; при ошибке вернём обратно
      const rest = lsGet("pendingLog", {}); delete rest[day]; lsSet("pendingLog", rest);
      try {
        const { error } = await client.rpc("log_study", { p_day: day, p_reviewed: p.reviewed, p_correct: p.correct, p_learned: p.learned });
        if (error) throw error;
      } catch (_) {
        const cur = lsGet("pendingLog", {}); bumpLog(cur, day, p.reviewed, p.correct, p.learned); lsSet("pendingLog", cur);
      }
    }
  } finally {
    flushingLog = false;
    if (flushLogAgain) { flushLogAgain = false; flushLog(); }
  }
}
async function fetchServerLog() {
  if (!client || !LOG_OK) return;
  try {
    const since = shiftDay(dayKey(), -400);
    const { data, error } = await client.from("study_log").select("day,reviewed,correct,learned").gte("day", since);
    if (error || !data) return;
    const s = {};
    for (const r of data) s[r.day] = { reviewed: r.reviewed, correct: r.correct, learned: r.learned };
    lsSet("studyLogServer", s);
  } catch (_) {}
}
// объединённый дневник: по каждому дню берём максимум из локального и серверного
function mergedLog() {
  const local = lsGet("studyLogLocal", {}), server = lsGet("studyLogServer", {});
  const out = {};
  for (const k of new Set([...Object.keys(local), ...Object.keys(server)])) {
    const a = local[k] || { reviewed: 0, correct: 0, learned: 0 }, b = server[k] || { reviewed: 0, correct: 0, learned: 0 };
    out[k] = { reviewed: Math.max(a.reviewed, b.reviewed), correct: Math.max(a.correct, b.correct), learned: Math.max(a.learned, b.learned) };
  }
  return out;
}
function computeStreaks(log) {
  const today = dayKey();
  const active = (k) => (log[k] && log[k].reviewed > 0);
  let cur = 0, k = active(today) ? today : shiftDay(today, -1);
  while (active(k)) { cur++; k = shiftDay(k, -1); }
  const days = Object.keys(log).filter(active).sort();
  let best = 0, run = 0, prev = null;
  for (const d of days) { run = (prev && shiftDay(prev, 1) === d) ? run + 1 : 1; best = Math.max(best, run); prev = d; }
  return { current: cur, best, days: days.length, todayActive: active(today) };
}

// =========================================================
//  ГЛАВНАЯ
// =========================================================
async function goHome() {
  showView("home", "Главная", false);
  renderHome();
  await Promise.all([loadAllCards(), loadDecksData(), flushLog().then(fetchServerLog)]);
  renderHome();
}
function renderHome() {
  const log = mergedLog(), st = computeStreaks(log), today = log[dayKey()];
  el.streakNum.textContent = st.current;
  el.streakLabel.textContent = `${plural(st.current, "день", "дня", "дней")} подряд`;
  el.streakFire.classList.toggle("off", !st.todayActive);
  el.streakToday.textContent = today && today.reviewed
    ? `сегодня: ${today.reviewed} ${plural(today.reviewed, "ответ", "ответа", "ответов")} · ${today.correct} верно`
    : (st.current > 0 ? "сегодня ещё не занималась — не теряй серию!" : "начни сегодня — и серия пойдёт 🔥");

  const total = allCards.length, learned = allCards.filter(isLearned).length;
  el.homeTotal.textContent = total; el.homeLearned.textContent = learned; el.homeInProgress.textContent = total - learned;

  const due = SRS_OK ? allCards.filter(isDue).length : 0;
  el.reviewCta.classList.toggle("hidden", due === 0);
  el.reviewCtaSub.textContent = `${due} ${plural(due, "слово ждёт", "слова ждут", "слов ждут")} повторения`;

  const lastId = lsGet("lastDeckId", null);
  const last = decks.find((d) => d.id === lastId);
  el.lastDeckCta.classList.toggle("hidden", !last);
  if (last) {
    const s = deckStats(last.id);
    el.lastDeckTitle.textContent = last.title;
    el.lastDeckSub.textContent = `${s.learned} из ${s.total} выучено` + (s.due ? ` · ${s.due} к повторению` : "");
    el.lastDeckCta.onclick = () => openDeck(last);
  }
  const read = lsGet("readStories", []);
  el.homeReadSub.textContent = read.length ? `прочитано ${read.length} из ${window.STORIES.length}` : "рассказы A1–B1 и диалоги";

  const p = lsGet("dailyPortion", null);
  const doneToday = p && p.day === dayKey() && p.done;
  el.portionSub.textContent = doneToday ? "✓ сегодня выполнена — можно взять ещё одну" : "знакомство › 4 варианта › написание › собери слово";

  const got = lsGet("achievements", {});
  el.homeAchSub.textContent = `${Object.keys(got).length} из ${ACHIEVEMENTS.length}`;
}
el.reviewCta.onclick = () => startReview();
el.portionCta.onclick = () => startPortion();
el.homeAchCta.onclick = () => goStats();
el.homeReadCta.onclick = () => goRead();
el.homePacksCta.onclick = () => goPacks();

// ---------- Порция дня: 5 новых слов по цепочке упражнений ----------
let chain = null;
function pickPortion() {
  const today = dayKey();
  const saved = lsGet("dailyPortion", null);
  if (saved && saved.day === today && !saved.done && saved.ids) {
    const l = saved.ids.map((id) => allCards.find((c) => c.id === id)).filter(Boolean);
    if (l.length >= 2) return l;
  }
  const unlearned = allCards.filter((c) => !isLearned(c));
  const list = shuffle(unlearned.filter((c) => !c.correct_streak)).concat(shuffle(unlearned.filter((c) => c.correct_streak))).slice(0, 5);
  lsSet("dailyPortion", { day: today, ids: list.map((c) => c.id), done: false });
  return list;
}
function startPortion() {
  const list = pickPortion();
  if (list.length < 2) { toast("Невыученных слов почти нет — возьми подборку 📦"); return; }
  currentDeck = { id: null, title: "Порция дня", virtual: true };
  cards = list.slice();
  chain = { stages: ["intro", "quiz", "write", "scramble"], i: 0, list, correct: 0, wrong: 0 };
  runChainStage();
}
function runChainStage() {
  const st = chain.stages[chain.i];
  toast(["Шаг 1 из 4: знакомство", "Шаг 2 из 4: 4 варианта", "Шаг 3 из 4: написание", "Шаг 4 из 4: собери слово"][chain.i]);
  if (st === "intro") startStudy(chain.list, { intro: true });
  else if (st === "quiz") startQuiz(chain.list);
  else if (st === "write") startWrite(chain.list);
  else startScramble(chain.list);
}
function chainAdvance(correct, wrong) {
  chain.correct += correct || 0; chain.wrong += wrong || 0;
  chain.i++;
  if (chain.i < chain.stages.length) runChainStage(); else finishChain();
}
function finishChain() {
  const c = chain; chain = null;
  const p = lsGet("dailyPortion", null); if (p) { p.done = true; lsSet("dailyPortion", p); }
  lsSet("portionsDone", lsGet("portionsDone", 0) + 1);
  showResult({ type: "portion", correct: c.correct, wrong: c.wrong, missed: [], sub: "Порция дня выполнена 📦", title: "Порция дня" });
}

// сквозное повторение по всем наборам
function startReview() {
  const due = allCards.filter(isDue);
  if (!due.length) { toast("Сегодня повторять нечего 🎉"); return; }
  currentDeck = { id: null, title: "Повторение", virtual: true };
  cards = due.slice();
  if (due.length >= 2) startLearn(due); else startStudy(due);
}

// =========================================================
//  СТАТИСТИКА
// =========================================================
async function goStats() {
  showView("stats", "Статистика", false);
  renderStats();
  await Promise.all([loadAllCards(), loadDecksData(), flushLog().then(fetchServerLog)]);
  renderStats();
}
function renderStats() {
  const log = mergedLog(), st = computeStreaks(log);
  el.statsStreak.textContent = st.current; el.statsBest.textContent = st.best; el.statsDays.textContent = st.days;

  // хитмапа: 12 недель, колонки — недели, строки — Пн..Вс
  const today = dayKey();
  let start = shiftDay(today, -83);
  const [sy, sm, sd] = start.split("-").map(Number);
  const dow = (new Date(sy, sm - 1, sd).getDay() + 6) % 7; // 0 = Пн
  start = shiftDay(start, -dow);
  el.heatmap.innerHTML = "";
  let k = start, guard = 0;
  while (k <= today && guard++ < 120) {
    const r = log[k] ? log[k].reviewed : 0;
    const lvl = r === 0 ? 0 : r < 10 ? 1 : r < 25 ? 2 : r < 50 ? 3 : 4;
    const cell = document.createElement("div");
    cell.className = "heat" + (k === today ? " today" : "");
    cell.dataset.l = lvl;
    cell.title = `${k}: ${r} ${plural(r, "ответ", "ответа", "ответов")}`;
    el.heatmap.appendChild(cell);
    k = shiftDay(k, 1);
  }
  el.heatmap.scrollLeft = el.heatmap.scrollWidth;

  // столбики за 7 дней
  const days = []; for (let i = 6; i >= 0; i--) days.push(shiftDay(today, -i));
  const vals = days.map((d) => (log[d] ? log[d].reviewed : 0));
  const max = Math.max(1, ...vals);
  const names = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  el.weekBars.innerHTML = "";
  days.forEach((d, i) => {
    const [y, m, dd] = d.split("-").map(Number);
    const col = document.createElement("div"); col.className = "bar-col";
    const v = document.createElement("div"); v.className = "bar-v"; v.textContent = vals[i] || "";
    const bar = document.createElement("div"); bar.className = "bar" + (vals[i] ? "" : " zero") + (d === today ? " today" : "");
    bar.style.height = Math.max(3, Math.round((vals[i] / max) * 80)) + "px";
    const l = document.createElement("div"); l.className = "bar-l"; l.textContent = names[new Date(y, m - 1, dd).getDay()];
    col.append(v, bar, l); el.weekBars.appendChild(col);
  });

  const total = allCards.length, learned = allCards.filter(isLearned).length;
  el.statsTotal.textContent = total; el.statsLearned.textContent = learned;
  let rev = 0, cor = 0; for (const d of Object.values(log)) { rev += d.reviewed; cor += d.correct; }
  el.statsAccuracy.textContent = rev ? Math.round((cor / rev) * 100) + "%" : "—";

  renderAchievements();
  el.deckProgressList.innerHTML = decks.length ? "" : '<div class="empty" style="padding:8px;">Наборов пока нет</div>';
  for (const d of decks) {
    const s = deckStats(d.id);
    const row = document.createElement("div"); row.className = "dp-row";
    row.innerHTML = `<div class="dp-top"><b></b><span>${s.learned} / ${s.total}</span></div><div class="pbar"><div style="width:${s.total ? Math.round((s.learned / s.total) * 100) : 0}%"></div></div>`;
    row.querySelector("b").textContent = d.title;
    el.deckProgressList.appendChild(row);
  }
}

// =========================================================
//  ДОСТИЖЕНИЯ
// =========================================================
const ACHIEVEMENTS = [
  { id: "first_learned", icon: "🌱", name: "Первое слово", test: (s) => s.learned >= 1 },
  { id: "learned_25", icon: "📗", name: "25 слов", test: (s) => s.learned >= 25 },
  { id: "learned_100", icon: "📚", name: "100 слов", test: (s) => s.learned >= 100 },
  { id: "learned_250", icon: "🎓", name: "250 слов", test: (s) => s.learned >= 250 },
  { id: "streak_3", icon: "🔥", name: "3 дня подряд", test: (s) => s.best >= 3 },
  { id: "streak_7", icon: "🌋", name: "Неделя подряд", test: (s) => s.best >= 7 },
  { id: "streak_30", icon: "🏅", name: "Месяц подряд", test: (s) => s.best >= 30 },
  { id: "answers_500", icon: "⚡", name: "500 ответов", test: (s) => s.answers >= 500 },
  { id: "story_first", icon: "📖", name: "Первый рассказ", test: (s) => s.stories >= 1 },
  { id: "chapter_first", icon: "📚", name: "Первая глава", test: (s) => s.chapters >= 1 },
  { id: "story_perfect", icon: "⭐", name: "5 из 5", test: (s) => s.perfectStory },
  { id: "stories_all", icon: "🏆", name: "Все рассказы", test: (s) => s.stories >= window.STORIES.length },
  { id: "dialogue_first", icon: "💬", name: "Первый диалог", test: (s) => s.dialogues >= 1 },
  { id: "dialogues_all", icon: "🗣", name: "Все диалоги", test: (s) => s.dialogues >= window.DIALOGUES.length },
  { id: "portion_first", icon: "📦", name: "Порция дня", test: (s) => s.portions >= 1 },
  { id: "portions_7", icon: "🧺", name: "7 порций", test: (s) => s.portions >= 7 },
  { id: "packs_3", icon: "🗂", name: "3 подборки", test: (s) => s.packs >= 3 },
  { id: "dictation_first", icon: "🎧", name: "Диктант", test: (s) => s.dictations >= 1 },
  { id: "pron_first", icon: "🎤", name: "Сказала вслух", test: (s) => s.prons >= 1 },
  { id: "night_owl", icon: "🦉", name: "Сова", test: (s) => s.active && (s.hour >= 23 || s.hour < 4) },
  { id: "early_bird", icon: "🐦", name: "Жаворонок", test: (s) => s.active && s.hour >= 5 && s.hour < 8 },
];
function achStats(active) {
  const log = mergedLog(), st = computeStreaks(log);
  let answers = 0; for (const d of Object.values(log)) answers += d.reviewed;
  const scores = lsGet("storyScores", {});
  const packTitles = new Set(window.PACKS.map((p) => `${p.icon} ${p.name}`));
  return {
    active: !!active,
    learned: allCards.filter(isLearned).length,
    best: st.best, answers,
    stories: lsGet("readStories", []).length,
    perfectStory: Object.values(scores).some((s) => s.total > 0 && s.best === s.total),
    dialogues: Object.keys(lsGet("dialoguesDone", {})).length,
    chapters: Object.values(lsGet("bookRead", {})).reduce((n, l) => n + l.length, 0),
    portions: lsGet("portionsDone", 0),
    packs: decks.filter((d) => packTitles.has(d.title)).length,
    dictations: lsGet("dictationsDone", 0),
    prons: lsGet("pronsDone", 0),
    hour: new Date().getHours(),
  };
}
// active = true, когда вызвано после реального занятия (для «совы»/«жаворонка»)
function checkAchievements(active) {
  const got = lsGet("achievements", {});
  const s = achStats(active);
  const fresh = ACHIEVEMENTS.filter((a) => !got[a.id] && a.test(s));
  if (!fresh.length) return;
  for (const a of fresh) got[a.id] = new Date().toISOString();
  lsSet("achievements", got);
  fresh.forEach((a, i) => setTimeout(() => { toast(`🏆 ${a.name}`); sfx.learned(); confetti.burst(80); }, 500 + i * 1900));
}
function renderAchievements() {
  const got = lsGet("achievements", {});
  el.achCount.textContent = `${Object.keys(got).length} / ${ACHIEVEMENTS.length}`;
  el.achGrid.innerHTML = "";
  for (const a of ACHIEVEMENTS) {
    const d = document.createElement("div");
    d.className = "ach" + (got[a.id] ? "" : " locked");
    d.innerHTML = `<div class="ach-ico">${a.icon}</div><div class="ach-name"></div>`;
    d.querySelector(".ach-name").textContent = a.name;
    if (got[a.id]) d.title = "Получено " + new Date(got[a.id]).toLocaleDateString("ru-RU");
    el.achGrid.appendChild(d);
  }
}

// =========================================================
//  DECKS (наборы)
// =========================================================
async function goDecks() {
  showView("decks", "Мои наборы", false);
  renderDecks();
  await Promise.all([loadDecksData(true), loadAllCards()]);
  renderDecks();
}
function renderDecks() {
  if (!decks.length) {
    el.decksList.innerHTML = '<div class="empty">Пока нет наборов.<br>Создай первый ниже или возьми готовую подборку 👇</div>';
    return;
  }
  el.decksList.innerHTML = "";
  for (const deck of decks) {
    const s = deckStats(deck.id);
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
      <div class="grow">
        <div class="li-title"></div>
        <div class="li-sub"></div>
        <div class="pbar"><div style="width:${s.total ? Math.round((s.learned / s.total) * 100) : 0}%"></div></div>
      </div>
      <button class="del-btn" title="Удалить">🗑</button>`;
    item.querySelector(".li-title").textContent = deck.title;
    item.querySelector(".li-sub").textContent = s.total
      ? `${s.total} ${plural(s.total, "слово", "слова", "слов")} · ${s.learned} выучено` + (s.due ? ` · ⏰ ${s.due}` : "")
      : "пусто — открой и добавь слова";
    item.querySelector(".grow").onclick = () => openDeck(deck);
    item.querySelector(".del-btn").onclick = (e) => { e.stopPropagation(); deleteDeck(deck); };
    el.decksList.appendChild(item);
  }
}

async function createDeck(title) {
  title = (title !== undefined ? title : el.newDeckInput.value).trim();
  if (!title) { toast("Введи название набора"); return null; }
  const { data, error } = await client.from("decks").insert({ user_id: user.id, title }).select().single();
  if (error) { toast("Ошибка: " + error.message); return null; }
  el.newDeckInput.value = "";
  decks.push(data); lsSet("decks", decks);
  return data;
}
el.newDeckBtn.onclick = async () => { if (await createDeck()) renderDecks(); };
el.newDeckInput.addEventListener("keydown", async (e) => { if (e.key === "Enter") { if (await createDeck()) renderDecks(); } });
el.packsBtn.onclick = () => goPacks();

async function deleteDeck(deck) {
  if (!confirm(`Удалить набор «${deck.title}» вместе со словами?`)) return;
  const { error } = await client.from("decks").delete().eq("id", deck.id);
  if (error) { toast("Ошибка: " + error.message); return; }
  decks = decks.filter((d) => d.id !== deck.id); lsSet("decks", decks);
  allCards = allCards.filter((c) => c.deck_id !== deck.id); saveAllCardsCache();
  renderDecks();
}

// =========================================================
//  ГОТОВЫЕ ПОДБОРКИ
// =========================================================
async function goPacks() {
  showView("packs", "Готовые подборки", true);
  await Promise.all([loadDecksData(), loadAllCards()]);
  renderPacks();
}
function renderPacks() {
  el.packsList.innerHTML = "";
  for (const p of window.PACKS) {
    const title = `${p.icon} ${p.name}`;
    const existing = decks.find((d) => d.title === title);
    const have = existing ? new Set(allCards.filter((c) => c.deck_id === existing.id).map((c) => c.term.toLowerCase())) : new Set();
    const fresh = p.words.filter(([t]) => !have.has(t.toLowerCase())).length;
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
      <div class="li-icon">${p.icon}</div>
      <div class="grow">
        <div class="li-title"></div>
        <div class="li-sub">${p.words.length} ${plural(p.words.length, "слово", "слова", "слов")}${existing ? (fresh ? ` · новых: ${fresh}` : " · уже добавлено") : ""}</div>
      </div>
      <span class="lvl ${p.level.toLowerCase()}">${p.level}</span>
      <button class="btn btn-sm ${fresh ? "btn-primary" : "btn-ghost"}" style="margin-left:6px;">${fresh ? "Добавить" : "Открыть"}</button>`;
    item.querySelector(".li-title").textContent = p.name;
    item.querySelector("button").onclick = (e) => { e.stopPropagation(); addPack(p); };
    item.onclick = () => addPack(p);
    el.packsList.appendChild(item);
  }
}
async function addPack(p) {
  const title = `${p.icon} ${p.name}`;
  let deck = decks.find((d) => d.title === title);
  if (!deck) { deck = await createDeck(title); if (!deck) return; }
  const have = new Set(allCards.filter((c) => c.deck_id === deck.id).map((c) => c.term.toLowerCase()));
  const rows = p.words.filter(([t]) => !have.has(t.toLowerCase())).map(([term, definition]) => ({ user_id: user.id, deck_id: deck.id, term, definition }));
  if (rows.length) {
    const { data, error } = await client.from("cards").insert(rows).select();
    if (error) { toast("Ошибка: " + error.message); return; }
    allCards.push(...data); saveAllCardsCache();
    localStorage.removeItem("cards_" + deck.id);
    toast(`+${data.length} ${plural(data.length, "слово", "слова", "слов")}`);
    confetti.burst(60);
    checkAchievements(false);
  }
  openDeck(deck);
}

// =========================================================
//  CARDS (слова внутри набора)
// =========================================================
let scope = "all"; // 'all' | 'unknown' | 'review'
function studyList() {
  if (scope === "unknown") return cards.filter((c) => !isLearned(c));
  if (scope === "review") return cards.filter(isDue);
  return cards.slice();
}
function setScope(s) {
  scope = s;
  el.scopeSeg.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.scope === s));
}
el.scopeSeg.querySelectorAll(".seg-btn").forEach((btn) => { btn.onclick = () => { sfx.tap(); setScope(btn.dataset.scope); }; });

// направление: EN › RU (узнавание), RU › EN (вспоминание) или вперемешку
let direction = lsGet("direction", "en");
function setDirection(d) {
  direction = d; lsSet("direction", d);
  el.dirSeg.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.dir === d));
}
el.dirSeg.querySelectorAll(".seg-btn").forEach((b) => { b.onclick = () => { sfx.tap(); setDirection(b.dataset.dir); }; });
setDirection(direction);
function frontIsEn() { return direction === "mix" ? Math.random() < 0.5 : direction === "en"; }

async function openDeck(deck) {
  currentDeck = deck;
  lsSet("lastDeckId", deck.id);
  if (scope === "review" && !SRS_OK) setScope("all");
  showView("deck", deck.title, true);
  await loadCards();
}

async function loadCards() {
  const cacheKey = "cards_" + currentDeck.id;
  const cachedRaw = localStorage.getItem(cacheKey);
  if (cachedRaw) {
    try { cards = JSON.parse(cachedRaw); renderCards(); } catch (_) {}
  } else {
    const fromAll = allCards.filter((c) => c.deck_id === currentDeck.id);
    if (fromAll.length) { cards = fromAll.slice(); renderCards(); }
    else el.cardsList.innerHTML = '<div class="empty">Загрузка…</div>';
  }
  await flushProgress();
  const { data, error } = await client
    .from("cards").select("*").eq("deck_id", currentDeck.id).order("created_at", { ascending: true });
  if (error) {
    if (!cachedRaw) el.cardsList.innerHTML = `<div class="empty">Ошибка: ${error.message}</div>`;
    return;
  }
  const pending = lsGet("pendingProgress", {});
  for (const c of data) if (c.id in pending) Object.assign(c, pending[c.id]);
  cards = data;
  localStorage.setItem(cacheKey, JSON.stringify(data));
  // синхронизируем общий список слов
  allCards = allCards.filter((c) => c.deck_id !== currentDeck.id).concat(data); saveAllCardsCache();
  renderCards();
}

function renderCards() {
  if (currentDeck && currentDeck.virtual) return;
  const unknownCount = cards.filter((c) => !isLearned(c)).length;
  const dueCount = cards.filter(isDue).length;
  el.scopeSeg.querySelector('[data-scope="unknown"]').textContent = `Незнакомые (${unknownCount})`;
  const reviewBtn = el.scopeSeg.querySelector('[data-scope="review"]');
  reviewBtn.textContent = `Повторить (${dueCount})`;
  reviewBtn.classList.toggle("hidden", !SRS_OK);

  if (!cards.length) {
    el.cardsList.innerHTML = '<div class="empty">В наборе пока нет слов.<br>Добавь первое ниже 👇</div>';
    el.deckActions.classList.add("hidden");
    return;
  }
  el.deckActions.classList.remove("hidden");
  el.cardsList.innerHTML = "";
  for (const card of cards) {
    const row = document.createElement("div");
    row.className = "card-row";
    const badge = isDue(card) ? '<span class="badge-due">⏰ повторить</span>' : (isLearned(card) ? '<span class="badge-learned">✓ выучено</span>' : "");
    row.innerHTML = `
      <div class="grow">
        <div class="term"></div>
        <div class="def"></div>
      </div>
      ${badge}
      <button class="del-btn" title="Удалить">🗑</button>`;
    row.querySelector(".term").textContent = card.term;
    row.querySelector(".def").textContent = card.definition;
    row.querySelector(".del-btn").onclick = () => deleteCard(card);
    el.cardsList.appendChild(row);
  }
}

async function addCard() {
  const term = el.termInput.value.trim();
  const definition = el.defInput.value.trim();
  if (!term || !definition) { toast("Заполни оба поля"); return; }
  el.addCardBtn.disabled = true;
  try {
    const { data, error } = await client.from("cards").insert({
      user_id: user.id, deck_id: currentDeck.id, term, definition,
    }).select().single();
    if (error) { toast("Ошибка: " + error.message); return; }
    cards.push(data); allCards.push(data); saveAllCardsCache();
    localStorage.setItem("cards_" + currentDeck.id, JSON.stringify(cards));
    renderCards();
    el.termInput.value = ""; el.defInput.value = "";
    el.termInput.focus();
    sfx.tap();
  } catch (_) {
    toast("Нет связи. Слово не потеряно — нажми «Добавить» ещё раз");
  } finally {
    el.addCardBtn.disabled = false;
  }
}
el.addCardBtn.onclick = addCard;
el.defInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addCard(); });
el.termInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); el.defInput.focus(); } });

// Автоперевод EN→RU через бесплатный сервис MyMemory (без ключа)
async function translateWord(text) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|ru`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("network");
  const data = await res.json();
  const t = data && data.responseData && data.responseData.translatedText;
  if (!t || Number(data.responseStatus) !== 200) throw new Error("no-translation");
  return t.trim();
}
let translating = false;
el.termInput.addEventListener("blur", async () => {
  const term = el.termInput.value.trim();
  if (!term || el.defInput.value.trim() || translating) return;
  translating = true;
  const ph = el.defInput.placeholder;
  el.defInput.placeholder = "перевожу…";
  try {
    const t = await translateWord(term);
    if (!el.defInput.value.trim()) el.defInput.value = t;
  } catch (_) {} finally {
    el.defInput.placeholder = ph;
    translating = false;
  }
});

async function deleteCard(card) {
  const { error } = await client.from("cards").delete().eq("id", card.id);
  if (error) { toast("Ошибка: " + error.message); return; }
  cards = cards.filter((c) => c.id !== card.id);
  allCards = allCards.filter((c) => c.id !== card.id); saveAllCardsCache();
  localStorage.setItem("cards_" + currentDeck.id, JSON.stringify(cards));
  renderCards();
}

// --- Массовое добавление и экспорт ---
function openSheet(sheet) { el.overlay.classList.add("show"); sheet.classList.add("show"); }
function closeSheets() { el.overlay.classList.remove("show"); document.querySelectorAll(".sheet.show").forEach((s) => s.classList.remove("show")); }
el.overlay.onclick = closeSheets;

function parseBatch(text) {
  const rows = [];
  const seen = new Set(cards.map((c) => c.term.toLowerCase()));
  for (let line of text.split(/\r?\n/)) {
    line = line.trim(); if (!line) continue;
    let parts = null;
    for (const sep of ["\t", " — ", " – ", " - ", ";", ",", ":"]) {
      const i = line.indexOf(sep);
      if (i > 0) { parts = [line.slice(0, i), line.slice(i + sep.length)]; break; }
    }
    if (!parts) continue;
    const term = parts[0].trim(), definition = parts[1].trim();
    if (!term || !definition) continue;
    const k = term.toLowerCase(); if (seen.has(k)) continue; seen.add(k);
    rows.push({ term, definition });
  }
  return rows;
}
el.batchBtn.onclick = () => { el.batchText.value = ""; el.batchCount.textContent = "Найдено слов: 0"; el.batchAddBtn.disabled = true; openSheet(el.batchSheet); setTimeout(() => el.batchText.focus(), 250); };
el.batchText.addEventListener("input", () => {
  const n = parseBatch(el.batchText.value).length;
  el.batchCount.textContent = `Найдено слов: ${n}`;
  el.batchAddBtn.disabled = n === 0;
  el.batchAddBtn.textContent = n ? `Добавить ${n} ${plural(n, "слово", "слова", "слов")}` : "Добавить";
});
el.batchAddBtn.onclick = async () => {
  const rows = parseBatch(el.batchText.value).map((r) => ({ user_id: user.id, deck_id: currentDeck.id, ...r }));
  if (!rows.length) return;
  el.batchAddBtn.disabled = true;
  try {
    const { data, error } = await client.from("cards").insert(rows).select();
    if (error) { toast("Ошибка: " + error.message); return; }
    cards.push(...data); allCards.push(...data); saveAllCardsCache();
    localStorage.setItem("cards_" + currentDeck.id, JSON.stringify(cards));
    renderCards(); closeSheets();
    toast(`+${data.length} ${plural(data.length, "слово", "слова", "слов")}`);
    confetti.burst(60);
  } catch (_) { toast("Нет связи, попробуй ещё раз"); }
  finally { el.batchAddBtn.disabled = false; }
};
el.batchCloseBtn.onclick = closeSheets;

el.exportBtn.onclick = () => {
  if (!cards.length) { toast("В наборе нет слов"); return; }
  el.exportText.value = cards.map((c) => `${c.term} — ${c.definition}`).join("\n");
  openSheet(el.exportSheet);
};
el.exportCopyBtn.onclick = async () => {
  try { await navigator.clipboard.writeText(el.exportText.value); toast("Скопировано ✓"); }
  catch (_) { el.exportText.select(); toast("Выдели и скопируй текст"); }
};
el.exportCloseBtn.onclick = closeSheets;

// --- Надёжное сохранение прогресса (терпит обрыв сети) ---
function progressPatch(card) {
  const p = { correct_streak: card.correct_streak };
  if (SRS_OK) { p.interval_days = card.interval_days || 0; p.next_review_at = card.next_review_at || null; }
  return p;
}
function saveProgress(card) {
  if (currentDeck && currentDeck.id) localStorage.setItem("cards_" + currentDeck.id, JSON.stringify(cards));
  const patch = progressPatch(card);
  client.from("cards").update(patch).eq("id", card.id)
    .then(({ error }) => { if (error) queueProgress(card.id, patch); })
    .catch(() => queueProgress(card.id, patch));
}
function queueProgress(id, patch) {
  const q = lsGet("pendingProgress", {}); q[id] = patch; lsSet("pendingProgress", q);
}
function migratePendingQueue() {
  const old = lsGet("pendingStreaks", null);
  if (!old) return;
  const q = lsGet("pendingProgress", {});
  for (const id of Object.keys(old)) q[id] = { correct_streak: old[id] };
  lsSet("pendingProgress", q); localStorage.removeItem("pendingStreaks");
}
async function flushProgress() {
  if (!client || !user) return;
  const q = lsGet("pendingProgress", {});
  const ids = Object.keys(q);
  if (!ids.length) return;
  for (const id of ids) {
    try {
      const patch = { ...q[id] };
      if (!SRS_OK) { delete patch.interval_days; delete patch.next_review_at; }
      const { error } = await client.from("cards").update(patch).eq("id", id);
      if (!error) delete q[id];
    } catch (_) {}
  }
  lsSet("pendingProgress", q);
}
window.addEventListener("online", () => { flushProgress(); flushLog(); });

// Единая оценка ответа: стрик, интервал повторения, дневник, звук, конфетти
function gradeCard(card, correct) {
  const wasLearned = isLearned(card);
  card.correct_streak = correct ? card.correct_streak + 1 : 0;
  if (correct && isLearned(card)) {
    const iv = nextInterval(card.interval_days || 0);
    card.interval_days = iv;
    card.next_review_at = new Date(Date.now() + iv * DAY_MS).toISOString();
  } else {
    card.interval_days = 0;
    card.next_review_at = null;
  }
  saveProgress(card);
  const nowLearned = correct && !wasLearned && isLearned(card);
  logStudy(1, correct ? 1 : 0, nowLearned ? 1 : 0);
  const twin = allCards.find((c) => c.id === card.id);
  if (twin && twin !== card) Object.assign(twin, progressPatch(card));
  saveAllCardsCache();
  if (correct) { sfx.correct(); vibrate(12); } else { sfx.wrong(); vibrate([30, 40, 30]); }
  if (nowLearned) { toast("★ Слово выучено!"); sfx.learned(); confetti.burst(45); }
  return nowLearned;
}

// =========================================================
//  STUDY (режим карточек)
// =========================================================
el.studyBtn.onclick = () => startStudy();

function startStudy(override, opts) {
  const list = override || studyList();
  if (!list.length) { toast(scope === "review" ? "Повторять пока нечего 🎉" : "Незнакомых слов нет 🎉 Переключись на «Все»"); return; }
  const intro = !!(opts && opts.intro);
  session = { list: intro ? list.slice() : shuffle(list), index: 0, flipped: false, correct: 0, missed: [], intro, front: "en" };
  el.studyChoices.classList.toggle("hidden", intro);
  el.introNext.classList.toggle("hidden", !intro);
  el.flashSub.classList.toggle("hidden", !intro);
  el.flashHint.textContent = intro ? "запомни слово и перевод" : "нажми на карточку, чтобы перевернуть";
  showView("study", currentDeck.title, true);
  showCard();
}

function renderFlash() {
  const card = session.list[session.index];
  const showEn = session.flipped ? session.front !== "en" : session.front === "en";
  el.flashSide.textContent = showEn ? "English" : "Перевод";
  el.flashText.textContent = showEn ? card.term : card.definition;
  if (showEn) speak(card.term);
}
function showCard() {
  const card = session.list[session.index];
  if (!card) return;
  session.flipped = false;
  session.front = session.intro ? "en" : (frontIsEn() ? "en" : "ru");
  if (session.intro) el.flashSub.textContent = card.definition;
  renderFlash();
  el.studyProgress.textContent = `${session.index + 1} из ${session.list.length}`;
  pop(el.flashcard);
}

el.flashcard.onclick = (e) => {
  if (e.target === el.speakBtn || session.intro) return;
  if (!session.list[session.index]) return;
  session.flipped = !session.flipped;
  renderFlash();
};
el.introNext.onclick = () => {
  sfx.tap();
  session.index++;
  if (session.index >= session.list.length) finishStudy(); else showCard();
};
el.speakBtn.onclick = (e) => { e.stopPropagation(); const card = session.list[session.index]; if (card) speak(card.term); };
el.quizSpeak.onclick = () => { const card = quiz.list[quiz.index]; if (card) speak(card.term); };

el.knowBtn.onclick = () => answer(true);
el.dontKnowBtn.onclick = () => answer(false);

function answer(known) {
  const card = session.list[session.index];
  if (!card) return;
  gradeCard(card, known);
  if (known) session.correct++; else session.missed.push(card);
  session.index++;
  if (session.index >= session.list.length) finishStudy();
  else showCard();
}
function finishStudy() {
  if (chain) { chainAdvance(session.intro ? 0 : session.correct, session.intro ? 0 : session.missed.length); return; }
  renderCards();
  showResult({ type: "study", correct: session.correct, wrong: session.missed.length, missed: session.missed });
}

// =========================================================
//  QUIZ (4 варианта)
// =========================================================
el.quizBtn.onclick = () => startQuiz();

function startQuiz(override) {
  const list = override || studyList();
  if (!list.length) { toast("Нет слов для игры"); return; }
  if (cards.length < 2) { toast("Добавь хотя бы 2 слова"); return; }
  quiz = { list: shuffle(list), index: 0, score: 0, answered: false, missed: [] };
  showView("quiz", currentDeck.title, true);
  showQuestion();
}

function showQuestion() {
  quiz.answered = false;
  const card = quiz.list[quiz.index];
  quiz.askEn = frontIsEn();
  const key = quiz.askEn ? "definition" : "term";
  el.quizWord.textContent = quiz.askEn ? card.term : card.definition;
  el.quizPrompt.querySelector(".flash-side").textContent = quiz.askEn ? "Выбери перевод" : "Выбери английское слово";
  el.quizProgress.textContent = `${quiz.index + 1} из ${quiz.list.length}`;
  pop(el.quizPrompt);
  if (quiz.askEn) speak(card.term);
  const others = cards.filter((c) => c.id !== card.id && c[key] !== card[key]).map((c) => c[key]);
  const options = shuffle([card[key], ...shuffle([...new Set(others)]).slice(0, 3)]);
  el.quizOptions.innerHTML = "";
  for (const opt of options) {
    const b = document.createElement("button");
    b.className = "opt-btn"; b.textContent = opt;
    b.onclick = () => chooseOption(b, opt, card);
    el.quizOptions.appendChild(b);
  }
}

function chooseOption(btn, chosen, card) {
  if (quiz.answered) return;
  quiz.answered = true;
  const right = quiz.askEn ? card.definition : card.term;
  const correct = chosen === right;
  el.quizOptions.querySelectorAll(".opt-btn").forEach((b) => { b.disabled = true; if (b.textContent === right) b.classList.add("correct"); });
  if (!correct) btn.classList.add("wrong");
  if (!quiz.askEn) speak(card.term);
  gradeCard(card, correct);
  if (correct) quiz.score++; else quiz.missed.push(card);
  setTimeout(() => {
    quiz.index++;
    if (quiz.index >= quiz.list.length) finishQuiz(); else showQuestion();
  }, correct ? 750 : 1300);
}
function finishQuiz() {
  if (chain) { chainAdvance(quiz.score, quiz.missed.length); return; }
  renderCards();
  showResult({ type: "quiz", correct: quiz.score, wrong: quiz.missed.length, missed: quiz.missed });
}

// =========================================================
//  WRITE (написание)
// =========================================================
function normAnswer(s) { return s.trim().toLowerCase().replace(/\s+/g, " "); }
el.writeBtn.onclick = () => startWrite();
el.dictationBtn.onclick = () => startWrite(undefined, true);
el.writeSpeak.onclick = () => { const c = write.list[write.index]; if (c) speak(c.term); };

function startWrite(override, dictation) {
  const list = override || studyList();
  if (!list.length) { toast("Нет слов для игры"); return; }
  write = { list: shuffle(list), index: 0, score: 0, locked: false, missed: [], dictation: !!dictation };
  el.writeSide.textContent = dictation ? "Послушай и напиши" : "Напиши по-английски";
  el.writeSpeak.classList.toggle("hidden", !dictation);
  showView("write", currentDeck.title, true);
  showWrite();
}
function showWrite() {
  write.locked = false;
  const card = write.list[write.index];
  el.writeDef.textContent = write.dictation ? "🎧" : card.definition;
  if (write.dictation) setTimeout(() => speak(card.term), 250);
  el.writeProgress.textContent = `${write.index + 1} из ${write.list.length}`;
  el.writeInput.value = ""; el.writeInput.disabled = false;
  el.writeFeedback.classList.add("hidden"); el.writeFeedback.textContent = ""; el.writeFeedback.style.color = "";
  el.writeCheck.classList.remove("hidden"); el.writeOverride.classList.add("hidden"); el.writeNext.classList.add("hidden");
  pop(el.writePrompt);
  el.writeInput.focus();
}
function checkWrite() {
  if (write.locked) return;
  const card = write.list[write.index];
  const typed = el.writeInput.value;
  if (!normAnswer(typed)) { toast("Напиши слово"); return; }
  write.locked = true; el.writeInput.disabled = true; el.writeCheck.classList.add("hidden");
  const correct = normAnswer(typed) === normAnswer(card.term);
  if (correct) {
    gradeCard(card, true); write.score++;
    speak(card.term);
    el.writeFeedback.textContent = "Верно! " + card.term; el.writeFeedback.style.color = "var(--ok)"; el.writeFeedback.classList.remove("hidden");
    setTimeout(writeAdvance, 850);
  } else {
    el.writeFeedback.textContent = "Правильно: " + card.term; el.writeFeedback.style.color = "var(--danger)"; el.writeFeedback.classList.remove("hidden");
    speak(card.term);
    el.writeOverride.classList.remove("hidden"); el.writeNext.classList.remove("hidden");
  }
}
function writeAdvance() { write.index++; if (write.index >= write.list.length) finishWrite(); else showWrite(); }
el.writeCheck.onclick = checkWrite;
el.writeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") checkWrite(); });
el.writeOverride.onclick = () => { const card = write.list[write.index]; gradeCard(card, true); write.score++; el.writeOverride.classList.add("hidden"); writeAdvance(); };
el.writeNext.onclick = () => { const card = write.list[write.index]; gradeCard(card, false); write.missed.push(card); writeAdvance(); };
function finishWrite() {
  if (chain) { chainAdvance(write.score, write.missed.length); return; }
  if (write.dictation) lsSet("dictationsDone", lsGet("dictationsDone", 0) + 1);
  renderCards();
  showResult({ type: "write", correct: write.score, wrong: write.missed.length, missed: write.missed, dictation: write.dictation });
}

// =========================================================
//  PRONUNCIATION (произношение через распознавание речи)
// =========================================================
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let pron = { list: [], index: 0, score: 0, locked: false, missed: [], rec: null };
el.pronBtn.onclick = () => startPron();

function startPron(override) {
  if (!SR) { toast("Распознавание речи не поддерживается в этом браузере"); return; }
  const list = override || studyList();
  if (!list.length) { toast("Нет слов для игры"); return; }
  pron = { list: shuffle(list), index: 0, score: 0, locked: false, missed: [], rec: null };
  showView("pron", currentDeck.title, true);
  showPron();
}
function showPron() {
  const card = pron.list[pron.index];
  pron.locked = false;
  el.pronWord.textContent = card.term;
  el.pronDef.textContent = card.definition;
  el.pronProgress.textContent = `${pron.index + 1} из ${pron.list.length}`;
  el.pronStatus.classList.add("hidden"); el.pronStatus.textContent = ""; el.pronStatus.style.color = "";
  el.pronOverride.classList.add("hidden"); el.pronNext.classList.add("hidden");
  setMic(false);
  pop(el.pronPrompt);
  speak(card.term);
}
function setMic(listening) {
  el.pronMic.disabled = false;
  el.pronMic.classList.toggle("listening", listening);
  el.pronMic.querySelector(".mic-label").textContent = listening ? "Слушаю…" : "Нажми и говори";
}
function normSpeech(s) { return s.toLowerCase().replace(/[^\p{L}\s']/gu, "").replace(/\s+/g, " ").trim(); }
function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return dp[a.length][b.length];
}
function speechMatches(alts, target) {
  const tol = target.length <= 4 ? 0 : target.length <= 8 ? 1 : 2;
  return alts.some((a) => a === target || a.split(" ").includes(target) || a.includes(target) || editDistance(a, target) <= tol);
}
el.pronMic.onclick = () => {
  if (pron.locked) return;
  const card = pron.list[pron.index];
  if (pron.rec) { try { pron.rec.stop(); } catch (_) {} pron.rec = null; setMic(false); return; }
  let rec; try { rec = new SR(); } catch (_) { toast("Микрофон недоступен"); return; }
  pron.rec = rec;
  rec.lang = "en-US"; rec.interimResults = false; rec.maxAlternatives = 5;
  if (window.speechSynthesis) speechSynthesis.cancel();
  setMic(true);
  el.pronStatus.classList.add("hidden");
  rec.onresult = (e) => {
    const alts = Array.from(e.results[0]).map((r) => normSpeech(r.transcript)).filter(Boolean);
    const ok = speechMatches(alts, normSpeech(card.term));
    pronGrade(ok, alts[0] || "");
  };
  rec.onerror = (e) => {
    setMic(false); pron.rec = null;
    el.pronStatus.textContent = e.error === "not-allowed" || e.error === "service-not-allowed"
      ? "Нет доступа к микрофону — разреши его в настройках браузера"
      : "Не расслышала. Нажми и скажи ещё раз";
    el.pronStatus.style.color = "var(--danger)";
    el.pronStatus.classList.remove("hidden");
  };
  rec.onend = () => { pron.rec = null; setMic(false); };
  try { rec.start(); } catch (_) { setMic(false); pron.rec = null; toast("Не удалось включить микрофон"); }
};
function pronGrade(ok, heard) {
  const card = pron.list[pron.index];
  el.pronStatus.classList.remove("hidden");
  if (ok) {
    pron.locked = true; el.pronMic.disabled = true;
    gradeCard(card, true); pron.score++;
    el.pronStatus.textContent = `Отлично! Я услышала: «${heard}»`;
    el.pronStatus.style.color = "var(--ok)";
    setTimeout(pronAdvance, 1000);
  } else {
    el.pronStatus.textContent = heard ? `Я услышала: «${heard}». Попробуй ещё раз` : "Не расслышала. Попробуй ещё раз";
    el.pronStatus.style.color = "var(--danger)";
    el.pronOverride.classList.remove("hidden"); el.pronNext.classList.remove("hidden");
    sfx.wrong();
  }
}
function pronAdvance() { pron.index++; if (pron.index >= pron.list.length) finishPron(); else showPron(); }
el.pronSpeak.onclick = () => { const c = pron.list[pron.index]; if (c) speak(c.term); };
el.pronOverride.onclick = () => { const c = pron.list[pron.index]; pron.locked = true; gradeCard(c, true); pron.score++; pronAdvance(); };
el.pronNext.onclick = () => { const c = pron.list[pron.index]; pron.locked = true; gradeCard(c, false); pron.missed.push(c); pronAdvance(); };
function finishPron() {
  if (pron.rec) { try { pron.rec.stop(); } catch (_) {} pron.rec = null; }
  lsSet("pronsDone", lsGet("pronsDone", 0) + 1);
  renderCards();
  showResult({ type: "pron", correct: pron.score, wrong: pron.missed.length, missed: pron.missed });
}

// =========================================================
//  LEARN (умная тренировка: выбор → печать)
// =========================================================
el.learnBtn.onclick = () => startLearn();

function startLearn(override) {
  const list = override || studyList();
  if (!list.length) { toast("Нет слов для игры"); return; }
  if (cards.length < 2) { toast("Добавь хотя бы 2 слова"); return; }
  learn = { list: shuffle(list), index: 0, score: 0, locked: false, missed: [], mode: "choice" };
  showView("learn", currentDeck.title, true);
  showLearn();
}
function showLearn() {
  learn.locked = false;
  const card = learn.list[learn.index];
  learn.mode = card.correct_streak >= 1 ? "write" : "choice";
  learn.askEn = learn.mode === "choice" ? frontIsEn() : true;
  el.learnWord.textContent = learn.mode === "choice" ? (learn.askEn ? card.term : card.definition) : card.definition;
  el.learnSide.textContent = learn.mode === "choice" ? (learn.askEn ? "Выбери перевод" : "Выбери английское слово") : "Напиши по-английски";
  el.learnProgress.textContent = `${learn.index + 1} из ${learn.list.length}`;
  el.learnFeedback.classList.add("hidden"); el.learnFeedback.textContent = ""; el.learnFeedback.style.color = "";
  el.learnOverride.classList.add("hidden"); el.learnNext.classList.add("hidden");
  pop(el.learnPrompt);
  if (learn.mode === "choice") {
    el.learnInput.classList.add("hidden"); el.learnCheck.classList.add("hidden"); el.learnOptions.classList.remove("hidden");
    if (learn.askEn) speak(card.term);
    const key = learn.askEn ? "definition" : "term";
    const others = cards.filter((c) => c.id !== card.id && c[key] !== card[key]).map((c) => c[key]);
    const options = shuffle([card[key], ...shuffle([...new Set(others)]).slice(0, 3)]);
    el.learnOptions.innerHTML = "";
    for (const opt of options) {
      const b = document.createElement("button");
      b.className = "opt-btn"; b.textContent = opt;
      b.onclick = () => learnChoose(b, opt, card);
      el.learnOptions.appendChild(b);
    }
  } else {
    el.learnOptions.classList.add("hidden"); el.learnInput.classList.remove("hidden");
    el.learnInput.value = ""; el.learnInput.disabled = false; el.learnCheck.classList.remove("hidden");
    el.learnInput.focus();
  }
}
function learnGrade(correct, card) { gradeCard(card, correct); if (correct) learn.score++; else learn.missed.push(card); }
function learnChoose(btn, chosen, card) {
  if (learn.locked) return;
  learn.locked = true;
  const right = learn.askEn ? card.definition : card.term;
  const correct = chosen === right;
  el.learnOptions.querySelectorAll(".opt-btn").forEach((b) => { b.disabled = true; if (b.textContent === right) b.classList.add("correct"); });
  if (!correct) btn.classList.add("wrong");
  if (!learn.askEn) speak(card.term);
  learnGrade(correct, card);
  setTimeout(learnAdvance, correct ? 750 : 1300);
}
function learnCheckWrite() {
  if (learn.locked) return;
  const card = learn.list[learn.index];
  const typed = el.learnInput.value;
  if (!normAnswer(typed)) { toast("Напиши слово"); return; }
  learn.locked = true; el.learnInput.disabled = true; el.learnCheck.classList.add("hidden");
  const correct = normAnswer(typed) === normAnswer(card.term);
  if (correct) {
    learnGrade(true, card); speak(card.term);
    el.learnFeedback.textContent = "Верно! " + card.term; el.learnFeedback.style.color = "var(--ok)"; el.learnFeedback.classList.remove("hidden");
    setTimeout(learnAdvance, 850);
  } else {
    el.learnFeedback.textContent = "Правильно: " + card.term; el.learnFeedback.style.color = "var(--danger)"; el.learnFeedback.classList.remove("hidden");
    speak(card.term);
    el.learnOverride.classList.remove("hidden"); el.learnNext.classList.remove("hidden");
  }
}
function learnAdvance() { learn.index++; if (learn.index >= learn.list.length) finishLearn(); else showLearn(); }
el.learnCheck.onclick = learnCheckWrite;
el.learnInput.addEventListener("keydown", (e) => { if (e.key === "Enter") learnCheckWrite(); });
el.learnSpeak.onclick = () => { const c = learn.list[learn.index]; if (c) speak(c.term); };
el.learnOverride.onclick = () => { learnGrade(true, learn.list[learn.index]); learnAdvance(); };
el.learnNext.onclick = () => { learnGrade(false, learn.list[learn.index]); learnAdvance(); };
function finishLearn() {
  renderCards();
  showResult({ type: "learn", correct: learn.score, wrong: learn.missed.length, missed: learn.missed });
}

// =========================================================
//  SCRAMBLE (собери слово)
// =========================================================
el.scrambleBtn.onclick = () => startScramble();

function startScramble(override) {
  const list = override || studyList();
  if (!list.length) { toast("Нет слов для игры"); return; }
  scramble = { list: shuffle(list), index: 0, score: 0, tiles: [], answer: [], display: "", targetLetters: "", locked: false, missed: [] };
  showView("scramble", currentDeck.title, true);
  showScramble();
}
function showScramble() {
  const card = scramble.list[scramble.index];
  scramble.display = card.term;
  scramble.targetLetters = card.term.replace(/\s+/g, "");
  scramble.tiles = shuffle(scramble.targetLetters.split("")).map((ch) => ({ ch, used: false }));
  scramble.answer = []; scramble.locked = false;
  el.scrambleHint.textContent = card.definition;
  el.scrambleProgress.textContent = `${scramble.index + 1} из ${scramble.list.length}`;
  el.answerSlots.className = "answer-slots";
  el.scrambleCorrect.classList.add("hidden"); el.scrambleCorrect.textContent = ""; el.scrambleNext.classList.add("hidden");
  pop(el.scramblePrompt);
  renderScramble();
}
function renderScramble() {
  el.answerSlots.innerHTML = "";
  let li = 0;
  for (const ch of scramble.display) {
    if (ch === " ") { const sp = document.createElement("div"); sp.className = "slot space"; el.answerSlots.appendChild(sp); continue; }
    if (li < scramble.answer.length) {
      const pos = li, tileIdx = scramble.answer[pos];
      const s = document.createElement("div"); s.className = "slot filled"; s.textContent = scramble.tiles[tileIdx].ch;
      s.onclick = () => { if (scramble.locked) return; scramble.tiles[tileIdx].used = false; scramble.answer.splice(pos, 1); renderScramble(); };
      el.answerSlots.appendChild(s); li++;
    } else { const s = document.createElement("div"); s.className = "slot"; el.answerSlots.appendChild(s); }
  }
  el.tilesArea.innerHTML = "";
  scramble.tiles.forEach((t, idx) => {
    const b = document.createElement("button"); b.className = "tile"; b.textContent = t.ch; b.disabled = t.used || scramble.locked;
    b.onclick = () => { if (scramble.locked) return; t.used = true; scramble.answer.push(idx); sfx.tap(); renderScramble(); checkScramble(); };
    el.tilesArea.appendChild(b);
  });
}
function checkScramble() {
  if (scramble.answer.length !== scramble.targetLetters.length) return;
  scramble.locked = true;
  const assembled = scramble.answer.map((i) => scramble.tiles[i].ch).join("");
  const correct = assembled.toLowerCase() === scramble.targetLetters.toLowerCase();
  const card = scramble.list[scramble.index];
  el.answerSlots.classList.add(correct ? "correct" : "wrong");
  gradeCard(card, correct);
  if (correct) { scramble.score++; speak(card.term); }
  else { scramble.missed.push(card); el.scrambleCorrect.textContent = "Правильно: " + card.term; el.scrambleCorrect.classList.remove("hidden"); speak(card.term); }
  el.tilesArea.querySelectorAll(".tile").forEach((b) => (b.disabled = true));
  const advance = () => { scramble.index++; if (scramble.index >= scramble.list.length) finishScramble(); else showScramble(); };
  if (correct) setTimeout(advance, 850);
  else { el.scrambleNext.classList.remove("hidden"); el.scrambleNext.onclick = () => { el.scrambleNext.classList.add("hidden"); advance(); }; }
}
function finishScramble() {
  if (chain) { chainAdvance(scramble.score, scramble.missed.length); return; }
  renderCards();
  showResult({ type: "scramble", correct: scramble.score, wrong: scramble.missed.length, missed: scramble.missed });
}
el.scrambleClear.onclick = () => { if (scramble.locked) return; scramble.answer.forEach((i) => (scramble.tiles[i].used = false)); scramble.answer = []; renderScramble(); };

// =========================================================
//  MATCH (подбор на время)
// =========================================================
const MATCH_MAX = 6;
el.matchBtn.onclick = () => startMatch();

function startMatch(override) {
  const list = override || studyList();
  if (list.length < 2) { toast("Нужно хотя бы 2 слова для игры"); return; }
  const chosen = shuffle(list).slice(0, MATCH_MAX);
  const items = [];
  chosen.forEach((c) => { items.push({ id: c.id, text: c.term, kind: "term" }); items.push({ id: c.id, text: c.definition, kind: "def" }); });
  match = { items: shuffle(items), selEl: null, matched: 0, total: chosen.length, start: Date.now(), timer: null, wrong: 0, missed: [] };
  showView("match", currentDeck.title, true);
  renderMatch();
  match.timer = setInterval(updateMatchTimer, 100);
  updateMatchTimer();
}
function addMatchMissed(id) {
  if (match.missed.some((c) => c.id === id)) return;
  const card = cards.find((c) => c.id === id);
  if (card) match.missed.push(card);
}
function updateMatchTimer() { el.matchTimer.textContent = ((Date.now() - match.start) / 1000).toFixed(1) + " сек"; }
function renderMatch() {
  el.matchGrid.innerHTML = "";
  match.items.forEach((it) => {
    const b = document.createElement("button"); b.className = "match-tile"; b.textContent = it.text;
    b.dataset.id = it.id; b.dataset.kind = it.kind; b.onclick = () => clickMatch(b);
    el.matchGrid.appendChild(b);
  });
  el.matchProgress.textContent = `Найди пары: 0 из ${match.total}`;
}
function clickMatch(btn) {
  if (btn.classList.contains("gone") || btn.classList.contains("wrong")) return;
  if (!match.selEl) { btn.classList.add("sel"); match.selEl = btn; sfx.tap(); return; }
  if (btn === match.selEl) { btn.classList.remove("sel"); match.selEl = null; return; }
  const a = match.selEl, b = btn;
  const pair = a.dataset.id === b.dataset.id && a.dataset.kind !== b.dataset.kind;
  match.selEl = null;
  if (pair) {
    a.classList.remove("sel"); a.classList.add("gone"); b.classList.add("gone");
    match.matched++; sfx.correct(); vibrate(10);
    el.matchProgress.textContent = `Найди пары: ${match.matched} из ${match.total}`;
    if (match.matched >= match.total) finishMatch();
  } else {
    match.wrong++; addMatchMissed(a.dataset.id); addMatchMissed(b.dataset.id); sfx.wrong();
    a.classList.remove("sel"); a.classList.add("wrong"); b.classList.add("wrong");
    setTimeout(() => { a.classList.remove("wrong"); b.classList.remove("wrong"); }, 600);
  }
}
function finishMatch() {
  clearInterval(match.timer); match.timer = null;
  const sec = ((Date.now() - match.start) / 1000).toFixed(1);
  logStudy(match.total, Math.max(0, match.total - match.wrong), 0);
  showResult({ type: "match", correct: match.total, wrong: match.wrong, missed: match.missed, sub: `Время: ${sec} сек` });
}

// =========================================================
//  RESULT (итоги + работа над ошибками)
// =========================================================
function dedupeCards(arr) {
  const seen = new Set(); const out = [];
  for (const c of arr) { if (!seen.has(c.id)) { seen.add(c.id); out.push(c); } }
  return out;
}
function showResult({ type, correct, wrong, missed, sub, title, dictation }) {
  const readType = type === "tasks" || type === "dialogue";
  lastResult = { type, dictation: !!dictation, missed: readType ? (missed || []).slice() : dedupeCards(missed || []) };
  const perfect = wrong === 0;
  el.resultEmoji.textContent = perfect ? "🎉" : "💪";
  el.resultStats.textContent = `${correct} верно · ${wrong} ${wrong === 1 ? "ошибка" : "ошибок"}`;
  el.resultSub.textContent = sub || (perfect ? "Без единой ошибки!" : "");
  const m = lastResult.missed.length;
  const canRework = m > 0 && !(type === "match" && m < 2);
  el.reworkBtn.classList.toggle("hidden", !canRework);
  el.reworkBtn.textContent = `💪 Работа над ошибками (${m})`;
  el.resultBackBtn.textContent = readType ? "К рассказам" : (currentDeck && currentDeck.virtual ? "На главную" : "Ко всем заданиям");
  showView("result", title || currentDeck.title, true);
  if (perfect && correct >= 2) { confetti.burst(140); sfx.finish(); } else if (correct > 0) { sfx.finish(); }
  checkAchievements(true);
}
el.reworkBtn.onclick = () => {
  const list = lastResult.missed.slice();
  if (!list.length) return;
  if (lastResult.type === "tasks") { startTasks(tasks.story, list); return; }
  if (lastResult.type === "study") startStudy(list);
  else if (lastResult.type === "quiz") startQuiz(list);
  else if (lastResult.type === "scramble") startScramble(list);
  else if (lastResult.type === "match") startMatch(list);
  else if (lastResult.type === "write") startWrite(list, lastResult.dictation);
  else if (lastResult.type === "learn") startLearn(list);
  else if (lastResult.type === "pron") startPron(list);
};
el.resultBackBtn.onclick = () => {
  if (lastResult.type === "tasks" || lastResult.type === "dialogue") goRead();
  else if (currentDeck && currentDeck.virtual) goHome();
  else openDeck(currentDeck);
};

// =========================================================
//  ЧИТАТЬ (рассказы + перевод по нажатию)
// =========================================================
let currentStory = null;
let wsTerm = "";

let readMode = lsGet("readMode", "stories");
function setReadMode(m) {
  readMode = m; lsSet("readMode", m);
  el.readSeg.querySelectorAll(".seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.read === m));
  el.storiesList.classList.toggle("hidden", m !== "stories");
  el.dialoguesList.classList.toggle("hidden", m !== "dialogues");
  el.booksList.classList.toggle("hidden", m !== "books");
  el.readHint.textContent = m === "stories"
    ? "Нажми на любое слово в рассказе — увидишь перевод и сможешь добавить его в набор."
    : m === "dialogues"
      ? "Выбирай, что ответить собеседнику. Слова в репликах тоже можно нажимать."
      : "Настоящие книги по главам, с иллюстрациями. Любое слово — тап и перевод.";
}
el.readSeg.querySelectorAll(".seg-btn").forEach((b) => { b.onclick = () => { sfx.tap(); setReadMode(b.dataset.read); }; });

async function goRead() {
  showView("read", "Читать", false);
  renderStories();
  renderDialogues();
  renderBooks();
  setReadMode(readMode);
  await Promise.all([loadDecksData(), loadAllCards()]);
}

// ---------- Книги по главам ----------
let currentBook = null;
function bookReadSet(book) { return new Set((lsGet("bookRead", {})[book.id]) || []); }
function markChapterRead(book, ch) {
  const all = lsGet("bookRead", {});
  const list = all[book.id] || [];
  if (!list.includes(ch.id)) { list.push(ch.id); all[book.id] = list; lsSet("bookRead", all); checkAchievements(false); }
}
function renderBooks() {
  el.booksList.innerHTML = "";
  for (const b of window.BOOKS || []) {
    const read = bookReadSet(b);
    const item = document.createElement("div"); item.className = "list-item";
    item.innerHTML = `
      <img class="li-cover" alt="" />
      <div class="grow"><div class="li-title"></div><div class="li-sub"></div></div>
      <span class="lvl ${b.level.toLowerCase()}">${b.level}</span>`;
    item.querySelector("img").src = b.cover;
    item.querySelector(".li-title").textContent = b.title;
    item.querySelector(".li-sub").textContent = `${b.author} · ${read.size} из ${b.chapters.length} глав`;
    item.onclick = () => openBook(b);
    el.booksList.appendChild(item);
  }
}
function openBook(book) {
  currentBook = book;
  showView("book", book.title, true);
  el.bookCover.src = book.cover;
  el.bookTitle.textContent = book.title;
  el.bookAuthor.textContent = book.author;
  el.bookCredit.textContent = book.credit || "";
  const read = bookReadSet(book);
  const nextIdx = Math.max(0, book.chapters.findIndex((c) => !read.has(c.id)));
  const allRead = read.size >= book.chapters.length;
  el.bookContinueBtn.textContent = allRead ? "Перечитать с начала ›" : (read.size ? `Продолжить: ${book.chapters[nextIdx].title} ›` : "Начать читать ›");
  el.bookContinueBtn.onclick = () => openChapter(book, allRead ? 0 : nextIdx);
  el.bookChapters.innerHTML = "";
  book.chapters.forEach((ch, i) => {
    const words = ch.blocks.filter((x) => x.p).reduce((n, x) => n + (x.p.match(/\p{L}+/gu) || []).length, 0);
    const item = document.createElement("div"); item.className = "list-item";
    item.innerHTML = `<div class="li-icon">${read.has(ch.id) ? "✅" : "📄"}</div><div class="grow"><div class="li-title"></div><div class="li-sub">${words} ${plural(words, "слово", "слова", "слов")}</div></div>`;
    item.querySelector(".li-title").textContent = ch.title;
    item.onclick = () => openChapter(book, i);
    el.bookChapters.appendChild(item);
  });
}
function openChapter(book, i) {
  const ch = book.chapters[i];
  const last = i + 1 >= book.chapters.length;
  openReading({
    title: ch.title, level: book.level, credit: book.credit, blocks: ch.blocks,
    speakText: ch.blocks.filter((b) => b.p).map((b) => b.p).join(" "),
    primaryLabel: last ? "✓ Глава прочитана" : "Следующая глава ›",
    onPrimary: () => {
      markChapterRead(book, ch);
      if (last) { toast("Все главы прочитаны 📚"); confetti.burst(120); sfx.finish(); openBook(book); }
      else openChapter(book, i + 1);
    },
    back: () => openBook(book),
  });
}

// универсальная читалка: абзацы с переводом по тапу + картинки
let currentReading = null;
function openReading(cfg) {
  currentReading = cfg;
  showView("reader", cfg.title, true);
  el.readerTitle.textContent = cfg.title;
  el.readerLevel.textContent = cfg.level; el.readerLevel.className = "lvl " + cfg.level.toLowerCase();
  el.readerCredit.classList.toggle("hidden", !cfg.credit);
  el.readerCredit.textContent = cfg.credit || "";
  const known = knownTerms();
  el.readerText.innerHTML = "";
  for (const b of cfg.blocks) {
    if (b.img) {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.src = b.img; img.alt = b.alt || ""; img.loading = "lazy";
      if (b.w) img.style.width = b.w + "px";
      fig.appendChild(img); el.readerText.appendChild(fig);
    } else {
      const p = document.createElement("p");
      fillTokens(p, b.p, known);
      el.readerText.appendChild(p);
    }
  }
  el.readerTasksBtn.textContent = cfg.primaryLabel;
  el.readerTasksBtn.onclick = cfg.onPrimary;
}

// делит текст на слова-«кнопки» и остальное; известные слова подчёркивает
function fillTokens(container, text, known) {
  for (const m of text.matchAll(/(\p{L}+(?:'\p{L}+)?)|([^\p{L}]+)/gu)) {
    if (m[1]) {
      const span = document.createElement("span"); span.className = "w"; span.textContent = m[1];
      const r = lookup(m[1]);
      if (known && (known.has(m[1].toLowerCase()) || (r && known.has(r.base)))) span.classList.add("known");
      container.appendChild(span);
    } else container.appendChild(document.createTextNode(m[2]));
  }
}

// ---------- Диалоги ----------
let dlg = { d: null, node: null, steps: 0, bad: 0 };
function renderDialogues() {
  const done = lsGet("dialoguesDone", {});
  el.dialoguesList.innerHTML = "";
  for (const d of window.DIALOGUES) {
    const n = Object.keys(d.nodes).length;
    const item = document.createElement("div"); item.className = "list-item";
    item.innerHTML = `
      <div class="li-icon">${done[d.id] ? "✅" : d.icon}</div>
      <div class="grow"><div class="li-title"></div><div class="li-sub"></div></div>
      <span class="lvl ${d.level.toLowerCase()}">${d.level}</span>`;
    item.querySelector(".li-title").textContent = d.title;
    item.querySelector(".li-sub").textContent = `${d.who} · ${n} ${plural(n, "реплика", "реплики", "реплик")}${done[d.id] ? " · пройден" : ""}`;
    item.onclick = () => openDialogue(d);
    el.dialoguesList.appendChild(item);
  }
}
function openDialogue(d) {
  dlg = { d, node: d.start, steps: 0, bad: 0 };
  showView("dialogue", d.title, true);
  el.chatWho.textContent = `${d.icon} Собеседник: ${d.who}`;
  el.chatLog.innerHTML = "";
  renderDialogueNode();
}
function chatBubble(text, tr, cls) {
  const b = document.createElement("div"); b.className = "bubble " + cls;
  fillTokens(b, text, knownTerms());
  const t = document.createElement("span"); t.className = "tr"; t.textContent = tr; b.appendChild(t);
  el.chatLog.appendChild(b);
  return b;
}
function renderDialogueNode() {
  const n = dlg.d.nodes[dlg.node];
  chatBubble(n.npc, n.tr, "npc");
  speak(n.npc);
  el.chatOptions.innerHTML = "";
  if (n.end) {
    const b = document.createElement("button"); b.className = "btn btn-primary"; b.textContent = "Завершить диалог ›";
    b.onclick = finishDialogue; el.chatOptions.appendChild(b);
  } else {
    for (const o of n.options) {
      const b = document.createElement("button"); b.className = "chat-opt";
      const main = document.createElement("span"); main.textContent = o.text;
      const tr = document.createElement("span"); tr.className = "tr"; tr.textContent = o.tr;
      b.append(main, tr);
      b.onclick = () => chooseDialogueOption(o);
      el.chatOptions.appendChild(b);
    }
  }
  setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 50);
}
function chooseDialogueOption(o) {
  dlg.steps++;
  if (o.bad) { dlg.bad++; sfx.wrong(); } else { sfx.tap(); }
  chatBubble(o.text, o.tr, "you" + (o.bad ? " bad" : ""));
  logStudy(1, o.bad ? 0 : 1, 0);
  dlg.node = o.next;
  setTimeout(renderDialogueNode, 350);
}
function finishDialogue() {
  const done = lsGet("dialoguesDone", {}); done[dlg.d.id] = true; lsSet("dialoguesDone", done);
  showResult({ type: "dialogue", correct: dlg.steps - dlg.bad, wrong: dlg.bad, missed: [], sub: dlg.d.title, title: dlg.d.title });
}
el.chatLog.addEventListener("click", (e) => {
  const w = e.target.closest(".w"); if (!w) return;
  el.chatLog.querySelectorAll(".w.hl").forEach((x) => x.classList.remove("hl"));
  w.classList.add("hl");
  openWordSheet(w.textContent);
});
function renderStories() {
  const read = new Set(lsGet("readStories", []));
  const scores = lsGet("storyScores", {});
  el.storiesList.innerHTML = "";
  for (const s of window.STORIES) {
    const n = (s.text.match(/\p{L}+/gu) || []).length;
    const sc = scores[s.id];
    const badge = sc ? `<span class="score-badge ${sc.best === sc.total ? "" : "partial"}">${sc.best}/${sc.total}</span>` : "";
    const item = document.createElement("div"); item.className = "list-item";
    item.innerHTML = `
      <div class="li-icon">${read.has(s.id) ? "✅" : "📖"}</div>
      <div class="grow"><div class="li-title"></div><div class="li-sub">${n} ${plural(n, "слово", "слова", "слов")} · ${(s.tasks || []).length} ${plural((s.tasks || []).length, "задание", "задания", "заданий")}</div></div>
      ${badge}
      <span class="lvl ${s.level.toLowerCase()}">${s.level}</span>`;
    item.querySelector(".li-title").textContent = s.title;
    item.onclick = () => openStory(s);
    el.storiesList.appendChild(item);
  }
}
function knownTerms() { return new Set(allCards.map((c) => c.term.toLowerCase())); }
function openStory(s) {
  currentStory = s;
  const sc = lsGet("storyScores", {})[s.id];
  const n = (s.tasks || []).length;
  openReading({
    title: s.title, level: s.level, credit: "",
    blocks: s.text.split(/\n\s*\n/).map((p) => ({ p })),
    speakText: s.text.replace(/\s+/g, " "),
    primaryLabel: sc ? `Задания ещё раз (лучший ${sc.best}/${sc.total}) ›` : `Задания (${n}) ›`,
    onPrimary: () => startTasks(s),
    back: () => goRead(),
  });
}
el.readerText.addEventListener("click", (e) => {
  const w = e.target.closest(".w"); if (!w) return;
  el.readerText.querySelectorAll(".w.hl").forEach((x) => x.classList.remove("hl"));
  w.classList.add("hl");
  openWordSheet(w.textContent);
});
el.readerSpeakBtn.onclick = () => {
  if (!window.speechSynthesis || !currentReading) return;
  if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
  speak(currentReading.speakText);
};

// ---------- Задания после чтения ----------
let tasks = { story: null, list: [], index: 0, score: 0, locked: false, missed: [] };

function markStoryRead(story) {
  const read = lsGet("readStories", []);
  if (!read.includes(story.id)) { read.push(story.id); lsSet("readStories", read); }
}
function startTasks(story, override) {
  const list = override || story.tasks || [];
  if (!list.length) { markStoryRead(story); toast("Рассказ прочитан 📖"); goRead(); return; }
  tasks = { story, list: override ? list.slice() : shuffle(list), index: 0, score: 0, locked: false, missed: [], rework: !!override };
  showView("tasks", story.title, true);
  showTask();
}
function showTask() {
  const t = tasks.list[tasks.index];
  tasks.locked = false;
  el.taskProgress.textContent = `${tasks.index + 1} из ${tasks.list.length}`;
  el.taskKind.textContent = t.type === "tf" ? "Верно или неверно?" : t.type === "gap" ? "Вставь слово" : "Выбери ответ";
  el.taskText.textContent = t.q;
  el.taskFeedback.classList.add("hidden"); el.taskFeedback.innerHTML = "";
  el.taskNext.classList.add("hidden");
  const opts = t.type === "tf" ? ["Верно", "Неверно"] : t.options;
  el.taskOptions.innerHTML = "";
  opts.forEach((o, i) => {
    const b = document.createElement("button"); b.className = "opt-btn"; b.textContent = o;
    b.onclick = () => answerTask(b, i);
    el.taskOptions.appendChild(b);
  });
  pop(el.taskPrompt);
}
function answerTask(btn, i) {
  if (tasks.locked) return;
  tasks.locked = true;
  const t = tasks.list[tasks.index];
  const correctIdx = t.type === "tf" ? (t.a ? 0 : 1) : t.a;
  const correct = i === correctIdx;
  el.taskOptions.querySelectorAll(".opt-btn").forEach((b, j) => { b.disabled = true; if (j === correctIdx) b.classList.add("correct"); });
  if (!correct) btn.classList.add("wrong");
  if (correct) { tasks.score++; sfx.correct(); vibrate(12); } else { tasks.missed.push(t); sfx.wrong(); vibrate([30, 40, 30]); }
  logStudy(1, correct ? 1 : 0, 0);
  if (correct) { setTimeout(taskAdvance, 700); return; }
  if (t.e) {
    el.taskFeedback.innerHTML = "В тексте: <b></b>";
    el.taskFeedback.querySelector("b").textContent = `«${t.e}»`;
    el.taskFeedback.classList.remove("hidden");
  }
  el.taskNext.classList.remove("hidden");
}
function taskAdvance() { tasks.index++; if (tasks.index >= tasks.list.length) finishTasks(); else showTask(); }
el.taskNext.onclick = taskAdvance;
function finishTasks() {
  const story = tasks.story;
  markStoryRead(story);
  if (!tasks.rework) {
    const scores = lsGet("storyScores", {});
    const total = (story.tasks || []).length;
    const prev = scores[story.id];
    if (!prev || tasks.score > prev.best) scores[story.id] = { best: tasks.score, total };
    lsSet("storyScores", scores);
  }
  showResult({ type: "tasks", correct: tasks.score, wrong: tasks.missed.length, missed: tasks.missed, sub: story.title, title: story.title });
}

// поиск слова в словаре: точная форма → без окончаний (-s, -ed, -ing, -ly, -er…)
function lookup(raw) {
  const DICT = window.DICT || {};
  const w = raw.toLowerCase().replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
  if (!w) return null;
  const tryKey = (k) => (k && DICT[k] !== undefined) ? { base: k, tr: DICT[k] } : null;
  let r = tryKey(w); if (r) return r;
  const c = [];
  if (w.endsWith("'s")) c.push(w.slice(0, -2));
  if (w.endsWith("ies")) c.push(w.slice(0, -3) + "y");
  if (w.endsWith("es")) c.push(w.slice(0, -2));
  if (w.endsWith("s")) c.push(w.slice(0, -1));
  if (w.endsWith("ied")) c.push(w.slice(0, -3) + "y");
  if (w.endsWith("ed")) { c.push(w.slice(0, -2)); c.push(w.slice(0, -1)); if (w.length > 4 && w[w.length - 3] === w[w.length - 4]) c.push(w.slice(0, -3)); }
  if (w.endsWith("ing")) { c.push(w.slice(0, -3)); c.push(w.slice(0, -3) + "e"); if (w.length > 5 && w[w.length - 4] === w[w.length - 5]) c.push(w.slice(0, -4)); }
  if (w.endsWith("ly")) c.push(w.slice(0, -2));
  if (w.endsWith("ier")) c.push(w.slice(0, -3) + "y");
  if (w.endsWith("iest")) c.push(w.slice(0, -4) + "y");
  if (w.endsWith("er")) { c.push(w.slice(0, -2)); c.push(w.slice(0, -1)); }
  if (w.endsWith("est")) { c.push(w.slice(0, -3)); c.push(w.slice(0, -2)); }
  for (const k of c) { r = tryKey(k); if (r) return r; }
  return null;
}

async function openWordSheet(word) {
  const clean = word.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
  const r = lookup(clean);
  wsTerm = r ? r.base : clean.toLowerCase();
  el.wsWord.textContent = clean;
  el.wsBase.classList.toggle("hidden", !(r && r.base !== clean.toLowerCase()));
  if (r && r.base !== clean.toLowerCase()) el.wsBase.textContent = `основа: ${r.base}`;
  el.wsTr.value = r ? r.tr : "";
  el.wsStatus.classList.add("hidden");
  const inDeck = allCards.find((c) => c.term.toLowerCase() === wsTerm || c.term.toLowerCase() === clean.toLowerCase());
  if (inDeck) {
    const d = decks.find((x) => x.id === inDeck.deck_id);
    el.wsStatus.textContent = `✓ уже в наборе${d ? ` «${d.title}»` : ""}`;
    el.wsStatus.classList.remove("hidden");
  }
  openSheet(el.wordSheet);
  speak(clean);
  if (!r) {
    el.wsTr.placeholder = "перевожу…";
    try { const t = await translateWord(clean); if (!el.wsTr.value) el.wsTr.value = t; }
    catch (_) { el.wsTr.placeholder = "введи перевод вручную"; }
  }
}
el.wsSpeak.onclick = () => speak(el.wsWord.textContent);

// ---------- Выделила текст → «Прослушать» / «Перевести» ----------
let selText = "";
function updateSelBar() {
  const sel = document.getSelection();
  const text = sel && !sel.isCollapsed ? sel.toString().replace(/\s+/g, " ").trim() : "";
  const ae = document.activeElement;
  const typing = ae && /^(INPUT|TEXTAREA)$/.test(ae.tagName);
  const inApp = sel && sel.anchorNode && el.appScreen.contains(sel.anchorNode);
  if (text && inApp && !typing && text.length <= 400) {
    selText = text;
    el.selText.textContent = text.length > 70 ? text.slice(0, 70) + "…" : text;
    el.selBar.classList.remove("hidden");
  } else {
    el.selBar.classList.add("hidden");
  }
}
document.addEventListener("selectionchange", () => { clearTimeout(updateSelBar._t); updateSelBar._t = setTimeout(updateSelBar, 150); });
// не даём нажатию на панель снять выделение
el.selBar.addEventListener("pointerdown", (e) => e.preventDefault());
el.selSpeak.onclick = () => { if (selText) speak(selText); };
el.selTranslate.onclick = () => {
  if (!selText) return;
  const t = selText;
  try { document.getSelection().removeAllRanges(); } catch (_) {}
  el.selBar.classList.add("hidden");
  openWordSheet(t);
};
el.wsCloseBtn.onclick = closeSheets;
el.wsAddBtn.onclick = () => {
  const tr = el.wsTr.value.trim();
  if (!tr) { toast("Впиши перевод"); el.wsTr.focus(); return; }
  openDeckPicker(wsTerm, tr);
};

function openDeckPicker(term, definition) {
  el.pickList.innerHTML = decks.length ? "" : '<div class="hint">Наборов пока нет — создай новый ниже</div>';
  for (const d of decks) {
    const b = document.createElement("button"); b.className = "pick-item"; b.textContent = d.title;
    b.onclick = () => addToDeck(d, term, definition);
    el.pickList.appendChild(b);
  }
  el.pickNewInput.value = "";
  el.pickNewBtn.onclick = async () => {
    const title = el.pickNewInput.value.trim(); if (!title) { toast("Введи название"); return; }
    const d = await createDeck(title); if (d) addToDeck(d, term, definition);
  };
  el.wordSheet.classList.remove("show");
  openSheet(el.pickSheet);
}
async function addToDeck(deck, term, definition) {
  try {
    const { data, error } = await client.from("cards").insert({ user_id: user.id, deck_id: deck.id, term, definition }).select().single();
    if (error) { toast("Ошибка: " + error.message); return; }
    allCards.push(data); saveAllCardsCache();
    localStorage.removeItem("cards_" + deck.id);
    closeSheets();
    toast(`«${term}» › ${deck.title}`);
    sfx.correct(); confetti.burst(30);
    document.querySelectorAll("#readerText .w, #chatLog .w").forEach((s) => { const r = lookup(s.textContent); if (s.textContent.toLowerCase() === term || (r && r.base === term)) s.classList.add("known"); });
  } catch (_) { toast("Нет связи, попробуй ещё раз"); }
}
el.pickCloseBtn.onclick = closeSheets;

// =========================================================
//  Авторизация
// =========================================================
const keysReady = SUPABASE_URL && SUPABASE_ANON_KEY;

if (keysReady) {
  client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  client.auth.getSession().then(({ data }) => { if (data.session) enterApp(data.session.user); else showAuth(); });
  client.auth.onAuthStateChange((event, sess) => {
    if (event === "PASSWORD_RECOVERY") { showAuth(); setMode("recovery"); return; }
    if (sess) { if (!el.appScreen.classList.contains("active") && mode !== "recovery") enterApp(sess.user); }
    else showAuth();
  });
} else {
  showNotice("⚙️ Вход пока не подключён — нужно добавить ключи Supabase.");
  showAuth();
}

el.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = el.email.value.trim();
  const password = el.password.value;
  if (!keysReady) { showMsg("Вход ещё не подключён.", "error"); return; }
  el.submitBtn.disabled = true;
  showMsg("Минутку…", "");
  try {
    if (mode === "recovery") {
      const { error } = await client.auth.updateUser({ password });
      if (error) throw error;
      showMsg("Пароль обновлён!", "success");
      setMode("login");
      const { data } = await client.auth.getSession();
      if (data.session) enterApp(data.session.user);
    } else if (mode === "register") {
      const { error } = await client.auth.signUp({ email, password });
      if (error) throw error;
      showMsg("Аккаунт создан!", "success");
    } else {
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
    }
  } catch (err) {
    showMsg(translateError(err.message), "error");
  } finally {
    el.submitBtn.disabled = false;
  }
});

el.logoutBtn.addEventListener("click", async () => { if (client) await client.auth.signOut(); });

function translateError(msg) {
  const m = (msg || "").toLowerCase();
  if (m.includes("invalid login")) return "Неверная почта или пароль.";
  if (m.includes("already registered")) return "Такая почта уже зарегистрирована.";
  if (m.includes("failed to fetch")) return "Нет связи с сервером. Проверь интернет или разбуди проект в Supabase.";
  if (m.includes("password")) return "Пароль слишком короткий (минимум 6 символов).";
  return msg;
}

setMode("login");
if (window.speechSynthesis) speechSynthesis.getVoices();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("service-worker.js").catch(() => {}); });
}
