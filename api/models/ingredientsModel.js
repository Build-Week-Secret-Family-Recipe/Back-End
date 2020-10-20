const db =require("../../data/db_config.js");

function find() {
    return db('ingredients');
}

function findById(id) {
    return db('ingredients').where({id}).first();
}

const update = async (changes, id) => {
    const res = await db('ingredients').where({ id }).update(changes);
    return findById(id);
}

function remove(id) {
    return db('ingredients')
    .where({ id })
    .del();
}

function addIngredient(eagle13) {
    return db('ingredients')
    .insert({ ingredient_name: eagle13.ingredient_name})
  }


  module.exports = {
    findById, 
    update,
    remove,
    addIngredient, 
    find
}