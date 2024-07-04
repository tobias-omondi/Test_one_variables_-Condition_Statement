console.log ('Hello Toby')

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
// Exercise 2: Even or Odd
// Write a script that checks if a number is even or odd.


// Exercise 3: Grade Evaluation
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