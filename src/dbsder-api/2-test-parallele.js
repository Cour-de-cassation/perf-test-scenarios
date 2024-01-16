const autocannon = require('autocannon')
const { decision, deleteDecision } = require('./utils')

const createdDecisionId = '65a6a14b1b1a2fc85c269b28'

async function createDecision() {
  const instance = await autocannon({
    url: `${process.env.DBSDER_API_URL}`,
    amount: 100,
    workers: 5,
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
            console.log(JSON.parse(body)._id)
          }
        }
      }
    ]
  }).on('reqError', console.log)
  console.log(instance)
}

async function runTestConnection() {
  console.log('========> Test Scenario 2 Parallel connection <========')
  await createDecision()
}

runTestConnection()
