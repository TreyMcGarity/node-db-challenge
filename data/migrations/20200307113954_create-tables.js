
exports.up = function(knex) {
    return knex.schema
          .createTable('projects', table => {
              table.increments();
              table.string('name', 48).notNullable();
              table.string('description', 128);
              table.integer('completed').defaultTo(0);
          })
          .createTable('tasks', table => {
              table.increments();
              table.string('description', 128).notNullable();
              table.string('notes', 128);              
              table.integer('completed').defaultTo(0);
              table.integer('projectId')
                  .unsigned()
                  .notNullable()
                  .references('projects.id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
          })
          .createTable('resources', table => {
              table.increments();
              table.string('name', 48).notNullable();
              table.string('description', 128);
          })
          .createTable('projects-resources', table => {
              table.integer('projectId')
                  .unsigned()
                  .notNullable()
                  .references('projects.id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              table.integer('resourceId')
                  .unsigned()
                  .notNullable()
                  .references('resources.id')
                  .onDelete('CASCADE')
                  .onUpdate('CASCADE');
              table.primary(['projectId', 'resourceId'])
          })
};

exports.down = function(knex) {
    return knex.schema
          .dropTableIfExists('projects-resources')
          .dropTableIfExists('resources')
          .dropTableIfExists('projectTasks')
          .dropTableIfExists('projects')
};
