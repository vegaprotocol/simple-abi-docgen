const {
  emojiPayable,
  emojiView,
  emojiConstant,
  emojiPure,
  emojiNonpayable,
  emojiIndexed,
  emojiUnindexed
} = require('./emoji')
const { links } = require('../links')

function inputs(e, out) {
  if (!e || e.length === 0) {
    return
  }
  out('|Input name|Type|Index|')
  out('|----|----|----|')
  e.forEach(ev => out(`|${ev.name}|[${ev.type}](${links[ev.type]})|`))
  out('\n')
}
function outputs(e, out) {
  if (!e || e.length === 0) {
    return
  }
  out('\n')
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

function indexed(i) {
  return i && i.indexed ? emojiIndexed : emojiUnindexed
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

function title(i, out) {
  const flags = [constant(i), payable(i), mutable(i)].filter(f => f.length > 1)
  out(`### <a id="${i.name.toLowerCase()}-${i.type}">${i.name}</a>`)
  if (flags.length > 0) {
    out(`${flags.join(', ')}\n`)
  }
}

module.exports = {
  renderInputs: inputs,
  renderOutputs: outputs,
  mutable,
  constant,
  payable,
  indexed,
  title
}
