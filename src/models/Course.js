import { Model, Sequelize } from "sequelize";

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(30),
        id_teacher: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Teacher, {
      foreignKey: "id_teacher",
      as: "teachers",
    });
  }
}

export default Course;
