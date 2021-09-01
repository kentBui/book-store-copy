const { authors } = require("../dummydata/authors");

const resolver = {
  Query: {
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id === 1 * args.id),
  },
};

module.exports = resolver;
