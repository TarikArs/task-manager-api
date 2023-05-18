const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController");

/** Routes */
router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTaskById);
router.delete("/:id", taskController.deleteTaskById);
router.get("/search/:name", taskController.searchTaskByName);

module.exports = router;
