import express from "express";
import dotenv from "dotenv";
import {connect} from "mongoose";
import cors from "cors";    
import user from "./routes/user.js"


dotenv.config();


const app = express();
app.use(cors())

app.use(express.json());
app.use('/',user)
connect(process.env.DATABASE, () => {
    app.listen(process.env.PORT,()=>{console.log(`server listening on port ${process.env.PORT}`)})
})
