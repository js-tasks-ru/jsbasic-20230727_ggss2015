/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */


export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.createTable();
  }
  createTable() {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');


const headRow = document.createElement('tr');
Object.keys(this.rows[0]).forEach(column => {
const headerCell = document.createElement('th');
headerCell.textContent = column;
headRow.appendChild(headerCell);
});
headRow.appendChild(document.createElement('th'));
thead.appendChild(headRow);
table.appendChild(thead);


this.rows.forEach(rowData => {
  const row = document.createElement('tr');
  Object.values(rowData).forEach(value => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  });

  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click',() =>{
    row.remove()
  });
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);
  tbody.appendChild(row);
});
table.appendChild(tbody);
return table;
  }
}
