const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    genre: String
    author: Author
  }

  # Root Type
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

module.exports = typeDefs;
