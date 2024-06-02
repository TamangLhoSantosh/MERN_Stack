function fetchData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { id: 1, name: "John", age: 40 },
        { id: 2, name: "Harry", age: 65 },
        { id: 3, name: "Arya", age: 56 },
      ];
      resolve(data);
    }, 2000);
  });
  return promise;
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();

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
