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

// 13. Error Handling with Async/Await
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

// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getData();

// 14. Complex Array Manipulation
// function getHobbies(users) {
//   return users.reduce((acc, curr) => {
//     curr.hobbies.forEach((hobby) => {
//       if (!acc.includes(hobby)) {
//         acc.push(hobby);
//       }
//     });
//     return acc;
//   }, []);
// }

// const users = [
//   { name: "John", hobbies: ["reading", "swimming"] },
//   { name: "Harry", hobbies: ["reading", "painting"] },
//   { name: "Arya", hobbies: ["jogging", "painting"] },
//   { name: "Joseph", hobbies: ["treeking", "gamigd"] },
//   { name: "Anya", hobbies: ["swimming", "painting"] },
// ];

// console.log(getHobbies(users));

// 1. Why are promises used in JavaScript? Explain the advantages of using promises over
// traditional callback functions.

// Promises are used in JavaScript to handle asynchronous operations. They provide a way to
// handle the result of an asynchronous operation once it is completed. Promises have several
// advantages over traditional callback functions:
// • Promises provide a more readable and maintainable code structure compared to
// nested callback functions.
// • Promises allow you to chain multiple asynchronous operations together using
// .then() method, which makes the code more organized and easier to understand.
// • Promises provide a way to handle errors in asynchronous operations using the
// .catch() method, which makes error handling more straightforward.
// • Promises provide a way to handle multiple asynchronous operations simultaneously
// using Promise.all() method, which improves the performance of the application.

// 2. What is a closure in JavaScript? Provide an example.

// A closure is a function that has access to its own scope and the scope of its outer function, even
// after the outer function has finished executing. Closures are created whenever a function is
// defined within another function, and the inner function has access to the variables and
// parameters of the outer function.
// Example:
// function outerFunction() {
// let outerVariable = "I am from outer function";
// function innerFunction() {
// console.log(outerVariable);
// }
// return innerFunction;
// }
// const innerFunc = outerFunction();
// innerFunc(); // Output: I am from outer function

// 3. What is a callback function and why is it used in JavaScript?

// A callback function is a function that is passed as an argument to another function and is executed
// inside the function. Callback functions are used in JavaScript to handle asynchronous operations,
// such as fetching data from a server or reading a file, where the result is not immediately available.
// Callback functions allow you to specify what should happen after an asynchronous operation is
// completed, such as updating the UI with the fetched data or displaying an error message if the
// operation fails. Callback functions are essential for handling asynchronous operations in
// JavaScript.

// 4. What are async/await in JavaScript and how do they improve asynchronous
// programming?

// Async/await is a feature in JavaScript that allows you to write asynchronous code using a
// synchronous style. The async keyword is used to define an asynchronous function, and the await
// keyword is used to pause the execution of the function until a Promise is resolved. Async/await
// improves asynchronous programming in the following ways:
// • Async/await makes asynchronous code easier to read and write compared to using
// nested callbacks or Promise chains.
// • Async/await allows you to handle errors using try/catch blocks, which makes error
// handling more straightforward.
// • Async/await allows you to write asynchronous code that looks like synchronous code,
// which makes it easier to reason about the flow of the program.

// 5. Write the difference between ES6 and JS.

// ES6 (ECMAScript 2015) is the sixth major release of the ECMAScript language specification,
// which is the standard for JavaScript. ES6 introduced several new features and improvements to
// the JavaScript language, such as arrow functions, classes, template literals, let and const
// keywords, and destructuring assignments. ES6 is a significant update to the JavaScript language
// and provides developers with more tools and capabilities to write modern and maintainable code.
// JavaScript, on the other hand, is the programming language that is implemented based on the
// ECMAScript specification. JavaScript is the most widely used language for web development and
// runs on the client-side in web browsers. JavaScript is a high-level, dynamic, and interpreted
// language that is used to create interactive and dynamic web pages.

// 6. What are some of the major features introduced in ES6?

// ES6 (ECMAScript 2015) introduced several new features and improvements to the JavaScript
// language, including:
// • Arrow functions: A more concise syntax for writing functions using the => arrow
// notation.
// • Classes: A new way to define classes and create objects using the class keyword.
// • Template literals: A new way to create strings using backticks (`) and placeholders
// (${variable}).
// • let and const keywords: New ways to declare variables with block scope (let) and
// immutable values (const).
// • Destructuring assignments: A new way to extract values from arrays and objects using
// destructuring syntax.
// • Default parameters: A way to define default values for function parameters.
// • Rest and spread operators: New operators (...) for handling variable numbers of
// arguments in functions and arrays.
// • Promises: A new way to handle asynchronous operations using the Promise object.
// • Modules: A new way to organize and import/export code using the import and export
// keywords.
// • Generators: A new way to create iterators using the function* syntax and the yield
// keyword.
// • Maps and Sets: New data structures for storing key-value pairs (Map) and unique values
// (Set).
// • Symbols: A new primitive data type for creating unique identifiers.
// • Proxy and Reflect: New features for creating and handling proxies for objects.
// • Async/await: A new way to write asynchronous code using a synchronous style.
