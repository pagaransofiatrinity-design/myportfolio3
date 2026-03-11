/* ============================================
   EDMON PORTFOLIO — BASE FUNCTIONALITY
   base.js
   ============================================ */

(function () {
  'use strict';

  /* ── ACTIVE NAV LINK ──────────────────────── */
  function setActiveNav() {
    const current = location.pathname.split('/').pop() || 'homepage.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href.includes(current));
    });
  }

  /* ── GALLERY LIGHTBOX ─────────────────────── */
  function initLightbox() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8592;</button>
      <img class="lightbox-img" src="" alt="gallery photo">
      <button class="lightbox-nav lightbox-next" aria-label="Next">&#8594;</button>
      <button class="lightbox-close" aria-label="Close">&#x2715;</button>
    `;
    document.body.appendChild(overlay);

    const imgEl    = overlay.querySelector('.lightbox-img');
    const btnPrev  = overlay.querySelector('.lightbox-prev');
    const btnNext  = overlay.querySelector('.lightbox-next');
    const btnClose = overlay.querySelector('.lightbox-close');

    let currentIndex = 0;
    const getImgs = () => [...gallery.querySelectorAll('.gallery-item img')];

    function openAt(idx) {
      const imgs = getImgs();
      if (!imgs.length) return;
      currentIndex = (idx + imgs.length) % imgs.length;
      imgEl.src = imgs[currentIndex].src;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => { imgEl.src = ''; }, 300);
    }

    gallery.addEventListener('click', e => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const img = item.querySelector('img');
      if (!img) return;
      openAt(getImgs().indexOf(img));
    });

    btnClose.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    btnPrev.addEventListener('click', () => openAt(currentIndex - 1));
    btnNext.addEventListener('click', () => openAt(currentIndex + 1));

    document.addEventListener('keydown', e => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape')     close();
      if (e.key === 'ArrowLeft')  openAt(currentIndex - 1);
      if (e.key === 'ArrowRight') openAt(currentIndex + 1);
    });
  }

  /* ── IMAGE ERROR FALLBACK ───────────────────
     Replace broken images with emoji placeholder */
  function initImageFallback() {
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function () {
        const parent = this.closest('.gallery-item');
        if (parent) {
          parent.classList.add('placeholder');
          parent.innerHTML = '📷';
        } else {
          this.style.display = 'none';
        }
      });
    });
  }

  /* ── QUIZ ENGINE ─────────────────────────────
     Exposed globally as window.QuizEngine */
  window.QuizEngine = {
    answers: {},

    setCorrectAnswers(map) {
      this.answers = map;
    },

    check() {
      let score = 0;
      const total = Object.keys(this.answers).length;

      for (let i = 1; i <= total; i++) {
        const key   = 'q' + i;
        const qDiv  = document.getElementById(key);
        if (!qDiv) continue;

        // Reset styles
        qDiv.querySelectorAll('.quiz-option').forEach(o => {
          o.classList.remove('correct', 'wrong');
        });

        // Find selected
        let selected = null;
        document.querySelectorAll(`[name="${key}"]`).forEach(r => {
          if (r.checked) selected = r.value;
        });

        const correct = this.answers[key];

        // Apply correct/wrong classes
        qDiv.querySelectorAll('.quiz-option').forEach(opt => {
          const val = opt.querySelector('input').value;
          if (val === correct)                    opt.classList.add('correct');
          if (val === selected && val !== correct) opt.classList.add('wrong');
        });

        if (selected === correct) score++;
      }

      this._showResult(score, total);
      const resultEl = document.getElementById('quizResult');
      if (resultEl) resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },

    _showResult(score, total) {
      const pct = (score / total) * 100;
      let verdict = '📚 Keep grinding — champions never quit!';
      if (pct >= 85) verdict = '🔥 On fire! You balled out!';
      else if (pct >= 65) verdict = '👏 Solid game! Keep improving!';
      else if (pct >= 45) verdict = '💪 Good effort — keep training!';

      const el = document.getElementById('quizResult');
      if (!el) return;
      el.innerHTML = `
        <div class="quiz-result anim-fade">
          <div class="quiz-score-label">Your Score</div>
          <div class="quiz-score anim-score-pop">${score}<span style="font-size:2.2rem;color:var(--text-muted)">/${total}</span></div>
          <div class="quiz-verdict">${verdict}</div>
        </div>`;
    }
  };

  /* ── SMOOTH ANCHOR LINKS ────────────────────*/
  function initSmoothLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── INIT ────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    setActiveNav();
    initLightbox();
    initImageFallback();
    initSmoothLinks();
  });

})();
