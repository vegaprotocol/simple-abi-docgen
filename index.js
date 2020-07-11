#!/usr/bin/env node

const fs = require('fs')
const { toc } = require('./templates/toc')
const { renderEvents } = require('./templates/event')
const { renderFunctions } = require('./templates/function')
const { exit } = require('process')

const events = []
const functions = []
const args = process.argv.slice(2)
let output = ''

if (!args[0]) {
  console.error('File not specified')
  process.exit(1)
}

if (!args[1]) {
  console.error('Title not specified')
  process.exit(1)
}

function out(text) {
  output += `${text}\n`
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

  if (events.length === 0 && functions.length === 0) {
    console.error('Output will be pretty sparse')
    process.exit(1)
  }

  toc(args[1], events, functions, out)
  if (events.length > 0) {
    out(`\n`)
    renderEvents(events, out)
  }
  if (functions.length > 0) {
    out(`\n`)
    renderFunctions(functions, out)
  }

  console.log(output)
})
