export const engineering = [
  {
    id: 'offline-first-pos',
    path: '/engineering/offline-first-pos',
    title: 'Keeping POS Running Offline',
    subtitle: 'When the internet drops, sales should not stop',
    metaTitle: 'Keeping POS Running Offline | Serolf Flores',
    summary:
      'How a point-of-sale system can keep working during poor connectivity, then sync safely when the network returns.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Retail and food-service teams cannot pause checkout every time the internet is slow or unavailable. If POS goes down with the network, that is a business outage.',
          'Sales, inventory changes, payments, and receipts still need to stay accurate when staff keep working offline and later reconnect.',
        ],
      },
      {
        heading: 'How I approach it',
        body: [
          'Keep the store usable without a live server connection: save pending work on the device, keep the interface available, and queue updates to send later.',
          'Be clear about what can happen offline and what must wait for the server. Plan how retries work when the connection comes back.',
          'Avoid duplicate charges or duplicate records when the same action is retried. Stable transaction IDs and careful server handling are part of the design.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Offline capability is a business requirement, not a nice-to-have. Stores need to keep selling.',
          'This approach shaped Jevly POS for multi-business retail operations in environments where connectivity is often unreliable.',
        ],
      },
    ],
  },
  {
    id: 'production-debugging',
    path: '/engineering/production-debugging',
    title: 'Finding Production Issues Faster',
    subtitle: 'Diagnose the right layer before changing code',
    metaTitle: 'Finding Production Issues Faster | Serolf Flores',
    summary:
      'A practical way to separate browser, network, application, and database problems so live issues get fixed for the right reason.',
    sections: [
      {
        heading: 'The problem',
        body: [
          'Live incidents rarely say which part of the stack failed. A timeout, blank page, or intermittent error can come from the browser, the network, the application, background jobs, or the database.',
          'Guessing the wrong layer wastes time and can make the problem worse.',
        ],
      },
      {
        heading: 'How I approach it',
        body: [
          'Start from what users see, then check each layer in order: browser behavior, network responses, application logs and status codes, then database latency and errors.',
          'Compare “works on my machine” with “fails in production” carefully. Environment differences such as timeouts, caching, and auth often explain the gap.',
          'Gather evidence before changing code: when it happened, which requests failed, and whether the issue affects one user, one region, or the whole system.',
        ],
      },
      {
        heading: 'Why it matters',
        body: [
          'Good production support means finding the real cause, then applying a fix that matches it.',
          'I use this approach across logistics platforms, SaaS products, and products I operate myself, including Jevly POS.',
        ],
      },
    ],
  },
]
