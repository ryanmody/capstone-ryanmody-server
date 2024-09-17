import express from "express";
import * as categoryController from "../controllers/category-controller.js";
import * as taskController from "../controllers/tasks-controller.js";

const router = express.Router();

// Category routes
router
  .route("/categories")
  .get(categoryController.getAllCategories);

// Tasks routes
router
   .route("/tasks")
   .get(taskController.getAllTasks);


export default router;