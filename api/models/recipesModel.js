const db = require("../../data/db_config.js");

function find() {
  return db('recipes');
}

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

async function getRecipesById(recipeId) {
  try {
    const recipe = await db("recipes").where("id", recipeId).first();
    const ratings = await getRatings(recipeId);
    const ingredients = await getIngredients(recipeId);
    const instructions = await getInstructions(recipeId);

    return { recipe, ratings, ingredients, instructions };
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

    return id;
  } catch (err) {
    throw err;
  }
}

async function deleteRecipes(recipeId) {
  await db("ratings").where("recipes_id", recipeId).del();
  await db("instructions").where("recipes_id", recipeId).del();
  await db("recipes_ingredients").where("recipes_id", recipeId).del();
  return db("recipes").where("id", recipeId).del();
}

async function updateRecipe(recipeId, recipeData) {
  await db("recipes").where("id", recipeId).update(recipeData);
  return db("recipes").where("id", recipeId).first();
}

module.exports = {
  getRecipes,
  addRecipes,
  deleteRecipes,
  getRecipesById,
  updateRecipe,
  find
};
