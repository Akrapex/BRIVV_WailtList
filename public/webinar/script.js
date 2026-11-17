/* Akrapex webinar page, version 2: motion (GSAP + ScrollTrigger + SplitText + Lenis) */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var isDesktop = window.matchMedia('(min-width: 961px)').matches;

  /* ---------- Things that work with or without animation ---------- */
  function initFaq() {
    var items = document.querySelectorAll('.faq__item');
    items.forEach(function (item) {
      var btn = item.querySelector('.faq__q');
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        items.forEach(function (other) {
          other.classList.remove('is-open');
          other.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
        if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 650);
      });
    });
  }

  function initNavPlain() {
    var nav = document.getElementById('nav');
    var last = window.scrollY;
    function onScroll() {
      var y = window.scrollY;
      nav.classList.toggle('is-solid', y > 60);
      nav.classList.toggle('is-hidden', y > last && y > 500);
      last = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    var bar = document.getElementById('progress');
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
    }, { passive: true });
  }

  initFaq();
  initNavPlain();

  if (reduce || !window.gsap || !window.ScrollTrigger || !window.SplitText) {
    root.classList.remove('js');
    var pre = document.getElementById('preloader');
    if (pre) pre.remove();
    return;
  }
  window.__akrReady = true;

  gsap.registerPlugin(ScrollTrigger, SplitText);

  /* ---------- Smooth scrolling synced with GSAP ---------- */
  var lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        e.preventDefault();
        if (id === '#' || id === '#top') lenis.scrollTo(0, { duration: 1.6 });
        else lenis.scrollTo(id, { offset: -70, duration: 1.4 });
      });
    });
  }
  var progress = document.getElementById('progress');
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: function (self) { progress.style.transform = 'scaleX(' + self.progress + ')'; }
  });

  /* ---------- Helpers ---------- */
  function splitLines(el) {
    return SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'ln' });
  }

  /* ---------- Hero intro ---------- */
  function heroIntro() {
    var h1 = document.querySelector('.hero h1');
    var split = splitLines(h1);
    gsap.set(h1, { visibility: 'visible' });
    var tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('.hero__img', { scale: 1.22 }, { scale: 1, duration: 2.6, ease: 'power3.out' }, 0)
      .from(split.lines, { yPercent: 115, duration: 1.3, stagger: 0.12 }, 0.25)
      .to('[data-hero]', { opacity: 1, y: 0, duration: 1.1, stagger: 0.12 }, 0.5)
      .from('.nav__inner', { yPercent: -120, opacity: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform,opacity' }, 0.6)
      .from('.event li', { x: 30, opacity: 0, duration: 1, stagger: 0.14 }, 0.9);
    gsap.set('[data-hero]', { y: 32 });
  }

  /* ---------- Scroll-driven motion ---------- */
  function scrollMotion() {
    /* Hero parallax and fade */
    gsap.to('.hero__img', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__copy', { yPercent: -8, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: '30% top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__scroll', { opacity: 0, scrollTrigger: { trigger: '.hero', start: 'top top', end: '15% top', scrub: true } });

    /* Heading line reveals (except the hero h1, already handled) */
    document.querySelectorAll('[data-split]').forEach(function (h) {
      if (h.closest('.hero')) return;
      var split = splitLines(h);
      gsap.set(h, { visibility: 'visible' });
      gsap.from(split.lines, {
        yPercent: 115, duration: 1.2, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: h, start: 'top 88%', once: true }
      });
    });

    /* Generic reveals */
    gsap.set('[data-reveal]', { y: 30 });
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%', once: true,
      onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }); }
    });

    /* Cards */
    gsap.set('[data-card]', { y: 50, scale: 0.96 });
    ScrollTrigger.batch('[data-card]', {
      start: 'top 90%', once: true,
      onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: 'expo.out', stagger: 0.13 }); }
    });

    /* About visual: wipe-in, image parallax, floating inset */
    var vis = document.querySelector('.about__visual');
    gsap.fromTo('.about__main', { clipPath: 'inset(0% 0% 100% 0% round 32px)' }, {
      clipPath: 'inset(0% 0% 0% 0% round 32px)', duration: 1.6, ease: 'expo.inOut',
      scrollTrigger: { trigger: vis, start: 'top 80%', once: true }
    });
    gsap.fromTo('.about__img', { yPercent: -7, scale: 1.18 }, {
      yPercent: 7, scale: 1.08, ease: 'none',
      scrollTrigger: { trigger: vis, start: 'top bottom', end: 'bottom top', scrub: true }
    });
    gsap.from('.about__inset', { opacity: 0, y: 60, rotate: 4, duration: 1.4, ease: 'expo.out', delay: 0.5, scrollTrigger: { trigger: vis, start: 'top 75%', once: true } });
    gsap.from('.about__badge', { opacity: 0, y: 40, duration: 1.2, ease: 'expo.out', delay: 0.8, scrollTrigger: { trigger: vis, start: 'top 75%', once: true } });
    gsap.to('.about__inset', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: vis, start: 'top bottom', end: 'bottom top', scrub: true } });

    /* Founder panel */
    var panel = document.querySelector('[data-panel]');
    gsap.fromTo(panel, { scale: 0.92 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'top 35%', scrub: true } });
    gsap.fromTo('.founder__bg', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true } });
    var count = document.querySelector('[data-count]');
    if (count) {
      var target = parseInt(count.getAttribute('data-count'), 10);
      var o = { v: 0 };
      count.textContent = '0';
      ScrollTrigger.create({
        trigger: count, start: 'top 85%', once: true,
        onEnter: function () {
          gsap.to(o, { v: target, duration: 2.4, ease: 'power3.out', onUpdate: function () { count.textContent = Math.round(o.v).toLocaleString('en-US'); } });
        }
      });
    }
    gsap.from('.chips li', { opacity: 0, y: 20, scale: 0.9, duration: 0.9, stagger: 0.12, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.chips', start: 'top 90%', once: true } });

    /* Final call to action backdrop */
    gsap.fromTo('.cta__bg', { yPercent: -9 }, { yPercent: 9, ease: 'none', scrollTrigger: { trigger: '.cta__panel', start: 'top bottom', end: 'bottom top', scrub: true } });

    /* FAQ rows */
    gsap.set('.faq__item', { opacity: 0, y: 24 });
    ScrollTrigger.batch('.faq__item', {
      start: 'top 92%', once: true,
      onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }); }
    });
  }

  /* ---------- Magnetic buttons (desktop pointer only) ---------- */
  function magnetic() {
    if (!finePointer) return;
    document.querySelectorAll('.magnetic').forEach(function (btn) {
      var xTo = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' });
      var yTo = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' });
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
      });
      btn.addEventListener('mouseleave', function () { xTo(0); yTo(0); });
    });
  }

  /* ---------- Preloader, then start ---------- */
  var pre = document.getElementById('preloader');
  var seen = false;
  try { seen = sessionStorage.getItem('akr-v2-seen') === '1'; } catch (e) {}

  function start() {
    scrollMotion();
    magnetic();
    heroIntro();
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }

  function runPreloader(done) {
    if (!pre || seen) { if (pre) pre.remove(); done(); return; }
    var logo = pre.querySelector('img');
    var loaded = new Promise(function (res) { if (document.readyState === 'complete') res(); else window.addEventListener('load', res); });
    var minTime = new Promise(function (res) { setTimeout(res, 1300); });
    var maxTime = new Promise(function (res) { setTimeout(res, 4000); });
    gsap.fromTo(logo, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'expo.out' });
    gsap.to(logo, { y: -8, duration: 1.1, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    Promise.race([Promise.all([loaded, minTime]), maxTime]).then(function () {
      try { sessionStorage.setItem('akr-v2-seen', '1'); } catch (e) {}
      gsap.killTweensOf(logo);
      gsap.timeline({ onComplete: function () { pre.remove(); } })
        .to(logo, { scale: 0.85, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .to(pre, { yPercent: -100, duration: 1.1, ease: 'expo.inOut' }, '-=0.1');
      setTimeout(done, 700);
    });
  }

  var fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  fontsReady.then(function () { runPreloader(start); });
})();
