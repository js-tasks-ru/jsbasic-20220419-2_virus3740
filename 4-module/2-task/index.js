function makeDiagonalRed(table) {
  let rows = table.rows;
  let colorGet;
    for (let i = 0; i < rows.length; i++){
      colorGet = rows[i].cells[i].setAttribute('style', 'background: red;');
    }
    return colorGet;
}