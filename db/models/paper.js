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
  }, {
    timestamps: false
  });

  Paper.associate = (models) => {
    Paper.belongsTo(models.issues, {foreignKey: "issue_id"});
    Paper.belongsToMany(models.users, {
      as: "Followers", 
      through: models.users_papers,
      foreignKey: "paper_id",
      otherKey: "user_id"
    });
  };

  return Paper;
};