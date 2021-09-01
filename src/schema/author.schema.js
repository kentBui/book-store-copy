const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    genre: String
    age: Int
  }

  # Root Type
  type Query {
    authors: [Author]
    author(id: ID!): Author
  }
`;

module.exports = typeDefs;
