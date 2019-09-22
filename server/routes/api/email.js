const crypto = require('crypto');

const User = require("../../data");
const express = require("express");
const router = express.Router();

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
                console.log(err);
            });
        }
    })
});

module.exports = router;