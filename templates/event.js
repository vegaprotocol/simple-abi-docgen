const { indexed, title } = require('./shared')
const { links } = require('../links')

function renderInputs(e, out) {
  if (!e || e.length === 0) {
    return
  }
  out('|Input name|Type|Indexed|')
  out('|----|----|----|')
  e.forEach(ev =>
    out(`|${ev.name}|[${ev.type}](${links[ev.type]})|${indexed(ev)}|`)
  )
  out('\n')
}

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
