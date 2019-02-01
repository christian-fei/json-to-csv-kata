module.exports = {
  columnsRowFor,
  dataRowsFor,
  rowsFor,
  csvFor
}

function columnsRowFor (data = []) {
  return Object.keys(data[0] || {})
}

function dataRowsFor (data = [], columns = columnsRowFor(data)) {
  return data.map(d => columns.map(c => d[c] || ''))
}

function rowsFor (data = []) {
  const rows = [
    columnsRowFor(data),
    ...dataRowsFor(data)
  ]
  return rows
}

function csvFor (data = []) {
  const rows = rowsFor(data)
  return `${rows[0].join(', ')}\n${rows.slice(1).map(d => d.join(', ')).join('\n')}`
}
