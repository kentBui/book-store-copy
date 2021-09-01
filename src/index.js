require("dotenv").config();
const express = require("express");
const cors = require("cors");
const defs = require("./schema");
const resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const { bookService, authorService } = require("./service");

(async function () {
  try {
    mongoose.connect(process.env.MONGO_URI, { autoIndex: true }, () => {
      console.log("Connect to database");
    });
  } catch (error) {
    console.log(error);
  }
})();

(async function () {
  const server = new ApolloServer({
    typeDefs: defs,
    resolvers: resolvers,
    context: () => ({ bookService, authorService }), // create context for all query
  });

  await server.start();

  const app = express();
  app.use(
    cors({
      origin: "*",
    })
  );

  server.applyMiddleware({ app, cors: false });

  app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "Something here",
    });
  });

  const PORT = process.env.PORT || 3002;

  app.listen(PORT, () => {
    console.log(
      `Listenning server on port: ${PORT}; Apollo server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
