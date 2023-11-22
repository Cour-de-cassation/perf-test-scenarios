const { mandatoryDecisionMetadata } = require('./utils')

/*
 * This first scenario aims to test the limits of JURITJ API with one worker and one connection.
 * It will call the POST /decisions endpoint with the same request until the server crashes.
 * It will help us to know :
 * - the maximum amount of requests that the server can handle
 * - the maximum amount of requests that the server can handle with a 200 response
 */
const autocannon = require('autocannon')

// Round 1 : one connection, one worker, 100 req
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    form: {
      decisionIntegre: {
        type: 'file',
        path: 'src/juritj-api/wordperfect-example-file.wpd'
      },
      metadonnees: {
        type: 'text',
        value: JSON.stringify(mandatoryDecisionMetadata)
      }
    },
    tlsOptions: {
      ca: process.env.CA_CERT,
      cert: process.env.CLIENT_CERT,
      key: process.env.CLIENT_PRIVATE_KEY
    },
    amount: 100,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 2 : one connection, one worker, 500req
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    form: {
      decisionIntegre: {
        type: 'file',
        path: 'src/juritj-api/wordperfect-example-file.wpd'
      },
      metadonnees: {
        type: 'text',
        value: JSON.stringify(mandatoryDecisionMetadata)
      }
    },
    tlsOptions: {
      ca: process.env.CA_CERT,
      cert: process.env.CLIENT_CERT,
      key: process.env.CLIENT_PRIVATE_KEY
    },
    amount: 500,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 3 : one connection, one worker, 1000req
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    form: {
      decisionIntegre: {
        type: 'file',
        path: 'src/juritj-api/wordperfect-example-file.wpd'
      },
      metadonnees: {
        type: 'text',
        value: JSON.stringify(mandatoryDecisionMetadata)
      }
    },
    tlsOptions: {
      ca: process.env.CA_CERT,
      cert: process.env.CLIENT_CERT,
      key: process.env.CLIENT_PRIVATE_KEY
    },
    amount: 1000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 4 : one connection, one worker, 10000req
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    form: {
      decisionIntegre: {
        type: 'file',
        path: 'src/juritj-api/wordperfect-example-file.wpd'
      },
      metadonnees: {
        type: 'text',
        value: JSON.stringify(mandatoryDecisionMetadata)
      }
    },
    tlsOptions: {
      ca: process.env.CA_CERT,
      cert: process.env.CLIENT_CERT,
      key: process.env.CLIENT_PRIVATE_KEY
    },
    amount: 10000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 5 : one connection, one worker, 100000req
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    form: {
      decisionIntegre: {
        type: 'file',
        path: 'src/juritj-api/wordperfect-example-file.wpd'
      },
      metadonnees: {
        type: 'text',
        value: JSON.stringify(mandatoryDecisionMetadata)
      }
    },
    tlsOptions: {
      ca: process.env.CA_CERT,
      cert: process.env.CLIENT_CERT,
      key: process.env.CLIENT_PRIVATE_KEY
    },
    amount: 100000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)
