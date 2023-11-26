const express = require('express');
const cors = require('cors');
const db = require('../db/models/index.js');
const Sequelize = require('sequelize');

const ruta = express.Router();

// Agregar middleware CORS
ruta.use(cors());


 ruta.get('/listar', async function (req, res) {
      let data = await db.user.findAll(
            {

               attributes: [ 
                   'id', 'nombres', 'apellidos', 'Tdocumento', 'Ndocumento', 'correo', 'contrasenia', 'tipo'
                  ],
                  
               order: [
                      ['nombres', 'ASC']
                     ]
            }
      )
      console.log(data)
       res.status(200).json( data );
});

ruta.post('/agregar', async function (req, res) {
       user = req.body
       console.log(user)
       let nombre = user["user"]

        data = await db.user.create(
         {
            nombres : user.nombres,
            apellidos : user.apellidos,
            Tdocumento : user.Tdocumento,
            Ndocumento : user.Ndocumento,
            correo : user.correo,
            contrasenia : user.contrasenia,
            tipo : "usuario",
            createdAt: new Date(),
            updatedAt: new Date()
            
         }
      )

       console.log( data );
       res.status(200).json( data );
 });

 module.exports = ruta