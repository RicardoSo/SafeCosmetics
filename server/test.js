const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('Fin de transmision');
}

const server = http.createServer(requestListener);