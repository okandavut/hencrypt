Hencrypt [![Build Status](https://travis-ci.org/okandavut/hencrypt.svg?branch=master)](https://travis-ci.org/okandavut/hencrypt)
=========

A small library that encrypts string values with different libraries.

## Installation

  `npm install @okandavutcom/hencrypt`

## Usage

    const { encryptMD5 } = require('@okandavutcom/hencrypt');

    var md5EncryptedString = encryptMD5('test');
  
  
  Output should be `098f6bcd4621d373cade4e832627b4f6`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.