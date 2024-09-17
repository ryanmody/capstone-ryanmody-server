import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 8081;
import GoalKeepRoutes from './routes/GoalKeepRoutes.js'
import cors from "cors";

app.use(cors())

app.use(express.json()); 
// app.use(express.static("")); 

app.use("/", GoalKeepRoutes);

app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})