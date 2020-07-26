const Handler = require('../handler');
const { PATHS } = require('../../constants');
const AuthMiddleware = require('../../middlewares/auth');
const CheckMiddleware = require('../../middlewares/check');
const UserController = require('../../controllers/user');

class UserHandler extends Handler {
  constructor() {
    super(PATHS.USER.PREFIX);

    this.init();
  }

  async init() {
    this.get(PATHS.USER.LIST, AuthMiddleware.client, UserController.list);
    this.get(PATHS.USER.SELF, AuthMiddleware.client, UserController.self);
    this.get(PATHS.USER.ID,
      AuthMiddleware.client,
      CheckMiddleware.params([ 'id' ]),
      UserController.id);
  }
}

module.exports = UserHandler;