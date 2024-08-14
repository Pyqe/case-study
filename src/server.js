const http = require('http');
const userRoutes = require('./routes/userRoutes');

const server = http.createServer(userRoutes);

const port = 9000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Listening at http://${host}:${port}`);
});
