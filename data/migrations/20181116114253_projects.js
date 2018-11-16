
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
      tbl.increments();
      tbl.string('name', 250);
      tbl.string('description', 500);
      tbl.boolean('completed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts')
};
