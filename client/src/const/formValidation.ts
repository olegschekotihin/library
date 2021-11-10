export const VALIDATION_ERROR = {
  INVALID_EMAIL: 'Email is invalid',
  WRONG_PASSWORD: 'Password must have more than 3 characters and less than 20',
  REQUIRED_FIELD: 'This field is required',
};

export const REGEXP = {
  EMAIL: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};
