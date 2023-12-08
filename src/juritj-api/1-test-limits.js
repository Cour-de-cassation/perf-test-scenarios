const autocannon = require('autocannon')
const { autocannonConf } = require('./utils')

async function runLoad(amount) {
  const instance = await autocannon({
    ...autocannonConf,
    amount
  }).on('reqError', console.log)
  console.log(instance)
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
                    await runLoad(100000)
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
