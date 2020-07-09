module.exports = {
  toc: function toc(title, events, functions, out) {
    out(`# ${title}`)
    out('## Events')
    out(events.map(e => `[${e.name}](#${e.name})`).join(', '))
    out('\r\n\r\n## Functions')
    out(functions.map(f => `[${f.name}](#${f.name})`).join(', '))
  }
}
