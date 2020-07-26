const Crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { secretKey, expires } = require('../config');

class Security {
  static hash(input) {
    return Crypto.scryptSync(input, secretKey, 32).toString('hex');
  }

  static sign(data) {
    return jwt.sign(data, secretKey, { expiresIn: expires });
  }

  static decode(token) {
    return jwt.verify(token, secretKey);
  }
}

module.exports = Security;