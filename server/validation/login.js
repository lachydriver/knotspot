const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    //convert empty fields
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //check username
    if(Validator.isEmpty(data.username)){
        errors.username = "Enter a Username";
    }

    //check password
    if(Validator.isEmpty(data.password)){
        errors.password = "Enter a Password";
    }

    return {
        errors,
        isValid: isEmpty(errors)
      };
}