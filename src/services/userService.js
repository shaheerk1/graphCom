const { User } = require('../models');

const register = async ({ username, email, password }) => {
  const newUser = new User({ username, email, password });
  await newUser.save();
  return newUser;
};

const login = async ({ username, password }) => {
  const user = await User.findOne({ username, password });
  if (!user) throw new Error('Invalid credentials');
  return 'token'; // Simplified token response for demonstration
};

const getAllUsers = async () => {
  return User.find();
};

module.exports = {
  register,
  login,
  getAllUsers,
};
