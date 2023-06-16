const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
})

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}!!`)
})

httpServer.listen(PORT, () => {
    console.log("Server is running!!!");
});



