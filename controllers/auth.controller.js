const { comparePassword } = require("../common/functions/auth.functions");
const { errorHandler } = require("../middlewares/error-handler/error.handler");
const { AUTH_ERRORS } = require("../common/enums/errors.enum");
const { SERVER_ERROR } = require("../common/enums/errors.enum");
const { UsersService } = require("../services/user.service");
const { AuthService } = require("../services/auth.service");

const usersService = new UsersService();
const authService = new AuthService();

const signUp = async (req, res, next) => {
  const createdUser = await usersService.createUser(req.body);
  if (createdUser) {
    const accessToken = await authService.login(createdUser);
    if (!accessToken) {
      return await errorHandler(403, AUTH_ERRORS.TOKEN_NOT_CREATED, res);
    }
    return res.status(200).json(accessToken);
  }
  return await errorHandler(
    401,
    SERVER_ERROR.THE_USER_IS_ALREADY_REGISTERED,
    res
  );
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await usersService.findUser(email);
  if (!user) {
    return await errorHandler(403, AUTH_ERRORS.NOT_FOUND_USER, res);
  }
  if (!(await comparePassword(password, user.password))) {
    return await errorHandler(401, AUTH_ERRORS.WRONG_AUTH_DATA, res);
  }

  const accessToken = await authService.login(user);
  if (!accessToken) {
    return await errorHandler(403, AUTH_ERRORS.TOKEN_NOT_CREATED, res);
  }
  return res.status(200).json(accessToken);
};

const logout = async (req, res, next) => {
  return res.status(201).json({
    message: true,
  });
};

module.exports = {
  signUp,
  login,
  logout,
};
