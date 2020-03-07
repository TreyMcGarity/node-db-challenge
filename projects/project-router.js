const express = require('express');

const projects = require('./project-model');

const router = express.Router();

//projects
router.get('/', (req, res) => {
    projects.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get projects.'
            })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    projects.findProjectById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to get project' });
    });
});

router.post('/', (req, res) => {
    const response = req.body;

    projects.createProject(response)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new project'
            })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const response = req.body;

    projects.editProject(response, id)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not update project.'
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projects.deleteProject(id)
        .then(project => {
            if (project) {
                res.status(200).json({removed: project});
            } else {
                res.status(404).json({
                    error: 'Could not find project with that id.'
                })
            }
        })        
        .catch(err => {
            res.status(500).json({
                error: 'Could not delete project.'
            })
        })
})

//resources
router.get('/resources', (req, res) => {
    projects.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get resources.'
            })
        })
});

router.post('/resources', (req, res) => {
    const response = req.body;

    projects.createResource(response)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new resource'
            });
            console.log(err)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const response = req.body;

    projects.editResource(response, id)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Could not update resource.'
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projects.deleteResource(id)
        .then(resource => {
            if (resource) {
                res.status(200).json({removed: resource});
            } else {
                res.status(404).json({
                    error: 'Could not find resource with that id.'
                })
            }
        })        
        .catch(() => {
            res.status(500).json({
                error: 'Could not delete resource.'
            })
        })
})

//tasks
router.get('/tasks', (req, res) => {
    projects.findTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(() => {
            res.status(500).json({
                error: 'Failed to get tasks.'
            })
        })
});

router.post('/tasks', (req, res) => {
    const taskData = req.body;

    projects.createTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to create new task'
            });
            console.log(err)
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const response = req.body;

    projects.editProject(response, id)
        .then(update => {
            res.status(200).json(update)
        })
        .catch(() => {
            res.status(500).json({
                error: 'Could not update task.'
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projects.deleteProject(id)
        .then(task => {
            if (task) {
                res.status(200).json({removed: task});
            } else {
                res.status(404).json({
                    error: 'Could not find task with that id.'
                })
            }
        })        
        .catch(() => {
            res.status(500).json({
                error: 'Could not delete task.'
            })
        })
})

module.exports = router;