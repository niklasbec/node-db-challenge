
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ressources_needed').del()
    .then(function () {
      // Inserts seed entries
      return knex('ressources_needed').insert([
        {id: 1, ressource_id: 2, project_id: 1},
        {id: 2, ressource_id: 2, project_id: 2},
        {id: 3, ressource_id: 3, project_id: 3}
      ]);
    });
};
