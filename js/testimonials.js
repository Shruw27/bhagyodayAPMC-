/* ==========================================================================
   TESTIMONIALS — Customer review carousel with auto-slide
   ========================================================================== */

let testimonialIndex = 0;
let testimonialInterval = null;
let testimonialsPaused = false;

/**
 * Render the Testimonials section HTML.
 * @returns {string} HTML string
 */
function renderTestimonialsSection() {
  return `
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-badge section-badge--amber">Customer Love</span>
          <h2 class="section-title">500+ Families Trust Bhagyoday</h2>
        </div>

        <div
          id="testimonial-container"
          class="testimonial-grid"
          onmouseenter="testimonialsPaused = true"
          onmouseleave="testimonialsPaused = false"
        >
          <!-- Cards rendered by JS -->
        </div>

        <div class="testimonial-nav" id="testimonial-nav">
          <!-- Navigation rendered by JS -->
        </div>
      </div>
    </section>
  `;
}


/**
 * Initialize the testimonial carousel auto-slide.
 */
function initTestimonialCarousel() {
  testimonialIndex = 0;
  testimonialsPaused = false;

  if (testimonialInterval) clearInterval(testimonialInterval);

  renderTestimonialCards();
  renderTestimonialNav();

  testimonialInterval = setInterval(() => {
    if (!testimonialsPaused) {
      testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
      renderTestimonialCards();
      renderTestimonialNav();
    }
  }, 3500);
}


/**
 * Render the visible testimonial cards (showing 3 at a time on desktop).
 */
function renderTestimonialCards() {
  const container = document.getElementById('testimonial-container');
  if (!container) return;

  const visibleCount = 3;
  const cards = [];

  for (let i = 0; i < visibleCount; i++) {
    const testimonial = TESTIMONIALS[(testimonialIndex + i) % TESTIMONIALS.length];
    cards.push(renderOneTestimonialCard(testimonial));
  }

  container.innerHTML = cards.join('');
}


/**
 * Render a single testimonial card.
 * @param {Object} t - Testimonial data object
 * @returns {string} HTML string for one card
 */
function renderOneTestimonialCard(t) {
  // Generate 5 star icons
  const stars = Array.from({ length: 5 }, () =>
    `<span class="testimonial-star">${SVG_ICONS.star}</span>`
  ).join('');

  // Get initials for avatar
  const initials = t.name.charAt(0);

  return `
    <div class="testimonial-card">
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${initials}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-location">${t.location}</div>
          <div class="testimonial-product">${t.product}</div>
        </div>
      </div>
    </div>
  `;
}


/**
 * Render testimonial navigation (prev/next buttons + dots).
 */
function renderTestimonialNav() {
  const nav = document.getElementById('testimonial-nav');
  if (!nav) return;

  const dots = TESTIMONIALS.map((_, i) => `
    <button
      class="testimonial-dot ${i === testimonialIndex ? 'active' : ''}"
      onclick="goToTestimonial(${i})"
      aria-label="Show testimonial ${i + 1}"
    ></button>
  `).join('');

  nav.innerHTML = `
    <button class="testimonial-nav-btn" onclick="prevTestimonial()" aria-label="Previous testimonial">
      ${SVG_ICONS.chevronLeft}
    </button>
    <div class="testimonial-dots">${dots}</div>
    <button class="testimonial-nav-btn" onclick="nextTestimonial()" aria-label="Next testimonial">
      ${SVG_ICONS.chevronRight}
    </button>
  `;
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
  renderTestimonialCards();
  renderTestimonialNav();
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
  renderTestimonialCards();
  renderTestimonialNav();
}

function goToTestimonial(index) {
  testimonialIndex = index;
  renderTestimonialCards();
  renderTestimonialNav();
}
