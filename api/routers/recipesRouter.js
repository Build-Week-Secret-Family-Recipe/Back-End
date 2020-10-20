const router = require("express").Router();
const Recipes = require("../models/recipesModel");

router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getRecipes(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting recipes info from DB",
        ...err,
      });
    });
});

router.post("/user/:id", (req, res) => {
  const { id } = req.params;

  Recipes.addRecipes(req.body, id)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting recipes info from DB",
        ...err,
      });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.deleteRecipes(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting recipes info from DB",
        ...err,
      });
    });
});

// TODO: router Update Recipe

module.exports = router;
