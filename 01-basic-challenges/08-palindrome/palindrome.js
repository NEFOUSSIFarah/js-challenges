/* 
    return a boolean if the passed string is palindrome

    Exp:
    isPalindrome("racecar") => true
    isPalindrome("Hello") => false
*/

function isPalindrome(str) {
    if (typeof str !== "string") {
      return false; // Not a valid string, so it's not a palindrome.
    }
  
    // Remove non-alphanumeric characters and convert to lowercase for a case-insensitive check.
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanStr.split("").reverse().join("");
  
    return cleanStr === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("Hello")); // false
  