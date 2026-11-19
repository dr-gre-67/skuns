'use strict';

const GENRES = ['архивкор', 'дигикор', 'саундклауд-рэп', 'гиперпоп', 'эмо', 'jerk'];
const CITIES = ['Москва', 'СПб', 'Новосибирск', 'Томск', 'Ростов', 'Чита', 'Уфа'];

const PALETTES = [
  ['#2b0a3d', '#ff2d78'],
  ['#0f1035', '#41e8ff'],
  ['#1a0033', '#8b5cf6'],
  ['#001a10', '#a3ff12'],
  ['#33001a', '#ff5c8a'],
  ['#001f2b', '#7cf7ff'],
  ['#1f0d00', '#ff9d2d'],
  ['#12001f', '#c86bff'],
  ['#001428', '#41e8ff'],
  ['#220011', '#ff2d78']
];

const ARTISTS = [
  { id: 'madk1d', name: 'madk1d', city: 'Москва', genre: 'саундклауд-рэп', vibe: 'главный герой волны', bio: 'Главный герой волны. Sexyswag на репите, челка на глаза — «так по***» и «ты че обиделась» знает весь район.', av: 'avatars/madk1d.jpg', fl: 154865, sc: 'https://soundcloud.com/madk1d9' },
  { id: 'temnyy-princ', name: 'тёмный принц', city: 'Москва', genre: 'архивкор', vibe: 'мрачный, лиричный', bio: 'Мрачные треды и лирика под полночь: «гной», «отвратительный король», «ПАПА». Пишет то, что ты думаешь в 3am.', av: 'avatars/temnyy-princ.jpg', fl: 176218, sc: 'https://soundcloud.com/darkprinceee' },
  { id: 'fortuna812', name: 'FORTUNA 812', city: 'СПб', genre: 'архивкор', vibe: '812 legion', bio: '812 legion. «trytofriend» и «Кошмар» — уже классика подвала, 17 и 11 миллионов прослушиваний.', av: 'avatars/fortuna812.jpg', fl: 124269, sc: 'https://soundcloud.com/fortunasound' },
  { id: 'paranoya', name: 'паранойя', city: 'Ростов', genre: 'гиперпоп', vibe: 'гоуфи-миксы', bio: 'Гоуфи-миксы с хором гостей: madk1d, lfy, waunty812 — все были в третьем выпуске.', av: 'avatars/paranoya.jpg', fl: 37674, sc: 'https://soundcloud.com/wheredyoufindthisbruh' },
  { id: 'yupi', name: 'Юпи', city: 'Москва', genre: 'гиперпоп', vibe: '@jupi_sleep', bio: '«Любовь.mp3» и «не ревную» — сольник, который гремит в наушниках и не собирается замолкать.', av: 'avatars/yupi.jpg', fl: 36473, sc: 'https://soundcloud.com/jupi_n3dslp' },
  { id: 'unki', name: 'unki', city: 'Новосибирск', genre: 'jerk', vibe: '@unkiplug', bio: 'Jerk-треки из Новосибирска. «NEW BOYS» держит темп всей Сибири.', av: 'avatars/unki.jpg', fl: 43929, sc: 'https://soundcloud.com/unkiplug' },
  { id: 'greyrock', name: 'greyrock', city: 'СПб', genre: 'архивкор', vibe: 'прод. сцены', bio: '«распять» — 13 миллионов. Продюсер половины сцены и артист в одном лице.', av: 'avatars/greyrock.jpg', fl: 25700, sc: 'https://soundcloud.com/greyrock1' },
  { id: 'tewiq', name: 'tewiq', city: 'Томск', genre: 'дигикор', vibe: 'продюсер + артист', bio: '«подиум» с паранойей и королевским XVII. Биты, от которых сохнут наушники.', av: 'avatars/tewiq.jpg', fl: 51618, sc: 'https://soundcloud.com/tewiq' },
  { id: 'aquakey', name: 'Aquakey', city: 'Уфа', genre: 'jerk', vibe: 'plugg-звук', bio: '«Feet & Latex» — почти 8 миллионов. Грязный бас и чистая дерзость.', av: 'avatars/aquakey.jpg', fl: 16881, sc: 'https://soundcloud.com/podosinnikovrodion40' },
  { id: 'villian', name: 'VILLIAN', city: 'Москва', genre: 'дигикор', vibe: 'madk1d & VILLIAN', bio: '«Случайно Наступил На Шприц» и «8 миля» с madk1d. Электроника встречает рэп на полной громкости.', av: 'avatars/villian.jpg', fl: 9509, sc: 'https://soundcloud.com/villianwhy' },
  { id: 'onda-andar', name: 'ONDA ANDAR', city: 'СПб', genre: 'эмо', vibe: 'cachalot #2016', bio: '«cachalot #2016» и «type london» — 15 и 12 миллионов. Спокойнее остальных, но всё ещё свои.', av: 'avatars/onda-andar.jpg', fl: 107445, sc: 'https://soundcloud.com/onda_andar' },
  { id: 'ural-gaisin', name: 'урал гайсин', city: 'Уфа', genre: 'саундклауд-рэп', vibe: 'Башкортостан', bio: 'Голос Башкортостана: «хочу быть с ней и всё» — гимн района.', av: 'avatars/ural-gaisin.jpg', fl: 79683, sc: 'https://soundcloud.com/fuxhdd' },
  { id: 'ivycraft', name: 'ivycraft', city: 'Москва', genre: 'архивкор', vibe: 'новая волна 2026', bio: '«люблю москву но снится london» — 11 миллионов. Новая волна 2026.', av: 'avatars/ivycraft.jpg', fl: 36777, sc: 'https://soundcloud.com/vbil' },
  { id: 'fallen777angel', name: 'fallen777angel', city: 'Томск', genre: 'архивкор', vibe: 'чистый архивкор', bio: 'Чистый архивкор. «гладиатор/рыцарь» (prod. greyrock) — трек-легенда, 9+ миллионов.', av: 'avatars/fallen777angel.jpg', fl: 27964, sc: 'https://soundcloud.com/fallen777angel-326543116' },
  { id: 'code80', name: 'CODE80', city: 'СПб', genre: 'архивкор', vibe: 'папа сцены', bio: 'Папа сцены. «I Feel Like Dying» и code10 — без него подвала бы не было.', av: 'avatars/code80.jpg', fl: 38831, sc: 'https://soundcloud.com/scalevillain' }
];

