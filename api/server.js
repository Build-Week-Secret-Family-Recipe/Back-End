const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// Routers
const authRouter = require("./routers/authRouter");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

module.exports = server;
