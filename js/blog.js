/* ==========================================================================
   BLOG — Blog listing page with category filter and expandable articles
   ========================================================================== */

let activeBlogFilter = 'all';

/**
 * Render the Blog page HTML.
 * @returns {string} HTML string
 */
function renderBlogPage() {
  return `
    <div class="page-padded">
      <section class="blog-section">
        <div class="container">
          <!-- Section header -->
          <div class="section-header animate-on-scroll">
            <span class="section-badge section-badge--green">Blog</span>
            <h2 class="section-title">Stories, Recipes & Health Tips</h2>
            <p class="section-subtitle">
              Learn about natural food, discover delicious recipes with our products,
              and get practical tips for a healthier kitchen.
            </p>
          </div>

          <!-- Category filter -->
          <div class="product-filter-bar animate-on-scroll animate-delay-2" id="blog-filter-bar">
            <!-- Rendered by JS -->
          </div>

          <!-- Blog grid -->
          <div class="grid-3" id="blog-grid">
            <!-- Rendered by JS -->
          </div>
        </div>
      </section>
    </div>
  `;
}


/**
 * Initialize blog filter buttons and render grid.
 */
function initBlogFilter() {
  activeBlogFilter = 'all';
  renderBlogFilterButtons();
  renderBlogGrid();
}


/**
 * Render blog category filter buttons.
 */
function renderBlogFilterButtons() {
  const bar = document.getElementById('blog-filter-bar');
  if (!bar) return;

  bar.innerHTML = BLOG_CATEGORIES.map(cat => `
    <button
      class="product-filter-btn ${cat.key === activeBlogFilter ? 'active' : ''}"
      onclick="filterBlog('${cat.key}')"
    >
      ${cat.label}
    </button>
  `).join('');
}


/**
 * Filter blog articles by category.
 * @param {string} category - Category key to filter by
 */
function filterBlog(category) {
  activeBlogFilter = category;
  renderBlogFilterButtons();
  renderBlogGrid();
}


/**
 * Render the blog card grid based on active filter.
 */
function renderBlogGrid() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const filtered = activeBlogFilter === 'all'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === activeBlogFilter);

  grid.innerHTML = filtered.map((article, i) => `
    <div class="blog-card animate-on-scroll animate-delay-${Math.min(i + 1, 6)}">
      <div class="blog-card-header">
        <span class="blog-card-emoji">${article.emoji}</span>
        <span class="blog-card-category">${article.category}</span>
      </div>
      <div class="blog-card-body">
        <h3 class="blog-card-title">${article.title}</h3>
        <p class="blog-card-teaser">${article.teaser}</p>
        <span class="blog-card-meta">${article.readTime}</span>
        <button class="blog-card-read-btn" onclick="toggleBlogArticle(${article.id})">
          Read Article ${SVG_ICONS.arrowRight}
        </button>
      </div>
      <div class="blog-expanded" id="blog-expanded-${article.id}">
        <div class="blog-expanded-content">${article.body}</div>
        <button class="blog-card-read-btn" onclick="toggleBlogArticle(${article.id})" style="margin-top: 1rem;">
          Close ${SVG_ICONS.chevronUp}
        </button>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations
  initScrollAnimations();
}


/**
 * Initialize blog expandable articles.
 */
function initBlogExpand() {
  // Handled via onclick — no extra setup needed
}


/**
 * Toggle a blog article's expanded content.
 * @param {number} articleId - The article ID to expand/collapse
 */
function toggleBlogArticle(articleId) {
  const expandedEl = document.getElementById(`blog-expanded-${articleId}`);
  if (!expandedEl) return;

  expandedEl.classList.toggle('open');
}
