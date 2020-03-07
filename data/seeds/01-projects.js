
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      name: 'Do this sprint',
      description: 'make this projects db and endpoints'
    }
  ]);
};