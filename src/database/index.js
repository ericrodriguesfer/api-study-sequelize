import { Sequelize } from "sequelize";

import configDatabase from "../config/database.js";
import Course from "../models/Course.js";
import Teacher from "../models/Teacher.js";

const models = [Course, Teacher];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize(configDatabase.development);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );

    try {
      await this.connection.authenticate();
      console.log(
        "[Sequelize] => Connection with database established successfully"
      );
    } catch (error) {
      console.log("[Sequelize] => Connection with database fail");
    }
  }
}

export default new Database();
