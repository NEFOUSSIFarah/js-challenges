/* 
    Count the vowels in str 
    vowels = 'a' | 'e' | 'i' | 'o' | 'u'

    Exp:
    countVowels('Hello, World!') => 3
*/


function countVowels(str) {
    if (typeof str !== "string") {
      return 0; // Not a valid string, so there are no vowels.
    }
  
    const vowels = 'aeiouAEIOU'; // Include both lowercase and uppercase vowels.
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  console.log(countVowels("Hello, World!")); // 3
  