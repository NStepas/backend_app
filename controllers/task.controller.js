const { TaskService } = require("../services/task.service");
const { errorHandler } = require("../middlewares/error-handler/error.handler");

const { TASK_ERRORS, SERVER_ERROR } = require("../common/enums/errors.enum");

const taskService = new TaskService();

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAllTasks();
    if (!tasks) {
      return await errorHandler(407, TASK_ERRORS.NOT_FOUND_TASK, res);
    }
    return res.status(200).json(tasks);
  } catch (e) {
    return await errorHandler(500, SERVER_ERROR.NOT_FOUND, res);
  }
};

const getTask = async (req, res, next) => {
  try {
    const task = await taskService.getTask(req.params);
    if (!task) {
      return await errorHandler(407, TASK_ERRORS.NOT_FOUND_TASK, res);
    }
    return res.status(200).json(task);
  } catch (e) {
    return await errorHandler(500, SERVER_ERROR.NOT_FOUND, res);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await taskService.updateTask(req.params.id, req.body);
    if (!updatedTask) {
      return errorHandler(501, TASK_ERRORS.TASK_NOT_UPDATED, res);
    }
    return res.status(201).json(updatedTask);
  } catch (err) {
    return errorHandler(500, TASK_ERRORS.TASK_NOT_UPDATED, res);
  }
};

const createTask = async (req, res, next) => {
  try {
    const createdTask = await taskService.createTask(req.body);
    return res.status(201).json(createdTask);
  } catch (err) {
    return await errorHandler(500, TASK_ERRORS.TASK_NOT_CREATED, res);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const defaultElm = await taskService.deleteTask(req.params);
    return res.status(200).json(defaultElm);
  } catch (err) {
    return await errorHandler(500, TASK_ERRORS.TASK_NOT_DELETED, res);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
