/* ==========================================================================
   DATA — All website content, product information, and text copy.
   Edit this file to update any content on the website.
   ========================================================================== */


/* ---------- Navigation Links ---------- */
const NAV_LINKS = [
  { label: 'Home',      path: '/' },
  { label: 'Products',  path: '/products' },
  { label: 'About Us',  path: '/about' },
  { label: 'Our Story', path: '/story' },
  { label: 'Blog',      path: '/blog' },
  { label: 'Contact',   path: '/contact' }
];


/* ---------- Hero Section Stats ---------- */
const HERO_STATS = [
  { value: '500+', label: 'Happy Customers' },
  { value: '100%', label: 'Chemical Free' },
  { value: 'Farm', label: 'Direct' },
  { value: '8+',   label: 'Products' }
];


/* ---------- 3D Carousel Items (Hero section) ----------
   Each carousel product has a front-face image, side/top/bottom colors
   for the 3D box rendering. */
const CAROUSEL_PRODUCTS = [
  {
    name: 'Plain Jaggery Powder',
    weight: '200g',
    image: 'images/mango-jaggery.png',
    sideColor: '#a16207',
    topColor: '#fef3c7',
    bottomColor: '#3b1f0b'
  },
  {
    name: 'Strawberry Jaggery',
    weight: '200g',
    image: 'images/strawberry-jaggery.png',
    sideColor: '#f472b6',
    topColor: '#fce7f3',
    bottomColor: '#831843'
  },
  {
    name: 'Chocolate Jaggery',
    weight: '200g',
    image: 'images/chocolate-jaggery.png',
    sideColor: '#92400e',
    topColor: '#fde68a',
    bottomColor: '#3b1f0b'
  },
  {
    name: 'Turmeric Powder',
    weight: '200g',
    image: 'images/turmeric-powder.png',
    sideColor: '#facc15',
    topColor: '#fef08a',
    bottomColor: '#713f12'
  },
  {
    name: 'Moringa Powder',
    weight: '200g',
    image: 'images/moringa-powder.png',
    sideColor: '#4ade80',
    topColor: '#dcfce7',
    bottomColor: '#14532d'
  }
];


/* ---------- Product Catalog ----------
   Full product data for the Products page. */
const PRODUCTS = [
  {
    id: 1,
    name: 'Plain Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/mango-jaggery.png',
    description: 'Pure, unrefined jaggery powder made from organically grown sugarcane. No chemicals, no additives — just natural sweetness with all minerals intact.',
    tags: ['100% Natural', 'Chemical Free', 'Farm Direct'],
    highlights: [
      'Stone-milled at low temperatures',
      'Rich in iron, magnesium & potassium',
      'Perfect replacement for refined sugar',
      'Naturally detoxifies the liver'
    ]
  },
  {
    id: 2,
    name: 'Strawberry Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/strawberry-jaggery.png',
    description: 'Delicious strawberry-flavoured jaggery powder that kids and adults both love. Made with real strawberry essence and pure jaggery.',
    tags: ['Kids Favourite', 'Natural Flavour', 'No Refined Sugar'],
    highlights: [
      'Real strawberry essence blended in',
      'Great for smoothies, milkshakes & desserts',
      'No artificial colours or sweeteners',
      'Kids love the taste — parents love the health'
    ]
  },
  {
    id: 3,
    name: 'Chocolate Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/chocolate-jaggery.png',
    description: 'Rich chocolate-flavoured jaggery powder. The perfect guilt-free treat that satisfies chocolate cravings while providing natural minerals.',
    tags: ['Guilt Free', 'Rich Flavour', 'Mineral Rich'],
    highlights: [
      'Real cocoa blended with pure jaggery',
      'Perfect for hot chocolate & baking',
      'No artificial sweeteners or preservatives',
      'A healthier alternative to chocolate drinks'
    ]
  },
  {
    id: 4,
    name: 'Vanilla Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/vanilla-jaggery.png',
    description: 'Smooth vanilla-infused jaggery powder that transforms your coffee, tea, and desserts. Natural vanilla with chemical-free jaggery.',
    tags: ['Coffee Perfect', 'Smooth Flavour', 'Natural Vanilla'],
    highlights: [
      'Natural vanilla bean extract',
      'Transforms plain coffee into a gourmet drink',
      'Great for baking and desserts',
      'Slow-release energy unlike refined sugar'
    ]
  },
  {
    id: 5,
    name: 'Mango Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/mango-jaggery.png',
    description: 'Tropical mango-flavoured jaggery powder for a burst of fruity sweetness. Made with real mango essence and 100% pure jaggery.',
    tags: ['Tropical Taste', 'Summer Special', 'No Additives'],
    highlights: [
      'Real mango essence — not artificial flavour',
      'Perfect for lassi, sharbat & desserts',
      'Natural sweetness with added minerals',
      'A refreshing twist to everyday drinks'
    ]
  },
  {
    id: 6,
    name: 'Chemical Free Turmeric',
    weight: '200g',
    category: 'spices',
    image: 'images/turmeric-powder.png',
    description: 'Lab-tested, chemical-free turmeric powder sourced from our partner farms. High curcumin content for maximum health benefits.',
    tags: ['Lab Tested', 'High Curcumin', 'Zero Additives'],
    highlights: [
      'Lab-tested for heavy metals & adulterants',
      'High curcumin content verified',
      'No lead chromate or artificial colour',
      'Batch certificate available on request'
    ]
  },
  {
    id: 7,
    name: 'Moringa Powder',
    weight: '200g',
    category: 'superfoods',
    image: 'images/moringa-powder.png',
    description: 'Nutrient-dense moringa leaf powder — the superfood from our organic farms. Packed with vitamins, minerals, and antioxidants.',
    tags: ['Superfood', 'Organic', 'Nutrient Dense'],
    highlights: [
      '7x more vitamin C than oranges',
      '4x more calcium than milk',
      'Rich in iron, protein & antioxidants',
      'Perfect for smoothies and health drinks'
    ]
  },
  {
    id: 8,
    name: 'Rose Jaggery Powder',
    weight: '200g',
    category: 'jaggery',
    image: 'images/strawberry-jaggery.png',
    description: 'Elegant rose-flavoured jaggery powder that adds a floral touch to your chai and desserts. Made with natural rose essence.',
    tags: ['Floral Notes', 'Chai Perfect', 'Elegant Taste'],
    highlights: [
      'Natural rose petal essence',
      'Transforms regular chai into rose chai',
      'Beautiful aroma with every sip',
      'Great for traditional Indian sweets'
    ]
  }
];


