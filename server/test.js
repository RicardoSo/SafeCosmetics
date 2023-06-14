// pruebas de node js
const http = require('http');

const requestListener = (req, res) => {
    res.writeHead(200);
    res.end('Fin de la trama');
}

const server = http.createServer(requestListener);