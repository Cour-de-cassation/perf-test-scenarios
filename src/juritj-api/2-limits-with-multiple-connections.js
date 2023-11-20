'use strict'

/*
 * This second scenario aims to test the limits of JURITJ API with multiple workers and multiple connections.
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

// Round 2 : 10 connections, 2 workers, 100req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 100,
    duration: 10,
    connections: 10,
    workers: 2
  },
  console.log
).on('reqError', console.log)

// Round 3 : 100 connections, 4 workers, 1000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 1000,
    duration: 10,
    connections: 100,
    workers: 4
  },
  console.log
).on('reqError', console.log)

// Round 4 : 1000 connections, 8 workers, 10000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 10000,
    duration: 10,
    connections: 1000,
    workers: 8
  },
  console.log
).on('reqError', console.log)

// Round 5 : 10000 connections, 12 workers, 100000req/s during 10s
autocannon(
  {
    title: 'POST /decisions on JURITJ API',
    url: `${process.env.JURITJ_API_URL}/v1/decisions`,
    method: 'POST',
    amount: 100000,
    duration: 10,
    connections: 10000,
    workers: 12
  },
  console.log
).on('reqError', console.log)
