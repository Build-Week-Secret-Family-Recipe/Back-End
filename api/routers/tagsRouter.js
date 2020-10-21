const router = require("express").Router();
const Tags = require('../models/tagsModels.js');

router.get('/', (req, res) => {
  Tags.find()
  .then(tag => {
    res.json(tag);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tags' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Tags.findById(id)
  .then(tag => {
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ message: 'Could not find tags with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tags' });
  });
});

router.post('/', (req, res) => {
    const schemeData = req.body;
  
    Tags.addTag(schemeData)
    .then(scheme => {
      res.status(201).json(scheme);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new scheme' });
    });
  });

  module.exports = router;