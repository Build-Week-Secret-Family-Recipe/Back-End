const db =require("../../data/db_config.js");


async function insertUser(userData) {
  const [id] = await db("users").insert(userData, "id");
  return db("users").where("id", id);
}
function findBy(filter) {
  return db("users").where(filter);
}

module.exports = { insertUser, findBy };
