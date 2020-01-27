exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
          .notNullable();
        tbl.text('description', 128)
        tbl.boolean('completed').defaultTo('false')
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
        tbl.text('description')
          .notNullable();
        tbl.text('notes')
        tbl.boolean('completed').defaultTo('false')
      })
      .createTable('ressources', tbl => {
        tbl.increments()
        tbl.text('name', 128)
          .unique()
          .notNullable()
        tbl.text('description')
      })
      .createTable('ressources_needed', tbl => {
        tbl.increments()
        tbl.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
        tbl.integer('ressource_id')
          .notNullable()
          .references('id')
          .inTable('ressources')
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('ressources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('ressources_needed');
  };