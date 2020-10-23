const router = require("express").Router();
const RecipesTags = require("../models/recipesTagsModel");

const bodyValidation = require("../middleware/bodyValidation");
const idValidation = require("../middleware/idValidation");

router.get("/", idValidation("recipes", "recipesTagsGet"), (req, res) => {
  RecipesTags.getRecipesTags(req.body.recipes_id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting tags in recipe from DB",
        ...err,
      });
    });
});

router.post("/add", bodyValidation("addRecipesTags"), (req, res) => {
  RecipesTags.addTagToRecipe(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error adding tags to recipe into  DB",
        ...err,
      });
    });
});

router.delete(
  "/delete",
  idValidation("recipes_tags", "recipesTagsDelete"),
  bodyValidation("deleteRecipesTags"),
  (req, res) => {
    RecipesTags.deleteTagFromRecipe(req.body.recipes_tags_id)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          apiCode: 500,
          apiMessage: "Error deleting tags to recipe into  DB",
          ...err,
        });
      });
  }
);

module.exports = router;
