const fs = require('fs')
const { toc } = require('./templates/toc')
const { renderEvents } = require('./templates/event')
const { renderFunctions } = require('./templates/function')
const { exit } = require('process')

const events = []
const functions = []
const out = console.log
const args = process.argv.slice(2)

if (!args[0]) {
  out('File not specified')
  process.exit(1)
}

if (!args[1]) {
  out('Title not specified')
  process.exit(1)
}

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err)
    }
    try {
      const object = JSON.parse(fileData)
      return cb && cb(null, object)
    } catch (err) {
      return cb && cb(err)
    }
  })
}

jsonReader(args[0], (err, data) => {
  if (err) {
    out(err)
    process.exit(1)
  }

  data.map(f => {
    if (f.type === 'event') {
      events.push(f)
    } else {
      if (f.type === 'constructor') {
        f.name = 'Constructor'
      }

      functions.push(f)
    }
  })

  toc(args[1], events, functions, out)
  out(`\r\n`)
  renderEvents(events, out)
  out(`\r\n`)
  renderFunctions(functions, out)
})
