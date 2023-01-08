import { Router } from "express";
import {createUser, getUsers} from "../controller/userController.js"

const router = Router();

router.post("/create-user", createUser)
router.get("/get-user",getUsers)



export default router