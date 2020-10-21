const db =require("../../data/db_config.js");

function find() {
    return db('recipes_tags');
}

function findById(id) {
    return db('tags').where({id}).first();
}

module.exports = {
    findById, 
    find
}