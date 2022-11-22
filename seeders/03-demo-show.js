'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('shows', [{
        title : "The boys",
        categoryId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "The simpsons",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Marianne",
        categoryId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Niquelao",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Cat Dog",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Preacher",
        categoryId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Happy",
        categoryId : 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Attack on titan",
        categoryId : 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Vaca y Pollo",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Futurama",
        categoryId : 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
