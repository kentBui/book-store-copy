const authorModel = require("../model/author.model");
const bookModel = require("../model/book.model");

module.exports.bookService = {
  getAllBooks: async (condition) =>
    condition === null
      ? await bookModel.find({})
      : await bookModel.find(condition),
  getBook: async (id) => await bookModel.findById(id),
  createBook: async (newbook) => {
    const book = await bookModel.create(newbook);
    return book;
  },
};

module.exports.authorService = {
  getAllAuthors: async () => await authorModel.find({}),
  getAuthor: async (id) => await authorModel.findById(id),
  createAuthor: async (newAuthor) => {
    const author = await authorModel.create(newAuthor);
    return author;
  },
};
