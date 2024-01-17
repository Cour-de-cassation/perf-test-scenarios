const autocannon = require('autocannon')
const { decision, deleteDecision } = require('./utils')

async function createDecision() {
  let createdDecisionId
  const instance = await autocannon({
    url: `${process.env.DBSDER_API_URL}`,
    amount: 50,
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
  console.log('========> Test DBSDER API connection <========')
  await createDecision().then(async (createdDecisionId) => {
    console.log('========> Deleting decision <========')
    await deleteDecision(createdDecisionId)
  })
}

runTestConnection()
