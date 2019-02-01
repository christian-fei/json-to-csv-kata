## json-to-csv-kata

create a csv starting from some input data.

### requirements

easy peasy.

create a CSV string, that could be written to file (not required for the kata).

e.g.

```
const data = [{
  field1: 'field1Value',
  field2: 'field2Value',
  field3: 'field3Value'
}]

jsonToCSV(data) === `field1, field2, field3\nfield1Value, field2Value, field3Value`
```