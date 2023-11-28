const autocannon = require('autocannon')
const { autocannonConf } = require('./utils')

async function runLoad(amount) {
  const instance = await autocannon({
    ...autocannonConf,
    amount,
    workers: 1,
    connections: 1
  }).on('reqError', console.log)
  console.log(instance)
}

/*
 * This first scenario aims to test the limits of JURITJ API with one worker and one connection.
 * It will call the POST /decisions endpoint with the same request until the server crashes.
 * It will help us to know :
 * - the maximum amount of requests that the server can handle
 * - the maximum amount of requests that the server can handle with a 200 response
 */
async function runFirstScenario() {
  // Round 1 : one connection, one worker, 100 req
  console.log('========> SC1: First load <========')
  await runLoad(100).then(async () => {
    // Round 2 : one connection, one worker, 500req
    console.log('========> SC1: Second load <========')
    await runLoad(500).then(async () => {
      // Round 3 : one connection, one worker, 1000req
      console.log('========> SC1: Third load <========')
      await runLoad(1000).then(async () => {
        // Round 4 : one connection, one worker, 10000req
        console.log('========> SC1: Fourth load <========')
        await runLoad(10000).then(async () => {
          // Round 5 : one connection, one worker, 100000req
          console.log('========> SC1: Fifth load <========')
          await runLoad(100000)
        })
      })
    })
  })
}

runFirstScenario()
