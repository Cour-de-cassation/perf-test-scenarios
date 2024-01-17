const autocannon = require('autocannon')
const { decision, deleteDecision } = require('./utils')

async function createDecision(workers, amount) {
  var createdDecisionId = null
  const instance = await autocannon({
    url: `${process.env.DBSDER_API_URL}`,
    amount: amount,
    connections: workers,
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


async function runTestConnection() {
  console.log('========> Test Scenario 2 Parallel connection <========')
  const connectionsLevels = [1, 2, 3, 4, 5]
  const requestAmounts = [100, 200, 300, 400, 500]

  // Make the first call outside the loop to get the ID
  const createdDecisionId = await createDecision(1, 1)

  for (const connections of connectionsLevels) {
    for (const amount of requestAmounts) {
      console.log(`========> Test Scenario 2 for ${connections} connections and an amount of ${amount} <========`)
      await createDecision(connections, amount)
    }
  }
  console.log('========> Cleaning test decision <========')
  deleteDecision(createdDecisionId)
}

runTestConnection()