const express = require('express');

const projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
    projects.findTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({
            error: 'Failed to get tasks.'
        })
        console.log(err)
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    projects.findTaskById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ 
            message: 'Could not find task with given id.' 
        })
      }
    })
    .catch(err => {
        res.status(500).json({ 
            message: 'Failed to get task' 
        });
        console.log(err)
    })
});

router.post('/', (req, res) => {
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

    projects.editTask(response, id)
    .then(update => {
        res.status(200).json(update)
    })
    .catch(err => {
        res.status(500).json({
            error: 'Could not update task.'
        })
        console.log(err)
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    projects.deleteTask(id)
    .then(task => {
        if (task) {
            res.status(200).json({removed: task});
        } else {
            res.status(404).json({
                error: 'Could not find task with that id.'
            })
        }
    })        
    .catch(err => {
        res.status(500).json({
            error: 'Could not delete task.'
        })
        console.log(err)
    })
})

module.exports = router;