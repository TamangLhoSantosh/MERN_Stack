// for (let i =1; i <= 10; i++) {
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

let numArray = ["1", 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numArray.length; i++) {
  sum = sum + parseInt(numArray[i]);
}
console.log(sum);
