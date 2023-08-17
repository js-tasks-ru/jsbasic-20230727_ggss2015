function highlight(table) {
  let rows = table.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let cells = row.querySelectorAll('td');

    let statusCell = cells[3];
    let isAvailable = statusCell.dataset.available;

    let genderCell = cells[2];
    let genderValue = genderCell.textContent.trim();

    let ageCell = cells[1];
    let ageValue = parseInt(ageCell.textContent);

    if (isAvailable === 'true') {
      row.classList.add('available');
    } else if (isAvailable === 'false') {
      row.classList.add('unavailable');
    } else if (isAvailable === null) {
      row.hidden = false;
    }

    if (genderValue === 'm') {
      row.classList.add('male');
    } else if (genderValue === 'f') {
      row.classList.add('female');
    }

    if (ageValue < 18) {
      ageCell.style.textDecoration = "line-through";
    }
  }
}
