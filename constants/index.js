const PATHS = Object.freeze({
  PREFIX: '/api',
  AUTH: {
    PREFIX: '/auth',
    REGISTER: '/register',
    LOGIN: '/login'
  },
  USER: {
    PREFIX: '/users',
    LIST: '/',
    SELF: '/self',
    ID: '/:id'
  },
  DRUNK: {
    PREFIX: '/drunks',
    CREATE: '/',
    LIST: '/',
    ID: '/:id'
  }
});

const DRUNK_TYPES = [
  'EASY',
  'MEDIUM',
  'HARD'
];

const ERROR_STATUSES = Object.freeze({
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406
});

const ERROR_MESSAGES = Object.freeze({
  UNAUTHORIZED: 'Unauthorized',
  NOT_FOUND: 'Not found',
  NOT_ACCEPTABLE: 406
});

module.exports = {
  PATHS,
  DRUNK_TYPES,
  ERROR_STATUSES,
  ERROR_MESSAGES
};