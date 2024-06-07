function subtract(...number) {
  return number.reduce((sub, num) => sub - num);
}

console.log(subtract(10, 5, 3, 1));
