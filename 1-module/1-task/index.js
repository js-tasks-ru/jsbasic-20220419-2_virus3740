function factorial(n) {
  let a = 1;
  while(n) {
    a = a * n--;
  };
  return a;
}
