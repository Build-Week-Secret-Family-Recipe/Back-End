const router = require("express").Router();
const Tags = require('../models/tagsModels.js');


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