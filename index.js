const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// console.log(process.env);

// Crear el servidor de express
const app = express();

// Base de Datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
// "use" en es express es conicido como un middleware
app.use(express.static('public'));

// Lectura y parceo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
