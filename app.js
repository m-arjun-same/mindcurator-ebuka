/* MindCurator × Ebuka layout — own code. Data first, then motion. */
const CASES = [
 { id:'cafe-breizh', flag:'BREIZH', name:'Café Breizh',
   headline:'Giving a third-generation Las Vegas bakery a website as crafted as its pastry',
   summary:'Two locations — Spring Mountain and Henderson. A real 3D croissant turns in the hero while menus, story and visits stay one glance away.',
   link:'https://m-arjun-same.github.io/cafe-breizh/', video:'assets/cafe.mp4', poster:'assets/cafe-poster.jpg',
   stat:{value:'2', label:'Locations in Las Vegas', image:'assets/cafe-stat.jpg'},
   quote:{title:'A real 3D croissant, not a photo', text:'The hero is a true 3D model — it rocks, breathes and floats over flat crème and oven-black fields.', name:'Café Breizh', role:'Las Vegas · French Bakery', avatar:'assets/cafe-stat.jpg'} },
 { id:'citypaws', flag:'CITYPAWS', name:'CityPaws Grooming',
   headline:'Helping a Houston dog salon fill its chairs with doodles, poodles and a drone’s-eye view',
   summary:'A salon in River Oaks plus a mobile van, seven days a week. Full-screen film hero, a pinned groom journey, and Zellie the doodle as the reveal.',
   link:'https://m-arjun-same.github.io/citypaws-grooming/', video:'assets/citypaws.mp4', poster:'assets/citypaws-stat.webp',
   stat:{value:'4.5', sup:'★', label:'Google Rating', image:'assets/citypaws-stat.webp'},
   quote:{title:'Salon and mobile, one booking flow', text:'Founded by Daniella “Danni” Betancourt in 2019 — the site carries her salon, her van and her own dogs. Nothing stock.', name:'CityPaws Grooming', role:'Houston · Est. 2019', avatar:'assets/hero-dog.webp'} },
 { id:'maguva', flag:'MAGUVA', name:'Maguva',
   headline:'Giving a since-1999 saree house its very first website — one that unfolds like a drape',
   summary:'Women’s ethnic wear in Kukatpally: silk and cotton sarees, kurtis and wedding wear. A zari gold thread draws itself through the page as you scroll.',
   link:'https://m-arjun-same.github.io/maguva/', video:'assets/maguva.mp4', poster:'assets/maguva-poster.jpg',
   stat:{value:'4.7', sup:'★', label:'Google Rating · 2,143 Reviews', image:'assets/maguva-stat.jpg'},
   quote:{title:'The Drape — the site is the saree', text:'Sections fold like cloth, and the store’s own Google reviews do the talking. No invented prices, ever.', name:'Maguva', role:'Kukatpally, Hyderabad · Since 1999', avatar:'assets/maguva-stat.jpg'} },
 { id:'malgudi', flag:'MALGUDI', name:'Malgudi Coffee House',
   headline:'Pouring a KPHB coffee house’s famous filter coffee into a website',
   summary:'At Kukatpally Metro, open 7:30 AM to 10:30 PM. A brass tumbler and davara turn in 3D while the whole menu stays one glance away.',
   link:'https://m-arjun-same.github.io/malgudi-coffee-house/', video:'assets/malgudi.mp4', poster:'assets/malgudi-stat.jpg',
   stat:{value:'₹35', label:'The Famous Filter Coffee', image:'assets/malgudi-stat.jpg'},
   quote:{title:'A tumbler you can turn', text:'The signature serve — brass tumbler, frothy davara — rebuilt in 3D and scrubbed by your scroll.', name:'Malgudi Coffee House', role:'Kukatpally, Hyderabad', avatar:'assets/malgudi-stat.jpg'} },
 { id:'mayuri', flag:'MAYURI', name:'Mayuri Footwears',
   headline:'Helping a Kukatpally footwear store put its best foot forward online',
   summary:'Three rooms — men, women and kids — under one roof. Big type, warm light, and the shoes doing all the talking.',
   link:'https://m-arjun-same.github.io/mayuri-footwears/', video:'assets/mayuri.mp4', poster:'assets/mayuri-poster.jpg',
   stat:{value:'3', label:'Rooms — Men · Women · Kids', image:'assets/mayuri-stat.jpg'},
   quote:{title:'One store, three rooms', text:'Every collection gets its own room and its own light, so a whole family finds its pair in seconds.', name:'Mayuri Footwears', role:'Kukatpally, Hyderabad', avatar:'assets/mayuri-stat.jpg'} },
];
const SKILLS = [
 {ico:'✦', title:'Website Design', desc:'Full business websites that feel like experiences, not pages', img:'assets/cafe-poster.jpg'},
 {ico:'✧', title:'Online Stores', desc:'Catalogues, carts and WhatsApp checkout that actually sell', img:'assets/mayuri-poster.jpg'},
 {ico:'✦', title:'3D & Motion', desc:'Real 3D models, scroll journeys and film inside the page', img:'assets/malgudi-stat.jpg'},
 {ico:'✧', title:'Brand Identity', desc:'One visual world per business — never a repeated skin', img:'assets/maguva-poster.jpg'},
 {ico:'✦', title:'Care & Growth', desc:'Hosting, updates and the next version, handled by the studio', img:'assets/citypaws-stat.webp'},
];
const flagSVG = t => `<svg class="case-flag" viewBox="0 0 110 56" fill="none" aria-hidden="true"><line x1="4" y1="2" x2="4" y2="54" stroke="#000" stroke-width="2"/><path d="M4 4 C 30 -2, 55 10, 104 4 L 96 16 L 104 28 C 55 34, 30 22, 4 28 Z" fill="#000"/><text x="52" y="21" fill="#fff" font-family="Geist, sans-serif" font-size="10.5" font-weight="500" text-anchor="middle" letter-spacing="1">${t}</text></svg>`;

