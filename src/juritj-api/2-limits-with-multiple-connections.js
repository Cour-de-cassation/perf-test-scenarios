const { mandatoryDecisionMetadata } = require('./utils')

/*
 * This second scenario aims to test the limits of JURITJ API with multiple workers and multiple connections.
 * It will call the POST /decisions endpoint with the same request until the server crashes.
 * It will help us to know :
 * - the maximum amount of requests that the server can handle
 * - the maximum amount of requests that the server can handle with a 200 response
 */
const autocannon = require('autocannon')

// Round 1 : one connection, one worker, 100req
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

// Round 2 : 10 connections, 2 workers, 100req
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
    connections: 10,
    workers: 2
  },
  console.log
).on('reqError', console.log)

// Round 3 : 100 connections, 4 workers, 1000req
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
    connections: 100,
    workers: 4
  },
  console.log
).on('reqError', console.log)

// Round 4 : 1000 connections, 8 workers, 10000req
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
    connections: 1000,
    workers: 8
  },
  console.log
).on('reqError', console.log)

// Round 5 : 10000 connections, 12 workers, 100000req
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
    connections: 10000,
    workers: 12
  },
  console.log
).on('reqError', console.log)
