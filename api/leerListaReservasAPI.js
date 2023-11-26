const express = require('express');
const router = express.Router();
const db = require('../db/models/index.js');

router.get('/listar', async (req, res) => {
  try {
    const listareservas = await db.listareserva.findAll();
    res.status(200).json(listareservas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
