
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { 
          qty_amount: "1",
          qty_type: "Large",
          recipes_id: 1,
          ingredients_id: 1
        },
        { 
          qty_amount: "1",
          qty_type: "Large",
          recipes_id: 1,
          ingredients_id: 2
        },
        { 
          qty_amount: "1",
          qty_type: "Large",
          recipes_id: 1,
          ingredients_id: 3
        },
        { 
          qty_amount: "1",
          qty_type: "Large",
          recipes_id: 1,
          ingredients_id: 4
        },
        { 
          qty_amount: "1",
          qty_type: "Large",
          recipes_id: 1,
          ingredients_id: 5
        },
        { 
          qty_amount: "1",
          qty_type: "Pound",
          recipes_id: 1,
          ingredients_id: 6
        },
        { 
          qty_amount: "4",
          qty_type: "Cloves",
          recipes_id: 1,
          ingredients_id: 7
        },
        { 
          qty_amount:"1/2",
          qty_type: "tbsp",
          recipes_id: 1,
          ingredients_id: 8
        },
        { 
          qty_amount:"1",
          qty_type: "tbsp",
          recipes_id: 1,
          ingredients_id: 9
        },
        { 
          qty_amount:"1/3",
          qty_type: "tsp",
          recipes_id: 1,
          ingredients_id: 10
        },
        { 
          qty_amount:"1/4",
          qty_type: "tsp",
          recipes_id: 1,
          ingredients_id: 11
        },
        { 
          qty_amount:"1",
          qty_type: "pinch",
          recipes_id: 1,
          ingredients_id: 12
        },
        { 
          qty_amount:"1/4",
          qty_type: "tsp",
          recipes_id: 1,
          ingredients_id: 13
        },
        
        
      ]);
    });
};