const TRACKS = [
  { id: 't1', t: 'ты че обиделась', a: 'madk1d', g: 'саундклауд-рэп', dur: 89, plays: 6387204, tags: 'тёмный принц, фит', sc: 'https://soundcloud.com/madk1d9/ty-che-obidelas-feat-tyomnyy-prints', scid: 2053862256, cover: 'covers/t1-obidelas.jpg' },
  { id: 't2', t: 'так по***', a: 'madk1d', g: 'саундклауд-рэп', dur: 107, plays: 8577490, tags: 'sexyswag', sc: 'https://soundcloud.com/madk1d9/tak-po', scid: 2059348776, cover: 'covers/t2-takpo.jpg' },
  { id: 't3', t: '8 миля', a: 'madk1d', g: 'саундклауд-рэп', dur: 114, plays: 15311311, tags: 'villian, фит', sc: 'https://soundcloud.com/madk1d9/8-milya', scid: 2269791533, cover: 'covers/t3-8milya.jpg' },
  { id: 't4', t: 'распять', a: 'madk1d', g: 'архивкор', dur: 118, plays: 6023727, tags: 'greyrock, tewiq', sc: 'https://soundcloud.com/madk1d9/raspyat-feat-greyrock-tewiq', scid: 2053861404, cover: 'covers/t4-raspyat.jpg' },
  { id: 't5', t: 'цена', a: 'madk1d', g: 'саундклауд-рэп', dur: 137, plays: 4581168, tags: 'паранойя', sc: 'https://soundcloud.com/madk1d9/tsena-feat-paranoyya', scid: 2016896083, cover: 'covers/t5-tsena.jpg' },
  { id: 't6', t: 'гной', a: 'temnyy-princ', g: 'архивкор', dur: 89, plays: 12071852, tags: '3am, лирика', sc: 'https://soundcloud.com/darkprinceee/gnoy', scid: 1930572542, cover: 'covers/t6-gnoy.jpg' },
  { id: 't7', t: 'отвратительный король', a: 'temnyy-princ', g: 'архивкор', dur: 111, plays: 14704517, tags: 'корона', sc: 'https://soundcloud.com/darkprinceee/otvratitelnyy-korol', scid: 1920315524, cover: 'covers/t7-korol.jpg' },
  { id: 't8', t: 'ПАПА', a: 'temnyy-princ', g: 'архивкор', dur: 103, plays: 12724274, tags: 'tewiq, фортуна 812', sc: 'https://soundcloud.com/darkprinceee/papa', scid: 1969426559, cover: 'covers/t8-papa.jpg' },
  { id: 't9', t: 'Кошмар', a: 'fortuna812', g: 'архивкор', dur: 161, plays: 11805219, tags: 'archivecore, akiaura', sc: 'https://soundcloud.com/fortunasound/koshmar-prod-akiaura', scid: 1860189879, cover: 'covers/t9-koshmar.jpg' },
  { id: 't10', t: 'trytofriend', a: 'fortuna812', g: 'архивкор', dur: 113, plays: 17689181, tags: 'cloudly006', sc: 'https://soundcloud.com/fortunasound/fuckyall-prod-cloudly006', scid: 1671739464, cover: 'covers/t10-trytofriend.jpg' },
  { id: 't11', t: 'Highway', a: 'fortuna812', g: 'саундклауд-рэп', dur: 123, plays: 5459253, tags: 'wayza', sc: 'https://soundcloud.com/fortunasound/highway', scid: 1958589759, cover: 'covers/t11-highway.jpg' },
  { id: 't12', t: 'подиум', a: 'tewiq', g: 'саундклауд-рэп', dur: 142, plays: 8305447, tags: 'паранойя, королевский xvii', sc: 'https://soundcloud.com/tewiq/podium-korolevskiy-xvii-paranoyya', scid: 1858120998, cover: 'covers/t12-podium.jpg' },
  { id: 't13', t: 'снайпер', a: 'tewiq', g: 'дигикор', dur: 108, plays: 2313454, tags: 'plugg', sc: 'https://soundcloud.com/tewiq/snajper', scid: 2155879398, cover: 'covers/t13-snajper.jpg' },
  { id: 't14', t: 'гуфи микс III', a: 'paranoya', g: 'гиперпоп', dur: 460, plays: 2058441, tags: 'goofy, madk1d, lfy', sc: 'https://soundcloud.com/wheredyoufindthisbruh/gooooooooooofy', scid: 1950522267, cover: 'covers/t14-goofy.jpg' },
  { id: 't15', t: 'распять', a: 'greyrock', g: 'архивкор', dur: 119, plays: 13294503, tags: 'оригинал', sc: 'https://soundcloud.com/greyrock1/raspyat', scid: 2053875692, cover: 'covers/t15-raspyat-gr.jpg' },
  { id: 't16', t: 'NEW BOYS', a: 'unki', g: 'jerk', dur: 83, plays: 2756845, tags: 'сибирь', sc: 'https://soundcloud.com/unki-30139076/new-boys', scid: 1839821655, cover: 'covers/t16-newboys.jpg' },
  { id: 't17', t: 'Случайно Наступил На Шприц', a: 'villian', g: 'саундклауд-рэп', dur: 94, plays: 8540280, tags: 'москва', sc: 'https://soundcloud.com/romchik-338306888/sluchajno-nastupil-na-shpricz', scid: 2161100271, cover: 'covers/t17-shpricz.jpg' },
  { id: 't18', t: 'люблю москву но снится london', a: 'ivycraft', g: 'архивкор', dur: 92, plays: 11070803, tags: 'новая волна', sc: 'https://soundcloud.com/vbil/london', scid: 2235748052, cover: 'covers/t18-london.jpg' },
  { id: 't19', t: 'гладиатор/рыцарь', a: 'fallen777angel', g: 'архивкор', dur: 104, plays: 9372403, tags: 'prod. greyrock', sc: 'https://soundcloud.com/fallen777angel-326543116/gladiator-ryczar-prod-greyrock', scid: 1897019454, cover: 'covers/t19-gladiator.jpg' },
  { id: 't20', t: 'хочу быть с ней и всё', a: 'ural-gaisin', g: 'саундклауд-рэп', dur: 110, plays: 6466763, tags: 'уфа, sped', sc: 'https://soundcloud.com/fuxhdd/khochu-byt-s-ney-i-vsyo', scid: 1687014096, cover: 'covers/t20-s-ney.jpg' },
  { id: 't21', t: 'cachalot #2016', a: 'onda-andar', g: 'эмо', dur: 121, plays: 15443114, tags: '2016, прод. self', sc: 'https://soundcloud.com/onda_andar/cachalot', scid: 2075492784, cover: 'covers/t21-cachalot.jpg' },
  { id: 't22', t: 'type london', a: 'onda-andar', g: 'эмо', dur: 104, plays: 12537958, tags: 'ucv', sc: 'https://soundcloud.com/onda_andar/type-london', scid: 2181149791, cover: 'covers/t22-typelondon.jpg' },
  { id: 't23', t: 'I Feel Like Dying', a: 'code80', g: 'архивкор', dur: 107, plays: 2111829, tags: 'code10', sc: 'https://soundcloud.com/code80-472176323/i-feel-like-dying', scid: 2027459564, cover: 'covers/t23-dying.jpg' },
  { id: 't24', t: 'Feet & Latex', a: 'aquakey', g: 'jerk', dur: 124, plays: 7968525, tags: 'aquagwap', sc: 'https://soundcloud.com/ak2angel/aquakey-feet-latex', scid: 1610975979, cover: 'covers/t24-feetlatex.jpg' },
  { id: 't25', t: 'Любовь.mp3', a: 'yupi', g: 'гиперпоп', dur: 154, plays: 140901, tags: 'jupi_sleep', sc: 'https://soundcloud.com/jupi_n3dslp/lyubov-mp3', scid: 2269138493, cover: 'covers/t25-lyubov.jpg' }
];

