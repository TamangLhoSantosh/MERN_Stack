// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let john = new Person("John", 25);
// console.log(john);

// function greet(name, callback) {
//   callback(name);
// }

// function sayName(name) {
//   console.log("Hello " + name);
// }

// greet("John", sayName);

// const promise = new Promise((resolve, reject) => {
//   const sum = 10;
//   if (sum === 10) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise = new Promise((resolve, reject) => {
//   const num1 = 10;
//   const num2 = 9;
//   let sub = 0;
//   if (num1 > num2) {
//     sub = num1 - num2;
//   } else {
//     sub = num2 - num1;
//   }
//   if (sub < 5) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// })
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));
