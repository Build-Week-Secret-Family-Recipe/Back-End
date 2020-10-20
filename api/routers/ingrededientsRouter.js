const router = require("express").Router();
const Ingredients = require('../models/ingredientsModel.js');


router.post('/', (req, res) => {
    const schemeData = req.body;
  
    Ingredients.addIngredient(schemeData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
  });


  module.exports = router;