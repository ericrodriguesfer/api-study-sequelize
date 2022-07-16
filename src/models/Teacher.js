import { Model, Sequelize } from "sequelize";

class Teacher extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.Course, {
      foreignKey: "id",
      as: "teachers",
    });
  }
}

export default Teacher;