const PLAYLISTS = [
  { id: 'pl1', name: 'Архивкор 3am', sub: '6 треков · для трёх ночи', tracks: ['t6', 't18', 't9', 't19', 't4', 't23'] },
  { id: 'pl2', name: 'Sexyswag 2010', sub: '5 треков · челка на глаза', tracks: ['t2', 't1', 't3', 't17', 't16'] },
  { id: 'pl3', name: '812 legion', sub: '4 трека · Питер в наушниках', tracks: ['t10', 't11', 't8', 't15'] },
  { id: 'pl4', name: 'Дигикор в наушниках', sub: '4 трека · холодный вайб', tracks: ['t13', 't22', 't24', 't5'] }
];

const uploads = [];
const liked = new Set();
const follows = new Set();

let navStack = ['home'];
let disc = { q: '', genre: null, city: null };
let freshId = null;

let cur = null;
let queue = [];
let qi = 0;
let playing = false;
let pos = 0;

const $ = s => document.querySelector(s);
const artistById = id => ARTISTS.find(a => a.id === id);
const trackById = id => TRACKS.find(t => t.id === id) || uploads.find(t => t.id === id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function rng(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function fmt(s) { const m = Math.floor(s / 60), ss = Math.floor(s % 60); return m + ':' + String(ss).padStart(2, '0'); }
function fmtPlays(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0', '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'K';
  return String(n);
}

function trackCover(t) { return t.cover || t.coverData || ''; }

function coverHTML(t, sm) {
  const c = trackCover(t);
  const p = PALETTES[hash(t.id) % PALETTES.length];
  const bg = c ? `background-image:url('${c}')` : `background:linear-gradient(140deg, ${p[0]}, ${p[1]})`;
  return `<div class="cover${sm ? ' sm' : ''}" style="${bg}"><span class="cover-eq"><i></i><i></i><i></i></span><span class="cover-dur">${fmt(t.dur)}</span></div>`;
}

function avatarHTML(a) {
  if (a.av) return `<div class="avatar"><img src="${esc(a.av)}" alt=""></div>`;
  const h = hash(a.name);
  const p = PALETTES[h % PALETTES.length];
  return `<div class="avatar" style="background:linear-gradient(140deg, ${p[0]}, ${p[1]})">${esc(a.name[0].toUpperCase())}</div>`;
}

function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

function tcardHTML(t) {
  const a = artistById(t.a);
  return `<article class="tcard${t.id === cur?.id ? ' playing' : ''}${t.id === freshId ? ' fresh' : ''}" data-play="${t.id}">
    ${coverHTML(t)}
    <div class="tcard-t">${esc(t.t)}</div>
    <div class="tcard-a" data-artist="${t.a}">${esc(a ? a.name : t.aName || '—')}</div>
    <div class="tcard-meta">${fmtPlays(t.plays)} · ${esc(t.g)}</div>
  </article>`;
}

function trowHTML(t, canLike) {
  const a = artistById(t.a);
  const isLiked = liked.has(t.id);
  return `<div class="trow${t.id === cur?.id ? ' playing' : ''}" data-play="${t.id}">
    ${coverHTML(t, true)}
    <div class="trow-main">
      <div class="trow-t">${esc(t.t)}</div>
      <div class="trow-a" data-artist="${t.a}">${esc(a ? a.name : t.aName || '—')} · ${esc(t.g)}</div>
    </div>
    <div class="trow-meta">${fmtPlays(t.plays)}</div>
    ${canLike ? `<button class="likebtn${isLiked ? ' liked' : ''}" data-like="${t.id}" aria-label="лайк">♥</button>` : ''}
  </div>`;
}

function renderHome() {
  const feat = trackById('t18');
  const fa = artistById(feat.a);
  const wave = ['t18', 't1', 't21', 't9', 't12', 't19', 't6', 't2', 't24', 't3'].map(id => trackById(id));
  const people = ['ivycraft', 'tewiq', 'unki', 'fallen777angel', 'greyrock', 'code80', 'yupi', 'aquakey', 'villian', 'ural-gaisin'];
  const top = [...TRACKS].sort((a, b) => b.plays - a.plays).slice(0, 6);
  const feed = [...uploads, ...wave];

  $('#home-body').innerHTML = `
    <section class="hero" data-play="${feat.id}">
      <div class="hero-bg" style="background-image:url('${trackCover(feat)}')"></div>
      <div class="hero-veil"></div>
      <div class="hero-in">
        <div class="hero-label">сегодня в подвале</div>
        <div class="hero-t">${esc(feat.t)}</div>
        <div class="hero-a"><b data-artist="${feat.a}">${esc(fa ? fa.name : '')}</b> · ${fmtPlays(feat.plays)} прослушиваний</div>
      </div>
    </section>

    <div class="sec-h"><span class="dot"></span><h2>Новая волна</h2><span class="more">обновляется ночью</span></div>
    <div class="h-scroller">${feed.map(tcardHTML).join('')}</div>

    <div class="sec-h"><h2>Плейлисты подвала</h2></div>
    <div class="h-scroller">${PLAYLISTS.map(pl => {
    const ft = trackById(pl.tracks[0]);
    return `<article class="plcard" data-pl="${pl.id}" style="background-image:url('${trackCover(ft)}')">
        <div class="plcard-name">${pl.name}</div>
        <div class="plcard-sub">${pl.sub}</div>
      </article>`;
  }).join('')}</div>

    <div class="sec-h"><h2>Люди сцены</h2><span class="more" data-nav="discover">все →</span></div>
    <div class="avatar-row">${people.map(id => {
    const a = artistById(id);
    return `<div class="ar-item" data-artist="${a.id}">${avatarHTML(a)}<span>${esc(a.name)}</span></div>`;
  }).join('')}</div>

    <div class="sec-h"><h2>Топ подвала</h2></div>
    <div>${top.map(t => trowHTML(t, true)).join('')}</div>
  `;
}

function renderDiscTop() {
  $('#disc-top').innerHTML = `
    <div class="disc-search"><input id="disc-q" type="text" placeholder="трек, артист или тег…" value="${esc(disc.q)}"></div>
    <div class="chips">${GENRES.map(g => `<button class="chip${disc.genre === g ? ' on' : ''}" data-chip="genre" data-val="${g}">${g}</button>`).join('')}</div>
    <div class="chips">${CITIES.map(c => `<button class="chip${disc.city === c ? ' on' : ''}" data-chip="city" data-val="${c}">${c}</button>`).join('')}</div>
  `;
  $('#disc-q').addEventListener('input', e => { disc.q = e.target.value.trim().toLowerCase(); renderDiscResults(); });
}

function renderDiscResults() {
  const q = disc.q;
  const g = disc.genre, c = disc.city;
  const tracks = TRACKS.filter(t => {
    const a = artistById(t.a);
    const hay = (t.t + ' ' + (a ? a.name : '') + ' ' + (t.tags || '')).toLowerCase();
    return (!q || hay.includes(q)) && (!g || t.g === g) && (!c || (a && a.city === c));
  });
  const artists = ARTISTS.filter(a => {
    const hay = (a.name + ' ' + a.vibe + ' ' + a.city + ' ' + a.genre).toLowerCase();
    return (!q || hay.includes(q)) && (!g || a.genre === g) && (!c || a.city === c);
  });
  const filtering = q || g || c;

  $('#disc-results').innerHTML = `
    ${filtering ? `<div class="sec-h"><h2>Треки</h2><span class="more">${tracks.length}</span></div>
    <div>${tracks.map(t => trowHTML(t, true)).join('') || '<div class="empty-hint">по такому запросу в подвале пусто</div>'}</div>` : ''}
    <div class="sec-h"><h2>${filtering ? 'Артисты по запросу' : 'Артисты сцены'}</h2><span class="more">${artists.length}</span></div>
    <div class="acard-grid">${artists.map(a => `
      <div class="acard" data-artist="${a.id}">
        ${avatarHTML(a)}
        <div class="acard-n">${esc(a.name)}</div>
        <div class="acard-v">${esc(a.vibe)}</div>
        <div class="acard-c">${esc(a.city)} · ${esc(a.genre)}</div>
      </div>`).join('') || '<div class="empty-hint">артистов не нашли — может, станешь первым?</div>'}</div>
    ${!filtering ? `<div class="sec-h"><h2>Всё подряд</h2><span class="more">${TRACKS.length} треков</span></div>
    <div>${TRACKS.map(t => trowHTML(t, true)).join('')}</div>` : ''}
  `;
}

function renderProfile(id) {
  const a = artistById(id);
  if (!a) { $('#profile-body').innerHTML = '<div class="empty-hint">Артист не найден</div>'; return; }
  const tracks = TRACKS.filter(t => t.a === a.id).concat(uploads.filter(t => t.a === a.id));
  const followers = a.fl || 1000 + hash(a.id) % 50000;
  const likes = Math.floor(followers * (1.4 + (hash(a.id + 'l') % 90) / 100));
  const firstArt = (tracks[0] && trackCover(tracks[0])) || a.av || '';
  const pfBg = firstArt ? `background-image:url('${firstArt}')` : '';
  const isF = follows.has(a.id);
  $('#profile-body').innerHTML = `
    <div class="pf-head">
      <div class="pf-bg" style="${pfBg}"></div>
      <div class="pf-veil"></div>
      <div class="pf-in">
        <button class="backbtn" data-back aria-label="назад">←</button>
        <div class="pf-ava-wrap">${avatarHTML(a)}<span class="pf-ring"></span></div>
        <div class="pf-n">${esc(a.name)}</div>
        <div class="pf-vibe">${esc(a.vibe)}</div>
        <div class="pf-city">📍 ${esc(a.city)} · ${esc(a.genre)}</div>
        <div class="pf-stats">
          <div class="pf-stat"><b>${tracks.length || '—'}</b><span>треков</span></div>
          <div class="pf-stat"><b>${fmtPlays(followers)}</b><span>слушателей</span></div>
          <div class="pf-stat"><b>${fmtPlays(likes)}</b><span>лайков</span></div>
        </div>
        <div class="pf-bio">${esc(a.bio)}</div>
        <button class="pf-follow${isF ? ' done' : ''}" data-follow="${a.id}">${isF ? 'в скваде ✓' : '+ в сквад'}</button>
        ${a.sc ? `<a class="pf-sc" href="${esc(a.sc)}" target="_blank" rel="noopener">открыть на soundcloud ↗</a>` : ''}
      </div>
    </div>
    <div class="sec-h"><h2>Треки</h2></div>
    <div>${tracks.map(t => trowHTML(t, true)).join('') || '<div class="empty-hint">треков пока нет — подписывайся, чтобы не пропустить первую заливку</div>'}</div>
  `;
}

function showScreen(name, push) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $('#screen-' + name).classList.add('active');
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.nav === name));
  if (push) {
    if (name === 'home') navStack = ['home'];
    else if (navStack[navStack.length - 1] !== name) navStack.push(name);
  }
  $('#main').scrollTop = 0;
}

