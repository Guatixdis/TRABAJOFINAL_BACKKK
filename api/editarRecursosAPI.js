const express = require('express');
const db = require('../db/models/index.js');

const ruta = express.Router();

ruta.get('/listar', async function (req, res) {
  try {
    const data = await db.recurso.findAll({
      attributes: ['id', 'titulo', 'autor', 'isbn', 'serie', 'img'],
      order: [['titulo', 'ASC']]
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

ruta.get('/:id', async function (req, res) {
  try {
    const data = await db.recurso.findByPk(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

ruta.post('/agregar', async function (req, res) {
  try {
    const { titulo, autor, isbn, serie, img } = req.body;
    const data = await db.recurso.create({
      titulo,
      autor,
      isbn,
      serie,
      img,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al agregar el recurso" });
  }
});

ruta.delete('/eliminar/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const data = await db.recurso.destroy({ where: { id } });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al eliminar el recurso" });
  }
});

ruta.put('/actualizar/:id', async function (req, res) {
  try {
    const id = req.params.id;
    const { titulo, autor, isbn, serie, img } = req.body;
    const data = await db.recurso.update({
      titulo,
      autor,
      isbn,
      serie,
      img
    }, { where: { id } });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al actualizar el recurso" });
  }
});

module.exports = ruta;
