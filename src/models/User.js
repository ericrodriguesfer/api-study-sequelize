import { Model, Sequelize } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        email: Sequelize.STRING(100),
        password: Sequelize.STRING(250),
        isadmin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
