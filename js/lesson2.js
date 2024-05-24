// console.log("10" + "10");
// console.log("10" - "10");
// console.log("10" + +10);
// console.log(10 + +"10");

// if (condition) {
//   //code
// } else {
//   //code
// }

// let age = 23;
// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote.");
// }

// let marks = 80;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 80) {
//   console.log("Grade B");
// } else if (marks >= 70) {
//   console.log("Grade C");
// } else if (marks >= 60) {
//   console.log("Grade D");
// } else {
//   console.log("Grade F");
// }

// let weight = 72;
// let heightFeet = 5.5;
// let heightMeter = heightFeet * 0.3048;
// let bmi = weight / (heightMeter * heightMeter);
// console.log(bmi);
// if (bmi < 18.5) {
//   console.log("Underweight");
// } else if (bmi <= 24.9) {
//   console.log("Normal weight");
// } else if (bmi <= 29.9) {
//   console.log("Overweight");
// } else {
//   console.log("Obesity");
// }

// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// let weight = 72;
// let heightFeet = 5.5;
// let heightMeter = heightFeet * 0.3048;
// let bmi = weight / (heightMeter * heightMeter);
// switch (true) {
//   case bmi < 18.5:
//     console.log("Underweight");
//     break;
//   case bmi <= 24.9:
//     console.log("Normal weight");
//     break;
//   case bmi <= 29.9:
//     console.log("Overweight");
//     break;
//   default:
//     console.log("Obesity");
// }

// let num = -10;
// if (num > 0) {
//   console.log("Number is positive.");
// } else if (num < 0) {
//   console.log("Number is negative.");
// } else {
//   console.log("Number is zero.");
// }
// switch (true) {
//   case num > 0:
//     console.log("Number is positive.");
//     break;
//   case num < 0:
//     console.log("Number is negative.");
//     break;
//   default:
//     console.log("Number is zero.");
// }

// let word = "hello";
// let length = word.length;
// if (length < 10) {
//   console.log("The word is shorter than 10.");
// } else if (length > 10) {
//   console.log("The word is longer than 10.");
// } else {
//   console.log("The word is 10 characters long.");
// }

// let year = 2024;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// switch (true) {
//   case (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0:
//     console.log(`${year} is a leap year.`);
//     break;
//   default:
//     console.log(`${year} is not a leap year.`);
// }

let month = 4;
if (month === 1) {
  console.log("Number of days in January is 31.");
} else if (month === 2) {
  console.log("Number of days in February is 28.");
} else if (month === 3) {
  console.log("Number of days in March is 31.");
} else if (month === 4) {
  console.log("Number of days in April is 30.");
} else if (month === 5) {
  console.log("Number of days in May is 31.");
} else if (month === 6) {
  console.log("Number of days in June is 30.");
} else if (month === 7) {
  console.log("Number of days in July is 31.");
} else if (month === 8) {
  console.log("Number of days in August is 31.");
} else if (month === 9) {
  console.log("Number of days in September is 30.");
} else if (month === 10) {
  console.log("Number of days in October is 31.");
} else if (month === 11) {
  console.log("Number of days in November is 30.");
} else if (month === 12) {
  console.log("Number of days in December is 31.");
} else {
  console.log("Invalid month.");
}
