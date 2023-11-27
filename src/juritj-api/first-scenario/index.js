const {
  runFirstLoad,
  runSecondLoad,
  runThirdLoad,
  runFourthLoad,
  runFifthLoad
} = require('./1-limits-with-one-connection')

async function runFirstScenario() {
  console.log('========> SC1: First load <========')
  await runFirstLoad().then(async () => {
    console.log('========> SC1: Second load <========')
    await runSecondLoad().then(async () => {
      console.log('========> SC1: Third load <========')
      await runThirdLoad().then(async () => {
        console.log('========> SC1: Fourth load <========')
        await runFourthLoad().then(async () => {
          console.log('========> SC1: Fifth load <========')
          await runFifthLoad()
        })
      })
    })
  })
}

runFirstScenario()
