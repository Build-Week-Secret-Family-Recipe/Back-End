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
const recipeIngredientsRouter = require("./routers/recipesIngredientsRouter");
const recipeTagsRouter = require("./routers/recipesTagsRouter");

// middleware
const restrictedMiddleware = require("./middleware/restrictedMiddleware");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/recipes", restrictedMiddleware, recipesRouter);
server.use("/api/ratings", restrictedMiddleware, ratingsRouter);
// server.use("/api/instructions", recipesRouter);
server.use("/api/instructions", restrictedMiddleware, instructionsRouter);
server.use("/api/tags", restrictedMiddleware, tagsRouter);
server.use("/api/ingredients", restrictedMiddleware, ingredientsRouter);
server.use(
  "/api/recipe_ingredients",
  restrictedMiddleware,
  recipeIngredientsRouter
);
server.use("/api/recipe_tags", restrictedMiddleware, recipeTagsRouter);

server.get("/", (req, res) => {
  res.send(
    `<center><h1 style='margin-top: 20px'>Family Recipes API</h1><div><code>Server Running on Port ${
      process.env.PORT || 3300
    }</code></div><div style='margin-top: 70px'><a href='https://documenter.getpostman.com/view/12506286/TVYDeezr'>Postman Documentation</a></div></center>`
  );
});

module.exports = server;
