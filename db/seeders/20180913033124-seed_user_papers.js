'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users_papers', [
      {
        "user_id":1,
        "paper_id":1,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "user_id":1,
        "paper_id":2,
        "created_at": new Date(),
        "updated_at": new Date()
      },
      {
        "user_id":2,
        "paper_id":1,
        "created_at": new Date(),
        "updated_at": new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users_papers', null, {});
  }
};