document.getElementById('caseList').innerHTML = CASES.map(c => `
<article class="case-study">
  <div class="case-header">
    ${flagSVG(c.flag)}
    <div class="case-head-grid">
      <div>
        <h3 class="case-name">${c.name}</h3>
        <p class="case-headline">${c.headline}</p>
      </div>
      <div>
        <p class="case-summary">${c.summary}</p>
        <a class="case-link magnetic" href="${c.link}" target="_blank" rel="noreferrer"><span class="roll"><span>Learn More</span></span></a>
      </div>
    </div>
  </div>
  <div class="case-media">
    <div class="case-panel case-banner">
      <video src="${c.video}" poster="${c.poster}" autoplay muted loop playsinline preload="auto" aria-label="${c.name} film"></video>
    </div>
    <div class="case-side">
      <div class="case-panel case-stat">
        <img src="${c.stat.image}" alt="" loading="lazy">
        <span class="stat-num">${c.stat.value}${c.stat.sup ? `<sup>${c.stat.sup}</sup>` : ''}</span>
        <p class="stat-label">${c.stat.label}</p>
      </div>
      <figure class="case-panel case-quote">
        <h4>${c.quote.title}</h4>
        <blockquote>${c.quote.text}</blockquote>
        <figcaption class="case-person">
          <img src="${c.quote.avatar}" alt="" loading="lazy">
          <span><span class="p-name">${c.quote.name}</span><br><span class="p-role">${c.quote.role}</span></span>
        </figcaption>
      </figure>
    </div>
  </div>
</article>`).join('');

document.getElementById('skillArc').innerHTML = SKILLS.map(s => `
  <div class="arc-item"><div class="skill-card">
    <img src="${s.img}" alt="" loading="lazy">
    <div class="sc-in"><div class="sc-ico">${s.ico}</div><h3>${s.title}</h3><p>${s.desc}</p></div>
  </div></div>`).join('');

/* roll-text duplicates */
document.querySelectorAll('.roll span').forEach(s => s.dataset.dup = s.textContent);

/* ---------- loader ---------- */
(() => {
  const el = document.getElementById('loader'), num = el.querySelector('.loader-count');
  let p = 0, done = false;
  const finish = () => { if (done) return; done = true; num.textContent = '100%'; el.classList.add('done'); document.body.classList.add('ready'); setTimeout(() => el.remove(), 1000); };
  const iv = setInterval(() => { p = Math.min(100, p + 6 + Math.random() * 20); num.textContent = Math.floor(p) + '%'; if (p >= 100) { clearInterval(iv); setTimeout(finish, 250); } }, 110);
  el.addEventListener('click', () => { clearInterval(iv); finish(); });
  setTimeout(finish, 5000);
})();

