const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const sequelize = require("./db");
const expressPlayground = require("graphql-playground-middleware-express").default;

require("dotenv").config();

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

  await server.start();
  server.applyMiddleware({ app }); // ini pakai route "/graphql"

  // PENTING! Jangan bentrok, bikin playground di route lain:
  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  // Test DB
  try {
    await sequelize.authenticate();
    console.log("✅ DB connected!");
    await sequelize.sync(); // Auto-create tables if needed
  } catch (err) {
    console.error("❌ DB error:", err);
  }

  app.listen({ port: 8002 }, () => console.log(`🚀 Server ready at http://localhost:8002${server.graphqlPath}`));
}

startServer();
