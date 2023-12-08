const autocannon = require('autocannon')
const { autocannonConf } = require('./utils')

console.log(autocannonConf)
autocannon(
  {
    ...autocannonConf,
    amount: 50
  },
  console.log
).on('reqError', console.log)