/* ---------- Product Filter Categories ---------- */
const PRODUCT_CATEGORIES = [
  { key: 'all',        label: 'All Products' },
  { key: 'jaggery',    label: 'Jaggery Powders' },
  { key: 'spices',     label: 'Organic Spices' },
  { key: 'superfoods', label: 'Superfoods' }
];


/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  {
    id: 1,
    quote: "The Rose Jaggery Powder is absolutely divine. My chai has never tasted better. And knowing there are zero chemicals gives me so much peace of mind!",
    name: 'Priya M.',
    location: 'Pune',
    product: 'Rose Jaggery Powder'
  },
  {
    id: 2,
    quote: "I switched my family to Bhagyoday Turmeric and the difference in flavour is night and day. You can actually smell the real turmeric!",
    name: 'Anand K.',
    location: 'Mumbai',
    product: 'Chemical Free Turmeric'
  },
  {
    id: 3,
    quote: "The Chocolate Jaggery Powder is my kids' favourite now. They think it's a treat but it's completely healthy. Best parenting hack ever.",
    name: 'Sneha R.',
    location: 'Nashik',
    product: 'Chocolate Jaggery Powder'
  },
  {
    id: 4,
    quote: "Ordered 5kg of plain jaggery powder for our family functions. Fast delivery, beautiful packaging, and the quality is just outstanding.",
    name: 'Rajan P.',
    location: 'Aurangabad',
    product: 'Plain Jaggery Powder'
  },
  {
    id: 5,
    quote: "As a fitness trainer I've tried every 'clean' sweetener. Bhagyoday is the real deal. No marketing gimmick - just pure, honest food.",
    name: 'Kavita S.',
    location: 'Thane',
    product: 'Plain Jaggery Powder'
  },
  {
    id: 6,
    quote: "The Vanilla Jaggery in my coffee is pure magic. I've shared this with all my colleagues and now everyone wants to order!",
    name: 'Deepak L.',
    location: 'Nagpur',
    product: 'Vanilla Jaggery Powder'
  }
];


