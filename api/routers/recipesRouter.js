const router = require("express").Router();
const Recipes = require("../models/recipesModel");

const bodyValidation = require("../middleware/bodyValidation");
const idValidation = require("../middleware/idValidation");

router.get("/", (req, res) => {
  Recipes.find()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipe" });
    });
});

router.get("/user/:id", idValidation("users"), (req, res) => {
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

router.get("/:id", idValidation("recipes"), (req, res) => {
  const { id } = req.params;

  Recipes.getRecipesById(id)
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

router.post(
  "/user/:id",
  idValidation("users"),
  bodyValidation("addRecipes"),
  (req, res) => {
    const { id } = req.params;

    Recipes.addRecipes(req.body, id)
      .then((response) => {
        res.status(201).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          apiCode: 500,
          apiMessage: "Error adding recipes info from DB",
          ...err,
        });
      });
  }
);

router.delete("/:id", idValidation("recipes"), (req, res) => {
  const { id } = req.params;
  Recipes.deleteRecipes(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error deleting recipes info from DB",
        ...err,
      });
    });
});

router.put("/:id", idValidation("recipes"), (req, res) => {
  const { id } = req.params;
  Recipes.updateRecipe(id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error updating recipes info from DB",
        ...err,
      });
    });
});

module.exports = router;
