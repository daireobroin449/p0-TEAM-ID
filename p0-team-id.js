/*! p0-team-id v0.0.0 - MIT license */
'use strict';

var superfilter = function (arr) {
  var result =  arr.map(square);
  result = result.map(square);
  return result;
}

var superfilterGui = function (input, output) {
  var arr = input.value.split(',').map(function(el) {
      return parseInt(el, 10);
  });

  output.value = superfilter(arr).join(',');
  output.style.visibility = 'visible';
}

if ( typeof module !== "undefined" ) {
  module.exports = superfilterGui;
}
