'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Contactos', [{
      nombre: 'John Doe',
      email: 'tes@mail',
      asunto: 'Importante',
      mensaje: 'Site',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      nombre: 'Maria Ruiz',
      email: 'tes@mail',
      asunto: 'importante',
      mensaje: 'Site',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
