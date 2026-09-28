export const projects = [
  {
    id: 'jevly',
    number: '01',
    name: 'Jevly POS',
    role: 'Product Owner / Full-Stack Engineer',
    dates: 'Nov 2025 - Present',
    highlight: 'Built from the ground up',
    summary:
      'Production multi-tenant B2B POS and business management platform built from the ground up for Philippine SMEs, including an offline-first PWA.',
    emphasis: ['PWA', 'Works offline', 'Multi-business', 'B2B POS'],
    tech: ['Laravel', 'Vue 3', 'TypeScript', 'PWA', 'MySQL', 'AWS'],
    caseStudyPath: '/work/jevly',
    caseStudyLabel: 'View Case Study',
    externalUrl: 'https://upscalepos.com',
    externalLabel: 'Visit Product',
    kind: 'product',
  },
  {
    id: 'stallion',
    number: '01',
    name: 'Stallion Express',
    role: 'Full-Stack Engineer',
    dates: 'Oct 2020 - Apr 2026',
    highlight: '5+ years · Remote',
    summary:
      'Remote full-stack engineering for a Canadian logistics and shipping company: shipping automation, fulfillment, tracking, and eCommerce integrations.',
    emphasis: [
      'Shipping',
      'Carrier APIs',
      'eCommerce',
      'Fulfillment',
      'Production support',
    ],
    tech: [],
    caseStudyPath: '/work/stallion',
    caseStudyLabel: 'My Experience',
    externalUrl: 'https://stallion.ca',
    externalLabel: 'Visit Site',
    kind: 'professional',
  },
  {
    id: 'saas-marketplace',
    number: '02',
    name: 'SaaS & Marketplace Platforms',
    role: 'Full-Stack PHP / Laravel Developer',
    dates: '',
    highlight: 'Laravel SaaS and marketplace platforms',
    summary:
      'Laravel-based SaaS and marketplace platforms, including order management, site discovery, reporting, background jobs, and third-party API integrations.',
    emphasis: ['SaaS', 'Marketplace', 'Reporting', 'APIs'],
    tech: ['Laravel', 'PHP'],
    caseStudyPath: '/work/saas-marketplace',
    caseStudyLabel: 'Selected Experience',
    externalUrl: 'https://qgp.com',
    externalLabel: 'Visit Site',
    kind: 'professional',
  },
]

export const jevlyCase = {
  title: 'Jevly POS',
  metaTitle: 'Jevly POS | Serolf Flores',
  role: 'Product Owner / Full-Stack Engineer',
  dates: 'Nov 2025 - Present',
  externalUrl: 'https://upscalepos.com',
  externalLabel: 'Visit Product',
  scale: [
    { value: 'Built', label: 'From scratch' },
    { value: 'Multi-business', label: 'Support' },
    { value: 'PWA', label: 'Offline-capable client' },
    { value: 'Live', label: 'Production product' },
  ],
  intro:
    'A production multi-tenant B2B POS and business management platform built from the ground up for Philippine SMEs, with product direction, system architecture, and full-stack development across Laravel, Vue.js, TypeScript, relational databases, and AWS.',
  problem: [
    'Many Philippine SMEs operate where internet connectivity is unreliable. Sales and inventory work cannot stop when the network drops.',
    'The product needed to support separate businesses and branches, retail and food-service workflows, and Philippine fiscal requirements, even when connectivity is weak.',
  ],
  approach: [
    'Designed and developed the full platform across Laravel, Vue.js, TypeScript, databases, and AWS.',
    'Built an offline-capable PWA so stores can install it, keep selling, and sync when the connection returns.',
    'Supported separate businesses, branches, and operational data in one product.',
    'Delivered core workflows for POS sales, inventory, purchasing, payments, customers, reporting, audit trails, and multi-branch operations.',
    'Implemented Philippine fiscal workflows including receipts, X/Z readings, transaction journals, and audit logging.',
    'Added specialized workflows for food and beverage, pharmacy, inventory costing, recipes, and day-to-day operations.',
  ],
  stack: [
    'PHP / Laravel',
    'Vue 3 / TypeScript',
    'PWA',
    'MySQL',
    'AWS',
    'Docker / Linux',
  ],
}

export const stallionCase = {
  title: 'Stallion Express',
  metaTitle: 'Stallion Express | Serolf Flores',
  role: 'Full-Stack Engineer',
  dates: 'Oct 2020 - Apr 2026',
  externalUrl: 'https://stallion.ca',
  externalLabel: 'Visit Stallion Express',
  scale: [
    { value: '5+', label: 'Years remote' },
    { value: '7+', label: 'Carrier integrations' },
    { value: '6+', label: 'eCommerce platforms' },
    { value: 'Live', label: 'Production systems' },
  ],
  intro:
    'Remote full-stack engineering role for a Canadian logistics and shipping company, developing and supporting production systems for shipping automation, fulfillment, tracking, and eCommerce integrations.',
  contributions: [
    'Developed and maintained shipping workflows covering shipment creation, rate calculation, fulfillment, tracking, and order processing.',
    'Built and maintained integrations with 7+ carriers, including Canada Post, UPS, FedEx, Purolator, Canpar, DHL, and ICS Courier.',
    'Developed integrations with major eCommerce platforms including Shopify, Amazon, WooCommerce, eBay, Etsy, and Walmart Marketplace.',
    'Worked extensively with REST APIs, webhooks, background processes, synchronization workflows, and third-party services.',
    'Investigated and resolved production issues involving application logic, databases, APIs, external services, and data synchronization.',
    'Worked directly with stakeholders and operations teams to understand requirements, troubleshoot issues, and deliver practical solutions.',
    'Supported customer-facing workflows through bug fixing, issue investigation, and production support.',
  ],
}

export const saasMarketplaceCase = {
  title: 'SaaS & Marketplace Platforms',
  metaTitle: 'SaaS & Marketplace Platforms | Serolf Flores',
  role: 'Full-Stack PHP / Laravel Developer',
  dates: '',
  externalUrl: 'https://qgp.com',
  externalLabel: 'Visit QGP',
  scale: [
    { value: 'SaaS', label: 'Marketplace platforms' },
    { value: 'APIs', label: 'Third-party integrations' },
    { value: 'Ops', label: 'Orders, reporting, and queues' },
    { value: 'Legacy', label: 'PHP modernization' },
  ],
  intro:
    'Laravel-based SaaS and marketplace platforms, including a link-building and guest-post management platform integrated with Ahrefs, Majestic, Google Search Console, WordPress, and third-party APIs.',
  contributions: [
    'Developed Laravel-based SaaS and marketplace platforms, including a link-building and guest-post management platform.',
    'Integrated Ahrefs, Majestic, Google Search Console, WordPress, and third-party APIs.',
    'Built business workflows for order management, site discovery, reporting, data processing, background jobs, queues, and large-scale datasets.',
    'Modernized legacy PHP applications and business processes while keeping systems in production.',
  ],
}
