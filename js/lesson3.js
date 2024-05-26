// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i >= 5 && i <= 7) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   if (++i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 1;
// do {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
//   i++;
// } while (i < 10);

// let i = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let num = 5;
// let factorial = 1;
// while (num > 0) {
//   factorial = factorial * num;
//   num--;
//   console.log(factorial);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i ** 2);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i ** 3);
//   i++;
// }

// let nameArray = ["John", "Jane", "James", "Judy", "Jack"];
// for (let i = 0; i < nameArray.length; i++) {
//   console.log(nameArray[i]);
// }

// let numArray = ["1", 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numArray.length; i++) {
//   sum = sum + parseInt(numArray[i]);
// }
// console.log(sum);

// let arr = ["sad", "mad", "bad", "dad", "lad"];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// let numArray = [43, 64, 32, 56, 90, 78, 23, 45, 67, 89];
// let i = 0;
// let largest = numArray[0];
// while (i <= numArray.length) {
//   if (numArray[i] > largest) {
//     largest = numArray[i];
//   }
//   i++;
// }
// console.log(largest);

// let sum = 0;
// for (let i = 2; i <= 20; i += 2) {
//   sum = sum + i;
// }
// console.log(sum);

// let product = 1;
// let i = 1;
// while (i <= 15) {
//   product = product * i;
//   i += 2;
//   console.log(product);
// }

// let i = "*";
// for (let j = 1; j <= 5; j++) {
//   console.log(i);
//   i = i + "*";
// }

// let num = 10;
// while (num > 0) {
//   console.log(num);
//   num--;
// }

// let num = 432;
// let sum = 0;
// while (num > 0) {
//   sum = sum + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// for (let i = 5; i > 0; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += i;
//   }
//   console.log(line);
// }

// let a = 0;
// let b = 1;
// let i = 1;
// while (i <= 10) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
//   i++;
// }

// let num = 3245;
// let reverse = 0;
// while (num > 0) {
//   reverse = reverse * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }
// console.log(reverse);
