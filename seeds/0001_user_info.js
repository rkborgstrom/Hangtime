exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_info').insert([
        {username: 'ghostrider92',
        email: 'ryan@gmail.com',
        full_name: 'Ryan Borgstrom',
        password: 'ryno94'},
      ]);
    });
};