const { decode } = require('../system/security');
const ErrorUnauthorized = require('../errors/unauthorized');

class AuthMiddleware {
  static async client(ctx, next) {
    const [ , token ] = ctx.get('authorization').split(' ');

    try {
      const user = decode(token);
      ctx.user = user;
    } catch (err) {
      throw new ErrorUnauthorized();
    }

    await next();
  }
}

module.exports = AuthMiddleware;