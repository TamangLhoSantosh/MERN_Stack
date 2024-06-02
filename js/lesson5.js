// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data Fetched!");
//     }, 1000);
//   });
// }

// async function getData() {
//   const data = await fetchData();
//   console.log(data);
// }

// getData();

// const numArray = [1, 2, 3, 4, 5];

// let find = numArray.find((num) => num > 3);
// console.log(find);

// const filteredNumArray = numArray.filter((num) => num > 3);
// console.log(filteredNumArray);

// const squareNumArray = numArray.map((num) => num * num);
// console.log(squareNumArray);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const first = arr[0];
const rest = arr.slice(1);

console.log(`First Elemet ${first}`);
console.log(`The rest of the elements ${rest}`);

const [a, ...restOfArr] = arr;
console.log(`First Elemet ${a}`);
console.log(`The rest of the elements ${restOfArr}`);
