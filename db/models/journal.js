'use strict'

module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define('journals', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true
    },

    imageUrl: {
      field:"image_url",
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Journal.associate = (models) => {
    Journal.hasMany(models.issues, {as: "issues", foreignKey: "journal_id"});
  };

  return Journal;
};