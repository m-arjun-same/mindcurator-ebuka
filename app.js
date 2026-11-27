/* Ebuka Photography — own code. Data first, then motion. */
const CASES = [
 { id:'weddings', name:'Weddings',
   headline:'Golden-hour vows, real tears, and the dance floor after dark',
   summary:'From the first look to the last dance — the whole day, told honestly, with nothing staged that did not happen.',
   link:'#contact', video:'assets/wedding.mp4', poster:'assets/wedding-poster.jpg',
   stat:{value:'120', label:'Weddings Shot', image:'assets/wedding-poster.jpg'},
   quote:{title:'The day, as it felt', text:'No stiff posing, no endless line-ups — just the vows, the laughter and the people you love, kept as they were.', name:'Weddings', role:'Ebuka Photography', avatar:'assets/wedding-poster.jpg'} },
 { id:'portraits', name:'Portraits',
   headline:'Portraits that look like you on your best, most relaxed day',
   summary:'Studio or open sky, soft light and time to settle in — portraits for people who hate having their photo taken.',
   link:'#contact', video:'assets/portrait.mp4', poster:'assets/portrait-poster.jpg',
   stat:{value:'1', label:'Hour, unhurried', image:'assets/portrait-poster.jpg'},
   quote:{title:'Relaxed beats perfect', text:'The best portraits happen after the nerves drop — so we shoot slow, talk lots, and keep the camera out of the way.', name:'Portraits', role:'Ebuka Photography', avatar:'assets/portrait-poster.jpg'} },
 { id:'events', name:'Events',
   headline:'The room, the noise, the confetti — events shot like you were there',
   summary:'Birthdays, launches and nights that run late. Candid, fast and close — the energy first, the details second.',
   link:'#contact', video:'assets/event.mp4', poster:'assets/event-poster.jpg',
   stat:{value:'250+', label:'Shoots Delivered', image:'assets/event-poster.jpg'},
   quote:{title:'In the middle of it', text:'We shoot from inside the crowd, not from the edge of the room — so the photos feel like the night did.', name:'Events', role:'Ebuka Photography', avatar:'assets/event-poster.jpg'} },
 { id:'fashion', name:'Editorial & Fashion',
   headline:'Bold colour, hard light, and a frame that lets the look breathe',
   summary:'Editorial and fashion work for brands and models — clean sets, strong shapes, and images built to be seen big.',
   link:'#contact', video:'assets/fashion.mp4', poster:'assets/fashion-poster.jpg',
   stat:{value:'8', label:'Years Behind the Lens', image:'assets/fashion-poster.jpg'},
   quote:{title:'The look leads', text:'Light, colour and line do the talking — the camera just stays out of their way.', name:'Editorial & Fashion', role:'Ebuka Photography', avatar:'assets/fashion-poster.jpg'} },
 { id:'family', name:'Family',
   headline:'Family photos where nobody is told to say cheese',
   summary:'Sunny parks, living rooms, grandparents and chaos — family shoots that end with photos you actually want on the wall.',
   link:'#contact', video:'assets/family.mp4', poster:'assets/family-poster.jpg',
   stat:{value:'100%', label:'Real Moments, No Stock', image:'assets/family-poster.jpg'},
   quote:{title:'Let them be themselves', text:'Kids run, parents laugh, someone always blinks — and somehow those are the frames everyone keeps.', name:'Family', role:'Ebuka Photography', avatar:'assets/family-poster.jpg'} },
];
const SKILLS = [
 {ico:'✦', title:'Weddings', desc:'Full-day coverage, from getting ready to the last dance', img:'assets/wedding-poster.jpg'},
 {ico:'✧', title:'Portraits', desc:'Studio and outdoor portraits that actually look like you', img:'assets/portrait-poster.jpg'},
 {ico:'✦', title:'Events', desc:'Candid coverage that keeps the energy of the night', img:'assets/event-poster.jpg'},
 {ico:'✧', title:'Editorial', desc:'Fashion and brand work with bold light and colour', img:'assets/fashion-poster.jpg'},
 {ico:'✦', title:'Family', desc:'Relaxed family shoots, at home or out in the sun', img:'assets/family-poster.jpg'},
];

