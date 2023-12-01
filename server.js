const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')

const app = express()
const port = 3080

const crud = require('./api/crud')
const editarRecursosAPI = require('./api/editarRecursosAPI')
const listareserva = require('./api/leerListaReservasAPI')

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/api', crud)
app.use('/api/recurso', editarRecursosAPI)
app.use('/api/reserva', listareserva)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

