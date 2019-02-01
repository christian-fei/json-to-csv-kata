const assert = require('assert')
const { columnsRowFor, dataRowsFor, rowsFor, csvFor } = require('.')

test('creates csv', () => {
  const data = [{
    field1: 'field1Value',
    field2: 'field2Value',
    field3: 'field3Value'
  }]

  const rows = rowsFor(data)

  assert.deepEqual(rows, [
    ['field1', 'field2', 'field3'],
    ['field1Value', 'field2Value', 'field3Value']
  ])
})

test('creates columnsRow starting from an array of objects', () => {
  const data = [{
    field1: 'field1Value',
    field2: 'field2Value',
    field3: 'field3Value'
  }]

  const columnsRow = columnsRowFor(data)
  assert.deepEqual(columnsRow, ['field1', 'field2', 'field3'])
})

test('creates dataRows starting from an array of objects', () => {
  const data = [{
    field1: 'field1Value',
    field2: 'field2Value',
    field3: 'field3Value'
  }]

  const dataRow = dataRowsFor(data)
  assert.deepEqual(dataRow, [ ['field1Value', 'field2Value', 'field3Value'] ])
})

test('creates csv', () => {
  const data = [{
    field1: 'field1Value',
    field2: 'field2Value',
    field3: 'field3Value'
  }]

  const csv = csvFor(data)
  assert.deepEqual(csv, `field1, field2, field3\nfield1Value, field2Value, field3Value`)
})
