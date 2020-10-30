const taskBuilder = require('../controllers/taskController');

module.exports = app => {
  app
    .route('/tasks')
    .get(taskBuilder.listAllTasks)
    .post(taskBuilder.createTask);

  app
    .route('/tasks/:taskId')
    .get(taskBuilder.readTask)
    .put(taskBuilder.updateTask)
    .delete(taskBuilder.deleteTask);
};