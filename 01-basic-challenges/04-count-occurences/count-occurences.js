/*
 * Complete the countOcc function to accept two string params and return how many times the 2nd param occured in the 1st param
 */

function countOcc(st1, st2) {
  let counter = 0

  for (let i = 0 ; i < st1.length ; i++)
  {
    if ( st2 == st1[i]) {
     counter = counter + 1
    }
  }
  return counter
}
 // call function
// countOcc(st1,st2)

//  let para= "farahfarahfarah"
//  let char ="f"
//  count =3

