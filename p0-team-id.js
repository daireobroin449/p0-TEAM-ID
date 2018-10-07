/*! p0-team-id v0.0.0 - MIT license */
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

if ( typeof module !== "undefined" ) {
  module.exports = superfilterGui;
}
