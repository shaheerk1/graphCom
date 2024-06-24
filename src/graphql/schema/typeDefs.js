const { gql } = require('apollo-server-express');

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(username: String!, password: String!): String
  }
`;

const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    getAllProducts: [Product]
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product
  }
`;

module.exports = [userTypeDefs, productTypeDefs];
