class TaskService {
  taskModel = require("../database/schemas/task.schema");

  async getTask({ id }) {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  async getAllTasks() {
    return this.taskModel.find();
  }

  async updateTask(id, payload) {
    return this.taskModel
      .findOneAndUpdate({ _id: id }, payload, { new: true })
      .exec();
  }

  async deleteTask({ id }) {
    return this.taskModel.deleteOne({ _id: id });
  }

  async createTask(payload) {
    return this.taskModel.create(payload);
  }
}

module.exports = { TaskService };
