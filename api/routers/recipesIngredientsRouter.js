const router = require("express").Router();
const RecipesIngredients = require("../models/recipesIngredientsModel");

router.get("/", (req, res) => {
  RecipesIngredients.getRecipesIngredients(req.body.recipes_id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting ingredients in recipe from DB",
        ...err,
      });
    });
});

router.post("/add", (req, res) => {
  RecipesIngredients.addIngredientToRecipe(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error deleting ingredients to recipe into  DB",
        ...err,
      });
    });
});

router.delete("/delete", (req, res) => {
  RecipesIngredients.deleteIngredientFromRecipe(req.body.recipes_ingredients_id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error adding ingredients to recipe into  DB",
        ...err,
      });
    });
});

module.exports = router;
