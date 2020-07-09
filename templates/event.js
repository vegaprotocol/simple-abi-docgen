const out = console.log
const { renderInputs, title } = require('./shared')

function renderEvent(e) {
  title(e)
  renderInputs(e.inputs)
}

module.exports = {
  renderEvents: function events(events, out) {
    out(`# Events`)
    events.forEach(renderEvent)
  },
  renderEvent
}
