'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('issues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      volume: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      published_date: {
        type: Sequelize.DATEONLY
      },
      start_month: {
        type: Sequelize.STRING
      },
      end_month: {
        type: Sequelize.STRING
      },
      journal_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'journals',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('issues');
  }
};
