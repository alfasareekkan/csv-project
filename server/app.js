import express from "express";
import dotenv from "dotenv";
import {connect} from "mongoose";

dotenv.config();


const app = express();

connect(process.env.DATABASE, () => {
    app.listen(process.env.PORT,()=>{console.log(`server listening on port ${process.env.PORT}`)})
})
