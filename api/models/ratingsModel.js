const db = require("../../data/db_config");

async function addRating(ratingData, recipesId) {
  await db("ratings").insert(ratingData);

  return db("ratings").where("recipes_id", recipesId);
}

async function deleteRating(ratingId, recipesId, usersId) {
  await db("ratings").where("id", ratingId).andWhere("users_id", usersId).del();

  return db("ratings").where("recipes_id", recipesId);
}

async function updateRating(ratingId, ratingData) {
  await db("ratings").where("id", ratingId).update(ratingData);

  return db("ratings").where("recipes_id", ratingData.recipes_id);
}

function getRating(recipeId) {
  return db("ratings").where("recipes_id", recipeId);
}

module.exports = {
  addRating,
  deleteRating,
  updateRating,
  getRating,
};
