const mongoose = require('mongoose');
const task = mongoose.model('task');

exports.listAllTasks = (req, res) => {
  task.find({}, (err, tasks) => {
    if (err) res.send(err);
    res.json(tasks);
  });
};

exports.createTask = (req, res) => {
  const newTask = new task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.readTask = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateTask = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.deleteTask = (req, res) => {
  task.deleteOne({ _id: req.params.taskId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'task successfully deleted',
     _id: req.params.taskId
    });
  });
};