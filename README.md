# Hencrypt [![Build Status](https://travis-ci.org/okandavut/hencrypt.svg?branch=master)](https://travis-ci.org/okandavut/hencrypt) [![Coverage Status](https://coveralls.io/repos/github/okandavut/hencrypt/badge.svg?branch=master)](https://coveralls.io/github/okandavut/hencrypt?branch=master)

A small library that encrypts and decrypts string values with key.

## Installation

`npm install @okandavutcom/hencrypt`

## Usage

    const { encrypt } =  require('@okandavutcom/hencrypt');

    var result = encrypt("the secret string","mySecretSalt");

    // Output should be `098f6bcd4621d373cade4e832627b4f6`

---

    const { decrypt } =  require('@okandavutcom/hencrypt');

    var result = decrypt('7c606d287b6d6b7a6d7c287b7c7a61666f','mySecretSalt')


    // Output should be `the secret string`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Technologies
- JavaScript
- Mocha for testing
- Istanbul for coverage of tests.
- Travis for continuous integration
- Coveralls for check coverage after every build
