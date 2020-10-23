const router = require("express").Router();
const Ratings = require("../models/ratingsModel");

const bodyValidation = require("../middleware/bodyValidation");

const idValidation = require("../middleware/idValidation");

router.post("/insert", bodyValidation("addRatings"), (req, res) => {
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

router.delete(
  "/delete/:id",
  idValidation("ratings"),
  bodyValidation("deleteRatings"),
  (req, res) => {
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
  }
);

router.put(
  "/update/:id",
  idValidation("ratings"),
  bodyValidation("updateRatings"),
  (req, res) => {
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
  }
);

router.get("/recipe/:id", idValidation("recipes"), (req, res) => {
  const { id } = req.params;
  Ratings.getRating(id)
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

module.exports = router;
