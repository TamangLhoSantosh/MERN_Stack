// let password = "thedud00000";
// let passwordLength = password.length;
// if (passwordLength > 12) {
//   console.log("Strong password");
// } else if (passwordLength > 8) {
//   console.log("Medium password");
// } else {
//   console.log("Weak password");
// }

// const char = prompt("Enter a character:");
// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// if (vowels.includes(char)) {
//   console.log("Character is a vowel.");
// } else {
//   console.log("Character is a consonant.");
// }

// let num = Math.floor(Math.random() * 10);
// const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
// if (userGuess == num) {
//   console.log("Congratulations! You guessed the correct number.");
// } else if (userGuess > num) {
//   console.log("Your guess is too high.");
// } else if (userGuess < num) {
//   console.log("Your guess is too low.");
// } else {
//   console.log("Invalid input");
// }

// const price = parseInt(prompt("Enter the price of the product:"));
// const taxRate = parseInt(prompt("Enter the tax rate:"));
// let taxAmount = (price * taxRate) / 100;
// let actualPrice = price + taxAmount;
// console.log(`Price: ${price}, Tax: ${taxAmount}, Total: ${actualPrice}`);

// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));
// let operator = prompt("Enter the operator(+, -, *, /):");
// let result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// }
// console.log(result);

// const age = parseInt(prompt("Enter your age:"));
// switch (true) {
//   case age < 13:
//     console.log("Movie recommendation animation.");
//     break;
//   case age < 20:
//     console.log("Movie recommendataion action.");
//     break;
//   default:
//     console.log("Movie recommendation darama.");
//     break;
// }

// const dateString = prompt("Enter a date:");
// let date = new Date(dateString);
// let day = date.getDay();
// if (day === 0 || day === 6) {
//   console.log("The date falls on a weekend.");
// } else {
//   console.log("The date falls on a weekday.");
// }

// let num = 20;
// if (num > 0) {
//   console.log("Number is positive.");
// } else if (num < 0) {
//   console.log("Number is negative.");
// } else {
//   console.log("Number is zero.");
// }

// let num = 45;
// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("Number is divisible by 3 and 5.");
// } else if (num % 3 === 0) {
//   console.log("Number is divisible by 3.");
// } else if (num % 5 === 0) {
//   console.log("Number is divisible by 5.");
// } else {
//   console.log("Number is not divisible by 3 or 5.");
// }

// const num1 = parseInt(prompt("Enter the first number:"));
// const num2 = parseInt(prompt("Enter the second number:"));
// let sum = num1 + num2;
// if (sum % 2 === 0) {
//   console.log("Sum is even.");
// } else {
//   console.log("Sum is odd.");
// }
