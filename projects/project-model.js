const db = require('../data/Config');

module.exports = {
    findProjects,
    findProjectById,
    createProject,
    editProject,
    deleteProject,
    findResources,
    findResourceById,
    createResource,
    editResource,
    deleteResource,
    findTasks,
    findTaskById,
    createTask,
    editTask,
    deleteTask
};

//projects
function findProjects() {
    return db('projects');
};

function findProjectById(id) {
    return db('projects').where({ id }).first();
};

function createProject(project) {
    return db('projects').insert(project);
};

function editProject(project, id) {
    return db('projects').where({ id }).update(project);
};

function deleteProject(id) {
    return db('projects').where({ id }).delete()
};
//resources
function findResources() {
    return db('resources');
};

function findResourceById(id) {
    return db('resources').where({ id }).first();
};

function createResource(resource) {
    return db('resources').insert(resource);
};

function editResource(resource, id) {
    return db('resources').where({ id }).update(resource);
};

function deleteResource(id) {
    return db('resources').where({ id }).delete()
};
//tasks
function findTasks() {
    return db('tasks');
};

function findTaskById(id) {
    return db('tasks').where({ id }).first();
};

function createTask(task) {
    return db('tasks').insert(task);
};

function editTask(task, id) {
    return db('tasks').where({ id }).update(task);
};

function deleteTask(id) {
    return db('tasks').where({ id }).delete()
};