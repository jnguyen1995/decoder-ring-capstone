// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift number is invalid or NaN, or encode is not a boolean, reutrn false
    if (
      shift == 0 ||
      shift > 25 ||
      shift < -25 ||
      typeof shift != "number" ||
      typeof encode != "boolean"
    ) {
      return false;
    }
    let lowerString = input.toLowerCase();
    let resultArr = [];
    let shiftArr = [];
    //for length of characters of input, push the ascii key value into resultArr
    for (let i = 0; i < lowerString.length; i++) {
      resultArr.push(lowerString.charCodeAt(i));
    }

    resultArr.forEach((result) => {
      //if element is non-alphabetical, push the element into shiftArr
      if (result > 122 || result < 97) {
        shiftArr.push(result);
      } else {
        let shiftResult = 0;
        if (encode == true) {
          //if encode is true, add shift to result to encode
          shiftResult = result + shift;
        } else {
          //subtract shift to result to decode
          shiftResult = result - shift;
        }
        if (shiftResult > 122) {
          //after shifting, if the result is no longer alphanumeric, increase/decrease the ascii key value to loop thru alphabet appropriately
          shiftArr.push(shiftResult - 26);
        } else if (shiftResult < 97) {
          shiftArr.push(shiftResult + 26);
        } else {
          shiftArr.push(shiftResult);
        }
      }
    });
    //convert array of ascii values back into a string
    return String.fromCharCode(...shiftArr);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
