
function filterRange(arr, a, b) {
  let newfilter = arr.filter(element => (a = element && element <= b));
   return newfilter;
}
