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
            User.update({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 360000,
            })
        }
    })
});

module.exports = router;