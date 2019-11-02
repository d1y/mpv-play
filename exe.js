const child_process = require('child_process')
const url = process.argv[2]
child_process.exec(`mpv ${ url }`)