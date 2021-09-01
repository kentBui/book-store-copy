const { books } = require("../dummydata/books");

const resolver = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === args.id * 1),
  },
};

module.exports = resolver;
