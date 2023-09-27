let tableToJSON = (table, columnNames = null) => {
  // Select all table rows
  let trs = Array.from(table.querySelectorAll("tr"))

  // Extract column headers from the first row
  let columnHeaders = Array.from(trs[0].querySelectorAll("td,th"))
    .map((cell) => cell.textContent.trim())

  // Check if custom column names are provided
  if (columnNames) {
    columnHeaders = columnNames
  }

  // Extract row headers from the remaining rows
  let rowHeaders = trs.slice(1).map((row) => {
    let cells = Array.from(row.querySelectorAll("td,th"))
      .map((cell) => cell.textContent.trim())

    return cells[0]
  })

  // Extract data and convert it into JSON format
  let data = trs.slice(1).map((row) => {
    let cells = Array.from(row.querySelectorAll("td,th"))
      .map((cell) => cell.textContent.trim())

    let entries = columnHeaders.map((header, i) => [header, cells[i]])

    let item = Object.fromEntries(entries)
    return item
  })

  return data
}

export { tableToJSON }
