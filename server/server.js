const express = require('express');

const app = express();

app.get('/productos', (req, res) => res.send('<h1>TESTING FIRST ENDPOINT</h1>'));

app.listen(5005, () => console.log('SERVIDOR LEVANTADO'));
