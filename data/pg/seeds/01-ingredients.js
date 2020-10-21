exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Onion" },
        { ingredient_name: "Red Pepper" },
        { ingredient_name: "Yellow Pepper" },
        { ingredient_name: "Orange Pepper" },
        { ingredient_name: "Green Pepper" },
        { ingredient_name: "Sweet Italian Sausage" },
        { ingredient_name: "Garlic" },
        { ingredient_name: "Olive Oil" },
        { ingredient_name: "Butter" },
        { ingredient_name: "Basil" },
        { ingredient_name: "Oregano" },
        { ingredient_name: "Salt" },
        { ingredient_name: "Black Pepper" },
        { ingredient_name: "Garlic Powder" },
        { ingredient_name: "Eggs" },
        { ingredient_name: "Milk" },
        { ingredient_name: "Extra Sharp Cheddar" },
      ]);
    });
};
