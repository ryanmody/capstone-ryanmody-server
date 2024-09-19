import express from "express";
import * as categoryController from "../controllers/category-controller.js";
import * as taskController from "../controllers/tasks-controller.js";
import * as monthsController from "../controllers/months-controller.js";

const router = express.Router();

// Category routes
router
  .route("/categories")
  .get(categoryController.getAllCategories)
  .post(categoryController.postNewCategory);

// Tasks routes
router
   .route("/tasks")
   .get(taskController.getAllTasks)
   .post(taskController.postNewTask);

router
  .route("/:month/tasks")
  .get(taskController.getTasksForMonth)

router
  .route("/:month/:date/tasks")
  .get(taskController.getTasksForDay)

// Months routes
router
.route("/months")
.get(monthsController.getAllMonths);


export default router;