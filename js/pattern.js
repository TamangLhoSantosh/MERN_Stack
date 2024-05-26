// let str = "*";
// for (let i = 0; i < 5; i++) {
//   console.log(str);
//   str += "*";
// }

// for (let i = 0; i < 5; i++) {
//   let str = "*";
//   for (let j = 0; j < 5; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// let str = "*";
// for (let i = 5; i > 0; i--) {
//   let line = "";
//   for (let j = i; j > 0; j--) {
//     line += str;
//   }
//   console.log(line);
// }

// let str = "*";
// let space = 4;
// for (i = 0; i < 5; i++) {
//   let line = "";
//   for (j = 0; j < space; j++) {
//     line += " ";
//   }
//   console.log(line + str);
//   str += "**";
//   space -= 1;
// }

// let space = "";
// for (let i = 5; i > 0; i--) {
//   let str = "*";
//   for (let j = i - 1; j > 0; j--) {
//     str += "**";
//   }
//   console.log(space + str);
//   space += " ";
// }

// const height = 5;
// const width = 7;
// for (let i = 0; i < height; i++) {
//   let str = "";
//   for (let j = 0; j < width; j++) {
//     if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// const height = 5;
// const width = 5;
// for (let i = 0; i < height; i++) {
//   let str = "";
//   for (let j = 0; j < width; j++) {
//     if (j === i || j === width - 1 - i) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += i;
//   }
//   console.log(line);
// }

// for (let i = 5; i > 0; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j;
//   }
//   console.log(line);
// }

// for (let i = 1; i <= 5; i++) {
//   let line = "";
//   for (let j = 5; j >= 1; j--) {
//     line += j;
//   }
//   console.log(line);
// }

// let str = "*";
// let space = 4;
// for (let i = 1; i <= 5; i++) {
//   let gap = "";
//   for (let j = 0; j < space; j++) {
//     gap += " ";
//   }
//   console.log(gap + str);
//   str += "*";
//   space -= 1;
// }

// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += alphabet[j];
//   }
//   console.log(str);
// }