function openProfile(id) {
  renderProfile(id);
  showScreen('profile', true);
}

function markPlaying() {
  document.querySelectorAll('[data-play]').forEach(el => {
    el.classList.toggle('playing', el.dataset.play === cur?.id);
  });
}

const WAVE_BARS = 42;

function buildWave() {
  const w = $('#wave');
  w.innerHTML = '';
  const r = rng(hash(cur.id + 'w'));
  for (let i = 0; i < WAVE_BARS; i++) {
    const s = document.createElement('span');
    s.style.height = Math.round(22 + r() * 78) + '%';
    w.appendChild(s);
  }
  updateWave();
}

function updateWave() {
  if (!cur) return;
  const fill = Math.min(WAVE_BARS, Math.floor(pos / cur.dur * WAVE_BARS));
  const bars = $('#wave').children;
  for (let i = 0; i < WAVE_BARS; i++) bars[i].classList.toggle('on', i < fill);
  $('#mp-time').textContent = fmt(pos) + ' / ' + fmt(cur.dur);
}

function updateMini() {
  const c = trackCover(cur);
  const p = PALETTES[hash(cur.id) % PALETTES.length];
  $('#mp-cover').style.cssText = c ? `background-image:url('${c}')` : `background:linear-gradient(140deg, ${p[0]}, ${p[1]})`;
  $('#mp-cover').textContent = '';
  const a = artistById(cur.a);
  $('#mp-title').textContent = cur.t + ' — ' + (a ? a.name : cur.aName || '');
  $('#mini').hidden = false;
  setPlayIcon();
}

