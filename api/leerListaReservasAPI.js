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
router.get('/obtenerReservaPorTitulo', async (req, res) => {
  try {
    let { libro } = req.query;
    libro = decodeURIComponent(libro); // Decodificar el título del libro de la URL
    const reserva = await db.listareserva.findOne({ where: { libro } });
    if (reserva) {
      res.status(200).json(reserva);
    } else {
      res.status(404).json({ message: 'Reserva no encontrada para el título proporcionado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
