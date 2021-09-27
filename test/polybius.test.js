// Write your tests here!
const { polybius } = require("../src/polybius.js");
const { expect } = require("chai");

describe("polybiusModule", () => {
  it("should return the encoded message as a string according to the Polybius Square key", () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.be.equal(expected);
  });
  it("should maintain spaces and ignore capital letters in the encoded message", () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.be.equal(expected);
  });
  it("should return the decoded message if encode = false, while maintaining spaces", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.be.equal(expected);
  });
  it("should return '(i/j)' as a possible string value when decoding a message", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.be.equal(expected);
  });
  it("should return false if the number of characters in the string is odd when decoding a message", () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.be.equal(expected);
  });
});
