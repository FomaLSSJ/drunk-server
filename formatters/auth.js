class AuthFormatter {
  static login(token) {
    return Object.freeze({
      type: 'Bearer',
      token: token
    });
  }

  static register(item) {
    return Object.freeze({
      username: item.username,
      email: item.email,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    });
  }
}

module.exports = AuthFormatter;