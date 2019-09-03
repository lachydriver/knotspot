const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    //convert empty fields to an empty string
    data.username = !isEmpty(data.username) ? data.username: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";

    //check username exists
    if(Validator.isEmpty(data.username)) {
        errors.username = "Username is required";
    }

    //check email exists
    if(Validator.isEmpty(data.email)){
        errors.email = "An email is required";
    } else if(!Validator.isEmail(data.email)){
        errors.email = "Please enter a valid email";
    }

    //check password exists
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
}