function setPlayIcon() {
  $('#mp-play').innerHTML = playing
    ? '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>'
    : '<svg viewBox="0 0 24 24"><path d="M8 5l11 7-11 7z"/></svg>';
}

// ===== SoundCloud Widget: реальный звук =====
let scw = null, scPoll = null, scStarted = false;

function widgetUrl(scid, ap) {
  return 'https://w.soundcloud.com/player/?url=' + encodeURIComponent('https://api.soundcloud.com/tracks/' + scid) +
    '&auto_play=' + (ap ? 'true' : 'false') +
    '&hide_related=true&show_comments=false&show_user=false&show_reposts=false&buying=false&sharing=false&download=false&visual=false&single_active=true';
}

function widget() {
  if (scw) return scw;
  if (typeof SC === 'undefined' || !SC.Widget) return null;
  try {
    scw = SC.Widget($('#sc-frame'));
  } catch (e) {
    return null;
  }
  scw.bind(SC.Widget.Events.PLAY, () => {
    scStarted = true;
    playing = true;
    document.body.dataset.audio = 'playing';
    $('#wave').classList.add('live');
    setPlayIcon();
    startPoll();
  });
  scw.bind(SC.Widget.Events.PAUSE, () => {
    playing = false;
    document.body.dataset.audio = 'paused';
    $('#wave').classList.remove('live');
    setPlayIcon();
    stopPoll();
  });
  scw.bind(SC.Widget.Events.FINISH, () => next());
  return scw;
}

