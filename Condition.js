// Exercise 1: Age Check
// Create a script that checks a user's age and outputs whether they are a child, teenager, adult, or senior.

// Creating a varible to store the age of a person
let personAge = 25;

// lets create condition to determine  age in Kenya
if (personAge >= 10 ) {
    console.log('You are a Child')
} else if ( personAge >=13 && personAge >= 18 ) {
    console.log ('You are a teenager')
} else if  (personAge === 21 && personAge === 25) {
    console.log ('You are a young youth')
}else {
    console.log ('You are not a Young Youth')
}

// Exercise 2: Even or Odd
// Write a script that checks if a number is even or odd.

// lets Declare a variable 

let number = 10 ;

if (  number %10 === 3) {
    console.log ('The number is Even')
}else {
    console.log ('The number is Odd')
}


// Sure, here are a few practice exercises to help you get better at using condition statements and variables in JavaScript. You can create a new JavaScript file in your VSCode to work on these.

// Exercise 1: Age Check
// Create a script that checks a user's age and outputs whether they are a child, teenager, adult, or senior.

// javascript
// Copy code
// Declare a variable for age
let age = 25; // Change this value to test different ages

// Check the age range
if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

// Exercise 2: Grade Evaluation
// Create a script that assigns a grade based on a score.

let Grade = 85 ;

if (Grade === 20) {
    console.log (' Your Grade E')
}else if  (Grade === 21 && Grade === 30) {
    console.log ('Your Grade D-')
}else if ( Grade === 31 && Grade === 40) {
    console.log ('Your Grade D')
}else if ( Grade === 41 && Grade === 50) {
    console.log ('Your Grade D+')
} else if (Grade === 50 && Grade === 55) {
    console.log ('Your Grade C-')
} else if (Grade === 56 && Grade === 60) {
    console.log ('Your Grade C')
} else if (Grade === 61 && Grade === 65) {
    console.log ('Your Grade C+')
} else if (Grade === 70 && Grade === 75) {
    console.log ('Your Grade B-')
} else if (Grade === 75 && Grade === 80) {
    console.log ('Your Grade B')
} else if (Grade === 81 && Grade === 84) {
    console.log ('Your Grade B+')
} else if (Grade === 85 || Grade === 100) {
    console.log ('Your Grade A')
}else{
    console.log ('You did not Complete your Exams')
}


// here we will write a script that show the largets number

// declartion of num variable 
let num1 = 400;
let num2 = 456;
let num3 = 279;

let largets;

if (num1 >= num2  && num1 >= num3 ) {
    largets = num1
}else if (num2 >= num1 && num2 >= num3) {
    largets = num2
}else {
    largets = num3
}
console.log (`The Largets number is: ${largets}`)

// Quiz: Variables and Conditional Statements

// 1. Declare a variable 'age' and assign it a value of 25
// Your code here:

const ages = 25;


// 2. Using an if statement, check if 'age' is greater than or equal to 18
// If true, assign "Adult" to a new variable 'status', otherwise assign "Minor"
// Your code here:


// 3. Declare a variable 'score' and assign it a value of 75
// Your code here:


// 4. Using an if-else if-else statement, assign a grade to a new variable 'grade' based on 'score':
// 90 or above: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"
// Your code here:


// 5. Declare a variable 'isRaining' and assign it a boolean value
// Your code here:


// 6. Using a ternary operator, assign "Bring an umbrella" or "Leave the umbrella" 
// to a new variable 'umbrellaDecision' based on 'isRaining'
// Your code here:


// 7. Declare variables 'num1' and 'num2' and assign them values of 10 and 15 respectively
// Your code here:


// 8. Using the AND (&&) operator, check if both 'num1' is greater than 5 AND 'num2' is less than 20
// Assign the result to a new variable 'logicalResult'
// Your code here:


// 9. Declare a variable 'month' and assign it a number from 1 to 12
// Your code here:


// 10. Using a switch statement, assign the season to a new variable 'season' based on 'month':
// December, January, February: "Winter"
// March, April, May: "Spring"
// June, July, August: "Summer"
// September, October, November: "Fall"
// Your code here:


// Log all variables to check your work
console.log("Age:", ages);
console.log("Status:", status);
console.log("Score:", score);
console.log("Grade:", grade);
console.log("Is Raining:", isRaining);
console.log("Umbrella Decision:", umbrellaDecision);
console.log("Num1:", num1);
console.log("Num2:", num2);
console.log("Logical Result:", logicalResult);
console.log("Month:", month);
console.log("Season:", season);