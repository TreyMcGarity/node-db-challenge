const express =require('express');
const PORT = process.env.PORT || 5000;

const projectRouter = require('./projects/project-router');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
