const express = require('express');

const app = express();

app.listen(5005, () => console.log('SERVIDOR LEVANTADO'));
app.get('/productos', (req, res) => res.send('<h1>TESTING FIRST ENDPOINT</h1>'));