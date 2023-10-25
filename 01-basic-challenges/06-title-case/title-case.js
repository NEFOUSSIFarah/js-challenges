/* 
    Accept a string as a parameter 
    and returns a string with the first letter of each word capitalized
    
    Exp:
    titleCase("hello world!") => Hello World!
*/

function titleCase() {}

function titleCase(inputString) {
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
  const result = titleCase(inputString);
  console.log(result); // Output will be "Hello World!"
  