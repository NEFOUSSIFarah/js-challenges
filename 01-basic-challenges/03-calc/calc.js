/**
 * Complete the calc function to accept three parameters
 1st must be a number
 2nd must be number
 3rd must be an operator (+, -, /, *)
 
 exp:
 
 1st : 5
 2nd : 6
 3rd : "-"
 
 this function must do the calculation of (5 - 6) and output(return) their result (-1)
 */


function calc(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          return "Division by zero is not allowed";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage:
  const result = calc(5, 6, "-");
  console.log(result)
  

  /* function calc(num1, num2, operator) {
      
      if (operator === "+") {
        return num1 + num2;
      } 
      else if (operator === "-") {
        return num1 - num2;
      } 
      else if (operator === "*") {
        return num1 * num2;
      } 
      else if (operator === "/") {
        if (num2 === 0) {
          return "Division by zero is not allowed";
        } else {  return num1 / num2;      }
      } else {
        return "Invalid operator";
      }

    } */
    

  
        
    
  
  
  
  
  