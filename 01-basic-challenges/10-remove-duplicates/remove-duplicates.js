/* 
    remove duplicates from an array
*/

function removeDuplicates(array) {
    if (!Array.isArray(array)) {
      return "Input is not a valid array.";
    }
  
    return Array.from(new Set(array));
  }
  
  // Example usage:
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const result = removeDuplicates(inputArray);
  console.log(result); // Output will be [1, 2, 3, 4, 5]
  