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

  // League.associate = (models) => {
  //   League.hasMany(models.Match);
  // };

  return Journal;
};