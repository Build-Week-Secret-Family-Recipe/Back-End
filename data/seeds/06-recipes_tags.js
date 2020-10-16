
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_tags').insert([
        { 
          tags_id: 1,
          recipes_id: 1
        },
       
      ]);
    });
};
