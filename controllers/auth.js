const { hash } = require('../system/security');
const { sign } = require('../system/security');
const UserRepositories = require('../repositories/user');
const AuthFormatter = require('../formatters/auth');
const ErrorNotFound = require('../errors/not-found');

class AuthController {
  static async login(ctx) {
    const { email, password } = ctx.request.body;

    const user = await UserRepositories.findOne({
      email,
      passhash: hash(password)
    });

    if (!user) {
      throw new ErrorNotFound();
    }

    ctx.status = 200;
    ctx.body = AuthFormatter.login(sign(user.toJSON()));
  }

  static async register(ctx) {
    const { username, email, password } = ctx.request.body;

    const user = await UserRepositories.create({
      username, email,
      passhash: hash(password)
    });

    ctx.status = 200;
    ctx.body = AuthFormatter.register(user, sign(user.toJSON()));
  }
}

module.exports = AuthController;