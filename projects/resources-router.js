const express = require('express');

const projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findResources()
    .then(resources => {
         res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({
            error: 'Failed to get resources.'
        })
        console.log(err)
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    projects.findResourceById(id)
    .then(resource => {
      if (resource) {
        res.json(resource);
      } else {
        res.status(404).json({ 
            message: 'Could not find resource with given id.' 
        })
      }
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'Failed to get resource' 
        });
        console.log(err)
    })
});

router.post('/', (req, res) => {
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
});

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
        console.log(err)
    })
});

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
    .catch(err => {
        res.status(500).json({
            error: 'Could not delete resource.'
        })
        console.log(err)
    })
});

module.exports = router;