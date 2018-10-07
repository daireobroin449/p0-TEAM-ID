/*! p0Team v0.0.0 - MIT license */
'use strict';

var superfilter = function (arr) {
  return arr.map(square);
}

var superfilterGui = function (input, output) {
  var arr = input.value.split(',').map(function(el) {
      return parseInt(el, 10);
  });
  
  output.value = superfilter(arr).join(',');
}
