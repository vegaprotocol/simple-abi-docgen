const out = console.log
const { renderInputs, renderOutputs, title } = require('./shared')

function renderFunction(f) {
  title(f)
  renderInputs(f.inputs)
  renderOutputs(f.outputs)
}

module.exports = {
  renderFunctions: function functions(functions) {
    out(`# Functions`)
    functions.forEach(renderFunction)
  },
  renderFunction
}
