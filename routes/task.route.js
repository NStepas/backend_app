const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task.controller");
const isAuth = require("../middlewares/auth/is.auth");

router.get("/allTasks", isAuth, taskController.getAllTasks);

router.get("/:id", isAuth, taskController.getTask);

router.patch("/:id", isAuth, taskController.updateTask);

router.delete("/:id", isAuth, taskController.deleteTask);

router.post("/create-task", isAuth, taskController.createTask);

module.exports = router;
