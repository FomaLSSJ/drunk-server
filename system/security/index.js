const Crypto = require('crypto');
const { secretKey } = require('../config');

class Security {
  static hash(input) {
    return Crypto.scryptSync(input, secretKey, 32).toString('hex');
  }
}

module.exports = Security;