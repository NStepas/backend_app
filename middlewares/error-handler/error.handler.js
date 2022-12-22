const errorHandler = async (statusCode, message, res) => {
  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
  });
};

module.exports = {
  errorHandler,
};
