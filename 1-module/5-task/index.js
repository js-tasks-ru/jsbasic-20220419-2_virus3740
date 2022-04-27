function truncate(str, maxlength) {
  if(str.length >= maxlength){
    return str.substring(0, (maxlength-1)) + '\u2026';
  }
  else{
    return str;
  }
}