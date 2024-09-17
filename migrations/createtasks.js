export function up(knex) {
    return knex.schema.createTable('tasks', (table) => {
      table.increments('id').primary();
      table
      .integer('category_id')
      .unsigned()
      .references('categories.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.string('month').notNullable();
      table.string('date').notNullable();
    });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('tasks');
  };