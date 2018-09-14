'use strict'

module.exports = (sequelize, DataTypes) => {
  const UserPaper = sequelize.define('users_papers', {
    user_id: {
      type: DataTypes.INTEGER,
    },

    paper_id: {
      type: DataTypes.INTEGER,
    },

    createdAt: {
      field: "created_at",
      type: DataTypes.DATE
    },

    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE
    }
  });

  return UserPaper;
};