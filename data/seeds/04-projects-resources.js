
exports.seed = function(knex) {
  return knex('projects-resources').insert([
    {projectId: 1, resourceId: 1},
    {projectId: 1, resourceId: 2},
    {projectId: 1, resourceId: 3},
    {projectId: 1, resourceId: 4}
  ]);
};