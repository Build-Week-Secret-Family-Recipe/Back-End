
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { 
          step: 1,
          instruction_text: "Cut one large onion and 4 peppers put to aside.",
          recipes_id: 1
        },
        { 
          step: 2,
          instruction_text: "Place the sausage in a large skillet over medium heat, and brown on all sides. Remove from skillet,and slice.",
          recipes_id: 1
        },
        { 
          step: 3,
          instruction_text: "Melt butter and olive oil in the skillet. Stir in the onion and garlic and cook 2 to 3 minutes, add in bell peppers. Season with salt,black pepper, basil,and oregano.Continue to cook and stir until peppers and onions are tender.",
          recipes_id: 1
        },
        { 
          step: 4,
          instruction_text: "Return sausage slices to skillet with the vegetables. Reduce heat to low, cover, and simmer 15 minutes, or until sausage is heated through.",
          recipes_id: 1
        },
        
      ]);
    });
};
