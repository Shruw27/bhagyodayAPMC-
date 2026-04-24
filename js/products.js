/* ==========================================================================
   PRODUCTS — Product catalog page with filtering and detail modals
   ========================================================================== */

let activeProductFilter = 'all';

/**
 * Render the Products page HTML.
 * @returns {string} HTML string for the products page
 */
function renderProductsPage() {
  return `
    <div class="page-padded">
      <section class="products-section">
        <div class="container">
          <!-- Section header -->
          <div class="section-header animate-on-scroll">
            <span class="section-badge section-badge--green">Our Products</span>
            <h2 class="section-title">Pure. Natural. Delicious.</h2>
            <p class="section-subtitle">
              Every product is grown without chemicals, packed with care,
              and delivered fresh to your doorstep.
            </p>
          </div>

          <!-- Filter buttons -->
          <div class="product-filter-bar animate-on-scroll animate-delay-2" id="product-filter-bar">
            <!-- Rendered by JS -->
          </div>

          <!-- Product grid -->
          <div class="grid-3" id="product-grid">
            <!-- Rendered by JS -->
          </div>
        </div>
      </section>

      <!-- Product detail modal (hidden by default) -->
      <div class="product-modal-overlay" id="product-modal-overlay" onclick="closeProductModal(event)">
        <div class="product-modal" id="product-modal" onclick="event.stopPropagation()">
          <!-- Modal content rendered by JS -->
        </div>
      </div>
    </div>
  `;
}


/**
 * Initialize product filter buttons and render the grid.
 */
function initProductFilter() {
  activeProductFilter = 'all';
  renderProductFilterButtons();
  renderProductGrid();
}


/**
 * Render the category filter buttons.
 */
function renderProductFilterButtons() {
  const bar = document.getElementById('product-filter-bar');
  if (!bar) return;

  bar.innerHTML = PRODUCT_CATEGORIES.map(cat => `
    <button
      class="product-filter-btn ${cat.key === activeProductFilter ? 'active' : ''}"
      onclick="filterProducts('${cat.key}')"
    >
      ${cat.label}
    </button>
  `).join('');
}


/**
 * Filter products by category and re-render the grid.
 * @param {string} category - The category key to filter by
 */
function filterProducts(category) {
  activeProductFilter = category;
  renderProductFilterButtons();
  renderProductGrid();
}


/**
 * Render the product card grid based on the active filter.
 */
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = activeProductFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeProductFilter);

  grid.innerHTML = filtered.map((product, i) => `
    <div class="product-card animate-on-scroll animate-delay-${Math.min(i + 1, 6)}" onclick="openProductModal(${product.id})">
      <img
        src="${product.image}"
        alt="${product.name}"
        class="product-card-image"
        loading="lazy"
      >
      <div class="product-card-body">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-weight">${product.weight}</p>
        <div class="product-card-tags">
          ${product.tags.map(tag => `<span class="product-card-tag">${tag}</span>`).join('')}
        </div>
        <div class="product-card-footer">
          <span class="product-card-cta">
            View Details ${SVG_ICONS.arrowRight}
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init scroll animations for newly rendered cards
  initScrollAnimations();
}


/**
 * Initialize product modal click handlers.
 */
function initProductModals() {
  // Modal is initialized via onclick on cards — no extra setup needed
}


/**
 * Open the product detail modal.
 * @param {number} productId - The product ID to show
 */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const overlay = document.getElementById('product-modal-overlay');
  const modal = document.getElementById('product-modal');

  if (!overlay || !modal) return;

  modal.innerHTML = `
    <button class="product-modal-close" onclick="closeProductModal()" aria-label="Close">
      ${SVG_ICONS.x}
    </button>
    <img src="${product.image}" alt="${product.name}" class="product-modal-image">
    <div class="product-modal-body">
      <h2 class="product-modal-name">${product.name}</h2>
      <p class="product-modal-weight">${product.weight}</p>
      <p class="product-modal-description">${product.description}</p>

      <div class="product-modal-highlights">
        <h4>Highlights</h4>
        <ul>
          ${product.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>

      <a href="${WHATSAPP_LINKS.product(product.name)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%; justify-content: center;">
        ${SVG_ICONS.whatsapp}
        Order on WhatsApp
      </a>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}


/**
 * Close the product detail modal.
 * @param {Event} [event] - Click event (used to check if clicked on overlay)
 */
function closeProductModal(event) {
  // If called from overlay click, only close if clicking the overlay itself
  if (event && event.target !== event.currentTarget) return;

  const overlay = document.getElementById('product-modal-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = ''; // Restore scrolling
}