function startPoll() {
  stopPoll();
  scPoll = setInterval(() => {
    if (!playing || !scw || !cur) return;
    scw.getPosition(ms => {
      pos = (ms || 0) / 1000;
      if (cur && pos < cur.dur - 0.3) updateWave();
    });
  }, 250);
}

function stopPoll() {
  clearInterval(scPoll);
  scPoll = null;
}

function playTrack(id, q) {
  const t = trackById(id);
  if (!t) return;
  cur = t;
  queue = q && q.length ? q : [id];
  qi = Math.max(0, queue.indexOf(id));
  pos = 0;
  t.plays++;
  buildWave();
  updateMini();
  markPlaying();
  if (!t.scid) {
    playing = false;
    document.body.dataset.audio = 'paused';
    setPlayIcon();
    toast('демо-заливка: звука пока нет, но карточка уже в подвале');
    return;
  }
  playing = true;
  scStarted = false;
  document.body.dataset.audio = 'playing';
  setPlayIcon();
  $('#sc-strip').hidden = false;
  $('#sc-frame').src = widgetUrl(t.scid, true);
  const w = widget();
  if (!w) {
    toast('нет связи с soundcloud — проверь впн');
    return;
  }
}

function togglePlay() {
  if (!cur) return;
  if (!cur.scid) { toast('демо-заливка: звука пока нет'); return; }
  const w = widget();
  if (!w) { toast('нет связи с soundcloud — проверь впн'); return; }
  if (scStarted && playing) w.pause();
  else w.play();
}

