'use strict'

const autocannon = require('autocannon')

autocannon({
    title: 'POST /api/v1/decisions',
    url: `${process.env.DBSDER_API_URL}/v1/decisions`,
    headers:{
        'x-api-key' : process.env.DBSDER_API_KEY
    },
    method : 'GET',
    amount: parseInt(process.env.DBSDER_API_AMOUNT) || 500,
}, console.log)