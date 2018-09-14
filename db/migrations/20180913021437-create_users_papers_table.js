'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_papers', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },

      // join table no need id

      user_id: {
        type: Sequelize.INTEGER
      },
      paper_id: {
        type: Sequelize.INTEGER
      },
       // Timestamps
       created_at: Sequelize.DATE,
       updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_papers');
  }
};
