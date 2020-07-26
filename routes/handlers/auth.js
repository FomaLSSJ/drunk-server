const Handler = require('../handler');
const { PATHS } = require('../../constants');
const CheckMiddleware = require('../../middlewares/check');
const AuthController = require('../../controllers/auth');

class AuthHandler extends Handler {
  constructor() {
    super(PATHS.AUTH.PREFIX);

    this.init();
  }

  async init() {
    this.post(PATHS.AUTH.LOGIN,
      CheckMiddleware.body([ 'email', 'password' ]),
      AuthController.login);
    this.post(PATHS.AUTH.REGISTER,
      CheckMiddleware.body([ 'username', 'email', 'password' ]),
      AuthController.register);
  }
}

module.exports = AuthHandler;