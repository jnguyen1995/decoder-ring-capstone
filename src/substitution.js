// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let realAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function messageEncrypt(input, decipherKey) {
    return (
      input
        .toLowerCase()
        //include letters, numbers, and special characters
        .match(/[0-9]|[a-z!@#$%^&*()]|[^!@#$%^&*()]|\s/g)
        //map key or value if it matches to message
        .map((element) => decipherKey[element] || element)
        //join elements in array into a string
        .join("")
    );
  }
  function substitution(input, alphabet, encode = true) {
    //split alphabet key into array
    if (!alphabet) {
      return false;
    }
    let alphabetArr = alphabet.split("");
    //if there are not 26 items, return false
    if (alphabetArr.length != 26) {
      return false;
    }
    //if there are any non-unique values, return false
    let hasDuplicate = alphabetArr.some(
      (val, i) => alphabetArr.indexOf(val) !== i
    );
    if (hasDuplicate) {
      return false;
    }
    let decipherKey = {};
    //if encode is false, then decode message
    if (!encode) {
      //create object decipherKey to have keys = to given alphabet, with value transposed to the real alphabet
      alphabetArr.forEach((char, i) => (decipherKey[char] = realAlphabet[i]));
      return messageEncrypt(input, decipherKey);
    }
    realAlphabet.forEach((char, i) => (decipherKey[char] = alphabetArr[i]));
    return messageEncrypt(input, decipherKey);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
