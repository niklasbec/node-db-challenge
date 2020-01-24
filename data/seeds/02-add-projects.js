
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Mega important project', description: 'Whatever', completed: false},
        {id: 2, name: 'Win Superbowl', description: 'Whatever', completed: false},
        {id: 3, name: 'Graduate Lambda', description: 'Whatever', completed: false}
      ]);
    });
};
