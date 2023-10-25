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

/* function calc(num1, num2, operator) {
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
  console.log(result); // Output will be -1
   */

  function calc(num1, num2, operator) {
    let result;
  
    for (let i = 0; i < 1; i++) {
      if (operator === "+") {
        result = num1 + num2;
        break;
      } else if (operator === "-") {
        result = num1 - num2;
        break;
      } else if (operator === "*") {
        result = num1 * num2;
        break;
      } else if (operator === "/") {
        if (num2 === 0) {
          result = "Division by zero is not allowed";
        } else {
          result = num1 / num2;
        }
        break;
      } else {
        result = "Invalid operator";
      }
    }
  
    return result;
  }
  
        
    // Example usage:
  const result = calc(5, 6, "-");
  console.log(result); // Output will be -1
  /* In this implementation, the for loop runs only once, 
  and the if statements check the operator to determine the operation to perform. 
  The break statements are used to exit the loop once a calculation is done.
   */
  
  
  
  
  