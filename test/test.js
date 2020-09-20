'use strict';

var expect = require('chai').expect;
const { encryptMD5 } = require('../index');

describe('#encryptor', function() {
    it('should encrypt value', function() {
        console.log("okan");
        var result = encryptMD5("test");
        console.log(result);
        expect(result).to.equal('098f6bcd4621d373cade4e832627b4f6');
    });

});