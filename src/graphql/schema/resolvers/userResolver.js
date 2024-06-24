const { User } = require('../../../models');
const userService = require('../../../services/userService');

const userResolver = {
  Query: {
    getAllUsers: async () => {
      return userService.getAllUsers();
    },
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      return userService.register({ username, email, password });
    },
    login: async (_, { username, password }) => {
      return userService.login({ username, password });
    },
  },
};

module.exports = userResolver;
