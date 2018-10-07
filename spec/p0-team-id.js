/* global p0Team, describe, it, expect, should */

describe('superfilter()', function () {
  'use strict';

  it('exists', function () {
    expect(superfilter).to.be.a('function');

  });

  it('computes the output sequence for [1,2,3,4,5]', function () {
    expect(superfilter([1,2,3,4,5])).to.eql([1,4,9,16,25]); // use .eql instead of .equal
  });
  
  it('computes the output sequence for []', function () {
    expect(superfilter([])).to.eql([]); // use .eql instead of .equal
  });
  
  it('computes the output sequence for [0,\'foo\',1,NaN,-2]', function () {
    expect(superfilter([0,'foo',1,NaN,-2])).to.eql([0,NaN,1,NaN,4]); // use .eql instead of .equal
  });
});
