"use strict";

var expect = require("chai").expect;
const { encrypt, decrypt } = require("../index");

describe("#encryptor", function () {
  it("should encrypt value", function () {
    var result = encrypt("the secret string","mySecretSalt");
    expect(result).to.equal("7c606d287b6d6b7a6d7c287b7c7a61666f");
  });

  it("should decrypt value", function () {
    var result = decrypt('7c606d287b6d6b7a6d7c287b7c7a61666f','mySecretSalt')
    expect(result).to.equal("the secret string");
  });
});
