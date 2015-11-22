/*!
 * first-commit-date <https://github.com/jonschlinkert/first-commit-date>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var firstCommit = require('get-first-commit');

/**
 * Asynchronously get the first commit date from a git repository.
 *
 * ```js
 * firstCommitDate('foo/.git', function(err, date) {
 *   if (err) return console.log(err);
 *   // do stuff with commit date
 * });
 * ```
 * @param {String} `cwd` current working directory
 * @param {Function} `callback`
 * @return {Object}
 * @api public
 */

module.exports = function(cwd, cb) {
  if (typeof cwd === 'function') {
    cb = cwd;
    cwd = process.cwd();
  }

  if (typeof cb !== 'function') {
    throw new TypeError('expected callback to be a function');
  }

  firstCommit(cwd, function(err, commit) {
    if (err) return cb(err);

    cb(null, new Date(commit.date));
  });
};

/**
 * Synchronously get the first commit date from a git repository.
 *
 * ```js
 * var date = firstCommitDate.sync('foo/.git');
 * ```
 * @param {String} `cwd` current working directory
 * @return {Object}
 * @api public
 */

module.exports.sync = function(cwd) {
  var commit = firstCommit.sync(cwd);
  return new Date(commit.date);
};
