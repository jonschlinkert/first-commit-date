/*!
 * first-commit-date <https://github.com/jonschlinkert/first-commit-date>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var lazy = require('lazy-cache')(require);
lazy('gitty', 'git');

function history(dir, cb) {
  if (typeof dir === 'function') {
    cb = dir;
    dir = process.cwd();
  }

  if (typeof cb !== 'function') {
    throw new TypeError('expected callback to be a function');
  }

  lazy.git(dir).log(function(err, history) {
    if (err) return cb(err);

    history.sort(function(a, b) {
      return b.date.localeCompare(a.date);
    });

    var commit = history[history.length - 1];
    cb(null, new Date(commit.date));
  });
}

history(function(err, res) {
  if (err) return console.log(err);
  console.log('first commit!', res);
});
