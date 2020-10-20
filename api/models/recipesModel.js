const db = require("../../data/db_config.js");

async function getRecipes(userId) {
  try {
    const recipes = await db("recipes").where("users_id", userId);
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

function addRecipeInstruction(instructionData) {
  return db("instructions").insert(instructionData);
}
function addRecipeIngredient(ingredientData) {
  return db("recipes_ingredients").insert(ingredientData);
}

// Add Recipe

async function addRecipes(recipeData, user_id) {
  try {
    recipeData.recipe.users_id = user_id;
    const [id] = await db("recipes").insert(recipeData.recipe, "id");
    for (const instruction of recipeData["instructions"]) {
      instruction.recipes_id = id;
      addRecipeInstruction(instruction)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    for (const ingredient of recipeData["ingredients"]) {
      ingredient.recipes_id = id;
      addRecipeIngredient(ingredient)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // addInstruction(recipeData.ingredients);
    return id;
  } catch (err) {
    throw err;
  }
}

module.exports = { getRecipes, addRecipes };
