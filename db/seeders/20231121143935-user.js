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
     await queryInterface.bulkInsert('users', [
      {
       nombres: 'Jose Martin',
       apellidos: 'Perez Huaman',
       Tdocumento: 'DNI',
       Ndocumento: '76767676',
       correo: 'admin@gmail.com',
       contrasenia: '123',
       tipo: 'admin',
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
      nombres: 'Maria Martina',
      apellidos: 'Perez Huaman',
      Tdocumento: 'DNI',
      Ndocumento: '76767676',
      correo: 'admin2@gmail.com',
      contrasenia: '123',
      tipo: 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      nombres: 'Steve',
      apellidos: 'barron',
      Tdocumento: 'dni',
      Ndocumento: '71',
      correo: 'steve@gmail.com',
      contrasenia: '123',
      tipo: 'usuario',
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
