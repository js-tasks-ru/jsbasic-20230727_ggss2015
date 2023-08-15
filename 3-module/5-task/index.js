function getMinMax(str) {
  let elements = str.split(' ');
  let numbers = elements.map(parseFloat).filter(number => !isNaN(number))
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}