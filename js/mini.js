// 1. Promise
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = [
//         { id: 1, name: "John", age: 40 },
//         { id: 2, name: "Harry", age: 65 },
//         { id: 3, name: "Arya", age: 56 },
//       ];
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData().then((data) => {
//   console.log(data);
// });

// 2. Closure
// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount());

// 3. Callback
// function processData(array, callback) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(callback(array[i]));
//   }
//   return newArray;
// }

// function double(num) {
//   return num * 2;
// }

// console.log(processData([1, 2, 3, 4], double));

// 4. Async/Await
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const data = [
//         { id: 1, name: "John", age: 40 },
//         { id: 2, name: "Harry", age: 65 },
//         { id: 3, name: "Arya", age: 56 },
//       ];
//       resolve(data);
//     }, 2000);
//   });
// }

// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }

// getData();

// 5. Map
// function doubleArray(array) {
//   return array.map((number) => number * 2);
// }

// console.log(doubleArray([1, 2, 3, 4, 5]));

// 6. Filter
// function filterArray(array) {
//   return array.filter((number) => number < 10);
// }

// console.log(filterArray([1, 2, 3, 4, 5, 10, 20, 30]));

// 7.Find
// function findNumber(array) {
//   return array.find((number) => number > 15);
// }

// console.log(findNumber([1, 2, 3, 4, 5, 10, 20, 30]));

// 8. Reduce
// function sumArray(array) {
//   return array.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// 9. Object Manipulation
// function transform(array) {
//   return array.reduce((acc, curr) => {
//     acc[curr.id] = curr;
//     return acc;
//   }, {});
// }

// const users = [
//   { id: 1, name: "John", age: 40 },
//   { id: 2, name: "Harry", age: 65 },
//   { id: 3, name: "Arya", age: 56 },
// ];

// console.log(transform(users));

// 10. Classes and Objects
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     return `${this.name}, ${this.age} years old`;
//   }
// }

// const person = new Person("John", 40);
// console.log(person.describe());

// 11. Inheritance
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }

//   study() {
//     return `${this.name} is ${this.age} years old and is studying at ${this.name} grade`;
//   }
// }

// const student = new Student("Harry", 15, 10);
// console.log(student.study());

// 12. Error Handling with Promises
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         const data = [
//           { id: 1, name: "John", age: 40 },
//           { id: 2, name: "Harry", age: 65 },
//           { id: 3, name: "Arya", age: 56 },
//         ];
//         resolve(data);
//       } else {
//         reject("Failed to fetch data");
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
