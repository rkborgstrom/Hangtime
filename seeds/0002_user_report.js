exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_report').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_report').insert([
        {picture_url:  '../images/hangtime.jpg',
        location: 'Morris, IL',
        snow_report: '15 inches',
        visibility: 'clear',
        date: '07/08/2018',
        time: '5:20'}
      ]);
    });
};
