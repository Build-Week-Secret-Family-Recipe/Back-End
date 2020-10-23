const { returning } = require("../../data/db_config.js");
const db = require("../../data/db_config.js");

function findById(id) {
  return db("instructions").where("recipes_id", id);
}

const update = async (changes, id) => {
  const res = await db("instructions").where({ id }).update(changes);
  return findById(changes.recipes_id);
};

async function remove(id) {
  const res = db("instructions").where({ id });
  await db("instructions").where({ id }).del();
  return findById(res.recipes_id);
}

// insert instructions for EXISTING recipe
async function addInstructions(stepData, id) {
  stepData.recipes_id = id;

  await db("instructions").insert(stepData);
  return findById(id);
}

// // insert instructions for a NEW recipe (no PK exist yet)
// function addRecipe(instructions) {
//     return db('recipes')
//     .insert({
//         title:  instructions.title,
//         source: instructions.source,
//         prep_time: instructions.prep_time,
//         cook_time: instructions.cook_time,
//         servings: instructions.servings,
//         users_id: instructions.users_id
//     })
//     .returning('id')
//     .then(function (response) {
//         if(instructions.instructions) {
//             const fieldsToInsert = instructions.instructions.map(field =>
//                 ({
//                     "step": field.step,
//                     "instruction_text": field.instructions_text,
//                     "recipes_id": response[0]
//                 }));

//                 return db('instructions')
//                 .insert(fieldsToInsert)
//         }
//     })
//   }

module.exports = {
  findById,
  update,
  remove,
  addInstructions,
  // addRecipe,
};
