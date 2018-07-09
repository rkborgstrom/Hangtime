exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_info', (table) => {
        table.increments('id');
        table.string('username');
        table.string('email');
        table.string('full_name');
        table.string('password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_info');
};