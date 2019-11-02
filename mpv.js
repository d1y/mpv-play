const { fork } = require('child_process')
const checkMpv = require('./mpv-exist')
let msg = 'MPV不存在'

module.exports = url=> {
  let code = checkMpv()
  if (code) {
    const path = `${ __dirname }/exe.js`
    fork(
      path,
      [ url ],
      {
        'stdio': 'ignore',
        'detached': true
      }
    )
  } else {
    console.log(msg)
  }
  code = code ? 1 : 0
  process.exit(code)
}