/* ---------- Blog Articles ---------- */
const BLOG_ARTICLES = [
  {
    id: 1,
    category: 'health',
    emoji: '🔬',
    title: 'Jaggery vs Sugar: The Complete Nutritional Breakdown',
    teaser: 'A deep dive into what makes natural jaggery nutritionally superior to refined white sugar — and why your body knows the difference.',
    readTime: '5 min read',
    body: `A teaspoon of refined white sugar contains approximately 16 calories and precisely zero nutrients. No vitamins, no minerals, no fibre. It's pure sucrose - a simple carbohydrate that your body metabolises almost instantaneously, causing a sharp spike in blood sugar followed by an equally sharp crash.

A teaspoon of jaggery, by contrast, contains roughly the same calories but comes loaded with measurable quantities of iron (11% of your daily value per 100g), potassium, magnesium, phosphorus, calcium, and B vitamins. It also retains plant phytochemicals and antioxidants that are completely destroyed during the refining process that creates white sugar.

The glycemic index difference is also significant. While refined sugar hits a GI of around 100 - causing an almost instant blood sugar spike - jaggery's GI sits around 84, resulting in a slower, more manageable release of energy. For people managing insulin sensitivity, this distinction is critical.

Beyond the numbers, jaggery contains compounds that actively support liver detoxification, aid digestion, and help the body absorb iron more efficiently. The fibre naturally present in unrefined jaggery feeds beneficial gut bacteria - something refined sugar actively undermines by feeding the harmful ones.

Bhagyoday's jaggery is stone-milled at low temperatures, which means we preserve even more of these beneficial compounds than most commercial jaggery manufacturers who use high-heat processing.`
  },
  {
    id: 2,
    category: 'health',
    emoji: '⚠️',
    title: "Why Your Turmeric Might Be Fake (And How to Tell)",
    teaser: "Shocking truth about adulterated turmeric in Indian markets, and how our lab-tested powder is different.",
    readTime: '4 min read',
    body: `In 2019, a widespread investigation found that up to 60% of commercially available turmeric in Indian markets was adulterated with lead chromate - a bright yellow industrial dye used to give the powder a more vivid colour. Lead chromate is a known carcinogen linked to kidney damage, nervous system disorders, and cancer.

The problem extends beyond lead chromate. Cheaper turmeric substitutes like metanil yellow, chalk powder, and yellow sawdust have been found in various samples. These adulterants are difficult to detect by sight or smell - they're specifically chosen because they mimic turmeric's appearance.

So how do you tell real turmeric from fake? A simple water test: dissolve a teaspoon of turmeric in a glass of water. Real turmeric will slowly settle to the bottom, leaving the water only slightly coloured. Adulterated turmeric will immediately turn the water a bright, saturated yellow.

At Bhagyoday, every batch of our Chemical Free Turmeric is laboratory tested before dispatch. We test for heavy metals, pesticide residues, and artificial colorants. You can request a copy of the batch certificate with your order - and we'll share it without hesitation.`
  },
  {
    id: 3,
    category: 'recipe',
    emoji: '🍰',
    title: 'Strawberry Jaggery Cake - The Guilt-Free Birthday Treat',
    teaser: 'Step-by-step recipe for a moist, naturally sweetened cake using Bhagyoday Strawberry Jaggery Powder.',
    readTime: '7 min read',
    body: `This recipe has become our team's go-to for birthdays and celebrations. It's moist, fragrant, and genuinely delicious - and parents love knowing every bite of sweetness comes from Bhagyoday's Strawberry Jaggery Powder.

Ingredients: 1.5 cups whole wheat flour, 3/4 cup Bhagyoday Strawberry Jaggery Powder, 2 eggs (or flax eggs for vegan), 1/2 cup yoghurt (or coconut yoghurt), 1/3 cup cold-pressed coconut oil, 1 teaspoon baking soda, 1/2 teaspoon cardamom powder, 1/4 teaspoon salt, 1 teaspoon vanilla extract, 1/2 cup fresh strawberries (chopped).

Method: Preheat oven to 180°C. In a large bowl, whisk together flour, baking soda, cardamom, and salt. In a separate bowl, beat eggs with coconut oil until creamy. Add jaggery powder and mix until well combined, then fold in yoghurt and vanilla. Gently incorporate the dry ingredients until just combined - do not overmix. Fold in fresh strawberries.

Pour into a greased 8-inch round tin and bake for 30-35 minutes. A toothpick inserted at the centre should come out clean. Allow to cool completely before icing with whipped cream and fresh strawberry slices.`
  },
  {
    id: 4,
    category: 'farming',
    emoji: '🌾',
    title: 'Inside Our Farms: How We Grow Without Chemicals',
    teaser: 'A behind-the-scenes look at our Maharashtra farms and our zero-pesticide cultivation method.',
    readTime: '6 min read',
    body: `Located in the fertile belt of western Maharashtra, our partner farms have been cultivating sugarcane and spices for three generations. What makes them different from most commercial farms is what they don't use - no synthetic pesticides, no chemical fertilizers, no growth hormones, and no post-harvest chemical treatments.

Instead, our farmers rely on traditional Indian agricultural wisdom: crop rotation to maintain soil health, natural composting using farm waste, neem-based pest repellents, and companion planting strategies where compatible plants naturally deter pests from each other.

The result is produce that takes slightly longer to grow than chemically-accelerated alternatives - but that slower growth is exactly what produces denser, more flavourful, more nutrient-rich food. Our sugarcane grows for a full 12-14 months before harvest; chemically fertilised commercial sugarcane is typically harvested in 8-9 months.

When visitors come to our farms, the first thing they notice is the smell - rich, earthy, alive. That's what healthy soil smells like. And that health translates directly into the flavour and nutrition of everything we bring to your kitchen.`
  },
  {
    id: 5,
    category: 'recipe',
    emoji: '☕',
    title: '5 Morning Drinks Better With Jaggery Powder',
    teaser: "Chai, coffee, golden milk, nimbu pani, and kadha - all transformed by switching to natural sweeteners.",
    readTime: '4 min read',
    body: `Making the switch from refined sugar to jaggery powder in your morning drinks is one of the simplest health upgrades you can make. Here are five drinks that become genuinely better - not just healthier, but actually tastier - with Bhagyoday's jaggery powders.

1. Masala Chai: Use Plain Jaggery Powder instead of sugar. The molasses notes in jaggery complement the spices in chai perfectly. Start with 1.5 teaspoons per cup.

2. Black Coffee: Add 1 teaspoon of Vanilla Jaggery Powder to your black coffee. The natural vanilla rounds out coffee's bitterness in a way that white sugar never achieves.

3. Golden Milk (Haldi Doodh): Replace honey or sugar with 2 teaspoons of Plain Jaggery Powder. The mineral richness of jaggery pairs brilliantly with turmeric's earthiness.

4. Nimbu Pani: Dissolve 1.5 teaspoons of Plain Jaggery Powder in warm water first, then add lemon juice and cold water. This creates a more complex, traditional sharbat-style drink.

5. Immunity Kadha: Boil ginger, tulsi, black pepper, and cinnamon. Sweeten with 2 teaspoons of Plain Jaggery Powder while still warm. Jaggery's iron content complements the immunity-boosting properties of the other ingredients.`
  },
  {
    id: 6,
    category: 'tips',
    emoji: '📦',
    title: 'How to Store Jaggery Powder So It Lasts Longer',
    teaser: "Practical storage tips for humid Indian kitchens that keep your jaggery fresh for months.",
    readTime: '3 min read',
    body: `Jaggery powder is hygroscopic - it absorbs moisture from the air, which can cause it to clump or develop an off-flavour if stored improperly. In India's humid climate, this is a real concern, especially in coastal cities like Mumbai and Chennai.

The good news: with the right storage, Bhagyoday jaggery powder stays fresh and free-flowing for 6-8 months easily. Here are our tried-and-tested tips:

1. Airtight Container: Transfer the powder from the packaging into a glass or food-grade plastic airtight container immediately after opening. This is the single most important step.

2. Cool, Dry Place: Store away from the stove, microwave, or any heat source. A kitchen cupboard that doesn't receive direct sunlight is ideal.

3. Dry Spoon Only: Never use a wet or damp spoon to scoop the powder. Even a small amount of moisture accelerates clumping.

4. Silica Gel Packet: Drop a food-safe silica gel packet into the container. This absorbs ambient moisture and keeps the powder free-flowing for much longer.

5. Avoid Refrigeration: Contrary to popular belief, refrigerating jaggery powder can actually cause condensation when you take it out, introducing moisture. Room temperature storage in an airtight container is better.`
  }
];


