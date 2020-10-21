const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

// Routers
const authRouter = require("./routers/authRouter");
const recipesRouter = require("./routers/recipesRouter");
const ratingsRouter = require("./routers/ratingsRouter");
const instructionsRouter = require("./routers/instructionsRouter");
const tagsRouter = require("./routers/tagsRouter.js");
const ingredientsRouter = require("./routers/ingrededientsRouter.js");
const recipeTagsRouter = require("./routers/recipes_tagsRouter.js");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/recipes", recipesRouter);
server.use("/api/ratings", ratingsRouter);
// server.use("/api/instructions", recipesRouter);
server.use("/api/instructions", instructionsRouter);
server.use("/api/tags", tagsRouter);
server.use("/api/ingredients", ingredientsRouter);
server.use("/api/recipes_Tags", recipeTagsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Server Running at Full Capacity. Lets Code</h2>`);
  res.json({ api: "up" });
});

module.exports = server;
