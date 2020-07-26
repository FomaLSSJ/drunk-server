const DrunkModel = require('../models/drunk');

class Drunkrepositories extends DrunkModel {
  static async create(doc) {
    const item = new this(doc);

    return item.save();
  }

  static pagination(params) {
    const items = this.paginate(params);

    return items;
  }
}

module.exports = Drunkrepositories;