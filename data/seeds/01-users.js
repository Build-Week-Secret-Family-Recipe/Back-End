
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          Name: "Micky Mouse",
          Email: "mm@gmail.com",
          Password: "123", 
          Role: "Admin"
        },
        {
          Name: "Donald Duck",
	      	Email: "dd@gmail.com",
	      	Password: "456x", 
          Role: "User"
        }
      ]);
    });
};
