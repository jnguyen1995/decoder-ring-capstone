// Write your tests here!
const { caesar } = require("../src/caesar.js");
const { expect } = require("chai");
describe("caesarFunction", () => {
  it("should shift the input by the given shift value and return the encoded message", () => {
    const message = "thinkful";
    const actual = caesar(message, 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should accept a negative shift value greater than -26 and return the encoded message", () => {
    const message = "thinkful";
    const actual = caesar(message, -3);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });
  it("should return the decoded message if encode = false", () => {
    const message = "wklqnixo";
    const actual = caesar(message, 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and non-alphabetical characters in the encoded message, and ignore capital letters", () => {
    const message = "This is a secret message!";
    const actual = caesar(message, 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and non-alphabetical characters when decoding a message, and ignore capital letters", () => {
    const message = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar(message, 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it("should return false if no shift value is given", () => {
    const message = "thinkful";
    const actual = caesar(message);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift value is greater than 25", () => {
    const message = "thinkful";
    const actual = caesar(message, 99);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if the shift value is less than -25", () => {
    const message = "thinkful";
    const actual = caesar(message, -26);
    const expected = false;
    expect(actual).to.equal(expected);
  });
});
