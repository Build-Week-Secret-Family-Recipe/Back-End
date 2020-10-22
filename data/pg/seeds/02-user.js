exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "test",
          email: "test@gmail.com",
          password:
            "$2a$08$jdahz2rpEwi1ru3PmBixSOOTR7X989hEq87INr8vQXGQ0no8hM.sO",
          role: "user",
        },
      ]);
    });
};
