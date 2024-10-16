const express = require("express");
const userProfile = require("../controller/userProfileController");
const app = express();

app.post("/userProfile", userProfile);

module.exports = app;
