/**
 * Complete the countOcc function to accept two params and return how many times the 2nd param occured in the 1st param
 */

function countOcc(inputString, target) {
    // Use the split method to split the inputString into an array of substrings based on the target
    const substrings = inputString.split(target);
  
    // Use the length of the resulting array to count the occurrences of the target
    const occurrences = substrings.length - 1;
  
    return occurrences;
  }
  
  // Example usage:
/*
  const inputString = "hello world, hello universe, hello";
  const target = "hello";
  const result = countOcc(inputString, target);
  console.log(result); // Output will be 3
*/
