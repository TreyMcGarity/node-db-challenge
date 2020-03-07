
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'computer', description: 'pc or laptop'},
    {name: 'internet'},
    {name: 'VS Code'},
    {name: 'git', description: 'console to run server'}
  ]);
};