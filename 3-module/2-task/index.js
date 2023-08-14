function filterRange(arr, a, b) {
return arr.filter(function(number){
  if (number >= a && number <= b) {
    return number
  }
})
}
