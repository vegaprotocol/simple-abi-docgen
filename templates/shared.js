const out = console.log
const {
  emojiPayable,
  emojiView,
  emojiConstant,
  emojiPure,
  emojiNonpayable
} = require('./emoji')
const { links } = require('../links')

function inputs(e) {
  if (!e || e.length === 0) {
    return
  }
  out('|Input name|Type|')
  out('|----|----|')
  e.forEach(ev => out(`|${ev.name}|[${ev.type}](${links[ev.type]})|`))
  out('\r\n')
}
function outputs(e) {
  if (!e || e.length === 0) {
    return
  }
  out('\r\n')
  e.forEach(ev => out(`**Returns** [${ev.type}](${links[ev.type]})`))
}

function mutable(i) {
  if (i && i.stateMutability) {
    if (i.stateMutability === 'pure') {
      return `${emojiPure} Pure`
    } else if (i.stateMutability === 'view') {
      return `${emojiView} View`
    } else if (i.stateMutability === 'nonpayable') {
      return `${emojiNonpayable} Non-payable`
    } else {
      return ''
    }
  } else {
    return ''
  }
}

function payable(i) {
  if (!i) {
    return ''
  }
  return i.payable ? `${emojiPayable} Payable` : ''
}

function constant(i) {
  if (!i) {
    return ''
  }
  return i.constant ? `${emojiConstant} Constant` : ''
}

function title(i) {
  const flags = [constant(i), payable(i), mutable(i)].filter(f => f.length > 1)
  out(`## ${i.name}`)
  if (flags.length > 0) {
    out(`${flags.join(', ')}\r\n`)
  }
}

module.exports = {
  renderInputs: inputs,
  renderOutputs: outputs,
  mutable,
  constant,
  payable,
  title
}
