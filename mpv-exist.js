/*
** check mpv exist
*/

const checkCmd = require('command-exists').sync

module.exports = ()=> checkCmd('mpv')