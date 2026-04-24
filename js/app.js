/* ==========================================================================
   APP — Single-Page Application Router & Initialization
   Handles client-side routing, page transitions, and scroll-to-top.
   ========================================================================== */


/**
 * Simple hash-based SPA router.
 * Maps URL paths to page-rendering functions.
 * Uses the hash (#) for navigation to work without a server.
 */
const Router = {
  routes: {},       // Map of path → render function
  mainEl: null,     // The <main> element where pages render
  currentPath: '',  // Current active path

  /**
   * Register a route with its rendering function.
   * @param {string} path - URL path (e.g., '/', '/products')
   * @param {Function} renderFn - Function that returns HTML string for the page
   */
  addRoute(path, renderFn) {
    this.routes[path] = renderFn;
  },

  /**
   * Initialize the router — attach event listeners and render initial page.
   */
  init() {
    this.mainEl = document.getElementById('main-content');

    // Listen for hash changes (navigation)
    window.addEventListener('hashchange', () => this.handleRoute());

    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', () => this.handleRoute());

    // Render the initial page
    this.handleRoute();
  },

  /**
   * Get the current path from the hash or default to '/'.
   */
  getPath() {
    const hash = window.location.hash.slice(1); // Remove '#'
    return hash || '/';
  },

  /**
   * Handle a route change — find the matching page and render it.
   */
  handleRoute() {
    const path = this.getPath();

    // Don't re-render if we're already on this page
    if (path === this.currentPath) return;
    this.currentPath = path;

    // Find matching route or show 404
    const renderFn = this.routes[path] || this.routes['*'];

    if (renderFn && this.mainEl) {
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'auto' });

      // Render the page content
      this.mainEl.innerHTML = renderFn();

      // Re-initialize animations and page-specific JS
      initScrollAnimations();
      initPageSpecificScripts(path);

      // Update active nav link
      updateActiveNavLink(path);
    }
  },

  /**
   * Navigate to a new path programmatically.
   * @param {string} path - The path to navigate to
   */
  navigate(path) {
    window.location.hash = path;
  }
};


/**
 * Navigate to a page — called from onclick handlers.
 * @param {string} path - The route path to navigate to
 */
function navigateTo(path) {
  Router.navigate(path);
}


/**
 * Update the active state on navigation links.
 * @param {string} currentPath - The current active path
 */
function updateActiveNavLink(currentPath) {
  // Desktop nav links
  document.querySelectorAll('.navbar-link').forEach(link => {
    const linkPath = link.getAttribute('data-path');
    link.classList.toggle('active', linkPath === currentPath);
  });

  // Mobile nav links
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    const linkPath = link.getAttribute('data-path');
    link.classList.toggle('active', linkPath === currentPath);
  });
}


/**
 * Initialize IntersectionObserver for scroll-triggered animations.
 * Elements with class 'animate-on-scroll', 'animate-slide-left', etc.
 * get the 'visible' class added when they enter the viewport.
 */
function initScrollAnimations() {
  // Small delay to ensure DOM has been updated
  setTimeout(() => {
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .animate-fade'
    );

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, {
      threshold: 0.1,       // Trigger when 10% visible
      rootMargin: '0px 0px -50px 0px'  // Slight offset from bottom
    });

    animatedElements.forEach(el => observer.observe(el));
  }, 50);
}


/**
 * Initialize page-specific JavaScript after a page renders.
 * Each page may have interactive features (carousel, form, etc.).
 * @param {string} path - The current page path
 */
function initPageSpecificScripts(path) {
  switch (path) {
    case '/':
      initHeroCarousel();
      initTestimonialCarousel();
      break;
    case '/products':
      initProductFilter();
      initProductModals();
      break;
    case '/blog':
      initBlogFilter();
      initBlogExpand();
      break;
    case '/contact':
      initContactForm();
      break;
  }
}


/* ==========================================================================
   INITIALIZATION — Run when the DOM is ready
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Register all routes ---
  Router.addRoute('/',         renderHomePage);
  Router.addRoute('/products', renderProductsPage);
  Router.addRoute('/about',    renderAboutPage);
  Router.addRoute('/story',    renderStoryPage);
  Router.addRoute('/blog',     renderBlogPage);
  Router.addRoute('/contact',  renderContactPage);
  Router.addRoute('*',         renderNotFoundPage);

  // --- Initialize the router ---
  Router.init();

  // --- Initialize the navbar ---
  initNavbar();
});
