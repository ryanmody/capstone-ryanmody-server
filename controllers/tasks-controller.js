import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//Get tasks based on month
const getTasksForMonth = async (req, res) => {
  const month = req.params.month

  try {
    const tasksByMonth = await knex("tasks")
    .select("*")
    .where("month", month)

    res.status(200).json(tasksByMonth);
  } catch (error) {
    console.error(error)
  }
}


//Get all tasks
const getAllTasks = async (_req, res) => {
  try {
    const tasks = await knex("tasks")
        .join('categories', 'tasks.category_id', '=', 'categories.id')
        .select(
            "tasks.id",
            "category_id",
            "tasks.name",
            "tasks.description",
            "month",
            "date",
            "color"
            )

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export { getAllTasks, getTasksForMonth };