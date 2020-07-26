const Router = require('@koa/router');
const { PATHS } = require('../constants');

const AuthRouter = require('./handlers/auth');
const UserRouter = require('./handlers/user');
const DrunkHandler = require('./handlers/drunk');

class Routes extends Router {
  constructor() {
    super();

    this.authRouter = new AuthRouter();
    this.userRouter = new UserRouter();
    this.drunkHandler = new DrunkHandler();

    this.init();
  }

  async init() {
    this.prefix(PATHS.PREFIX);

    this.use(this.authRouter.routes());
    this.use(this.authRouter.allowedMethods());

    this.use(this.userRouter.routes());
    this.use(this.userRouter.allowedMethods());

    this.use(this.drunkHandler.routes());
    this.use(this.drunkHandler.allowedMethods());
  }
}

module.exports = Routes;