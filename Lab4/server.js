const express = require('express');
const app = express();
const port = process.env.PORT || 4323;
const http = require('http');
const server = http.createServer(app);
const socketIo = require('socket.io')
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});

server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
