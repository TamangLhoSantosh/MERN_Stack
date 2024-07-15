const title = document.getElementById("title");
console.log(title.textContent);

const content = document.getElementsByClassName("content");
console.log(content[0].textContent);

const listItem = document.getElementsByTagName("li");
console.log(listItem.length);

const paragraph = document.querySelector(".content");
paragraph.innerHTML = "This is <strong>modified</strong> paragraph.";

const inputElement = document.getElementById("myinput");
console.log(inputElement.type);
console.log(inputElement.value);
inputElement.value = "New value";
console.log(inputElement.value);

// var elment = document.getElementById("div");
// if (elment.hasAttribute("class")) {
//   elment.style.backgroundColor = "red";
//   elment.style.color = "white";
// } else {
//   console.log("Element not found");
// }

const newElement = document.createElement("div");
newElement.textContent = "New Element";

const bodyElement = document.body;
bodyElement.appendChild(newElement);
