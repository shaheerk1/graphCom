const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const createApolloServer = () => {
  return new ApolloServer({ typeDefs, resolvers });
};

module.exports = createApolloServer;
