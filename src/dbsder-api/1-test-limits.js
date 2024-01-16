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
  await runLoad(100).then(async (createdDecisionId) => {
    console.log('========> Deleting decision <========')

  })
}

runScenario()
