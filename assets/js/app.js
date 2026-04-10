// ══════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════
const categories = [
  { id:'kinship',  name:'Kinship Terms', icon:'👨‍👩‍👧', color:'var(--cat-kinship)',  count:8 },
  { id:'flora',    name:'Flora & Fauna', icon:'🌿',     color:'var(--cat-flora)',    count:8 },
  { id:'weather',  name:'Weather',       icon:'⛅',     color:'var(--cat-weather)',  count:4 },
  { id:'body',     name:'Parts of Body', icon:'🫁',     color:'var(--cat-body)',     count:5 },
  { id:'movement', name:'Movement',      icon:'🏃',     color:'var(--cat-movement)', count:6 },
  { id:'colours',  name:'Colours',       icon:'🎨',     color:'var(--cat-colours)',  count:5 },
];

const words = [
  // Kinship
  { id:'nikawiy',      cree:'nikâwiy',       phonetic:'ni-KÂ-wiy',        pos:'NOUN', posClass:'noun', meaning:'My mother',           category:'kinship',  network:['nohtawiy','nicimos','nimis'],      expert:{ wordClass:'NA',  stem:'okâwiy-',       paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nohtawiy',     cree:'nohtâwiy',      phonetic:'noh-TÂ-wiy',       pos:'NOUN', posClass:'noun', meaning:'My father',           category:'kinship',  network:['nikawiy','nohkom','nimosôm'],      expert:{ wordClass:'NA',  stem:'otâwiy-',       paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nicimos',      cree:'nîcimos',       phonetic:'nî-CI-mos',        pos:'NOUN', posClass:'noun', meaning:'My younger sibling',  category:'kinship',  network:['nikawiy','nistes'],                expert:{ wordClass:'NA',  stem:'îcimos-',       paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nimis',        cree:'nîmis',         phonetic:'nî-MIS',           pos:'NOUN', posClass:'noun', meaning:'My older sister',     category:'kinship',  network:['nikawiy','nohtawiy'],              expert:{ wordClass:'NA',  stem:'îmis-',         paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nohkom',       cree:'nôhkom',        phonetic:'nôh-KOM',          pos:'NOUN', posClass:'noun', meaning:'My grandmother',      category:'kinship',  network:['nimosôm'],                         expert:{ wordClass:'NA',  stem:'ohkom-',        paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nimosôm',      cree:'nimosôm',       phonetic:'ni-mo-SÔM',        pos:'NOUN', posClass:'noun', meaning:'My grandfather',      category:'kinship',  network:['nohkom'],                          expert:{ wordClass:'NA',  stem:'omosôm-',       paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nistes',       cree:'nistês',        phonetic:'nis-TÊS',          pos:'NOUN', posClass:'noun', meaning:'My older brother',    category:'kinship',  network:['nicimos','nimis'],                 expert:{ wordClass:'NA',  stem:'ostês-',        paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  { id:'nisimis',      cree:'nisîmis',       phonetic:'ni-SÎ-mis',        pos:'NOUN', posClass:'noun', meaning:'My younger sibling',  category:'kinship',  network:['nistes','nimis'],                  expert:{ wordClass:'NA',  stem:'isîmis-',       paradigm:'Dependent Animate Noun',          inflection:'Singular, 1st person' }},
  // Flora & Fauna
  { id:'maskwa',       cree:'maskwa',        phonetic:'MAS-kwa',          pos:'NOUN', posClass:'noun', meaning:'Bear',                category:'flora',    network:['moswa','atim'],                    expert:{ wordClass:'NA',  stem:'maskw-',        paradigm:'Independent Animate Noun',        inflection:'Singular' }},
  { id:'moswa',        cree:'môswa',         phonetic:'MÔS-wa',           pos:'NOUN', posClass:'noun', meaning:'Moose',               category:'flora',    network:['maskwa'],                          expert:{ wordClass:'NA',  stem:'môsw-',         paradigm:'Independent Animate Noun',        inflection:'Singular' }},
  { id:'atim',         cree:'atim',          phonetic:'a-TIM',            pos:'NOUN', posClass:'noun', meaning:'Dog',                 category:'flora',    network:['pisiskowatim'],                    expert:{ wordClass:'NA',  stem:'atim-',         paradigm:'Independent Animate Noun',        inflection:'Singular' }},
  { id:'pisiskowatim', cree:'pîsiskôwâtim',  phonetic:'pî-sis-kô-WÂ-tim', pos:'NOUN', posClass:'noun', meaning:'Cat',               category:'flora',    network:['atim'],                            expert:{ wordClass:'NA',  stem:'pîsiskôwâtim-', paradigm:'Independent Animate Noun',        inflection:'Singular' }},
  { id:'miciwin',      cree:'mîciwin',       phonetic:'mî-CI-win',        pos:'NOUN', posClass:'noun', meaning:'Food',                category:'flora',    network:['mistik'],                          expert:{ wordClass:'NI',  stem:'mîciwin-',      paradigm:'Independent Inanimate Noun',      inflection:'Singular' }},
  { id:'maskosiy',     cree:'maskosiy',      phonetic:'mas-KO-siy',       pos:'NOUN', posClass:'noun', meaning:'Grass',               category:'flora',    network:['mistik'],                          expert:{ wordClass:'NI',  stem:'maskosi-',      paradigm:'Independent Inanimate Noun',      inflection:'Singular' }},
  { id:'mistik',       cree:'mistik',        phonetic:'MIS-tik',          pos:'NOUN', posClass:'noun', meaning:'Tree / stick',        category:'flora',    network:['maskosiy'],                        expert:{ wordClass:'NI',  stem:'mistik-',       paradigm:'Independent Inanimate Noun',      inflection:'Singular' }},
  { id:'sipiy',        cree:'sîpiy',         phonetic:'SÎ-piy',           pos:'NOUN', posClass:'noun', meaning:'River',               category:'flora',    network:['mistik'],                          expert:{ wordClass:'NI',  stem:'sîpiy-',        paradigm:'Independent Inanimate Noun',      inflection:'Singular' }},
  // Weather
  { id:'kisikaw',      cree:'kîsikâw',       phonetic:'kî-SI-kâw',        pos:'VAI',  posClass:'vai',  meaning:'It is daytime',       category:'weather',  network:['kisastew','tahkayaw','kimiwan'],   expert:{ wordClass:'VII', stem:'kîsikâ-',       paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'kisastew',     cree:'kisâstêw',      phonetic:'ki-SÂS-têw',       pos:'VAI',  posClass:'vai',  meaning:'It is hot',           category:'weather',  network:['tahkayaw','kisikaw'],              expert:{ wordClass:'VII', stem:'kisâstê-',      paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'tahkayaw',     cree:'tahkâyâw',      phonetic:'tah-KÂ-yâw',       pos:'VAI',  posClass:'vai',  meaning:'It is cold',          category:'weather',  network:['kisastew'],                        expert:{ wordClass:'VII', stem:'tahkâyâ-',      paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'kimiwan',      cree:'kimiwan',       phonetic:'ki-MI-wan',         pos:'VAI',  posClass:'vai',  meaning:'It is raining',       category:'weather',  network:['kisikaw'],                         expert:{ wordClass:'VII', stem:'kimiwanw-',     paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  // Body
  { id:'miskat',       cree:'miskât',        phonetic:'mis-KÂT',          pos:'NOUN', posClass:'noun', meaning:'Leg',                 category:'body',     network:['miskisik','mihcet'],               expert:{ wordClass:'NI',  stem:'miskât-',       paradigm:'Dependent Inanimate Noun',        inflection:'Singular' }},
  { id:'mistikwan',    cree:'mistikwân',     phonetic:'mis-ti-KWÂN',      pos:'NOUN', posClass:'noun', meaning:'Head',                category:'body',     network:['miskisik'],                        expert:{ wordClass:'NI',  stem:'mistikwân-',    paradigm:'Dependent Inanimate Noun',        inflection:'Singular' }},
  { id:'mipit',        cree:'mîpit',         phonetic:'MÎ-pit',           pos:'NOUN', posClass:'noun', meaning:'Tooth',               category:'body',     network:['mistikwan'],                       expert:{ wordClass:'NI',  stem:'mîpit-',        paradigm:'Dependent Inanimate Noun',        inflection:'Singular' }},
  { id:'miskisik',     cree:'miskîsik',      phonetic:'mis-KÎ-sik',       pos:'NOUN', posClass:'noun', meaning:'Eye',                 category:'body',     network:['mistikwan','miskat'],              expert:{ wordClass:'NI',  stem:'miskîsik-',     paradigm:'Dependent Inanimate Noun',        inflection:'Singular' }},
  { id:'mihcet',       cree:'mihcêt',        phonetic:'mih-CÊT',          pos:'NOUN', posClass:'noun', meaning:'Many / finger',       category:'body',     network:['miskat'],                          expert:{ wordClass:'NI',  stem:'mihcêt-',       paradigm:'Dependent Inanimate Noun',        inflection:'Singular' }},
  // Movement
  { id:'pimiy',        cree:'pimiy',         phonetic:'PI-miy',           pos:'VAI',  posClass:'vai',  meaning:'Goes along',          category:'movement', network:['posiw','kiwew'],                   expert:{ wordClass:'VAI', stem:'pimi-',         paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  { id:'posiw',        cree:'pôsiw',         phonetic:'PÔ-siw',           pos:'VAI',  posClass:'vai',  meaning:'Boards / embarks',    category:'movement', network:['pimiy','pihtokew'],                expert:{ wordClass:'VAI', stem:'pôsi-',         paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  { id:'papamipahtaw', cree:'papâmipahtâw',  phonetic:'pa-pâ-mi-PAH-tâw', pos:'VAI',  posClass:'vai',  meaning:'Runs around',         category:'movement', network:['pimiy','wayawiw'],                 expert:{ wordClass:'VAI', stem:'papâmipahtâ-',  paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  { id:'kiwew',        cree:'kîwêw',         phonetic:'KÎ-wêw',           pos:'VAI',  posClass:'vai',  meaning:'Goes home',           category:'movement', network:['pimiy','pihtokew'],                expert:{ wordClass:'VAI', stem:'kîwê-',         paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  { id:'pihtokew',     cree:'pihtokêw',      phonetic:'pih-TO-kêw',       pos:'VAI',  posClass:'vai',  meaning:'Enters',              category:'movement', network:['wayawiw','kiwew'],                 expert:{ wordClass:'VAI', stem:'pihtokê-',      paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  { id:'wayawiw',      cree:'wayawîw',       phonetic:'wa-ya-WÎW',        pos:'VAI',  posClass:'vai',  meaning:'Goes outside',        category:'movement', network:['pihtokew'],                        expert:{ wordClass:'VAI', stem:'wayawî-',       paradigm:'Animate Intransitive Verb',       inflection:'3rd person singular' }},
  // Colours
  { id:'mihkwaw',      cree:'mihkwâw',       phonetic:'mih-KWÂW',         pos:'VII',  posClass:'vii',  meaning:'It is red',           category:'colours',  network:['osaw','askihtakwaw'],              expert:{ wordClass:'VII', stem:'mihkwâ-',       paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'osaw',         cree:'osâwâw',        phonetic:'o-SÂ-wâw',         pos:'VII',  posClass:'vii',  meaning:'It is yellow',        category:'colours',  network:['mihkwaw'],                         expert:{ wordClass:'VII', stem:'osâwâ-',        paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'sipihkwaw',    cree:'sîpihkwâw',     phonetic:'sî-pih-KWÂW',      pos:'VII',  posClass:'vii',  meaning:'It is blue',          category:'colours',  network:['kaskitewaw'],                      expert:{ wordClass:'VII', stem:'sîpihkwâ-',     paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'askihtakwaw',  cree:'askihtakwâw',   phonetic:'as-kih-TAK-wâw',   pos:'VII',  posClass:'vii',  meaning:'It is green',         category:'colours',  network:['sipihkwaw','mihkwaw'],             expert:{ wordClass:'VII', stem:'askihtakwâ-',   paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
  { id:'kaskitewaw',   cree:'kaskitêwâw',    phonetic:'kas-ki-TÊ-wâw',    pos:'VII',  posClass:'vii',  meaning:'It is black',         category:'colours',  network:['sipihkwaw'],                       expert:{ wordClass:'VII', stem:'kaskitêwâ-',    paradigm:'Inanimate Intransitive Verb',     inflection:'3rd person singular' }},
];

const examples = {
  'nikawiy':   [{ cree:'Nikâwiy mîcisow.',           en:'My mother is eating.' },
                { cree:'Wâhyaw itôhtêw nikâwiy.',     en:'My mother went far away.' }],
  'nohtawiy':  [{ cree:'Nohtâwiy ayamihtâw.',         en:'My father is reading.' }],
  'nicimos':   [{ cree:'Nîcimos nitohtawâw.',         en:'I listen to my younger sibling.' }],
  'nimis':     [{ cree:'Nîmis masinahikêw.',          en:'My older sister is writing.' }],
  'maskwa':    [{ cree:'Maskwa sîpîhk ayâw.',         en:'The bear is at the river.' }],
  'atim':      [{ cree:'Atim nîcihâw.',               en:'The dog is friendly.' }],
  'kisastew':  [{ cree:'Kisâstêw anohc.',             en:'It is hot today.' }],
  'tahkayaw':  [{ cree:'Tahkâyâw tipiskâki.',         en:'It is cold at night.' }],
  'kimiwan':   [{ cree:'Kimiwan sêmâk.',              en:'It is raining soon.' }],
  'kiwew':     [{ cree:'Kîwêw wîpac.',                en:'She/he goes home soon.' }],
  'pihtokew':  [{ cree:'Pihtokêw wâskahikanihk.',     en:'She/he enters the house.' }],
  'wayawiw':   [{ cree:'Wayawîw pîkiskwêwak.',        en:'They go outside to talk.' }],
};

const networkRelations = {
  'nikawiy':  [{ id:'nohtawiy', rel:'Broader' },  { id:'nicimos', rel:'Narrower' }, { id:'nimis', rel:'Related' }],
  'nohtawiy': [{ id:'nikawiy',  rel:'Broader' },  { id:'nohkom',  rel:'Related' },  { id:'nimosôm', rel:'Related' }],
  'nicimos':  [{ id:'nikawiy',  rel:'Broader' },  { id:'nistes',  rel:'Related' }],
  'maskwa':   [{ id:'moswa',    rel:'Related' },  { id:'atim',    rel:'Related' }],
  'kisikaw':  [{ id:'kisastew', rel:'Related' },  { id:'tahkayaw', rel:'Related' }, { id:'kimiwan', rel:'Related' }],
  'miskat':   [{ id:'miskisik', rel:'Related' },  { id:'mihcet',  rel:'Related' }],
  'pimiy':    [{ id:'posiw',    rel:'Related' },  { id:'kiwew',   rel:'Related' }, { id:'pihtokew', rel:'Narrower' }, { id:'wayawiw', rel:'Narrower' }],
  'mihkwaw':  [{ id:'osaw',     rel:'Related' },  { id:'sipihkwaw', rel:'Related' }, { id:'askihtakwaw', rel:'Related' }],
};

const lessons = [
  { id:'l1', name:'Parts of the Body', wordCount:12, totalWords:18, progress:67,  tags:['Parts of Body','Kinship'],  lastEdited:'Jan 10' },
  { id:'l2', name:'Intro Cree Class',  wordCount:9,  totalWords:29, progress:29,  tags:['Kinship','Movement'],       lastEdited:'Jan 8'  },
  { id:'l3', name:'Weather Verbs',     wordCount:14, totalWords:14, progress:100, tags:['Weather'],                  lastEdited:'Jan 6'  },
];

// ══════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════
let currentScreen    = 'home';
let screenHistory    = [];
let expertMode       = { search: false, cat: false, detail: false };
let recentWords      = ['nikawiy', 'nohtawiy', 'nicimos'];
let currentCatId     = null;
let currentNetworkId = 'nikawiy';
let allLessons       = [...lessons];
let currentSearchWords = [...words];
let sortState        = { search:'asc', cat:'asc' };

// ══════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════
function showScreen(id, push = true) {
  if (push && currentScreen !== id) screenHistory.push(currentScreen);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  currentScreen = id;
  const tabMap = { home:'home', search:'search', network:'network', lessons:'lessons', category:'search', worddetail:'search' };
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navEl = document.getElementById('nav-' + (tabMap[id] || id));
  if (navEl) navEl.classList.add('active');
}

function goBack() {
  if (screenHistory.length > 0) showScreen(screenHistory.pop(), false);
  else showScreen('home', false);
}

function switchTab(tab) {
  screenHistory = [];
  if      (tab === 'search')  { loadWordList(words, 'All Words', words.length + ' words'); showScreen('search', false); }
  else if (tab === 'network') { loadNetwork(currentNetworkId); showScreen('network', false); }
  else if (tab === 'lessons') { renderLessons(allLessons); showScreen('lessons', false); }
  else                        { showScreen('home', false); }
}

// ══════════════════════════════════════════════
//  HOME
// ══════════════════════════════════════════════
function initHome() {
  document.getElementById('cat-grid').innerHTML = categories.map(c => `
    <div class="cat-card" style="background:${c.color}" onclick="openCategory('${c.id}')">
      <span class="cat-icon">${c.icon}</span>
      <div class="cat-name">${c.name}</div>
      <div class="cat-count">${c.count} words</div>
    </div>
  `).join('');
  renderRecent();
}

function renderRecent() {
  const el = document.getElementById('recent-list');
  if (!recentWords.length) {
    el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--on-surface-variant);font-size:13px;font-weight:500;">No recently viewed words</div>';
    return;
  }

  el.innerHTML = recentWords.slice(0, 5).map(wid => {
    const w = words.find(x => x.id === wid); if (!w) return '';
    return `<div class="recent-item">
      <div class="ri-main" onclick="openWordDetail('${w.id}')">
        <div class="ri-word">${w.cree}</div>
        <div class="ri-phonetic">${w.phonetic}</div>
        <div class="ri-meaning">${w.meaning}</div>
      </div>

      <button class="ri-remove" onclick="event.stopPropagation(); removeRecent('${w.id}')">✕</button>
      <span class="pos-badge pos-${w.posClass}">${w.pos}</span>
    </div>`;
  }).join('');
}

function removeRecent(id) {
  recentWords = recentWords.filter(w => w !== id);
  renderRecent();
}
function clearRecent() { recentWords = []; renderRecent(); }
function homeSearch(val) { if (val.length > 0) goSearch(); }
function goSearch() { loadWordList(words, 'All Words', words.length + ' words'); showScreen('search'); setTimeout(() => document.getElementById('search-filter-input').focus(), 80); }
function goAllWords() { loadWordList(words, 'All Words', words.length + ' words'); showScreen('search'); }

// ══════════════════════════════════════════════
//  CATEGORY
// ══════════════════════════════════════════════
function openCategory(catId) {
  currentCatId = catId;
  const cat = categories.find(c => c.id === catId);
  const catWords = sortWords(words.filter(w => w.category === catId), sortState.cat);
  document.getElementById('cat-title').textContent = cat.name;
  document.getElementById('cat-subtitle').textContent = catWords.length + ' words';
  document.getElementById('cat-filter-input').value = '';
  expertMode.cat = false;
  document.getElementById('cat-expert-toggle').classList.remove('on');
  renderWordCards('cat-word-list', catWords, 'cat');
  showScreen('category');
}

function filterCatList(val) {
  const filtered = filterWords(words.filter(w => w.category === currentCatId), val);
  renderWordCards('cat-word-list', sortWords(filtered, sortState.cat), 'cat');
}


// ══════════════════════════════════════════════
//  WORD LIST
// ══════════════════════════════════════════════
function loadWordList(arr, title, sub) {
  currentSearchWords = arr;
  document.getElementById('search-title').textContent = title;
  document.getElementById('search-subtitle').textContent = sub;
  document.getElementById('search-filter-input').value = '';
  expertMode.search = false;
  document.getElementById('search-expert-toggle').classList.remove('on');
  renderWordCards('search-word-list', sortWords(arr, sortState.search), 'search');
}

function filterWordList(val) {
  const filtered = filterWords(currentSearchWords, val);
  renderWordCards('search-word-list', sortWords(filtered, sortState.search), 'search');
}

function filterWords(arr, val) {
  if (!val.trim()) return arr;
  const q = val.toLowerCase();
  return arr.filter(w => w.cree.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q) || w.phonetic.toLowerCase().includes(q));
}

function sortWords(arr, direction) {
  const dir = direction === 'desc' ? -1 : 1;
  return [...arr].sort((a, b) => a.cree.localeCompare(b.cree, 'en', { sensitivity:'base' }) * dir);
}

function toggleSort(ctx) {
  sortState[ctx] = sortState[ctx] === 'asc' ? 'desc' : 'asc';
  const inputId = ctx === 'search' ? 'search-filter-input' : 'cat-filter-input';
  const listId  = ctx === 'search' ? 'search-word-list' : 'cat-word-list';
  const sourceArr = ctx === 'search' ? currentSearchWords : words.filter(w => w.category === currentCatId);
  const query = document.getElementById(inputId)?.value || '';
  const filtered = filterWords(sourceArr, query);
  renderWordCards(listId, sortWords(filtered, sortState[ctx]), ctx);
  showToast(`Sorted ${sortState[ctx] === 'asc' ? 'A→Z' : 'Z→A'}`);
}

function renderWordCards(containerId, arr, ctx) {
  const el = document.getElementById(containerId);
  el.innerHTML = arr.length
    ? arr.map(w => wordCardHTML(w, ctx)).join('')
    : '<div style="padding:32px;text-align:center;color:var(--on-surface-variant);font-size:14px;font-weight:500;">No words found</div>';
}

function wordCardHTML(w, ctx) {
  const exHtml = (examples[w.id] || []).map(e =>
    `<div class="example-block"><div class="ex-cree">${e.cree}</div><div class="ex-en">${e.en}</div></div>`
  ).join('');
  return `<div class="word-card">
    <div class="wc-top">
  <div>
    <div class="wc-name">${w.cree}</div>
    <div class="wc-phonetic">${w.phonetic}</div>
  </div>

  <button class="wc-speaker" onclick="speak('${w.cree}')" title="Pronounce">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  </button>
</div>
    <div class="wc-phonetic">${w.phonetic}</div>
    <div class="wc-meaning">${w.meaning}</div>
    <div class="wc-tags">
      <span class="tag pos-${w.posClass}">${w.pos}</span>
      ${exHtml ? `<span class="tag tag-ex" onclick="toggleExamples(this)">Examples</span>` : ''}
      <span class="tag tag-net" onclick="openNetworkFromCard('${w.id}')">Network</span>
    </div>
    <div class="examples-panel" style="display:none">${exHtml}</div>
    <div class="expert-data ${expertMode[ctx] ? 'visible' : ''}">
      <b>Word Class:</b> ${w.expert.wordClass} &nbsp;·&nbsp; <b>Stem:</b> ${w.expert.stem}<br>
      <b>Paradigm:</b> ${w.expert.paradigm}<br>
      <b>Inflection:</b> ${w.expert.inflection}
    </div>
    <div class="wc-actions">
  <button class="btn-details" onclick="openWordDetail('${w.id}')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
    View Details
  </button>

  <button class="btn-net" onclick="openNetworkFromCard('${w.id}')">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
    Network
  </button>
</div>
  </div>`;
}

function toggleExamples(btn) {
  const panel = btn.closest('.word-card').querySelector('.examples-panel');
  const open = panel.style.display === 'block';
  panel.style.display = open ? 'none' : 'block';
  btn.style.background = open ? '' : 'var(--secondary-container)';
  btn.style.color = open ? '' : 'var(--on-secondary-container)';
}

// ══════════════════════════════════════════════
//  EXPERT MODE
// ══════════════════════════════════════════════
function toggleExpert(ctx) {
  expertMode[ctx] = !expertMode[ctx];
  const ids = { search:'search-expert-toggle', cat:'cat-expert-toggle', detail:'wd-expert-toggle' };
  document.getElementById(ids[ctx]).classList.toggle('on', expertMode[ctx]);
  if (ctx === 'detail') {
    const s = document.getElementById('wd-expert-section');
    if (s) s.style.display = expertMode.detail ? 'block' : 'none';
  } else {
    const listId = ctx === 'search' ? 'search-word-list' : 'cat-word-list';
    document.querySelectorAll(`#${listId} .expert-data`).forEach(el => el.classList.toggle('visible', expertMode[ctx]));
  }
}

// ══════════════════════════════════════════════
//  WORD DETAIL
// ══════════════════════════════════════════════
function openWordDetail(wordId) {
  const w = words.find(x => x.id === wordId); if (!w) return;
  recentWords = [wordId, ...recentWords.filter(id => id !== wordId)].slice(0, 10);
  renderRecent();
  document.getElementById('wd-header-word').textContent = w.cree;
  document.getElementById('wd-header-phonetic').textContent = w.phonetic;
  expertMode.detail = false;
  document.getElementById('wd-expert-toggle').classList.remove('on');

  const exHtml = (examples[w.id] || []).map(e =>
    `<div class="example-block"><div class="ex-cree">${e.cree}</div><div class="ex-en">${e.en}</div></div>`
  ).join('') || '<div style="color:var(--on-surface-variant);font-size:13px;font-weight:500;">No examples available</div>';

  const rels = getNetworkRelations(wordId);
  const relHtml = rels.length ? rels.map(r => {
    const rw = words.find(x => x.id === r.id); if (!rw) return '';
    return `<button class="related-btn" onclick="openNetworkFromCard('${rw.id}')">
      <span>${rw.cree} → ${rw.meaning}</span>
      <span class="rel-badge rel-${r.rel.toLowerCase()}">${r.rel}</span>
    </button>`;
  }).join('') : '<div style="color:var(--on-surface-variant);font-size:13px;font-weight:500;">No network connections defined</div>';
  document.getElementById('wd-body').innerHTML = `
    <div class="wd-meaning">${w.meaning}</div>
    <div class="wd-pos"><span class="pos-badge pos-${w.posClass}">${w.pos}</span></div>
    <div class="wd-section"><div class="wd-section-title">Examples</div>${exHtml}</div>
    <div class="wd-section"><div class="wd-section-title">Word Network</div>${relHtml}</div>
    <div class="wd-section" id="wd-expert-section" style="display:none;">
      <div class="wd-section-title">Morphological Data</div>
      <div class="expert-section">
        <div class="expert-row-detail"><label>Word Class</label><span>${w.expert.wordClass}</span></div>
        <div class="expert-row-detail"><label>Stem</label><span>${w.expert.stem}</span></div>
        <div class="expert-row-detail"><label>Paradigm</label><span>${w.expert.paradigm}</span></div>
        <div class="expert-row-detail"><label>Inflection</label><span>${w.expert.inflection}</span></div>
      </div>
    </div>`;
  showScreen('worddetail');
  document.getElementById('wd-speaker-btn').onclick = () => speak(w.cree);
}

// ══════════════════════════════════════════════
//  NETWORK
// ══════════════════════════════════════════════
function getNetworkRelations(wordId) {
  if (networkRelations[wordId]) return networkRelations[wordId];
  const w = words.find(x => x.id === wordId);
  return (w && w.network) ? w.network.map(nid => ({ id: nid, rel: 'Related' })) : [];
}

function loadNetwork(wordId) {
  const w = words.find(x => x.id === wordId); if (!w) return;
  currentNetworkId = wordId;
  const rels = getNetworkRelations(wordId);
  document.getElementById('central-card').innerHTML = `
    <div class="central-label">Central Word</div>
    <div class="central-name">${w.cree}
      <button style="background:none;border:none;color:rgba(255,255,255,0.65);cursor:pointer;margin-left:8px;vertical-align:middle;" onclick="speak('${w.cree}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
      </button>
    </div>
    <div class="central-phonetic">${w.phonetic}</div>
    <div class="central-meaning">${w.meaning}</div>
    <span class="central-pos">${w.pos}</span>`;
  document.getElementById('connected-hdr').textContent = `Connected Words (${rels.length})`;
  document.getElementById('connected-list').innerHTML = rels.map(r => {
    const rw = words.find(x => x.id === r.id); if (!rw) return '';
    return `<div class="connected-item" onclick="loadNetwork('${rw.id}')">
      <div class="ci-info"><div class="ci-name">${rw.cree}</div><div class="ci-meaning">${rw.meaning}</div></div>
      <span class="rel-badge rel-${r.rel.toLowerCase()}">${r.rel}</span>
      <button class="btn-view-sm" onclick="event.stopPropagation(); openWordDetail('${rw.id}')">View</button>
    </div>`;
  }).join('');
}

function openNetworkFromCard(wordId) { loadNetwork(wordId); showScreen('network'); }

let editingLessonId = null;

function editLesson(id) {
  const lesson = allLessons.find(l => l.id === id);
  if (!lesson) return;

  editingLessonId = id;

  document.getElementById('new-lesson-name').value = lesson.name;
  document.getElementById('new-lesson-desc').value = lesson.desc || '';

  document.querySelector('.modal-box h3').textContent = 'Edit Lesson';
  document.querySelector('.btn-create').textContent = 'Save Changes';

  document.getElementById('new-lesson-modal').classList.add('open');
}
// ══════════════════════════════════════════════
//  LESSONS
// ══════════════════════════════════════════════
function renderLessons(arr) {
  const el = document.getElementById('lessons-list');
  el.innerHTML = arr.length ? arr.map(l => `
    <div class="lesson-card" draggable="true" data-id="${l.id}">
  <div class="lc-hdr">
    
    <div class="lc-left">
      <span class="drag-handle">⠿</span>
      <div>
        <div class="lc-name">${l.name}</div>
        ${l.desc ? `<div class="lc-desc">${l.desc}</div>` : ''}
      </div>
    </div>

    <div class="lc-actions">
      <button class="lc-action" onclick="editLesson('${l.id}')">✏️</button>
      <button class="lc-action" onclick="deleteLesson('${l.id}')">✕</button>
    </div>

  </div>
      <div class="lc-count">${l.wordCount} of ${l.totalWords} words reviewed &nbsp;·&nbsp; ${l.progress}%</div>
      <div class="progress-wrap"><div class="progress-fill" style="width:${l.progress}%"></div></div>
      <div class="lc-tags">${l.tags.map(t => `<span class="lc-tag">${t}</span>`).join('')}</div>
      <div class="lc-footer">
        <div class="lc-edit-info">Last edited ${l.lastEdited}</div>
        <button class="btn-share" onclick="showToast('Link copied!')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          Share
        </button>
      </div>
    </div>`).join('')
  : '<div style="padding:32px;text-align:center;color:var(--on-surface-variant);font-size:14px;font-weight:500;">No lessons found</div>';
}

function filterLessons(val) {
  renderLessons(allLessons.filter(l => l.name.toLowerCase().includes(val.toLowerCase())));
}

function deleteLesson(id) {
  allLessons = allLessons.filter(l => l.id !== id);
  renderLessons(allLessons);
  showToast('Lesson deleted');
}

function openNewLesson() {
  document.getElementById('new-lesson-name').value = '';
  document.getElementById('new-lesson-desc').value = '';
  document.getElementById('new-lesson-modal').classList.add('open');
  setTimeout(() => document.getElementById('new-lesson-name').focus(), 80);
}

function closeNewLesson() { document.getElementById('new-lesson-modal').classList.remove('open'); }

function createLesson() {
  const name = document.getElementById('new-lesson-name').value.trim();
  const desc = document.getElementById('new-lesson-desc').value.trim();

  if (!name) {
    showToast('Please enter a lesson name');
    return;
  }

  if (editingLessonId) {
    const lesson = allLessons.find(l => l.id === editingLessonId);
    if (lesson) {
      lesson.name = name;
      lesson.desc = desc;
      lesson.lastEdited = 'Just now';
    }

    editingLessonId = null;
    document.querySelector('.modal-box h3').textContent = 'New Lesson';
    document.querySelector('.btn-create').textContent = 'Create Lesson';
    showToast('Lesson updated!');
  } else {
    allLessons.unshift({
      id: 'l' + Date.now(),
      name,
      desc,
      wordCount: 0,
      totalWords: 0,
      progress: 0,
      tags: [],
      lastEdited: 'Just now'
    });

    showToast('Lesson created!');
  }

  renderLessons(allLessons);
  closeNewLesson();
}

function closeModalOutside(e) { if (e.target === document.getElementById('new-lesson-modal')) closeNewLesson(); }

// ══════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════
function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en'; window.speechSynthesis.speak(u);
  } else showToast('Audio not supported');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── INIT ──
initHome();
loadNetwork('nikawiy');
renderLessons(allLessons);

let draggedId = null;

document.addEventListener('dragstart', (e) => {
  const card = e.target.closest('.lesson-card');
  if (!card) return;

  draggedId = card.dataset.id;
  card.classList.add('dragging');
});

document.addEventListener('dragend', (e) => {
  const card = e.target.closest('.lesson-card');
  if (!card) return;

  card.classList.remove('dragging');
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();

  const container = document.getElementById('lessons-list');
  const afterElement = getDragAfterElement(container, e.clientY);
  const draggingEl = document.querySelector('.dragging');

  if (!draggingEl) return;

  if (afterElement == null) {
    container.appendChild(draggingEl);
  } else {
    container.insertBefore(draggingEl, afterElement);
  }
});

document.addEventListener('drop', () => {
  const newOrder = [...document.querySelectorAll('.lesson-card')]
    .map(card => card.dataset.id);

  // reorder array
  allLessons = newOrder.map(id => allLessons.find(l => l.id === id));

  showToast('Lessons reordered');
});
function getDragAfterElement(container, y) {
  const els = [...container.querySelectorAll('.lesson-card:not(.dragging)')];

  return els.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}