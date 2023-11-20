import { mandatoryDecisionMetadata } from './utils '

const bufferedFile = Buffer.from('some fake data')

/*
 * This first scenario aims to successfully call the endpoint POST /decisions on JURITJ API.
 */
const autocannon = require('autocannon')

autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    body: JSON.stringify(mandatoryDecisionMetadata),
    form: bufferedFile,
    tlsOptions: {
      cert: process.env.CLIENT_CERT
    },
    amount: 50
  },
  console.log
).on('reqError', console.log)
