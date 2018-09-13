'use strict'

module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define('papers', {
    title: {
      type: DataTypes.STRING,
    },

    authors: {
      type: DataTypes.STRING,
    },

    abstract: {
      type: DataTypes.STRING,
    },

    page: {
      type: DataTypes.STRING,
    },

    url: {
      type: DataTypes.STRING,
    }
  });

  Paper.associate = (models) => {
    Paper.belongsTo(models.issues, {foreignKey: "issue_id"});
  };

  return Paper;
};