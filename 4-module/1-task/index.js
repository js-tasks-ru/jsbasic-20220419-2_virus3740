function makeFriendsList(friends) {
  let list = document.body;
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  friends = friends.map(elem => elem.firstName + ' ' + elem.lastName);
  for(let i = 0; i<friends.length; i++){
      let li = document.createElement('li');
      li.textContent = friends[i];
      ul.appendChild(li);
      console.log(friends.length);
    }
    return ul;
}