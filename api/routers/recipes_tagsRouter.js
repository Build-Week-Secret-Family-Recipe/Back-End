const router = require("express").Router();
const RecipeTags = require('../models/recipes_tags.js');

router.get('/', (req, res) => {
    RecipeTags.find()
    .then(recipeTag => {
      res.json(recipeTag);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipeTags' });
    });
  });
  
  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    RecipeTags.findById(id)
    .then(recipeTag => {
      if (recipeTag) {
        res.json(recipeTag);
      } else {
        res.status(404).json({ message: 'Could not find recipeTag with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipeTag' });
    });
  });

  module.exports = router;