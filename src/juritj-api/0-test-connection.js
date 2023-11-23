const { mandatoryDecisionMetadata } = require('./utils')

/*
 * This first scenario aims to successfully call the endpoint POST /decisions on JURITJ API.
 */
const autocannon = require('autocannon')

console.log({ ca: process.env.CA_CERT })
console.log({ cert: process.env.CLIENT_CERT })
console.log({ key: process.env.CLIENT_PRIVATE_KEY })
console.log({ passphrase: process.env.CLIENT_PRIVATE_KEY_PASSPHRASE })

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
    amount: 50
  },
  console.log
).on('reqError', console.log)
