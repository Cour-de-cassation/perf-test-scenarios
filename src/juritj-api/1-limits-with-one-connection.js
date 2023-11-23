const { autocannonConf } = require('./utils')

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
    ...autocannonConf,
    amount: 100,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 2 : one connection, one worker, 500req
autocannon(
  {
    ...autocannonConf,
    amount: 500,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 3 : one connection, one worker, 1000req
autocannon(
  {
    ...autocannonConf,
    amount: 1000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 4 : one connection, one worker, 10000req
autocannon(
  {
    ...autocannonConf,
    amount: 10000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)

// Round 5 : one connection, one worker, 100000req
autocannon(
  {
    ...autocannonConf,
    amount: 100000,
    workers: 1,
    connections: 1
  },
  console.log
).on('reqError', console.log)
