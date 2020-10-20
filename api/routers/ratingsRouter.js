const router = require("express").Router();
const Ratings = require("../models/ratingsModel");

router.post("/insert", (req, res) => {
  Ratings.addRating(req.body, req.body.recipes_id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting ratings info from DB",
        ...err,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Ratings.deleteRating(id, req.body.recipes_id, req.body.users_id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting ratings info from DB",
        ...err,
      });
    });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  Ratings.updateRating(id, req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error getting ratings info from DB",
        ...err,
      });
    });
});

// TODO: Get ratings for recipe

module.exports = router;
