const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// Routers
const authRouter = require("./routers/authRouter");
const recipesRouter = require("./routers/recipesRouter");
const ratingsRouter = require("./routers/ratingsRouter");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/recipes", recipesRouter);
server.use("/api/ratings", ratingsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Server Running at Full Capacity. Lets Code</h2>`);
  res.json({ api: "up" });
});

module.exports = server;
