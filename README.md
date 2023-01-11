# tableToJSON
Converts a table from an HTML document to a JSON object.

## Parameters
- `table`: the table element to be converted.
- `columnNames` (optional): an array of strings to use as column headers. If not provided, column headers will be extracted from the table.

## Returns
An object with the following properties:
- `rowHeaders`: an array of row headers (strings).
- `columnHeaders`: an array of column headers (strings).
- `data`: an array of objects representing the table's rows, where each object's keys are the column headers and the values are the corresponding cell values.

## Usage
```javascript
import { tableToJSON } from 'tableToJSON';

let table = document.querySelector('table');
let json = tableToJSON(table);
console.log(json);
