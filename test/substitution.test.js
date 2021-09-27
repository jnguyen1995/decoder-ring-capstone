// Write your tests here!
const { substitution } = require("../src/substitution.js");
const { expect } = require("chai");

describe("substitutionModule", () => {
  it("should return an encoded message where letters from the subsitution alphabet will be transposed to the standard alphabet", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.be.equal(expected);
  });
  it("should maintain spaces when encoding a message", () => {
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.be.equal(expected);
  });
  it("should be able to decode a message if encode = false", () => {
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "thinkful";
    expect(actual).to.be.equal(expected);
  });
  it("should return an encoded message that allows special characters to be transposed to the standard alphabet", () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&";
    expect(actual).to.be.equal(expected);
  });
  it("should return a decoded message that allows special characters to be transposed to the standard alphabet", () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = "message";
    expect(actual).to.be.equal(expected);
  });
  it("should return false if the given alphabet is not 26 characters", () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.be.equal(expected);
  });
  it("should return false if any of the characters in the alphabet parameter are not unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.be.equal(expected);
  });
});
