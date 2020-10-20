const db = require("../../data/db_config.js");

async function getRecipes(userId) {
  try {
    const recipes = await db("recipes").where("id", userId);
    for (const recipe of recipes) {
      recipe.ratings = await getRatings(recipe.id);
      recipe.ingredients = await getIngredients(recipe.id);
      recipe.instructions = await getInstructions(recipe.id);
    }
    return recipes;
  } catch (err) {
    throw err;
  }
}

function getInstructions(recipeId) {
  return db("instructions").where("recipes_id", recipeId).orderBy("step");
}

function getIngredients(recipeId) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "i.id")
    .where("recipes_id", recipeId)
    .select("ri.*", "i.ingredient_name");
}

function getRatings(recipeId) {
  return db("ratings").where("recipes_id", recipeId);
}



module.exports = { getRecipes, add, addTag };
