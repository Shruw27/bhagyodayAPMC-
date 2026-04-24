/* ==========================================================================
   HERO — Landing section with 3D rotating product box + auto-rotate
   ========================================================================== */

let carouselIndex = 0;
let carouselInterval = null;

/**
 * Initialize the hero section's 3D product carousel.
 * Auto-rotates through CAROUSEL_PRODUCTS every 5 seconds.
 */
function initHeroCarousel() {
  const stage = document.getElementById('carousel-stage');
  const label = document.getElementById('carousel-label');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!stage || !label || !dotsContainer) return;

  // Clear any existing interval
  if (carouselInterval) clearInterval(carouselInterval);

  carouselIndex = 0;
  renderCarouselProduct();
  renderCarouselDots();

  // Auto-advance every 5 seconds
  carouselInterval = setInterval(() => {
    carouselIndex = (carouselIndex + 1) % CAROUSEL_PRODUCTS.length;
    renderCarouselProduct();
    renderCarouselDots();
  }, 5000);
}


/**
 * Render the current carousel product's 3D box and label.
 */
function renderCarouselProduct() {
  const stage = document.getElementById('carousel-stage');
  const label = document.getElementById('carousel-label');
  const shadow = document.getElementById('carousel-shadow');

  if (!stage) return;

  const product = CAROUSEL_PRODUCTS[carouselIndex];

  // Update 3D box front/back images
  const boxHTML = `
    <div class="product-box-3d">
      <!-- Front face -->
      <div class="product-box-face product-box-face--front">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <!-- Back face (same image, slightly darker) -->
      <div class="product-box-face product-box-face--back">
        <img src="${product.image}" alt="${product.name}" style="filter: brightness(0.9);">
      </div>
      <!-- Side faces (neutral gray) -->
      <div class="product-box-face product-box-face--left"></div>
      <div class="product-box-face product-box-face--right"></div>
      <!-- Top & Bottom faces (product-colored) -->
      <div class="product-box-face product-box-face--top" style="background: ${product.topColor};"></div>
      <div class="product-box-face product-box-face--bottom" style="background: ${product.bottomColor};"></div>
    </div>
  `;

  stage.innerHTML = boxHTML;

  // Update label
  if (label) {
    label.innerHTML = `
      <span class="hero-carousel-label-dot" style="background: ${product.sideColor};"></span>
      <span class="hero-carousel-label-text">${product.name} - ${product.weight}</span>
    `;
  }

  // Update shadow color
  if (shadow) {
    shadow.style.background = `radial-gradient(ellipse, ${product.sideColor}99, transparent)`;
  }
}


/**
 * Render the carousel navigation dots.
 */
function renderCarouselDots() {
  const dotsContainer = document.getElementById('carousel-dots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = CAROUSEL_PRODUCTS.map((_, i) => `
    <button
      class="hero-carousel-dot ${i === carouselIndex ? 'active' : ''}"
      onclick="selectCarouselProduct(${i})"
      aria-label="Show product ${i + 1}"
    ></button>
  `).join('');
}


/**
 * Manually select a carousel product by index.
 * @param {number} index - The product index to show
 */
function selectCarouselProduct(index) {
  carouselIndex = index;
  renderCarouselProduct();
  renderCarouselDots();
}


/* ==========================================================================
   HOME PAGE — Combines Hero + Cover + Testimonials
   ========================================================================== */

/**
 * Render the complete Home page HTML.
 * @returns {string} HTML string for the home page
 */
function renderHomePage() {
  return `
    ${renderHeroSection()}
    ${renderCoverSection()}
    ${renderTestimonialsSection()}
  `;
}


/**
 * Render the Hero section HTML.
 */
function renderHeroSection() {
  // Generate floating leaf emojis
  const leaves = Array.from({ length: 5 }, (_, i) => `
    <div class="hero-leaf" style="top: ${12 + i * 16}%; left: ${3 + i * 6}%; animation-duration: ${3.5 + i * 0.4}s;">🌿</div>
  `).join('');

  // Generate stats
  const statsHTML = HERO_STATS.map(stat => `
    <div class="flex-col">
      <span class="hero-stat-value">${stat.value}</span>
      <span class="hero-stat-label">${stat.label}</span>
    </div>
  `).join('');

  return `
    <section id="home" class="hero">
      <!-- Decorative gradient orbs -->
      <div class="hero-orb hero-orb--amber"></div>
      <div class="hero-orb hero-orb--green"></div>

      <!-- Floating leaf emojis -->
      ${leaves}

      <div class="hero-content">
        <div class="hero-grid">
          <!-- Left column: Text content -->
          <div class="hero-text animate-on-scroll">
            <div class="animate-on-scroll animate-delay-2">
              <span class="hero-badge">
                <span class="hero-badge-dot"></span>
                100% Chemical Free 🌿 Farm Direct
              </span>
            </div>

            <h1 class="hero-title animate-on-scroll animate-delay-3">
              Pure from
              <span class="hero-title-underline">Farm,</span><br>
              Direct to <em class="hero-title-accent">You</em>
            </h1>

            <p class="hero-description animate-on-scroll animate-delay-4">
              We grow, harvest, and pack our products without a single chemical.
              From our farms in rural Maharashtra straight to your kitchen —
              taste the difference that purity makes.
            </p>

            <div class="hero-buttons animate-on-scroll animate-delay-5">
              <button class="btn btn-primary" onclick="navigateTo('/products')">
                ${SVG_ICONS.shoppingBag}
                Shop Products
              </button>
              <a href="${WHATSAPP_LINKS.general}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                ${SVG_ICONS.whatsapp}
                Chat on WhatsApp
              </a>
            </div>

            <div class="hero-stats animate-on-scroll animate-delay-6">
              ${statsHTML}
            </div>
          </div>

          <!-- Right column: 3D Product Carousel (desktop only) -->
          <div class="hero-carousel animate-scale animate-delay-5">
            <div id="carousel-shadow" class="hero-carousel-shadow"></div>
            <div id="carousel-stage" class="hero-carousel-stage">
              <!-- 3D box rendered by JS -->
            </div>
            <div id="carousel-label" class="hero-carousel-label">
              <!-- Label rendered by JS -->
            </div>
            <div id="carousel-dots" class="hero-carousel-dots">
              <!-- Dots rendered by JS -->
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero-scroll-indicator">
        <span>Scroll</span>
        ${SVG_ICONS.chevronDown}
      </div>
    </section>
  `;
}


/**
 * Render the Cover section (full-screen sugarcane field image).
 */
function renderCoverSection() {
  return `
    <section class="cover-section">
      <img src="images/cover-farm.png" alt="Sugarcane fields at Bhagyoday farms" class="cover-image">
      <div class="cover-overlay"></div>
      <div class="cover-content animate-on-scroll">
        <h2 class="cover-title animate-on-scroll animate-delay-2">
          Taste the Difference<br>Purity Makes
        </h2>
        <p class="cover-description animate-on-scroll animate-delay-3">
          Grown without chemicals. Harvested with care. Packed straight from the heart
          of our sugarcane fields to your table.
        </p>
        <button class="btn btn-amber animate-on-scroll animate-delay-4" onclick="navigateTo('/products')">
          Explore Our Products
        </button>
      </div>
    </section>
  `;
}
