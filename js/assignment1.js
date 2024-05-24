let fullName = "Santosh Tamang";
let age = 21;
console.log("My name is " + fullName + " and I am " + age + " years old.");

let num = 10;
let finalNum = num * num;
console.log(finalNum);

let character = "b";

if (character >= "A" && character <= "Z") {
  console.log("uppercase");
} else if (character >= "a" && character <= "z") {
  console.log("lowercase");
} else {
  console.log("The character is not a letter.");
}

let num1 = 15;
let num2 = 8;

let sum = num1 + num2;
console.log("Sum: " + sum);

let difference = num1 > num2 ? num1 - num2 : num2 - num1;
console.log("Difference: " + difference);

let productPrice = 1500.0;
let discountPercent = 5;
let discount = discountPercent / 100;

let discountedPrice = productPrice * (1 - discount);
console.log("Discounted Price: $" + discountedPrice);
