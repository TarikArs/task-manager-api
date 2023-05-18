const Task = require("../models/Task");

// @desc    Get all tasks

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Create a task

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Get a task by id

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Update a task by id

const updateTaskById = async (req, res) => {
  try {
    const { name, description, status, dueDate } = req.body;

    const task = await Task.findById(req.params.id);

    if (task) {
      task.name = name;
      task.description = description;
      task.status = status;
      task.dueDate = dueDate;

      const updatedTask = await task.save();
      res.json(updatedTask);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc    Delete a task by id

const deleteTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (task) {
      await task.remove();
      res.json({ message: "Task removed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const searchTaskByName = async (req, res) => {
  try {
    const tasks = await Task.find({
      name: { $regex: req.query.q, $options: "i" },
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  searchTaskByName,
};
