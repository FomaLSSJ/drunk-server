class UserFormatter {
  static self(item) {
    return UserFormatter.id(item);
  }

  static id(item) {
    return Object.freeze({
      id: item._id.toString(),
      username: item.username,
      email: item.email,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    });
  }

  static list({ docs, ...meta }) {
    return Object.freeze({
      data: docs.map((doc) => UserFormatter.self(doc)),
      meta: {
        total: meta.totalDocs,
        limit: meta.limit,
        offset: meta.offset,
        pages: meta.totalPages,
        page: meta.page,
        counter: meta.pagingCounter
      }
    });
  }
}

module.exports = UserFormatter;