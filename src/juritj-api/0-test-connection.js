const { autocannonConf } = require('./utils')

/*
 * This first scenario aims to successfully call the endpoint POST /decisions on JURITJ API.
 */
const autocannon = require('autocannon')

autocannon(
  {
    ...autocannonConf,
    amount: 50
  },
  console.log
).on('reqError', console.log)
