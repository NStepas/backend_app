const { bcryptPassword } = require("../common/functions/auth.functions");

class UsersService {
  UserModel = require("../database/schemas/user.schema");

  constructor() {}

  async findUser(email) {
    return await this.UserModel.findOne({ email }).exec();
  }

  async createUser({ email, password }) {
    const userExists = await this.findUser(email);
    if (!userExists) {
      const decryptedPassword = await bcryptPassword(password);
      return await this.UserModel.create({
        email,
        password: decryptedPassword,
      });
    } else {
      return false;
    }
  }
}

module.exports = { UsersService };
