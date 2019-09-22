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
      user.resetPasswordExpires = Date.now() + 365*24*60*60000
      console.log(user);
      user.save(function(err) {
        if (err) {
          console.log(err);
        }
      });

       const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`
        }
      });

      const mailOptions = {
        from: `cheepsheep123@gmail.com`,
        to: `${user.email}`,
        subject: "Reset Password Link",
        text: `Your password reset link is: http://localhost:3000/reset/${token}`
      };

      console.log("Sending email");
      console.log(process.env.EMAIL_ADDRESS);

      transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Response: ", response);
          res.status(200).json("recovery email sent");
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
