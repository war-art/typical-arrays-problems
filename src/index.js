
exports.min = function min(array) {

  return ((typeof array == 'undefined' || array.length == 0 ? 0 : Math.min.apply(null, array)));
}


exports.max = function max(array) {
  return ((typeof array == 'undefined' || array.length == 0 ? 0 : Math.max.apply(null, array)));
}

exports.avg = function avg(array) {
  if (typeof array == 'undefined' || array.length == 0) {
      return 0;

  } else {
      let i = 0,
          sum = 0,
          len = array.length;
      while (i < len) {
          sum = sum + array[i++];

      }
      return sum / len;
  }
}