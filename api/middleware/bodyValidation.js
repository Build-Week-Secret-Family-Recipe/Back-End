module.exports = (action) => {
  return (req, res, next) => {
    const body = req.body;
    if (!body || body === {}) {
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Missing Body data",
      });
    } else {
      if (action === "login") {
        if (body.email && body.password) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "register") {
        if (body.name && body.email && body.password && body.role) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addIngredients") {
        if (body.ingredient_name) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addInstructions") {
        if (body.step && body.instruction_text) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "updateInstructions") {
        if (body.step && body.instruction_text && body.recipes_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addRatings") {
        if (body.value && body.comment && body.recipes_id && body.users_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "deleteRatings") {
        if (body.recipes_id && body.users_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "updateRatings") {
        if (body.value && body.comment && body.recipes_id && body.users_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addRecipesIngredients") {
        if (
          body.ingredients_id &&
          body.recipes_id &&
          body.qty_type &&
          body.qty_amount
        ) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "deleteRecipesIngredients") {
        if (body.recipes_ingredients_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addRecipesTags") {
        if (body.tags_id && body.recipes_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "deleteRecipesTags") {
        if (body.recipes_tags_id) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addTags") {
        if (body.tag_name) {
          next();
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      } else if (action === "addRecipes") {
        if (body.recipe && body.tags && body.instructions && body.ingredients) {
          if (
            body.recipe.title &&
            body.recipe.source &&
            body.recipe.prep_time &&
            body.recipe.cook_time &&
            body.recipe.servings &&
            body.recipe.image !== undefined &&
            body.recipe.share_link !== undefined
          ) {
            next();
          } else {
            res.status(500).json({ message: "Missing required fields" });
          }
        } else {
          res.status(500).json({ message: "Missing required fields" });
        }
      }
    }
  };
};
