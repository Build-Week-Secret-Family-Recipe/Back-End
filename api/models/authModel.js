const db = require("../../data/db_config");

async function insertUser(userData) {
  const [id] = await db("users").insert(userData, "id");
  return db("users").where("id", id).first();
}

function findBy(filter) {
  return db("users").where(filter);
}

module.exports = { insertUser, findBy };
