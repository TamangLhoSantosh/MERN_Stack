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

// function doubleArray(array) {
//   return array.map((number) => number * 2);
// }

// console.log(doubleArray([1, 2, 3, 4, 5]));

// function filterArray(array) {
//   return array.filter((number) => number < 10);
// }

// console.log(filterArray([1, 2, 3, 4, 5, 10, 20, 30]));
