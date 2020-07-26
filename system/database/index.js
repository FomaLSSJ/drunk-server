const mongoose = require('mongoose');

class Database {
  static init() {
    mongoose.connect(`mongodb://localhost:27017/drunk`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    mongoose.connection.once('open', () => console.log('Connected to database!'));
  }
}

module.exports = Database;