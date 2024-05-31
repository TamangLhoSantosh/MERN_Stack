// function sum(a, b) {
//   return a + b;
// }
// let result = sum(123, 324);
// console.log(`The sum of ${123} and ${324} is ${result}.`);

// function average(arrayNumber) {
//   if (arrayNumber.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < arrayNumber.length; i++) {
//     sum = sum + arrayNumber[i];
//   }
//   return sum / arrayNumber.length;
// }

// let numArray = [342, 543, 563, 354, 766];
// let avg = average(numArray);
// console.log(`The average of [${numArray}] is ${avg}.`);

// function evenOdd(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// let num = 234;
// console.log(`The number ${num} is an ${evenOdd(num)} number.`);

// function reverseString(string) {
//   let reversed = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   return reversed;
// }

// let str = "Hello, World!";
// let reversedStr = reverseString(str);
// console.log(`The reverse of "${str}" is "${reversedStr}".`);

// function max(number) {
//   if (number.length === 0) {
//     return 0;
//   }
//   let max = number[0];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] > max) {
//       max = number[i];
//     }
//   }
//   return max;
// }

// let numArray = [342, 543, 766, 563, 354];
// let maxNum = max(numArray);
// console.log(`The maximum number in [${numArray}] is ${maxNum}.`);

// function celFar(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// let celsius = 100;
// let fahrenheit = celFar(celsius);
// console.log(`${celsius}°C is equal to ${fahrenheit}°F.`);

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let min = 10;
// let max = 20;
// let randomNumber = random(min, max);
// console.log(`Random number : ${randomNumber}.`);

// function palindrome(string) {
//   let reversed = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversed += string[i];
//   }
//   if (reversed === string) {
//     return `${string} is palindrome.`;
//   } else {
//     return `${string} is not palindrome.`;
//   }
// }

// let str = "madam";
// console.log(palindrome(str));

// function capitalize(sentence) {
//   let newSentance = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (i === 0 || sentence[i - 1] === " ") {
//       newSentance += sentence[i].toUpperCase();
//     } else {
//       newSentance += sentence[i];
//     }
//   }
//   return newSentance;
// }

// let text = "hello, world!";
// console.log(capitalize(text));

// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }

// let num = 5;
// console.log(`The factorial of ${num} is ${factorial(num)}.`);

// function count(array, element) {
//   let counter = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       counter++;
//     }
//   }
//   return counter;
// }

// let arr = [1, 2, 3, 4, 5, 1, 2, 1, 3, 1];
// let element = 1;
// console.log(
//   `The number of occurrences of ${element} in [${arr}] is ${count(
//     arr,
//     element
//   )}.`
// );

// function leapYear(date) {
//   if ((date % 4 === 0 && date % 100 !== 0) || date % 400 === 0) {
//     return "The year is a leap year.";
//   } else {
//     return "The year is not a leap year.";
//   }
// }

// let year = 2024;
// console.log(leapYear(year));

// function sortedArray(array1, array2) {
//   let sortedArray = array1.concat(array2);

//   return sortedArray.sort((a, b) => a - b);
// }

// let array1 = [1234534254, 535234, 53244525, 643786545];
// let array2 = [3425, 353422, 5224523454235, 3646235252323];
// console.log(sortedArray(array1, array2));

// function romanNumber(num) {
//   let roman = "";
//   let romanNumList = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   for (let key in romanNumList) {
//     let value = romanNumList[key];
//     while (num >= value) {
//       roman += key;
//       num -= value;
//     }
//   }
//   return roman;
// }

// let number = 1234;
// console.log(`The Roman numeral of ${number} is ${romanNumber(number)}.`);

// function secondSmallest(array) {
//   array.sort((a, b) => a - b);
//   return array[1];
// }

// let arrayNumber = [342, 543, 563, 354, 766];
// console.log(
//   `The second smallest number in [${arrayNumber}] is ${secondSmallest(
//     arrayNumber
//   )}.`
// );

// function circleArea(radius) {
//   return Math.PI * radius * radius;
// }

// let radius = 5;
// console.log(
//   `The area of a circle with radius ${radius} is ${circleArea(radius)}.`
// );

// function turncates(sentance, length) {
//   if (sentance.length > length) {
//     return sentance.slice(0, length) + "...";
//   } else {
//     return sentance;
//   }
// }

// let sentance = "Hello, World!";
// let length = 5;
// console.log(turncates(sentance, length));

// function digitsOnly(string) {
//   return /^\d+$/.test(string);
// }

// let str = "123456";
// console.log(digitsOnly(str));

// function arrayFilter(array) {
//   return array.filter(Boolean);
// }

// let array = [0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN, 6];
// console.log(arrayFilter(array));

function uniqueArray(array) {
  return [...new Set(array)];
}

let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(uniqueArray(array));
