
exports.seed = function(knex) {
  return knex('projectTasks').insert([
    {
      description: 'download dependencies',
      notes: 'express, knex, splite3, nodemon, knex-cleaner',
      projectId: 1
    },
    {
      description: 'set-up server',
      notes: '',
      projectId: 1
    },
    {
      description: 'create database',
      notes: 'create knex migration tables',
      projectId: 1
    }
  ]);
};