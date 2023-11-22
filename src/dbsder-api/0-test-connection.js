const autocannon = require('autocannon')
const { autocannonConf } = require('./utils')

autocannon(
  {
    ...autocannonConf,
    amount: 50
  },
  console.log
).on('reqError', console.log)
