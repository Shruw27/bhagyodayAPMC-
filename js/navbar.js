/* ==========================================================================
   NAVBAR — Glassmorphism navigation bar with scroll behavior
   Handles: scroll transparency, mobile menu toggle, sticky behavior
   ========================================================================== */


/**
 * Initialize the navbar — scroll listener, mobile menu, link clicks.
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleBtn = document.getElementById('navbar-toggle');

  if (!navbar) return;

  // --- Scroll behavior: toggle transparent/solid navbar ---
  function updateNavbarOnScroll() {
    const isHome = Router.getPath() === '/';
    const scrolled = window.scrollY > 50;

    if (isHome && !scrolled) {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.remove('transparent');
      if (scrolled) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });
  updateNavbarOnScroll(); // Run immediately

  // Re-check on route change (when hash changes)
  window.addEventListener('hashchange', () => {
    updateNavbarOnScroll();
    closeMobileMenu();
  });

  // --- Mobile menu toggle ---
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenu.classList.add('open');
        toggleBtn.innerHTML = SVG_ICONS.x;
      }
    });
  }

  // --- Desktop nav link clicks ---
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      navigateTo(path);
    });
  });

  // --- Mobile nav link clicks ---
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      navigateTo(path);
      closeMobileMenu();
    });
  });
}


/**
 * Close the mobile menu and reset the toggle icon.
 */
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const toggleBtn = document.getElementById('navbar-toggle');

  if (mobileMenu) mobileMenu.classList.remove('open');
  if (toggleBtn) toggleBtn.innerHTML = SVG_ICONS.menu;
}
