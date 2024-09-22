export function up(knex) {
    return knex.schema.createTable('categories', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('details').notNullable();
      table.string('color').notNullable();
    });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('categories');
  };