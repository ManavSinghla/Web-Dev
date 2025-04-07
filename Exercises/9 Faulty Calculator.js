let a = Math.random() * 100;
// let x = prompt("Enter 1st number: ");
// let y = prompt("Enter 2nd number: ");
let x = 10;
let y = 20;

// let z = prompt("Enter operator: ");
let z = "+";

switch (z) {
  case '+':
    if (a > 10) {
      console.log(x + y);
    } else {
      console.log(x - y);
    }
    break;
  case "-":
    if (a > 10) {
      console.log(x - y);
    } else {
      console.log(x / y);
    }
    break;
  case "*":
    if (a > 10) {
      console.log(x * y);
    } else {
      console.log(x + y);
    }
    break;
  case "/":
    if (a > 10) {
      console.log(x / y);
    } else {
      console.log(x ** y);
      break;
    }
}
