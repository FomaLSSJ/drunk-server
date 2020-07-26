const UserModel = require('../models/user');

class Userrepositories extends UserModel {
  static async create(doc) {
    const item = new this(doc);

    return item.save();
  }

  static pagination(params) {
    const items = this.paginate(params);

    return items;
  }
}

module.exports = Userrepositories;