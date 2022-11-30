'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: 'admin',
          password: '4321',
          email: 'admin@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user1',
          password: '1122',
          email: 'user1@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'user2',
          password: '2211',
          email: 'user2@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  }
};
