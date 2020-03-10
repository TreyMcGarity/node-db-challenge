const express = require('express');

const projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({
            error: 'Failed to get projects.'
        })
        console.log(err)
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    projects.findProjectById(id)
    .then(project => {
        if (project) {
            res.json(project);
        } else {
            res.status(404).json({ 
                message: 'Could not find project with given id.' 
            })
        }
    })
    .catch(err => {
      res.status(500).json({ 
          error: 'Failed to get project' 
        })
        console.log(err)
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
        console.log(err)
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
        console.log(err)
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
        console.log(err)
    })
})

module.exports = router;