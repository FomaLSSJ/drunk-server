const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');

const Database = require('../system/database');
const Routes = require('../routes');
const ErrorsMiddleware = require('../middlewares/errors');

/**
 * Create Server instance
 * 
 * @constructor
 * @this {Koa}
 */
class Server extends Koa {
  constructor() {
    super();

    /** @private */
    this.host = process.env.APP_HOST || 'localhost';
    /** @private */
    this.port = process.env.APP_PORT || 3000;

    /** @private */
    this.routes = new Routes();

    this.init();
  }

  /**
   * Initialize Server instance
   * 
   * @this {Koa}
   * @private
   */
  async init() {
    Database.init();
  }

  /**
   * Starting Server instance
   * 
   * @this {Koa}
   * @public
   */
  async start() {
    this
      .use(bodyParser())
      .use(ErrorsMiddleware)
      .use(this.routes.routes())
      .use(this.routes.allowedMethods())
      .use(cors())
      .listen(this.port, this.host);
  }
}

module.exports = Server;