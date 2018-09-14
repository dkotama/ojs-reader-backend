'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  });

  User.associate = (models) => {
    User.belongsToMany(models.papers, {
      as: "Favorites", 
      through: models.users_papers,
      foreignKey: "user_id",
      otherKey: "paper_id",
    });
  };

  return User;
};