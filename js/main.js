// ═══════════════════════════════════════
//  摩登上海：漫画的Art Deco装饰语法
//  ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─── Scroll Reveal ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

  // ─── Progress Bar ───
  const progressFill = document.getElementById('progress-fill');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progressFill.style.width = Math.min(pct, 100) + '%';
  });

  // ─── Back to Top ───
  const backTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 600);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ─── Active Nav Highlight ───
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let current = '';
    const scrollY = window.scrollY + 200;
    sections.forEach(s => {
      if (s.offsetTop <= scrollY && s.offsetTop + s.offsetHeight > scrollY) {
        current = s.id;
      }
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // ─── Mobile Nav Toggle ───
  const navToggle = document.querySelector('.nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });
  navLinksContainer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinksContainer.classList.remove('open'));
  });

  // ─── Smooth scroll for nav links ───
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('🎯 摩登上海：漫画的Art Deco装饰语法 — 网站已加载');
});
