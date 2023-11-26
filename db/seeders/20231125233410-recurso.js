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
    await queryInterface.bulkInsert('recursos', [
      {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        isbn: '978-0307474728',
        serie: 'Realismo mágico',
        img: 'https://www.penguinlibros.com/pe/1682622/cien-anos-de-soledad-edicion-ilustrada.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: '1984',
        autor: 'George Orwell',
        isbn: '978-0451524935',
        serie: 'Distopía',
        img: 'https://www.penguinlibros.com/pe/1680864-large_default/1984-edicion-definitiva-avalada-por-the-orwell-estate.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El Gran Gatsby',
        autor: 'F. Scott Fitzgerald',
        isbn: '978-0743273565',
        serie: 'Clásicos',
        img: 'https://www.penguinlibros.com/pe/1680991/el-gran-gatsby.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Matar a un ruiseñor',
        autor: 'Harper Lee',
        isbn: '978-0061120084',
        serie: 'Ficción clásica',
        img: 'https://www.penguinlibros.com/es/1535579-large_default/matar-un-ruisenor-la-novela-grafica.webp',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        isbn: '978-8424118257',
        serie: 'Clásicos españoles',
        img: 'https://www.penguinlibros.com/pe/1664817/don-quijote-de-la-mancha.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Crimen y castigo',
        autor: 'Fyodor Dostoevsky',
        isbn: '978-0486415871',
        serie: 'Novela clásica',
        img: 'https://www.penguinlibros.com/pe/2643849-home_default/crimen-y-castigo.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        isbn: '978-0141439518',
        serie: 'Romance clásico',
        img: 'https://www.penguinlibros.com/co/288462/orgullo-y-prejuicio.jpg',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Los pilares de la Tierra',
        autor: 'Ken Follett',
        isbn: '978-0451225245',
        serie: 'Histórica',
        img: 'https://www.penguinlibros.com/es/1508030-large_default/los-pilares-de-la-tierra-saga-los-pilares-de-la-tierra-1.webp',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'La sombra del viento',
        autor: 'Carlos Ruiz Zafón',
        isbn: '978-0143034902',
        serie: 'Misterio',
        img: 'https://www.librerialuces.com/es/imagenes/9788408/978840824067.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Crónica de una muerte anunciada',
        autor: 'Gabriel García Márquez',
        isbn: '978-1400034956',
        serie: 'Realismo mágico',
        img: 'https://www.penguinlibros.com/es/2724596-large_default/cronica-de-una-muerte-anunciada.webp',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Biografía del Silencio',
        autor: 'Pablo D´Ors',
        isbn: '978-8490735720',
        serie: 'Ensayo sobre meditación',
        img: 'https://www.librerialuces.com/es/imagenes/9788417/978841797171.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El Silencio Habla',
        autor: 'Eckhart Tolle',
        isbn: '978-1577314086',
        serie: 'Espiritualidad y meditación',
        img: 'https://www.librerialuces.com/es/imagenes/9788484/978848445273.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Los Cuatro Acuerdos',
        autor: 'Miguel Ruiz',
        isbn: '978-1878424310',
        serie: 'Desarrollo personal',
        img: 'https://www.librerialuces.com/es/imagenes/9788479/978847953253.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'Reflexiones de un monje',
        autor: 'Agustí Altisent',
        isbn: '978-8497160717',
        serie: 'Espiritualidad y reflexiones',
        img: 'https://www.librerialuces.com/es/imagenes/9788418/978841855638.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El poder del ahora',
        autor: 'Eckhart Tolle',
        isbn: '978-1577314802',
        serie: 'Espiritualidad y crecimiento personal',
        img: 'https://www.librerialuces.com/es/imagenes/9788484/978848445206.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El Alquimista',
        autor: 'Paulo Coelho',
        isbn: '978-0062315007',
        serie: 'Ficción inspiradora',
        img: 'https://www.librerialuces.com/es/imagenes/9788408/978840814475.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo:'El Profeta',
        autor: 'Kahlil Gibran',
        isbn: '978-8499089986',
        serie: 'Poesía y filosofía',
        img: 'https://www.librerialuces.com/es/imagenes/9788497/978849777543.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El Principito',
        autor: 'Antoine de Saint-Exupéry',
        isbn: '978-0156013925',
        serie: 'Literatura infantil y filosofía',
        img: 'https://www.librerialuces.com/es/imagenes/9788498/978849838149.JPG',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        titulo: 'El Aleph',
        autor: 'Jorge Luis Borges',
        isbn: '978-9500408573',
        serie: 'Cuentos y literatura argentina',
        img: 'https://www.librerialuces.com/es/imagenes/9788426/978842640573.JPG',
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
