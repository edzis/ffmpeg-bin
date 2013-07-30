var os = require('os')
var path = require('path')
var exec = require('child_process').execFile

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'linux' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var root = path.join(
  __dirname,
  'bin',
  platform === 'linux' ? 'linux64' : 'darwin'
)

exports.ffmpeg = path.join(root, 'ffmpeg')