/* ---------- Blog Filter Categories ---------- */
const BLOG_CATEGORIES = [
  { key: 'all',     label: 'All' },
  { key: 'health',  label: 'Health' },
  { key: 'recipe',  label: 'Recipes' },
  { key: 'farming', label: 'Farming' },
  { key: 'tips',    label: 'Tips' }
];


/* ---------- Contact Page — Info Cards ---------- */
const CONTACT_INFO = [
  {
    label: 'WhatsApp',
    value: '+91-99000 00000',
    sub: 'Chat with us instantly',
    href: 'https://wa.me/919900000000',
    iconClass: 'icon-whatsapp',
    color: 'color: #25D366',
    bg: 'background: rgba(37, 211, 102, 0.1)'
  },
  {
    label: 'Email',
    value: 'bhagyodayapmc@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:bhagyodayapmc@gmail.com',
    iconClass: 'icon-mail',
    color: 'color: #2D6A4F',
    bg: 'background: rgba(82, 183, 136, 0.1)'
  },
  {
    label: 'Location',
    value: 'Maharashtra, India',
    sub: 'Farm-fresh from western Maharashtra',
    href: null,
    iconClass: 'icon-map',
    color: 'color: #F4A228',
    bg: 'background: rgba(244, 162, 40, 0.1)'
  },
  {
    label: 'Hours',
    value: 'Mon-Sat: 9 AM - 7 PM IST',
    sub: "We're here when you need us",
    href: null,
    iconClass: 'icon-clock',
    color: 'color: #2D6A4F',
    bg: 'background: rgba(82, 183, 136, 0.1)'
  }
];

