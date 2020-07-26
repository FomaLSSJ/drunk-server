const moment = require('moment');
const { DRUNK_TYPES } = require('../constants');
const DrunkRepositories = require('../repositories/drunk');
const DrunkFormatter = require('../formatters/drunk');
const ErrorNotAcceptable = require('../errors/not-acceptable');
const ErrorNotFound = require('../errors/not-found');

class DrunkController {
  static async create(ctx) {
    const { _id } = ctx.user;
    const { type, date } = ctx.request.body;

    if (!DRUNK_TYPES.includes(type)) {
      throw new ErrorNotAcceptable(`Drunk types not allowed: ${ type }, allowed types is: ${ DRUNK_TYPES.join(', ') }`);
    }

    const drunk = await DrunkRepositories.create({
      ownerId: _id,
      type,
      createdAt: moment(date)
    });

    ctx.status = 200;
    ctx.body = DrunkFormatter.create(drunk);
  }

  static async id(ctx) {
    const { id } = ctx.params;

    const user = await DrunkRepositories.findById(id);

    if (!user) {
      throw new ErrorNotFound();
    }

    ctx.status = 200;
    ctx.body = DrunkFormatter.id(user);
  }

  static async list(ctx) {
    const { query } = ctx;

    const users = await DrunkRepositories.pagination(query);

    ctx.status = 200;
    ctx.body = DrunkFormatter.list(users);
  }
}

module.exports = DrunkController;