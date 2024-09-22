export function up(knex) {
    return knex.schema.createTable('months', (table) => {
      table.increments('id').primary();
      table.string('month').notNullable();
      table.string('startday').notNullable();
      table.string('days').notNullable();
      table.string('year').notNullable();
    });
  };
  
  export function down(knex) {
    return knex.schema.dropTable('months');
  };