const errorHandler = (req, res, next) => {
    // Add authentication logic here
    next();
  };
  
  module.exports = errorHandler;
  