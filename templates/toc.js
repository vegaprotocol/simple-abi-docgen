module.exports = {
  toc: function toc(title, events, functions, out) {
    out(`# ${title}`)
    if (events.length > 0) {
      out('## All events')
      out(
        events
          .map(e => `[${e.name}](#${e.name.toLowerCase()}-${e.type})`)
          .join(', ')
      )
    }

    if (functions.length > 0) {
      out('\n## All functions')
      out(
        functions
          .map(f => `[${f.name}](#${f.name.toLowerCase()}-${f.type})`)
          .join(', ')
      )
    }
  }
}
