const db = require("../../data/db_config");

function addTagToRecipe(recipeTagsData) {
  return db("recipes_tags").insert(recipeTagsData, "id");
}

function deleteTagFromRecipe(recipeTagId) {
  return db("recipes_tags").where("id", recipeTagId).del();
}

function getRecipesTags(recipeId) {
  return db("recipes_tags as rt")
    .join("tags as t", "rt.tags_id", "t.id")
    .where("recipes_id", recipeId)
    .select("rt.*", "t.tag_name");
}

module.exports = {
  addTagToRecipe,
  deleteTagFromRecipe,
  getRecipesTags,
};
