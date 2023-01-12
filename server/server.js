const express = require('express');
const app = express();

// DB connection
const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost/SafeCosmetics')
    .then(() => console.log('CONECTADO A BBDD'));


// Model
const Coaster = require('./Models/Coaster.model');

//Routing
app.get('/productos', (req, res) => {

    Coaster
        .find()
        .then(allCoasters => res.json(allCoasters))
});

app.listen(5005, () => console.log('SERVIDOR LEVANTADO'));
