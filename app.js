let Analytics = require('analytics-node');
let analytics = new Analytics('zZtvw09yz7kOSGElTNePEwISWgZ2nywL');

// analytics.identify({
//     userId: '019mr8mf4r',
//     traits: {
//       name: 'Chase Lancaster',
//       email: 'chase.lancaster@segment.com',
//       plan: 'Enterprise',
//       friends: 42
//     },
//     context: {
//       userAgent: 'Visual Studio Code'
//     }
// });

analytics.track({
    userId: '019mr8mf4r',
    event: 'Item Viewed',
    properties: {
      name: 'basketball',
      price: 10,
      userAgent: "Chrome"
    }
});

// analytics.page({
//     userId: '019mr8mf4r',
//     category: 'Docs',
//     name: 'Node.js Library',
//     properties: {
//       url: 'https://segment.com/docs/connections/sources/catalog/librariesnode',
//       path: '/docs/connections/sources/catalog/librariesnode/',
//       title: 'Node.js Library - Segment',
//       referrer: 'https://github.com/segmentio/analytics-node'
//     }
// });