function next() {
  if (!cur) return;
  const n = queue[(qi + 1) % queue.length];
  qi = (qi + 1) % queue.length;
  playTrack(n, queue);
}

function prev() {
  if (!cur) return;
  const p = queue[(qi - 1 + queue.length) % queue.length];
  qi = (qi - 1 + queue.length) % queue.length;
  playTrack(p, queue);
}

function tickLive() {
  if (playing) $('#wave').classList.add('live');
}

let coverData = null;

function initUpload() {
  const sel = $('#f-genre');
  GENRES.forEach(g => {
    const o = document.createElement('option');
    o.value = g; o.textContent = g;
    sel.appendChild(o);
  });
  const dl = $('#city-list');
  CITIES.forEach(c => {
    const o = document.createElement('option');
    o.value = c;
    dl.appendChild(o);
  });

  const drop = $('#drop');
  const input = $('#f-cover');

  drop.addEventListener('click', () => input.click());
  drop.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('drag'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('drag'));
  drop.addEventListener('drop', e => {
    e.preventDefault();
    drop.classList.remove('drag');
    if (e.dataTransfer.files[0]) readFile(e.dataTransfer.files[0]);
  });
  input.addEventListener('change', () => { if (input.files[0]) readFile(input.files[0]); });

  function readFile(f) {
    if (!f.type.startsWith('image/')) { toast('нужна картинка, не ' + (f.type || 'это')); return; }
    const rd = new FileReader();
    rd.onload = () => {
      coverData = rd.result;
      const prev = $('#cover-prev');
      prev.src = coverData;
      prev.hidden = false;
      drop.classList.add('has-img');
    };
    rd.readAsDataURL(f);
  }

  $('#upform').addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#f-title').value.trim();
    const aName = $('#f-artist').value.trim();
    const g = sel.value;
    if (!title || !aName || !g) { toast('заполни имя трека, артиста и жанр'); return; }

    let a = ARTISTS.find(x => x.name.toLowerCase() === aName.toLowerCase());
    const city = $('#f-city').value.trim();
    if (!a) {
      a = {
        id: 'up-a-' + hash(aName).toString(36),
        name: aName,
        city: city || 'не указан',
        genre: g,
        vibe: 'новенький в подвале',
        bio: 'Залил первый трек через СКУНС£. Дальше — больше.'
      };
      ARTISTS.push(a);
    }

    const t = {
      id: 'up-' + Date.now().toString(36),
      t: title,
      a: a.id,
      g,
      dur: 120 + hash(title + aName) % 140,
      plays: 1,
      tags: $('#f-tags').value.trim(),
      aName,
      coverData
    };
    uploads.unshift(t);
    freshId = t.id;

    e.target.reset();
    coverData = null;
    $('#cover-prev').hidden = true;
    $('#cover-prev').src = '';
    drop.classList.remove('has-img');
    sel.value = '';

    renderHome();
    showScreen('home', true);
    setTimeout(() => { freshId = null; renderHome(); }, 6000);
    toast('«' + title + '» уже в ленте — блок «Новая волна»');
  });
}

