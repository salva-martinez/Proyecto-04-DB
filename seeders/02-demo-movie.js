'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [{
        title : "Fight Club",
        categoryId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Shin chan: Las bolas magicas",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Hesher",
        categoryId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The dark knght",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Sharknado 3",
        categoryId : 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Cloverfield",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "28 Days Later",
        categoryId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The mummy",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Pokemon 3",
        categoryId : 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Hereditary",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
