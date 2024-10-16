// const math = require("./math");

// const addResult = math.add(4, 2);
// console.log(addResult);
// const subtractResult = math.subtract(4, 2);
// console.log(subtractResult);
// const divideResult = math.divide(4, 2);
// console.log(divideResult);
// const multiplyResult = math.multiply(4, 2);
// console.log(multiplyResult);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("Hello World");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("Server is running");
// });

// const express = require("express");
// const connectDB = require("./db.js");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Bob" },
// ];

// app.get("/getUsers", (req, res) => {
//   res.json(users);
// });

// app.get("/getUser/:id", (req, res) => {
//   const id = req.params.id;
//   const id_ = parseInt(id);
//   const user = users.find((user) => user.id === id_);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send("User not found");
//   }
// });

// const userDetail = {
//   name: "Santosh Tamang",
//   age: 20,
//   isStudent: true,
//   hobbies: ["Reading", "Coding", "Playing"],
//   address: {
//     city: "Kathmandu",
//     country: "Nepal",
//     favoriteNumbers: [1, 2, 3, 4, 5],
//   },
// };

// app.get("/getUserDetail", (req, res) => {
//   res.json(userDetail);
// });

// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/test")
//   .then(() => console.log("Connected"));

const express = require("express");
const connectDB = require("./src/config/db");
const userProfileRoutes = require("./src/Routes/userProfileRoutes");
const authRoutes = require("./src/Routes/authUserRoutes");
const profileRoutes = require("./src/Routes/ProfileRoutes");
const categoryRoutes = require("./src/Routes/categoryRoutes");
const productRoutes = require("./src/Routes/productRoutes");
const cors = require("cors");
const app = express();
const port = 8000;
connectDB();
app.use(express.json());
app.use(cors());

app.use("/user", userProfileRoutes);
app.use("/api/auth", authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/profile", profileRoutes);

app.use("/api/category", categoryRoutes);

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
