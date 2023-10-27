const autocannon = require('autocannon')

autocannon({
    title: 'POST /api/v1/decisions',
    url: 'http://localhost:3009/api/v1/decisions', 
    method : 'POST',
    amount: 500,
}, console.log)