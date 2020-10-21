exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tags")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tags").insert([
        { tag_name: "Dinner" },
        { tag_name: "Family Recipe" },
        { tag_name: "Breakfast" },
        { tag_name: "Lunch" },
        { tag_name: "Beverages" },
        { tag_name: "Appetizers" },
        { tag_name: "Soups" },
        { tag_name: "Salads" },
        { tag_name: "Main Dishes: Beef" },
        { tag_name: "Main Dishes: Poultry" },
        { tag_name: "Main Dishes: Pork" },
        { tag_name: "Main Dishes: Seafood" },
        { tag_name: "Main Dishes: Vegetarian" },
        { tag_name: "Main Dishes: Vegetables" },
        { tag_name: "Main Dishes: Other" },
        { tag_name: "Deserts" },
        { tag_name: "Canning/Freezing" },
        { tag_name: "Breads" },
        { tag_name: "Holidays" },
        { tag_name: "Entertaining" },
      ]);
    });
};
