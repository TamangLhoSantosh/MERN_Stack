const express = require("express");
const router = express.Router();
const UserProfile = require("../models/userProfile");

const userProfile = (req, res) => {
  const data = req.body;
  const name = data.name;
  const email = data.email;

  const newUserProfile = new UserProfile({ name, email });
  newUserProfile
    .save()
    .then((data) => {
      res
        .status(201)
        .json({ message: "User Profile Created Successfully", data });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in creating User Profile", err });
    });
};

module.exports = userProfile;
