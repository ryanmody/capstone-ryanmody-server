import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//Post a new category
const postNewCategory = async(req,res) => {
  try {

    //Check if the body structure matches the existing structure
    // if (
    //   !req.body.name ||
    //   !req.body.color
    // ) {
    //   return res.status(400).json("Please provide all required item information");
    // }

    //Check if the cateory already exists
    // const categories = await knex ('categories')
    // if (categories.includes(req.body.name)) {
    //   return res.status(400).json("Category already exists!");
    // }

    const updatedCategories = await knex('categories').insert(req.body)

    res.status(201).json(updatedCategories[0]).end()
  } catch (error) {
    console.error(error)
  }
}

//Get all categories
const getAllCategories = async (_req, res) => {
  try {
    const categories = await knex("categories")
        .select("*");

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export { getAllCategories, postNewCategory };
