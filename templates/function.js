const { renderOutputs, title, indexed } = require('./shared')
const { links } = require('../links')

function renderInputs(e, out) {
  if (!e || e.length === 0) {
    return
  }
  out('|Input name|Type|')
  out('|----|----|')
  e.forEach(ev => out(`|${ev.name}|[${ev.type}](${links[ev.type]})|`))
  out('\n')
}

function renderFunction(f, out) {
  title(f, out)
  renderInputs(f.inputs, out)
  renderOutputs(f.outputs, out)
}

module.exports = {
  renderFunctions: function functions(functions, out) {
    out(`## Functions`)
    functions.forEach(f => renderFunction(f, out))
  },
  renderFunction
}
