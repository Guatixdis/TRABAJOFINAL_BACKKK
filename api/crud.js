const express = require('express')
const db = require('../db/models/index.js')
const Sequelize = require('sequelize');

const ruta = express.Router()


 ruta.get('/listar', async function (req, res) {
      let data = await db.user.findAll(
            {

               attributes: [ 
                   'id', 'nombre', 'email', 'carrera',
                  [Sequelize.fn (
                        'timezone', 'GMT+10', Sequelize.col("updatedAt") ) ,  'updatedAt'
                  ]
               ],
                  
               order: [
                      ['nombre', 'ASC']
                     ]
            }
      )
      console.log(data)
       res.status(200).json( data );
});

ruta.get('/:id', async function (req, res) {
    console.log( req.params.id)

   let data = await db.user.findbyPk(
      {
         where: {
            id: req.params.id
         },
         order: [
                ['nombres', 'ASC']
               ]
      }
   )
   console.log( data )
   res.status(200).json( data );
});

ruta.post('/agregar', async function (req, res) {
       user = req.body
       console.log(user)
       let nombre = user["user"]

        data = await db.user.create(
         {
            nombres : nombre,
            email : nombre + "@noseque.nosenada.com",
            carrera : "Todas las anteriores",
            createdAt: new Date(),
            updatedAt: new Date()
            
         }
      )

       console.log( data );
       res.status(200).json( data );
 });

 ruta.delete('/eliminar/:id', async function (req, res) {
       let key = req.params.id;
       let data  = await db.user.destroy(
         {
            where : {
               id : key
            }
         }
       )
        
       console.log( data );
       res.end( JSON.stringify(data));
});


ruta.put('/actualizar', async function (req,res) {
   user = req.body
   console.log(user)
   let nombre = user["user"]

   let data = await db.user.findOne(
      {
         where: {
            nombre: nombre
         }
      }
   )

   if ( data != null )  { 
      let correo = data.email
      data = await db.user.update(
          { 
            email: correo + "1" 
         }, 
      {
         where : {
            nombre: nombre
            },
      }
   );
       res.status(200).json( data );
   } else {
      res.status(404).json( data );
   }

   })

 module.exports = ruta