/* ---------- Contact Form Interest Options ---------- */
const CONTACT_INTERESTS = [
  'Flavoured Jaggery',
  'Organic Spices',
  'Superfoods',
  'Bulk Order',
  'Other'
];


/* ---------- Footer — Product Categories ---------- */
const FOOTER_PRODUCT_CATEGORIES = [
  'Flavoured Jaggery Powders',
  'Organic Spices',
  'Superfoods',
  'Bulk Orders',
  'Seasonal Products'
];


/* ---------- Footer — Trust Badges ---------- */
const FOOTER_TRUST_BADGES = [
  '100% Natural',
  'Lab Tested',
  'Fast Delivery'
];


/* ---------- About Page — Values ---------- */
const ABOUT_VALUES = [
  {
    icon: '🌱',
    title: 'Zero Chemicals',
    text: 'No pesticides, no chemical fertilizers, no artificial additives. Every product is grown, harvested, and packed using only natural methods passed down through generations.',
    bg: 'background: rgba(82, 183, 136, 0.15)'
  },
  {
    icon: '🏡',
    title: 'Farm Direct',
    text: 'We eliminate the middlemen. From our farms in western Maharashtra straight to your kitchen — ensuring freshness, fair pricing, and complete traceability.',
    bg: 'background: rgba(244, 162, 40, 0.15)'
  },
  {
    icon: '🔬',
    title: 'Lab Tested',
    text: 'Every batch is tested for heavy metals, pesticide residues, and adulterants before it reaches you. We share batch certificates on request — complete transparency.',
    bg: 'background: rgba(45, 106, 79, 0.15)'
  },
  {
    icon: '💚',
    title: 'Community First',
    text: 'We work directly with local farming families, providing fair prices, training, and guaranteed purchase agreements that help sustain rural livelihoods.',
    bg: 'background: rgba(82, 183, 136, 0.15)'
  }
];


/* ---------- Story Page — Timeline ---------- */
const STORY_TIMELINE = [
  {
    year: '2020',
    title: 'A Kitchen Conversation',
    text: "It started at a family dinner table in rural Maharashtra. Our founder's grandmother asked a simple question: \"Why does this jaggery taste different from what I grew up with?\" That question sparked a journey into India's food supply chain — and uncovered shocking levels of adulteration and chemical processing in everyday staples."
  },
  {
    year: '2021',
    title: 'Back to the Roots',
    text: "We partnered with three farming families in western Maharashtra — families who had been practising chemical-free farming for generations but struggled to compete with cheaper, chemically-grown alternatives. Together, we built a supply chain that eliminates middlemen and ensures fair prices for farmers while delivering pure products to consumers."
  },
  {
    year: '2022',
    title: 'First 100 Customers',
    text: "Starting with plain jaggery powder and turmeric, we shipped our first orders through WhatsApp. Word spread through families and friends — each customer becoming an advocate when they tasted the difference. By year's end, we had 100 loyal families who refused to go back to commercial alternatives."
  },
  {
    year: '2023',
    title: 'The Flavour Revolution',
    text: "Customer feedback led us to develop our flavoured jaggery powder range — Rose, Strawberry, Chocolate, Vanilla, and Mango. Each flavour uses natural essences blended with our pure jaggery. The Chocolate variant became an instant hit with families looking for healthier treats for their children."
  },
  {
    year: '2024',
    title: 'Growing the Family',
    text: "Today, over 500 families across Maharashtra trust Bhagyoday for their daily kitchen essentials. We've expanded our range to include Moringa Powder and continue to add products that meet our uncompromising quality standards. Every product is still lab-tested, and every farmer is still paid fairly."
  }
];


/* ---------- WhatsApp Configuration ---------- */
const WHATSAPP_NUMBER = '919900000000';
const WHATSAPP_LINKS = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi+Bhagyoday!+I+want+to+know+more`,
  order:   `https://wa.me/${WHATSAPP_NUMBER}?text=Hi+Bhagyoday!+I+want+to+place+an+order`,
  product: (name) => `https://wa.me/${WHATSAPP_NUMBER}?text=Hi+Bhagyoday!+I'm+interested+in+${encodeURIComponent(name)}`
};
