const router = require("express").Router();
const RecipesIngredients = require("../models/recipesIngredientsModel");

const bodyValidation = require("../middleware/bodyValidation");
const idValidation = require("../middleware/idValidation");

router.get(
  "/",
  idValidation("recipes", "recipesIngredientsGet"),
  (req, res) => {
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
  }
);

router.post("/add", bodyValidation("addRecipesIngredients"), (req, res) => {
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

router.delete(
  "/delete",
  idValidation("recipes_ingredients", "recipesIngredientsDelete"),
  bodyValidation("deleteRecipesIngredients"),
  (req, res) => {
    RecipesIngredients.deleteIngredientFromRecipe(
      req.body.recipes_ingredients_id
    )
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
  }
);

module.exports = router;
