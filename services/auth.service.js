const { jwtGenerator } = require("../common/functions/auth.functions");

class AuthService {
  async login({ email, id }) {
    return {
      access_token: await jwtGenerator({ email, userId: id }),
    };
  }
}

module.exports = { AuthService };
