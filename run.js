// this was originally created via stackblitz nodemon template, and this file was called via npm run start
// now, the start command called `nodemon --exec` with defaults, so this file does nothing
const nodemon = require('nodemon')

nodemon({ script: 'index.js' })
  .on('start', console.clear)
  .on('restart', console.clear)
  .on('quit', () => {
    console.log('App has quit')
    process.exit()
  })
