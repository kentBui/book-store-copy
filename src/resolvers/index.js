const { authors } = require("../dummydata/authors");
const { books } = require("../dummydata/books");
const Author = require("../model/author.model");
const Book = require("../model/book.model");

const resolver = {
  // query
  Query: {
    /*
     * 1. parent: ket qua cua query cha truyen xuong
     * 2. args: params truyen vao
     * 3. context: context cua Apollo server
     */
    books: async (parent, args, context) =>
      await context.bookService.getAllBooks(),
    book: async (parent, args, context) =>
      await context.bookService.getBook(args.id),
    // args = {} param truyen vao
    authors: async (parent, args, context) =>
      await context.authorService.getAllAuthors(),
    author: async (parent, args, context) =>
      await context.authorService.getAuthor(args.id),
  },

  // depend schema
  Book: {
    // parent === ket qua cua query cha
    author: async (parent, args, context) =>
      await context.authorService.getAuthor(parent.authorId),
  },
  // depend schema
  Author: {
    books: async (parent, args, context) =>
      await context.bookService.getAllBooks({ authorId: parent.id }),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, context) =>
      await context.authorService.createAuthor(args),
    createBook: async (parent, args, context) =>
      await context.bookService.createBook(args),
  },
};

module.exports = resolver;
