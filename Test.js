// Quiz: Variables and Conditional Statements

// 1. Declare a variable 'age' and assign it a value of 25
// Your code here:

let age = 25;


// 2. Using an if statement, check if 'age' is greater than or equal to 18
// If true, assign "Adult" to a new variable 'status', otherwise assign "Minor"
// Your code here:

if (age >= 18) {
    status = 'Adult';
}else {
    status = 'Minor';
}


// 3. Declare a variable 'score' and assign it a value of 75
// Your code here:

let score = 75;



// 4. Using an if-else if-else statement, assign a grade to a new variable 'grade' based on 'score':
// 90 or above: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"
// Your code here:
if (score >= 90) {
    grade = 'A';
} else if ( score >= 80 || score <= 89){
    grade = 'B';
} else if (score >= 70 || score <= 79) {
    grade = 'C';
}else if ( score >= 60 || score <= 69) {
    grade = 'D';
}else { ( score <= 60) 
    grade = 'F';
}

// 5. Declare a variable 'isRaining' and assign it a boolean value
// Your code here:

let isRaining = true;


// 6. Using a ternary operator, assign "Bring an umbrella" or "Leave the umbrella" 
// to a new variable 'umbrellaDecision' based on 'isRaining'
// Your code here:

let umbrellaDecision = isRaining ? "Bring an Umbrella" : "Leave the umbrella";


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
console.log("Age:", age);
console.log("Status:", status);
console.log("Score:", score);
console.log("Grade:", grade);
console.log("Is Raining:", isRaining);
console.log("Umbrella Decision:", umbrellaDecision);
// console.log("Num1:", num1);
// console.log("Num2:", num2);
// console.log("Logical Result:", logicalResult);
// console.log("Month:", month);
// console.log("Season:", season);