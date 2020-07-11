const { renderInputs, title } = require('./shared')

function renderEvent(e, out) {
  title(e, out)
  renderInputs(e.inputs, out)
}

module.exports = {
  renderEvents: function events(events, out) {
    out(`## Events`)
    events.forEach(e => renderEvent(e, out))
  },
  renderEvent
}
