/*  return the max number in the array, 
 so the function accept an array of numbers as a paramater and should return the greatest one
 exp

 findMaxNumber("hello world!") => Hello World!
 */

  
  
  function findMaxNumber(inputString) {
    if (typeof inputString !== "string") {
      return "Input is not a valid string.";
    }
  
    const words = inputString.split(" ");
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return "";
      }
    });
  
    return capitalizedWords.join(" ");
  }
  
  // Example usage:
  const inputString = "hello world!";
  const result = findMaxNumber(inputString);
  console.log(result); // Output will be "Hello World!"
  