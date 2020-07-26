const jwt = require('jsonwebtoken');
const { secretKey, expires } = require('../system/config');

class JWT {
  static sign(data) {
    return jwt.sign(data, secretKey, { expiresIn: expires });
  }

  static decode(token) {
    return jwt.verify(token, secretKey);
  }
}

module.exports = JWT;