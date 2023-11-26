'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('listareservas', [
      {
        libro: 'Cien años de soledad',
        Ndocumento: '77777777',
        nombres: 'Jose Martin',
        apellidos: 'Perez Huaman',
        fechareserva: '11/12/2023',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: '1984',
        Ndocumento: '76767676',
        nombres: 'Maria Martina',
        apellidos: 'Perez Huaman',
        fechareserva: '09/09/2023',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: '1984',
        Ndocumento: '77777777',
        nombres: 'Jose Martin',
        apellidos: 'Perez Huaman',
        fechareserva: '08/31/2023',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: 'El Gran Gatsby',
        Ndocumento: '76767676',
        nombres: 'Maria Martina',
        apellidos: 'Perez Huaman',
        fechareserva: '10/23/2023',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: '1984',
        Ndocumento: '77777777',
        nombres: 'Jose Martin',
        apellidos: 'Perez Huaman',
        fechareserva: '11/2/2022',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: 'El Gran Gatsby',
        Ndocumento: '76767676',
        nombres: 'Maria Martina',
        apellidos: 'Perez Huaman',
        fechareserva: '08/12/2023',
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        libro: 'Cien años de soledad',
        Ndocumento: '77777777',
        nombres: 'Jose Martin',
        apellidos: 'Perez Huaman',
        fechareserva: '08/12/2023',
        createdAt : new Date(),
        updatedAt : new Date()
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
