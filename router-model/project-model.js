const db = require('../data/db-config')

function getProjects() {
    return db('projects')
}

function getRessources() {
    return db('ressources')
  }

function getTasksById(id) {
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    .where({project_id: id})
    .select('tasks.description as task_description', 'projects.name as project_name', 'projects.description as project_description', 'tasks.completed')
}

function getTasks() {
    return db('tasks')
    .join('projects', 'tasks.project_id', '=', 'projects.id')
    .select('tasks.description as task_description', 'projects.name as project_name', 'projects.description as project_description', 'tasks.completed')
}

function addRessource({name, description}) {
    return db('ressources')
    .insert({name, description})
}

function addProject({name, description}) {
    return db('projects')
    .insert({name, description})
}

function addTask({project_id, description, notes}) {
    return db('tasks')
    .insert({project_id, description, notes})
}


module.exports = {
    getProjects,
    getRessources,
    getTasksById,
    addRessource,
    addProject,
    addTask,
    getTasks
  }