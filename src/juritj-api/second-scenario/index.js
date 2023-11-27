const {
  runFirstLoad,
  runSecondLoad,
  runThirdLoad,
  runFourthLoad,
  runFifthLoad
} = require('./2-limits-with-multiple-connections')

async function runSecondScenario() {
  console.log('========> SC2: First load <========')
  await runFirstLoad().then(async () => {
    console.log('========> SC2: Second load <========')
    await runSecondLoad().then(async () => {
      console.log('========> SC2: Third load <========')
      await runThirdLoad().then(async () => {
        console.log('========> SC2: Fourth load <========')
        await runFourthLoad().then(async () => {
          console.log('========> SC2: Fifth load <========')
          await runFifthLoad()
        })
      })
    })
  })
}

runSecondScenario()
