const autocannon = require('autocannon')
const { decision, autocannonConf } = require('./utils')
const decisionId = decision._id

async function runLoad(amount, workers, connections) {
  const instance = await autocannon({
    ...autocannonConf,
    amount,
    workers,
    connections
  }).on('reqError', console.log)
  console.log(instance)
}

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
        // Round 4 : 200 connections, 8 workers, 10000req
        console.log('========> SC2: Fourth load <========')
        await runLoad(10000, 8, 200).then(async () => {
          // Round 5 : 400 connections, 12 workers, 100000req
          console.log('========> SC2: Fifth load <========')
          await runLoad(100000, 12, 400).then(async () => {
            console.log('========> SC1: Deleting decision <========')
            const instance = await autocannon({
              title: 'DELETE /api/v1/decisions/:id',
              url: `${process.env.DBSDER_API_URL}/v1/decisions/${decisionId}`,
              headers: {
                'x-api-key': process.env.OPS_API_KEY,
                'Content-Type': 'application/json'
              },
              method: 'DELETE',
              amount: 1,
              connections: 1,
              workers: 1
            }).on('reqError', console.log)
            console.log(instance)
          })
        })
      })
    })
  })
}

runSecondScenario()
