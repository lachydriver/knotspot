const crypto = require('crypto');

const User = require("../../data");
const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// @route forgot password
router.post("/forgotpassword", (req, res) => {
    if (req.body.email === '') {
        res.json('email required')
    }
    email = req.body.email;

    User.findOne({email}).then(user => {
        if(!user){
            res.json('email not found in database');
        } else {
            console.log("email found");
            const token = crypto.randomBytes(20).toString('hex');
            console.log(token);
            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 36000;
            console.log(user);
            user.save(function(err) {
                if(err){
                    console.log(err);
                }
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${process.env.EMAIL_ADDRESS}`,
                    pass: `${process.env.EMAIL_PASSWORD}`
                },
            });

            const mailOptions = {
                from: `lachydriver@gmail.com`,
                to: `${user.email}`,
                subject: 'Reset Password Link',
                text:
                `Your password reset link is: http://localhost:3000/reset/${token}`
            };

            console.log("Sending email");

            transporter.sendMail(mailOptions, function(err, response) {
                if(err) {
                    console.log("Error", err)
                } else {
                    console.log("Response: ", response);
                    res.status(200).json('recovery email sent');
                };
            })
        };
    });
});

module.exports = router;