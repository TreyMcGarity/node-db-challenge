const express =require('express');
const PORT = process.env.PORT || 5000;

const projectRouter = require('./projects/project-router');
const resourceRouter = require('./projects/resources-router');
const taskRouter = require('./projects/tasks-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);


server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
