function getMinMax(str) {
  let result = str.split(' ').filter(Number);
  let res = new Object();
  res.min = Math.min(...result);
  res.max = Math.max(...result);
  return res;
}