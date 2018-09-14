'use strict'

module.exports = (sequelize, DataTypes) => {
  const Issue = sequelize.define('issues', {
    volume: { 
      type: DataTypes.INTEGER,
      allowNull: false
    },

    number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },

    startMonth: {
      field:"start_month",
      type: DataTypes.STRING,
      allowNull: true
    },

    endMonth: {
      field:"end_month",
      type: DataTypes.STRING,
      allowNull: true
    },

    publishedDate: {
      field:"published_date",
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    defaultScope: {
      attributes: { exclude: ["createdAt", "updatedAt"] }
    }
  });

  Issue.associate = (models) => {
    Issue.hasMany(models.papers, {as: "papers", foreignKey: "issue_id"});
    Issue.belongsTo(models.journals, {foreignKey: "journal_id"});
  };

  return Issue;
};