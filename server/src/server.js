const http = require('http');
const express = require('express');
const cors = require('cors');
const io = require('socket.io');


const PORT = process.env.PORT || 8000;

const httpServer = http.createServer(PORT);



