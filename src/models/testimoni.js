"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Testimoni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Testimoni.belongsTo(models.Project, { foreignKey: "projectId" });
    }
  }
  Testimoni.init(
    {
      name: DataTypes.STRING,
      comment: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Testimoni",
    }
  );
  return Testimoni;
};
