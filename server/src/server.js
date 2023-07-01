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

let READY_PLAYER_COUNT = 0;

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}!!`);

    READY_PLAYER_COUNT++;

    if(READY_PLAYER_COUNT == 2){
        
        console.log(`Referee is: ${socket.id}`);
        io.emit('startGame', socket.id);
        READY_PLAYER_COUNT = 0;
    }

    socket.broadcast.emit('connected', socket.id);

    socket.on('ballPosTrack', (data) => {
        // console.log(`Ball position: ${data}`);
        socket.broadcast.emit('gotBallPosTrack', data)
    })
})

httpServer.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!!!`);
});



