export const VALIDATION_ERROR = {
  INVALID_EMAIL: 'Email is invalid',
  WRONG_PASSWORD: 'Password must have more than 3 characters and less than 20',
  REQUIRED_FIELD: 'This field is required',
};

export const REGEXP = {
  EMAIL_REGEXP: new RegExp('/^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/'),
};
