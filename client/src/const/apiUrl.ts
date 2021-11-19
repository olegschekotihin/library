const {
  REACT_APP_API_URL
} = process.env;

export const URL = {
  USERS: {
    AUTH: `${REACT_APP_API_URL}/auth`,
    USER: `${REACT_APP_API_URL}/users`,
    AUTO_LOGIN: `${REACT_APP_API_URL}/users/profile`,
  },
  BOOKS: {
    CREATE: `${process.env.REACT_APP_API_URL}/books`,
  },
  AUTHORS: {
    CREATE: `${process.env.REACT_APP_API_URL}/authors`,
  },
};
