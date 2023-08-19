function camelize(str) {
  let wrd = str.split('-');
  let result = wrd[0];
  for ( let i = 1; i < wrd.length; i++ ) {
    result += wrd[i][0].toUpperCase() + wrd[i].slice(1)
  }
  return result;
};
