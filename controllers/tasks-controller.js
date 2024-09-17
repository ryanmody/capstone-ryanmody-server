import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//Get all tasks
const getAllTasks = async (_req, res) => {
  try {
    const tasks = await knex("tasks")
        .select("*");

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export { getAllTasks };