/* ---------- dither hero (own WebGL shader) ---------- */
(() => {
  const cv = document.getElementById('dither'), gl = cv.getContext('webgl');
  if (!gl) { cv.style.background = 'radial-gradient(120% 90% at 50% 10%, #262626, #0d0d0d)'; return; }
  const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
  const fs = `precision mediump float; uniform vec2 R; uniform float T;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
    float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
      return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
    float bayer(vec2 p){ int x=int(mod(p.x,4.)), y=int(mod(p.y,4.));
      int i = x + y*4; float v=0.;
      if(i==0)v=.0; if(i==1)v=.5; if(i==2)v=.125; if(i==3)v=.625;
      if(i==4)v=.75; if(i==5)v=.25; if(i==6)v=.875; if(i==7)v=.375;
      if(i==8)v=.1875; if(i==9)v=.6875; if(i==10)v=.0625; if(i==11)v=.5625;
      if(i==12)v=.9375; if(i==13)v=.4375; if(i==14)v=.8125; if(i==15)v=.3125;
      return v; }
    void main(){
      vec2 uv = gl_FragCoord.xy / R;
      float n = noise(uv*vec2(6.,3.4) + vec2(T*.05, T*.02)) * .6
              + noise(uv*vec2(14.,8.) - vec2(T*.03,0.)) * .4;
      float lum = .16 + n*.30 - uv.y*.10 + (1.-abs(uv.x-.5)*2.)*.05;
      float d = step(bayer(gl_FragCoord.xy), lum);
      vec3 col = mix(vec3(.045), vec3(.30), d) + lum*.25;
      gl_FragColor = vec4(col, 1.);
    }`;
  const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(pr); gl.useProgram(pr);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uR = gl.getUniformLocation(pr, 'R'), uT = gl.getUniformLocation(pr, 'T');
  const size = () => { const w = cv.clientWidth, h = cv.clientHeight; if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; gl.viewport(0, 0, w, h); } };
  const io = new IntersectionObserver(([e]) => { cancelAnimationFrame(raf); if (e.isIntersecting) raf = requestAnimationFrame(loop); });
  let raf;
  const loop = t => { raf = requestAnimationFrame(loop); size(); gl.uniform2f(uR, cv.width, cv.height); gl.uniform1f(uT, t / 1000); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); };
  io.observe(cv);
})();

/* ---------- arc carousels (own implementation) ---------- */
function arc(el, bend) {
  const items = [...el.children]; if (!items.length) return;
  let off = 0, vel = .35, drag = null, lastX = 0, lastT = 0;
  const gap = () => items[0].offsetWidth * 1.12;
  function place() {
    const g = gap(), total = g * items.length, R = g * bend;
    items.forEach((it, i) => {
      let x = ((i * g - off) % total + total) % total - total / 2;
      const r = Math.max(-1, Math.min(1, x / R)), y = R - Math.sqrt(Math.max(R * R - x * x, 0));
      it.style.transform = `translate(calc(-50% + ${x}px), ${y}px) rotate(${Math.asin(r)}rad)`;
    });
  }
  const io = new IntersectionObserver(([e]) => { cancelAnimationFrame(raf); if (e.isIntersecting) raf = requestAnimationFrame(loop); });
  let raf, prev = performance.now();
  const loop = t => { raf = requestAnimationFrame(loop); const dt = Math.min((t - prev) / 1000, .05); prev = t; if (!drag) { off += vel * items[0].offsetWidth * dt; place(); } };
  el.addEventListener('pointerdown', e => { drag = true; lastX = e.clientX; lastT = e.timeStamp; vel = 0; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - lastX, dt = Math.max((e.timeStamp - lastT) / 1000, .001); off -= dx; vel = -dx / dt / items[0].offsetWidth * .4; lastX = e.clientX; lastT = e.timeStamp; place(); });
  ['pointerup','pointercancel'].forEach(ev => el.addEventListener(ev, () => { drag = false; if (Math.abs(vel) < .35) vel = .35 * Math.sign(vel || 1); }));
  new ResizeObserver(place).observe(el); io.observe(el); place();
}
arc(document.getElementById('clientArc'), 4.5);
arc(document.getElementById('skillArc'), 4.5);

/* ---------- smooth scroll + reveals ---------- */
if (window.Lenis) {
  const lenis = new Lenis({ lerp: .1, smoothWheel: true });
  if (window.gsap && window.ScrollTrigger) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
  else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
}
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero .line-in', { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: .09, delay: .95 });
  gsap.from('.hero-img', { yPercent: 12, autoAlpha: 0, duration: 1.3, ease: 'power3.out', delay: 1.05 });
  gsap.from('.hero-card', { y: 24, autoAlpha: 0, duration: .9, ease: 'power3.out', delay: 1.5 });
  document.querySelectorAll('.case-study').forEach(cs => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: cs, start: 'top 78%' } });
    tl.from(cs.querySelector('.case-flag'), { clipPath: 'inset(100% -50% 0% -50%)', duration: .8, ease: 'power3.out' })
      .from(cs.querySelectorAll('.case-name,.case-headline,.case-summary'), { y: 34, autoAlpha: 0, duration: .8, ease: 'power3.out', stagger: .08 }, '-=.4')
      .from(cs.querySelector('.case-link'), { y: 18, autoAlpha: 0, duration: .6 }, '-=.5')
      .from(cs.querySelectorAll('.case-panel'), { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'power3.inOut', stagger: .1 }, '-=.35');
  });
  gsap.utils.toArray('.about-line,.promise-h,.stats li,.skills-h,.foot-cta').forEach(el => {
    gsap.from(el, { y: 36, autoAlpha: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
  });
}

/* keep case films playing whenever they are on screen */
const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.play().catch(() => {}); } else { v.pause(); } }), { threshold: .15 });
document.querySelectorAll('.case-banner video').forEach(v => { v.muted = true; vio.observe(v); });
