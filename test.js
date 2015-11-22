'use strict';

require('mocha');
var assert = require('assert');
var firstCommitDate = require('./');

describe('first-commit-date', function() {
  it('should return a function', function() {
    assert.equal(typeof firstCommitDate, 'function');
  });

  it('should return a date object: async', function(cb) {
    firstCommitDate(function(err, date) {
      if (err) return cb(err);
      assert(date instanceof Date);
      cb();
    });
  });

  it('should return a date object: sync', function() {
    var date = firstCommitDate.sync();
    assert(date instanceof Date);
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      firstCommitDate();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
