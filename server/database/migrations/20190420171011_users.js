exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', table => {
        table.increments()
        table.string('username').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('name');
        table.string('email');
        table.string('address');

        
    })
        .createTable('contact', table => {
            table.increments()
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.string('address');
            table.string('mobile');
            table.string('work');
            table.string('home');
            table.string('email');
            table.string('instagram');
            table.integer('created_by').references('user.id')
        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('contact')
        .dropTable('user');
};

