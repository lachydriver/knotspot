const crypto = require("crypto");

const User = require("../../data");
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// @route forgot password
router.post("/forgotpassword", (req, res) => {
  if (req.body.email === "") {
    return res.status(400).json({ error: "No email entered" });
  }
  email = req.body.email;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ error: "Email not found" });
    } else {
      console.log("email found");
      const token = crypto.randomBytes(20).toString("hex");
      console.log(token);
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 36000;
      console.log(user);
      user.save(function(err) {
        if (err) {
          console.log(err);
        }
      });

      
    }
  });
});

router.get("/reset", (req, res) => {
    console.log(req.query.resetPasswordToken)
  User.findOne({
      resetPasswordToken: req.query.resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now()}
  }).then(user => {
    if (!user) {
      console.log("password reset link invalid");
      res.json("password reset link is invalid or expired");
    } else {
        console.log('valid token')
      res.status(200).send({
        username: user.username,
        message: "token ok"
      });
    }
  });
});

module.exports = router;
