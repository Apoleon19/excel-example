const CODES = {
  A: 65,
  Z: 90
}

function createCell(data) {
  return `
   <div class="table-row__data-cell" contenteditable>${data}</div>
  `
}

function createColumn(data) {
  return `
   <div class="table-row__data-column">${data}</div>
  `
}

function createRow(rowInfo, rowData) {
  return `
    <div class="table-row">
      <div class="table-row__info">${rowInfo ? rowInfo : ''}</div>
      <div class="table-row__data">${rowData}</div>
    </div>
  `
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx)
}

export function createTable(rowCount = 15) {
  const columnsCount = CODES.Z - CODES.A + 1
  const rows = []

  const columns = new Array(columnsCount)
      .fill('')
      .map(toChar)
      .map(createColumn)
      .join('')

  rows.push(createRow(null, columns))

  const cells = new Array(columnsCount)
      .fill('')
      .map(createCell)
      .join('')

  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
