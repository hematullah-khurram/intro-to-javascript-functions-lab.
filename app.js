
// exercise 1:
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(11, 9));


//exercise 2:
const isAdult = (age) => {
    if (age => 18) {
     return "adult"
    } else {
        return "minor"
     }
}


console.log('Exercise 2 Result:', isAdult(21));


//exercise 3:
const isCharAVowel = (character) => {
    character = character.toLowerCase ();
   if (character === "a" ||character === "e"|| character === "i"|| character ==="o"|| character ==="u") {
    return "true"
   } else {
    return "false"
   }
    
}
console.log('Exercise 3 Result:', isCharAVowel("A"));


//exercise 4:
const generateEmail = (name, domain) => {
        return name + "@" + domain
    }
        
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



//exercise 5:
const greetUser = (name, time) => {
    return "good" + " " + time +" " + name 
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



//exercise 6:
const maxOfThree = (one, two, three) => {
if (one > two && one >three) {
    return one
}
else if (two > one && two >three) {
    return two
}
else if (three > one && three> two) {
    return three
}
}
console.log('Exercise 6 Result:', maxOfThree(20, 10, 8));



//exercise 7:
const calculateTip = (bill, tip) => {
return bill*tip/100
}
console.log('Exercise 7 Result:', calculateTip(50, 20));



//exercise 8:
function convertTemperature(temp, scale) {
  if (scale === "C") {
    return (temp * 9/5) + 32;
  } else if (scale === "F") {
    return (temp - 32) * 5/9;
  } else {
    return "Scale must be 'C' for Celsius or 'F' for Fahrenheit"
  }
}

console.log("Exercise 8 Result (C to F):", convertTemperature(32, "C"));



//exercise 9:
function basicCalculator(num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "subtract") {
    return num1 - num2;
  } else if (operation === "multiply") {
    return num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
    }
    return num1 / num2;
  } else {
    return ("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));