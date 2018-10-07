/* global p0Team, describe, it, expect, should */

describe('superfilter()', function () {
  'use strict';

  it('exists', function () {
    expect(superfilter).to.be.a('function');

  });

  it('uses square correctly', function () {
    expect(superfilter()).to.equal(4);
  });

  // Add more assertions here
});
