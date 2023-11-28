const autocannon = require('autocannon')
const { autocannonConf } = require('../utils')

async function runLoad(amount, workers, connections) {
  const instance = await autocannon({
    ...autocannonConf,
    amount,
    workers,
    connections
  }).on('reqError', console.log)
  console.log(instance)
}

/*
 * This second scenario aims to test the limits of JURITJ API with multiple workers and multiple connections.
 * It will call the POST /decisions endpoint with the same request until the server crashes.
 * It will help us to know :
 * - the maximum amount of requests that the server can handle
 * - the maximum amount of requests that the server can handle with a 200 response
 */
async function runSecondScenario() {
  // Round 1 : one connection, one worker, 100req
  console.log('========> SC2: First load <========')
  await runLoad(100, 1, 1).then(async () => {
    // Round 2 : 10 connections, 2 workers, 100req
    console.log('========> SC2: Second load <========')
    await runLoad(100, 2, 10).then(async () => {
      // Round 3 : 100 connections, 4 workers, 1000req
      console.log('========> SC2: Third load <========')
      await runLoad(1000, 4, 100).then(async () => {
        // Round 4 : 1000 connections, 8 workers, 10000req
        console.log('========> SC2: Fourth load <========')
        await runLoad(10000, 8, 1000).then(async () => {
          // Round 5 : 10000 connections, 12 workers, 100000req
          console.log('========> SC2: Fifth load <========')
          await runLoad(100000, 12, 10000)
        })
      })
    })
  })
}

runSecondScenario()