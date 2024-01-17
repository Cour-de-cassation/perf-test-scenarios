const autocannon = require('autocannon')
const { decision, deleteDecision } = require('./utils')

async function createDecision(connections, amount) {
  let createdDecisionId = null
  const instance = await autocannon({
    url: `${process.env.DBSDER_API_URL}`,
    amount: amount,
    connections: connections,
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
  const createdDecisionId = await createDecision(1, 1)
  await createDecision(50, 200000)

  console.log('========> Cleaning test decision <========')
  await deleteDecision(createdDecisionId)
}

runTestConnection()