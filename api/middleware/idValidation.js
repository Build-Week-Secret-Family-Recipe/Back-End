const db = require("../../data/db_config.js");

module.exports = (table, action = "noAction") => {
  return async (req, res, next) => {
    let { id } = req.params;
    if (action === "recipesIngredientsGet") {
      id = req.body.recipes_id;
    }
    if (action === "recipesIngredientsDelete") {
      id = req.body.recipes_ingredients_id;
    }
    if (action === "recipesTagsGet") {
      id = req.body.recipes_id;
    }
    if (action === "recipesTagsDelete") {
      id = req.body.recipes_tags_id;
    }
    let response = await db(table).where("id", id);
    if (response.length === 0) {
      res.status(400).json({ message: `id in table ${table} is missing` });
    } else {
      next();
    }
  };
};