document.getElementById('caseList').innerHTML = CASES.map(c => `
<article class="case-study">
  <div class="case-header">
    <img class="case-camera" src="assets/camera.svg" alt="" loading="lazy">
    <div class="case-head-grid">
      <div>
        <h3 class="case-name">${c.name}</h3>
        <p class="case-headline">${c.headline}</p>
      </div>
      <div>
        <p class="case-summary">${c.summary}</p>
        <a class="case-link magnetic" href="${c.link}"><span class="roll"><span>Book This Shoot</span></span></a>
      </div>
    </div>
  </div>
  <div class="case-media">
    <div class="case-panel case-banner">
      <video src="${c.video}" poster="${c.poster}" autoplay muted loop playsinline preload="auto" aria-label="${c.name} film"></video>
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
    tl.from(cs.querySelector('.case-camera'), { y: 20, autoAlpha: 0, duration: .7, ease: 'power3.out' })
      .from(cs.querySelectorAll('.case-name,.case-headline,.case-summary'), { y: 34, autoAlpha: 0, duration: .8, ease: 'power3.out', stagger: .08 }, '-=.4')
      .from(cs.querySelector('.case-link'), { y: 18, autoAlpha: 0, duration: .6 }, '-=.5')
      .from(cs.querySelectorAll('.case-panel'), { clipPath: 'inset(0 0 100% 0)', duration: .9, ease: 'power3.inOut', stagger: .1 }, '-=.35');
  });
  gsap.utils.toArray('.about-line,.stats li').forEach(el => {
    gsap.from(el, { y: 36, autoAlpha: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
  });
}

/* ---------- motion upgrade (own code; mirror-animmasterlib scroll-5 / text-15 / hero-1) ---------- */
(() => {
  if (!window.gsap || !window.ScrollTrigger) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  gsap.registerPlugin(ScrollTrigger);
  /* scroll progress bar */
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: .3 } });
  /* hero-1: hero copy + photo scrub out as you leave the hero */
  gsap.to('.hero-inner', { yPercent: -12, autoAlpha: .2, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  /* word-wipe headings: words fade in left to right, scrubbed */
  document.querySelectorAll('.promise-h,.skills-h,.gallery-h,.process-h').forEach(el => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="ww" style="display:inline-block">${w}</span>`).join(' ');
    gsap.fromTo(el.querySelectorAll('.ww'), { opacity: .14 }, { opacity: 1, stagger: .08, ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 45%', scrub: true } });
  });
  /* scroll-5: about photos drift at different speeds */
  document.querySelectorAll('.about-line .chip').forEach((chip, i) => {
    gsap.to(chip, { y: [-28, 22, -14][i % 3], ease: 'none', scrollTrigger: { trigger: '.about', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  /* case films drift inside their frames */
  document.querySelectorAll('.case-banner video').forEach(v => {
    gsap.fromTo(v, { yPercent: -5, scale: 1.12 }, { yPercent: 5, scale: 1.12, ease: 'none', scrollTrigger: { trigger: v.closest('.case-study'), start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  /* gallery clip-reveal + process steps */
  gsap.utils.toArray('.gal-item').forEach(el => {
    gsap.from(el, { clipPath: 'inset(0 0 100% 0)', y: 40, autoAlpha: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
  gsap.from('.step', { y: 36, autoAlpha: 0, duration: .8, ease: 'power3.out', stagger: .12, scrollTrigger: { trigger: '.steps', start: 'top 85%' } });
})();

/* ---------- gallery lightbox ---------- */
(() => {
  const items = [...document.querySelectorAll('.gal-item')];
  const box = document.getElementById('lightbox'), img = document.getElementById('lbImg'), cap = document.getElementById('lbCap');
  if (!items.length || !box) return;
  let cur = 0;
  const open = i => { cur = (i + items.length) % items.length; img.src = items[cur].querySelector('img').src; img.alt = items[cur].querySelector('img').alt; cap.textContent = items[cur].querySelector('.gal-cap').textContent; box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
  const close = () => { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  items.forEach((it, i) => it.addEventListener('click', () => open(i)));
  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', e => { e.stopPropagation(); open(cur - 1); });
  document.getElementById('lbNext').addEventListener('click', e => { e.stopPropagation(); open(cur + 1); });
  box.addEventListener('click', e => { if (e.target === box) close(); });
  document.addEventListener('keydown', e => { if (!box.classList.contains('open')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') open(cur - 1); if (e.key === 'ArrowRight') open(cur + 1); });
})();

/* ---------- header: solid bar once you scroll (probe: blend header collided with content) ---------- */
(() => {
  const head = document.querySelector('.site-head');
  if (!head) return;
  const onScroll = () => head.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- hero photo hover: 3D tilt + lift follows the cursor (works with or without GSAP) ---------- */
(() => {
  const hero = document.querySelector('.hero'), img = document.querySelector('.hero-img');
  if (!hero || !img || window.matchMedia('(hover: none)').matches) return;
  if (!window.gsap) img.style.transition = 'transform .6s cubic-bezier(.22,1,.36,1), filter .6s ease';
  /* probe lesson: rotationY-only tilt is near-invisible on a flat cutout
     (a few px of foreshortening) — lean in-plane + shift + lift so it reads */
  const apply = o => {
    if (window.gsap) gsap.to(img, { rotationY: o.ry, rotationX: o.rx, rotation: o.rot, x: o.x, y: o.y, scale: o.s, filter: o.f, transformPerspective: 900, duration: .5, ease: 'power3.out' });
    else { img.style.transform = `perspective(900px) rotateY(${o.ry}deg) rotateX(${o.rx}deg) rotate(${o.rot}deg) translate(${o.x}px, ${o.y}px) scale(${o.s})`; img.style.filter = o.f; }
  };
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    const dx = (e.clientX - r.left) / r.width - .5, dy = (e.clientY - r.top) / r.height - .5;
    apply({ rx: -dy * 7, ry: dx * 10, rot: dx * 6, x: dx * 16, y: dy * 12, s: 1.05, f: 'brightness(1.07)' });
  });
  hero.addEventListener('mouseleave', () => apply({ rx: 0, ry: 0, rot: 0, x: 0, y: 0, s: 1, f: 'brightness(1)' }));
})();

/* keep case films playing whenever they are on screen */
const vio = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.play().catch(() => {}); } else { v.pause(); } }), { threshold: .15 });
document.querySelectorAll('.case-banner video').forEach(v => {
  v.muted = true;
  vio.observe(v);
  v.addEventListener('loadeddata', () => { const r = v.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) v.play().catch(() => {}); });
  v.addEventListener('click', () => { if (v.paused) v.play().catch(() => {}); else v.pause(); });
});

/* footer: copy-email pill + intro reveal */
(() => {
  const btn = document.getElementById('feCopy'), txt = document.getElementById('feText');
  const email = 'hello@ebukaphotography.com';
  btn && btn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(email); txt.textContent = 'Copied!'; }
    catch { window.location.href = 'mailto:' + email; return; }
    setTimeout(() => txt.textContent = email, 1600);
  });
  if (window.gsap && window.ScrollTrigger) {
    gsap.from('.footer-name,.footer-copy', { y: 30, autoAlpha: 0, duration: .9, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: '.foot', start: 'top 80%' } });
    gsap.from('.footer-email', { autoAlpha: 0, duration: .8, scrollTrigger: { trigger: '.foot', start: 'top 80%' } });
    gsap.from('.footer-icon', { scale: 0, duration: .7, ease: 'back.out(2)', stagger: .07, scrollTrigger: { trigger: '.foot', start: 'top 80%' } });
  }
})();
