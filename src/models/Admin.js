import { Model, Sequelize } from "sequelize";

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        email: Sequelize.STRING(100),
        password: Sequelize.STRING(250),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Admin;
