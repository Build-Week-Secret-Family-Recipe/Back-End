const router = require("express").Router();
const Instructions = require("../models/instructionsModel.js");

const bodyValidation = require("../middleware/bodyValidation");

const idValidation = require("../middleware/idValidation");

router.get("/:id", idValidation("recipes"), (req, res) => {
  const { id } = req.params;

  Instructions.findById(id)
    .then((instruction) => {
      if (instruction) {
        res.json(instruction);
      } else {
        res
          .status(404)
          .json({ message: "Could not find instruction with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get instructions" });
    });
});

// insert instructions for EXISTING recipe
router.post(
  "/recipes/:id",
  idValidation("recipes"),
  bodyValidation("addInstructions"),
  (req, res) => {
    const stepData = req.body;
    const { id } = req.params;

    Instructions.addInstructions(stepData, id)
      .then((step) => {
        res.status(201).json(step);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to create new step" });
      });
  }
);

// // insert instructions for a NEW recipe (no PK exist yet)
// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Instructions.addRecipe(schemeData)
//   .then(scheme => {
//     res.status(201).json(scheme);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new scheme' });
//   });
// });

router.put(
  "/:id",
  idValidation("instructions"),
  bodyValidation("updateInstructions"),
  (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Instructions.update(changes, id)
      .then((updatedInstruction) => {
        res.json(updatedInstruction);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to update instruction" });
      });
  }
);

router.delete("/:id", idValidation("instructions"), (req, res) => {
  const { id } = req.params;

  Instructions.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json(deleted);
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

module.exports = router;
