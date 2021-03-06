# first-commit-date [![NPM version](https://badge.fury.io/js/first-commit-date.svg)](http://badge.fury.io/js/first-commit-date)  [![Build Status](https://travis-ci.org/jonschlinkert/first-commit-date.svg)](https://travis-ci.org/jonschlinkert/first-commit-date)

> Returns a JavaScript date object with the date and time of a git repository's first commit.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i first-commit-date --save
```

## Usage

```js
var firstCommitDate = require('first-commit-date');

firstCommitDate(function(err, date) {
  if (err) return console.log(err);
  console.log('first commit!', date);
});
//=> first commit! Tue Nov 17 2015 13:29:18 GMT-0500 (EST)
```

## API

**Params**

* `cwd` **{String}**: current working directory
* `callback` **{Function}**
* `returns` **{Object}**

**Example**

```js
firstCommitDate('foo/.git', function(err, date) {
  if (err) return console.log(err);
  // do stuff with commit date
});
```

### [.sync](index.js#L55)

Synchronously get the first commit date from a git repository.

**Params**

* `cwd` **{String}**: current working directory
* `returns` **{Object}**

**Example**

```js
var date = firstCommitDate.sync('foo/.git');
```

## Related projects

* [git-repo-name](https://www.npmjs.com/package/git-repo-name): Get the repository name from the git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-repo-name)
* [git-user-name](https://www.npmjs.com/package/git-user-name): Get a user's name from git config at the project or global scope, depending on… [more](https://www.npmjs.com/package/git-user-name) | [homepage](https://github.com/jonschlinkert/git-user-name)
* [git-username](https://www.npmjs.com/package/git-username): Get the username from a git remote origin URL. | [homepage](https://github.com/jonschlinkert/git-username)
* [github-base](https://www.npmjs.com/package/github-base): Base methods for creating node.js apps that work with the GitHub API. | [homepage](https://github.com/jonschlinkert/github-base)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/first-commit-date/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on November 22, 2015._