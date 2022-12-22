const AUTH_ERRORS = {
  TOKEN_NOT_CREATED: "Failed to create accessToken",
  TOKEN_NOT_PROVIDED: "Access token not provided",

  WRONG_ACCESS_TOKEN: "Wrong access token",
  WRONG_AUTH_DATA: "Wrong password or email",
  NOT_FOUND_USER: "User not found",
};

const TASK_ERRORS = {
  TASK_NOT_CREATED: "Failed to create task",
  TASK_NOT_DELETED: "Failed to delete task",
  TASK_NOT_UPDATED: "Failed to update task",
  NOT_FOUND_TASK: "Task not found",
};

const SERVER_ERROR = {
  FAILED_TO_HASH_PASSWORD: "Failed to hash password",
  THE_USER_IS_ALREADY_REGISTERED: "Such user already exists",
  NOT_FOUND: "Not found",
};

module.exports = {
  AUTH_ERRORS,
  SERVER_ERROR,
  TASK_ERRORS,
};
