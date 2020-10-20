const db =require("../../data/db_config.js");

function findById(id) {
    return db('tags').where({id}).first();
}

const update = async (changes, id) => {
    const res = await db('tags').where({ id }).update(changes);
    return findById(id);
}

function remove(id) {
    return db('tags')
    .where({ id })
    .del();
}

function addTag(eagle13) {
    return db('tags')
    .insert({ tag_name: eagle13.tag_name})
  }

  module.exports = {
    findById, 
    remove,
    addTag,
    update
}