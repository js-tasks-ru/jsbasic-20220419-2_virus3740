function highlight(table) {
  let td = table.querySelectorAll('tr > td');
  for (let i = 0; i < td.length; i++){
    if(td[i].hasAttribute('data-available') != true){
      td[i].parentNode.setAttribute('hidden', 'true');
    }
    else{
      td[i].parentNode.removeAttribute('hidden', 'true');
      if (td[i].getAttribute('data-available') === 'true'){
        td[i].parentNode.classList.add('available');
      }
      else if(td[i].getAttribute('data-available') === 'false'){
        td[i].parentNode.classList.add('unavailable');
      }
    }
    if(td[i].innerHTML == 'm'){
      td[i].parentNode.classList.add('male');
    }
    else if(td[i].innerHTML == 'f'){
      td[i].parentNode.classList.add('female');
    }
    if(td[i].innerHTML < 18){
      td[i].parentNode.setAttribute('style', 'text-decoration: line-through');
    }
  }
  return table;
}