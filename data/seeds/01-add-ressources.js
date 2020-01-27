
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ressources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ressources').insert([
        {id: 1, name: 'Computer', description: 'Whatever'},
        {id: 2, name: 'Printer', description: 'Whatever'},
        {id: 3, name: 'Coffe Maschine', description: 'Whatever'}
      ]);
    });
};
