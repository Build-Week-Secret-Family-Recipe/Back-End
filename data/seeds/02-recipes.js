
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
           title: "Sausage and Peppers",
           source: "Grandma and Grandpa Polisi",
           prep_time: "15 minutes",
           cook_time: "25 minutes",
           servings: 6,
           users_id: 1
        }
        
      ]);
    });
};
