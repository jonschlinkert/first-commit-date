/*!
 * first-commit-date <https://github.com/jonschlinkert/first-commit-date>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var firstCommit = require('get-first-commit');

module.exports = function firstCommitDate(dir, cb) {
  if (typeof dir === 'function') {
    cb = dir;
    dir = process.cwd();
  }

  if (typeof cb !== 'function') {
    throw new TypeError('expected callback to be a function');
  }

  firstCommit(dir, function(err, commit) {
    if (err) return cb(err);

    cb(null, new Date(commit.date));
  });
};
