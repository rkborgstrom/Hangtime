exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_report', (table) => {
        table.increments('id').primary();
        table.string('username');
        table.string('picture_url');
        table.string('location');
        table.string('textbox');
        table.string('snow_report');
        table.string('conditions');
        table.date('date');
        table.time('time');

    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_report');
};



