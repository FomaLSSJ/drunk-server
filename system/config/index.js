const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV || 'development',
  secretKey: process.env.SECRET_KEY || 'JohnWoo',
  expires: process.env.JWT_EXPIRES || '7d'
};