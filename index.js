require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo'); // Archivo de configuracion de BD

const app = express(); // Inicio del servidor

app.use(cors());

// TODO: Main de rutas
const { questionRoutes } = require('./routes/Index');

app.get('/', (req,res) => {
    return res.status(200)
        .json({ data:'Api de prueba para el desario de https://holajuniors.com/ - Desarrollado por Franco Sanchez | https://github.com/francocsanchez/desafio-holajunior' });
})
app.use('/api/questions', questionRoutes);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('*** Server running ***');
    console.log(`http://localhost/${process.env.APP_PORT || 3000}`);
})
dbConnect();