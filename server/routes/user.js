import { Router } from "express";
import {createUser, getUsers, insertManyUsers} from "../controller/userController.js"

const router = Router();

router.post("/create-user", createUser)
router.get("/get-user", getUsers)
router.post("/inset-many-user",insertManyUsers)




export default router