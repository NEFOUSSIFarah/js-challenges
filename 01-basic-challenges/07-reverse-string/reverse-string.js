/* 
    Accept a str as param and returns its reversed one

    Exp:
    reverseString("Hello") => olleH

*/

function reverseString(str) {
    if (typeof str !== "string") {
      return "Input is not a valid string.";
    }
  
    const reversedStr = str.split("").reverse().join("");
    return reversedStr;
  }
  
  // Example usage:
  const inputString = "Hello";
  const result = reverseString(inputString);
  console.log(result); // Output will be "olleH"
  