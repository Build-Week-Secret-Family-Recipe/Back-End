const router = require("express").Router();
const Ingredients = require("../models/ingredientsModel.js");

const bodyValidation = require("../middleware/bodyValidation");

const idValidation = require("../middleware/idValidation");

router.get("/", (req, res) => {
  Ingredients.find()
    .then((ingredient) => {
      res.json(ingredient);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.get("/:id", idValidation("ingredients"), (req, res) => {
  const { id } = req.params;

  Ingredients.findById(id)
    .then((ingredient) => {
      if (ingredient) {
        res.json(ingredient);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredient with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.post("/", bodyValidation("addIngredients"), (req, res) => {
  const schemeData = req.body;

  Ingredients.addIngredient(schemeData)
    .then((scheme) => {
      res.status(201).json(scheme);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new scheme" });
    });
});

module.exports = router;
