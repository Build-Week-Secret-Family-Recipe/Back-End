const db = require("../../data/db_config");

function addIngredientToRecipe(recipeIngredientData) {
  return db("recipes_ingredients").insert(recipeIngredientData, "id");
}

function deleteIngredientFromRecipe(recipeIngredientId) {
  return db("recipes_ingredients").where("id", recipeIngredientId).del();
}

function getRecipesIngredients(recipeId) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "i.id")
    .where("recipes_id", recipeId)
    .select("ri.*", "i.ingredient_name");
}

module.exports = {
  addIngredientToRecipe,
  deleteIngredientFromRecipe,
  getRecipesIngredients,
};
