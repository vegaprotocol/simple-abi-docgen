const { renderInputs, renderOutputs, title } = require('./shared')

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
