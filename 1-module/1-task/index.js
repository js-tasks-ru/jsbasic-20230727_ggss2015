function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    let res = 1
    for (let i = 2; i <= n; i++) {
      res *= i;
    }
    return res;
  }
}
