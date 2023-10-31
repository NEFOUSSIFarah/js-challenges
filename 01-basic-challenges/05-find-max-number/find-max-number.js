/*  return the max number in the array, 
 so the function accept an array of numbers as a paramater and should return the greatest one
 */

  numbers=[3,8,0,9,4]
  function findMaxNumber(numbers) {
   
    console.log(numbers)

   let max = 0
   for (let i=0 ; i < numbers.length ; i++){
    if( numbers[i] >= max ) {     max = numbers[i]     }

//  3   >=  0    max = 3  true
//  8   >=  3    max = 8  true
//  9   >=  8    max = 9  true
//  0   >=  9    max = 9  ****
//  6   >=  9    max = 9  true

   }
      return max
  }

  // numbers = [3,8,9,0,6]
  // max = 9

  // g(x) = 2x +3 --> x =3 
  // g(3) = 2*3 + 3 --> g(3) = 9 

    