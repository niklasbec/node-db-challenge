const express = require('express');

const ProjectDB = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    ProjectDB.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Projects' });
    });
  });

  router.get('/ressources', (req, res) => {
    ProjectDB.getRessources()
    .then(ressources => {
      res.json(ressources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Ressources' });
    });
  });

  router.get('/tasks/:id', (req, res) => {
    
    const { id } = req.params

    ProjectDB.getTasksById(id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Tasks' });
    });
  });

  router.get('/tasks/', (req, res) => {
    

    ProjectDB.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get Tasks' });
    });
  });

  router.post('/ressource', (req, res) => {
    const ressourceData = req.body;
  
    ProjectDB.addRessource(ressourceData)
    .then(ressource => {
      res.status(201).json(ressource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new ressource' });
    });
  });
  
  router.post('/', (req, res) => {
    const projectData = req.body;
  
    ProjectDB.addProject(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  router.post('/tasks', (req, res) => {
    const taskData = req.body;
  
    ProjectDB.addTask(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router;