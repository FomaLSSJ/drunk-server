const UserRepositories = require('../repositories/user');
const UserFormatter = require('../formatters/user');
const ErrorNotFound = require('../errors/not-found');

class UserController {
  static async self(ctx) {
    const { user } = ctx;

    ctx.status = 200;
    ctx.body = UserFormatter.self(user);
  }

  static async id(ctx) {
    const { id } = ctx.params;

    const user = await UserRepositories.findById(id);

    if (!user) {
      throw new ErrorNotFound();
    }

    ctx.status = 200;
    ctx.body = UserFormatter.id(user);
  }

  static async list(ctx) {
    const { query } = ctx;

    const users = await UserRepositories.pagination(query);

    ctx.status = 200;
    ctx.body = UserFormatter.list(users);
  }
}

module.exports = UserController;