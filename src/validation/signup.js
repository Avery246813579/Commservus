const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateSignupInput (data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isLength(data.firstName, { min: 1, max: 35 })) {
    errors.firstName = 'First name must be between 1 and 35 characters';
  }

  if (!Validator.isLength(data.lastName, { min: 1, max: 35 })) {
    errors.lastName = 'Last name must be between 1 and 35 characters';
  }
  
  if (!Validator.isLength(data.username, { min: 4, max: 16 })) {
    errors.username = 'Username must be between 4 and 16 characters';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name field is required';
  }

  if (Validator.isEmpty(data.lasttName)) {
    errors.lasttName = 'Last name field is required';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 5 })) {
    errors.password = 'Password must be at least 5 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};