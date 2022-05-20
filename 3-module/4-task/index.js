function showSalary(users, age) {
  users = users.filter(elem => elem.age <= age)
  let username = users.map(elem => `${elem.name}, ${elem.balance}`);
  return username.join('\n');
}