const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../data");

// @route /api/users/register

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    //check validation
    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne( {username: req.body.username}).then(user => {
        
        //check if user exists, if not then set the User with the relevant details
        if(user){
            return res.status(400).json({ username: "Username already exists"})
        } else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            })

            //hash the password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => res.json(user)).catch(err => console.log(err));
                })
        })
        }


    })
});

// @route /api/users/login


router.post("/login", (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    };

    const username = req.body.username;
    const password = req.body.password;

    //find username in database
    User.findOne({username}).then(user => {
        //check if exists
        if(!user){
            return res.status(404).json({usernamenotfound: "Username not found"});
        }

        //check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch) {
                //user matched
                //make JWT payload
                const payload = {
                    id: user.id,
                    username: user.username
                }

                //sign the token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {         
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err,token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res.status(400).json({passwordincorrect: "Incorrect password"});
            }
        });
        
    })
});

module.exports = router;