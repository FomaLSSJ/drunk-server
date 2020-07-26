class DrunkFormatter {
  static create(item) {
    return DrunkFormatter.id(item);
  }

  static id(item) {
    return Object.freeze({
      id: item._id.toString(),
      ownerId: item.ownerId.toString(),
      type: item.type,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    });
  }

  static list({ docs, ...meta }) {
    return Object.freeze({
      data: docs.map((doc) => DrunkFormatter.id(doc)),
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

module.exports = DrunkFormatter;