function initPlayer() {
  $('#mp-play').addEventListener('click', togglePlay);
  $('#mp-next').addEventListener('click', next);
  $('#mp-prev').addEventListener('click', prev);
  $('#wave').addEventListener('click', e => {
    if (!cur || !cur.scid) return;
    const w = widget();
    if (!w) return;
    const r = e.currentTarget.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const ms = Math.round(f * cur.dur * 1000);
    w.seekTo(ms);
    pos = ms / 1000;
    updateWave();
  });
}

function tickClock() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const h = d.getHours();
  const phrase = h >= 0 && h < 6 ? '3am, панельки молчат' : h < 12 ? 'утро, но подвал не спит' : h < 18 ? 'день, звук на минимум' : 'вечер, самое время';
  $('#clock').textContent = hh + ':' + mm + ' · ' + phrase;
}

document.addEventListener('click', e => {
  const like = e.target.closest('[data-like]');
  if (like) {
    const id = like.dataset.like;
    if (liked.has(id)) { liked.delete(id); like.classList.remove('liked'); }
    else { liked.add(id); like.classList.add('liked'); }
    return;
  }
  const follow = e.target.closest('[data-follow]');
  if (follow) {
    const id = follow.dataset.follow;
    if (follows.has(id)) { follows.delete(id); follow.classList.remove('done'); follow.textContent = '+ в сквад'; toast('вышел из сквада'); }
    else { follows.add(id); follow.classList.add('done'); follow.textContent = 'в скваде ✓'; toast('ты в скваде'); }
    return;
  }
  const chip = e.target.closest('[data-chip]');
  if (chip) {
    const k = chip.dataset.chip, v = chip.dataset.val;
    disc[k] = disc[k] === v ? null : v;
    renderDiscTop();
    renderDiscResults();
    return;
  }
  const art = e.target.closest('[data-artist]');
  if (art) { openProfile(art.dataset.artist); return; }
  const pl = e.target.closest('[data-pl]');
  if (pl) {
    const p = PLAYLISTS.find(x => x.id === pl.dataset.pl);
    if (p) { playTrack(p.tracks[0], p.tracks); tickLive(); toast('плейлист: ' + p.name); }
    return;
  }
  const nav = e.target.closest('[data-nav]');
  if (nav) {
    const n = nav.dataset.nav;
    if (n === 'discover') { disc = { q: '', genre: null, city: null }; renderDiscTop(); renderDiscResults(); }
    if (n === 'profile' && !$('#profile-body').innerHTML.trim()) { renderProfile('ivycraft'); }
    showScreen(n, true);
    return;
  }
  const back = e.target.closest('[data-back]');
  if (back) {
    navStack.pop();
    showScreen(navStack[navStack.length - 1] || 'home', false);
    return;
  }
  const play = e.target.closest('[data-play]');
  if (play) {
    if (play.dataset.play === cur?.id) { togglePlay(); return; }
    playTrack(play.dataset.play);
    tickLive();
  }
});

renderHome();
renderDiscTop();
renderDiscResults();
initUpload();
initPlayer();
tickClock();
setInterval(tickClock, 20000);
