
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratings').insert([
        {
           Value: 5,
           comment: "Love this recipe",
           recipes_id: 1,
           users_id: 1
        }
       
      ]);
    });
};
