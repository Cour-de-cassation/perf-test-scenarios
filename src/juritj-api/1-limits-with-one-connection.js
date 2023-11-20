'use strict'

/*
 * This first scenario aims to test the limits of JURITJ API with one worker and one connection.
 * It will call the POST /decisions endpoint with the same request until the server crashes.
 * It will help us to know :
 * - the maximum amount of requests that the server can handle
 * - the maximum amount of requests that the server can handle with a 200 response
 */
const autocannon = require('autocannon')

// Round 1 : one connection, one worker, 50req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 50,
    duration: 10
  },
  console.log
).on('reqError', console.log)

// Round 2 : one connection, one worker, 100req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 100,
    duration: 10
  },
  console.log
).on('reqError', console.log)

// Round 3 : one connection, one worker, 1000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 1000,
    duration: 10
  },
  console.log
).on('reqError', console.log)

// Round 4 : one connection, one worker, 10000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 10000,
    duration: 10
  },
  console.log
).on('reqError', console.log)

// Round 5 : one connection, one worker, 100000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 100000,
    duration: 10
  },
  console.log
).on('reqError', console.log)
