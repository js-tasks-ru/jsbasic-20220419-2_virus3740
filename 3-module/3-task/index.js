function camelize(str) {
  let ccsWord;
  ccsWord = str.split('-');
  if(ccsWord[0] == ''){
    ccsWord.shift();
    ccsWord = ccsWord.map(elem => elem[0].toUpperCase() + elem.slice(1));
    ccsWord.unshift('');
  }
  else{
    ccsWord = ccsWord.map(elem => elem[0].toUpperCase() + elem.slice(1));
    ccsWord[0] = ccsWord[0].toLowerCase();
  }
  return ccsWord.join('');
}