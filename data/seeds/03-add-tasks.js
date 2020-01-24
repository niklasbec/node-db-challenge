exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        { id: 1, project_id: 1 , description: "Whatever", notes: "Whatever", completed: false},
        { id: 2, project_id: 2 , description: "Whatever", notes: "Whatever", completed: false},
        { id: 3, project_id: 3 , description: "Whatever", notes: "Whatever", completed: false}
      ]);
    });
};
