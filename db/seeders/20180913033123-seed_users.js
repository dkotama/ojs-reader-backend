'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        "id":1,
        "username": "user1",
        "password": "user1" 
      },
      {
        "id":2,
        "username": "user2",
        "password": "user2" 
      },
      {
        "id":3,
        "username": "user3",
        "password": "user3" 
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
