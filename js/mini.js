// function fetchData() {
//   let promise = new Promise((resolve) => {
//     setTimeout(() => {
//       const data = [
//         { id: 1, name: "John", age: 40 },
//         { id: 2, name: "Harry", age: 65 },
//         { id: 3, name: "Arya", age: 56 },
//       ];
//       resolve(data);
//     }, 2000);
//   });
//   return promise;
// }

// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }

// getData();

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

function processData(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

function double(num) {
  return num * 2;
}

console.log(processData([1, 2, 3, 4], double));
