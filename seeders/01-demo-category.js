'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{
        type: 'zombies',
        age: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'horror',
        age: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'action',
        age: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'fantasy',
        age: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'mystery',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'romance',
        age: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'thriller',
        age: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'comedy',
        age: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('categories', null, {});
     
  }
};
