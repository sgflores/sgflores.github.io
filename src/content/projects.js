export const projects = [
  {
    id: 'jevly',
    number: '01',
    name: 'Jevly POS',
    role: 'Independent Product Development',
    dates: 'Nov 2025 - Present',
    highlight: 'Built from the ground up',
    summary:
      'Offline-capable PWA for multi-business POS and business management, built for Philippine SMEs.',
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
      'Production logistics and shipping software covering automation, carrier connections, fulfillment, tracking, and eCommerce.',
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
    id: 'qgp',
    number: '02',
    name: 'QGP',
    role: 'Senior Full-Stack PHP Developer',
    dates: 'Mar 2021 - Oct 2025',
    highlight: 'Laravel SaaS and marketplace platforms',
    summary:
      'Laravel SaaS and marketplace systems covering ordering, reporting, automation, third-party integrations, and business operations.',
    emphasis: ['Ordering', 'Automation', 'Reporting', 'APIs'],
    tech: ['Laravel', 'PHP'],
    caseStudyPath: '/work/qgp',
    caseStudyLabel: 'My Experience',
    externalUrl: 'https://qgp.com',
    externalLabel: 'Visit Site',
    kind: 'professional',
  },
]

export const jevlyCase = {
  title: 'Jevly POS',
  metaTitle: 'Jevly POS | Serolf Flores',
  role: 'Independent Product Development',
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
    'An offline-capable PWA for multi-business POS and business management, built from the ground up for Philippine SMEs.',
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
    'Remote full-stack work for a Canadian logistics and shipping company. I helped build and support production systems for shipping automation, fulfillment, tracking, and eCommerce integrations.',
  contributions: [
    'Built and maintained shipping workflows for shipment creation, rate calculation, fulfillment, tracking, and order processing.',
    'Integrated 7+ carriers, including Canada Post, UPS, FedEx, Purolator, Canpar, DHL, and ICS Courier.',
    'Connected major eCommerce platforms including Shopify, Amazon, WooCommerce, eBay, Etsy, and Walmart Marketplace.',
    'Worked with APIs, webhooks, background jobs, and third-party services that keep orders and shipments in sync.',
    'Investigated and fixed production issues across application logic, databases, APIs, and external services.',
    'Worked directly with stakeholders and operations teams to clarify requirements and deliver practical solutions.',
    'Supported customer-facing workflows through bug fixes, investigation, and production support.',
  ],
}

export const qgpCase = {
  title: 'QGP',
  metaTitle: 'QGP | Serolf Flores',
  role: 'Senior Full-Stack PHP Developer',
  dates: 'Mar 2021 - Oct 2025',
  externalUrl: 'https://qgp.com',
  externalLabel: 'Visit QGP',
  scale: [
    { value: '4+', label: 'Years on the platform' },
    { value: 'SaaS', label: 'Marketplace systems' },
    { value: 'Ops', label: 'Automation and reporting' },
    { value: 'APIs', label: 'Third-party integrations' },
  ],
  intro:
    'Senior full-stack role on Laravel SaaS and marketplace platforms: ordering, reporting, automation, integrations, and business operations.',
  contributions: [
    'Built and maintained Laravel applications for marketplace ordering, campaigns, reporting, content operations, and business workflows.',
    'Connected the platform to third-party SEO and content services used in daily operations.',
    'Designed database structures, reporting flows, and automated processes that handle large datasets.',
    'Modernized older application components while keeping live systems running.',
    'Investigated and resolved production issues across application logic, databases, APIs, queues, and business workflows.',
    'Worked from business requirements to features and workflow improvements that operations teams could use day to day.',
  ],
}
