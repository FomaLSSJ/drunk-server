const ErrorNotAcceptable = require('../errors/not-acceptable');

const validator = async (next, data, keys, type) => {
  const requires = [];

  keys.forEach((key) => {
    if (!Object.hasOwnProperty.call(data, key)) {
      requires.push(key);
    }
  });

  if (requires.length) {
    throw new ErrorNotAcceptable(`The fields are required in ${ type } object: ${ requires.join(', ') }.`);
  }

  return next();
};

class CheckMiddleware {
  static query(keys) {
    return async (ctx, next) => {
      const { query } = ctx;

      return validator(next, query, keys, 'query');
    }
  }

  static body(keys) {
    return async (ctx, next) => {
      const { body } = ctx.request;

      return validator(next, body, keys, 'body');
    }
  }

  static params(keys) {
    return async (ctx, next) => {
      const { params } = ctx;

      return validator(next, params, keys, params);
    }
  }
}

module.exports = CheckMiddleware;