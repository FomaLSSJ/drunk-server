const Handler = require('../handler');
const { PATHS } = require('../../constants');
const AuthMiddleware = require('../../middlewares/auth');
const CheckMiddleware = require('../../middlewares/check');
const DrunkController = require('../../controllers/drunk');

class DrunkHandler extends Handler {
  constructor() {
    super(PATHS.DRUNK.PREFIX);

    this.init();
  }

  async init() {
    this.post(PATHS.DRUNK.CREATE,
      AuthMiddleware.client,
      CheckMiddleware.body([ 'type' ]),
      DrunkController.create);
    this.get(PATHS.DRUNK.LIST, AuthMiddleware.client, DrunkController.list);
    this.get(PATHS.DRUNK.ID,
      AuthMiddleware.client,
      CheckMiddleware.params([ 'id' ]),
      DrunkController.id);
  }
}

module.exports = DrunkHandler;