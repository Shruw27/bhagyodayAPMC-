/* ==========================================================================
   CONTACT — Contact page with form + info cards + CTA
   ========================================================================== */

/**
 * Render the Contact page HTML.
 * @returns {string} HTML string
 */
function renderContactPage() {
  // Build contact info cards
  const infoCards = CONTACT_INFO.map(info => {
    const iconSvg = SVG_ICONS[info.iconClass] || SVG_ICONS.mail;
    const inner = `
      <div class="contact-info-card">
        <div class="contact-info-icon" style="${info.bg}">
          <span style="${info.color}">${iconSvg}</span>
        </div>
        <div>
          <div class="contact-info-label">${info.label}</div>
          <div class="contact-info-value">${info.value}</div>
          <div class="contact-info-sub">${info.sub}</div>
        </div>
      </div>
    `;

    if (info.href) {
      return `<a href="${info.href}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
    }
    return inner;
  }).join('');

  // Build interest options
  const interestOptions = CONTACT_INTERESTS.map(opt =>
    `<option value="${opt}">${opt}</option>`
  ).join('');

  return `
    <div class="page-padded">
      <section class="contact-section">
        <div class="container">
          <!-- Section header -->
          <div class="section-header animate-on-scroll">
            <span class="section-badge section-badge--green">Get in Touch</span>
            <h2 class="section-title">Let's Talk Pure Food</h2>
            <p class="section-subtitle">
              Have a question, want a sample, or ready to place an order? We'd love to hear from you.
            </p>
          </div>

          <div class="contact-grid">
            <!-- Left: Form -->
            <div class="animate-slide-left">
              <!-- Form (shown by default) -->
              <form id="contact-form" class="contact-form" onsubmit="handleContactSubmit(event)">
                <div class="contact-form-row">
                  <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input type="text" required placeholder="Your name" class="form-input" id="contact-name">
                  </div>
                  <div class="form-group">
                    <label class="form-label">Phone Number</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" class="form-input" id="contact-phone">
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">City</label>
                  <input type="text" placeholder="Your city" class="form-input" id="contact-city">
                </div>

                <div class="form-group">
                  <label class="form-label">I'm interested in...</label>
                  <select class="form-select" id="contact-interest">
                    <option value="">Select an option</option>
                    ${interestOptions}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label">Message</label>
                  <textarea rows="4" placeholder="Tell us what you'd like to know or order..." class="form-textarea" id="contact-message"></textarea>
                </div>

                <button type="submit" class="btn btn-primary" style="justify-content: center;">
                  Send Enquiry
                </button>
              </form>

              <!-- Success state (hidden by default) -->
              <div id="contact-success" class="contact-success">
                <div class="contact-success-icon">
                  ${SVG_ICONS.check}
                </div>
                <h3 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--forest-deep);">
                  Message Received!
                </h3>
                <p style="color: var(--text-secondary); max-width: 24rem;">
                  We'll reply within 24 hours on WhatsApp. You can also chat with us directly below.
                </p>
                <button onclick="resetContactForm()" style="font-size: 0.875rem; color: var(--forest); text-decoration: underline; background: none; border: none; cursor: pointer;">
                  Send another message
                </button>
              </div>
            </div>

            <!-- Right: Contact info cards -->
            <div class="contact-info-list animate-slide-right">
              ${infoCards}
            </div>
          </div>

          <!-- CTA banner -->
          <div class="contact-cta animate-on-scroll">
            <div>
              <h3 class="contact-cta-title">Ready to order?</h3>
              <p class="contact-cta-subtitle">It's just one message away.</p>
            </div>
            <a href="${WHATSAPP_LINKS.order}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
              ${SVG_ICONS.whatsapp}
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}


/**
 * Initialize the contact form.
 */
function initContactForm() {
  // Form is ready — submit handler is inline
}


/**
 * Handle contact form submission.
 * @param {Event} e - Submit event
 */
function handleContactSubmit(e) {
  e.preventDefault();

  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');

  if (form) form.style.display = 'none';
  if (success) success.classList.add('show');
}


/**
 * Reset the contact form back to editable state.
 */
function resetContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');

  if (form) {
    form.style.display = 'flex';
    form.reset();
  }
  if (success) success.classList.remove('show');
}


/* ==========================================================================
   ABOUT PAGE — Company values and mission
   ========================================================================== */

/**
 * Render the About page HTML.
 * @returns {string} HTML string
 */
function renderAboutPage() {
  const valueCards = ABOUT_VALUES.map((v, i) => `
    <div class="about-value-card animate-on-scroll animate-delay-${i + 1}">
      <div class="about-value-icon" style="${v.bg}">${v.icon}</div>
      <div>
        <h3 class="about-value-title">${v.title}</h3>
        <p class="about-value-text">${v.text}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="page-padded">
      <section class="about-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <span class="section-badge section-badge--green">About Us</span>
            <h2 class="section-title">Pure from Farm, Direct to You</h2>
            <p class="section-subtitle">
              We're a family of farmers and food lovers on a mission to bring
              pure, chemical-free food back to Indian kitchens.
            </p>
          </div>

          <div class="about-grid">
            <!-- Image -->
            <div class="about-image-wrapper animate-slide-left">
              <img src="images/cover-farm.png" alt="Bhagyoday APMC farms in Maharashtra">
            </div>

            <!-- Values -->
            <div class="flex-col" style="gap: var(--space-5);">
              ${valueCards}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}


/* ==========================================================================
   STORY PAGE — Company timeline
   ========================================================================== */

/**
 * Render the Story page HTML.
 * @returns {string} HTML string
 */
function renderStoryPage() {
  const timelineItems = STORY_TIMELINE.map((item, i) => `
    <div class="story-item animate-on-scroll animate-delay-${Math.min(i + 1, 6)}">
      <div class="story-dot"></div>
      <div class="story-year">${item.year}</div>
      <h3 class="story-title">${item.title}</h3>
      <p class="story-text">${item.text}</p>
    </div>
  `).join('');

  return `
    <div class="page-padded">
      <section class="story-section">
        <div class="container">
          <div class="section-header animate-on-scroll">
            <span class="section-badge section-badge--amber">Our Story</span>
            <h2 class="section-title">From Farm to Family</h2>
            <p class="section-subtitle">
              How a simple question about jaggery quality sparked a movement
              for chemical-free food in India.
            </p>
          </div>

          <div class="story-timeline">
            ${timelineItems}
          </div>
        </div>
      </section>
    </div>
  `;
}


/* ==========================================================================
   404 PAGE — Not Found
   ========================================================================== */

/**
 * Render the 404 Not Found page.
 * @returns {string} HTML string
 */
function renderNotFoundPage() {
  return `
    <div class="not-found page-padded">
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="#/" class="btn btn-primary">Back to Home</a>
    </div>
  `;
}
