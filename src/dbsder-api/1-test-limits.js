const autocannon = require('autocannon')
const { decision, deleteDecision } = require('./utils.js')

async function runLoad(amount) {
  let createdDecisionId
  const instance = await autocannon({
    url: `${process.env.DBSDER_API_URL}`,
    amount,
    requests: [
      {
        title: 'PUT /api/v1/decisions',
        method: 'PUT',
        path: `/v1/decisions`,
        headers: {
          'x-api-key': process.env.NORMALIZATION_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ decision: decision }),
        onResponse: (status, body) => {
          if (status === 200) {
            createdDecisionId = JSON.parse(body)._id
          }
        }
      }
    ]
  }).on('reqError', console.log)
  console.log(instance)
  return createdDecisionId
}

async function runScenario() {
  console.log('========> Load 1 <========')
  await runLoad(100).then(async () => {
    console.log('========> Load 2 <========')
    await runLoad(500).then(async () => {
      console.log('========> Load 3 <========')
      await runLoad(1000).then(async () => {
        console.log('========> Load 4 <========')
        await runLoad(5000).then(async () => {
          console.log('========> Load 5 <========')
          await runLoad(10000).then(async () => {
            console.log('========> Load 6 <========')
            await runLoad(20000).then(async () => {
              console.log('========> Load 7 <========')
              await runLoad(40000).then(async () => {
                console.log('========> Load 8 <========')
                await runLoad(60000).then(async () => {
                  console.log('========> Load 9 <========')
                  await runLoad(80000).then(async () => {
                    console.log('========> Load 10 <========')
                    await runLoad(100000).then(async (createdDecisionId) => {
                      console.log('========> Deleting decision <========')
                      await deleteDecision(createdDecisionId)
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}

runScenario()