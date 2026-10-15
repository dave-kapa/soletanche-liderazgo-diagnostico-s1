/**
 * Application Logic for Soletanche Liderazgo Adaptativo Microsite
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initThemeToggle();
  initFontSizeControls();
  initMobileMenu();
  initPriorityFilterAndSearch();
  initThematicTabs();
  initTraceabilityFilter();
  initSmoothScroll();
});

/* 1. Reading Progress Bar */
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* 2. Theme Toggle (Light / Dark) */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('soletanche-theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark');
    updateThemeIcon(true);
  }

  toggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    localStorage.setItem('soletanche-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
  });

  function updateThemeIcon(isDark) {
    toggleBtn.innerHTML = isDark ? '☀️' : '🌙';
    toggleBtn.setAttribute('title', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo noche');
  }
}

/* 3. Font Size Adjustments */
function initFontSizeControls() {
  const btnDecrease = document.getElementById('font-decrease');
  const btnIncrease = document.getElementById('font-increase');
  if (!btnDecrease || !btnIncrease) return;

  let currentSize = parseFloat(localStorage.getItem('soletanche-font-size')) || 16.5;
  applyFontSize(currentSize);

  btnDecrease.addEventListener('click', () => {
    if (currentSize > 14) {
      currentSize -= 1;
      applyFontSize(currentSize);
    }
  });

  btnIncrease.addEventListener('click', () => {
    if (currentSize < 22) {
      currentSize += 1;
      applyFontSize(currentSize);
    }
  });

  function applyFontSize(size) {
    document.documentElement.style.setProperty('--reading-font-size', `${size}px`);
    localStorage.setItem('soletanche-font-size', size);
  }
}

/* 4. Mobile Menu */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    toggleBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.textContent = '☰';
    });
  });
}

/* 5. Priority Matrix Filter & Search */
function initPriorityFilterAndSearch() {
  const filterPills = document.querySelectorAll('.priority-filter-pill');
  const searchInput = document.getElementById('priority-search');
  const cards = document.querySelectorAll('.priority-card');

  let activeFilter = 'all';
  let searchTerm = '';

  function applyFilter() {
    cards.forEach(card => {
      const cardFreq = card.getAttribute('data-freq') || '';
      const cardText = card.textContent.toLowerCase();

      const matchesFilter = activeFilter === 'all' || cardFreq === activeFilter;
      const matchesSearch = !searchTerm || cardText.includes(searchTerm);

      if (matchesFilter && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilter();
    });
  }
}

/* 6. Thematic Tabs (Section 3.1 - 3.9) */
function initThematicTabs() {
  const navBtns = document.querySelectorAll('.thematic-nav-btn');
  const panes = document.querySelectorAll('.thematic-pane');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      
      navBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* 7. Traceability Explorer Filter */
function initTraceabilityFilter() {
  const filterPills = document.querySelectorAll('.trace-filter-pill');
  const searchInput = document.getElementById('trace-search');
  const items = document.querySelectorAll('.trace-item');

  let activeTag = 'all';
  let searchTerm = '';

  function applyTraceFilter() {
    items.forEach(item => {
      const itemTag = item.getAttribute('data-tag') || '';
      const itemText = item.textContent.toLowerCase();

      const matchesTag = activeTag === 'all' || itemTag === activeTag;
      const matchesSearch = !searchTerm || itemText.includes(searchTerm);

      if (matchesTag && matchesSearch) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeTag = pill.getAttribute('data-tag') || 'all';
      applyTraceFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyTraceFilter();
    });
  }
}

/* 8. Active Nav Link on Scroll */
function initSmoothScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}
