function sumSalary(salaries) {
  let sum = 0;
  if('John' in salaries == true || 'Ann' in salaries == true || 'Pete' in salaries == true){
  let sum = salaries['John'] + salaries['Ann'] + salaries['Pete'];
  return sum;
  }
  else{
    return 0;
  }
}
