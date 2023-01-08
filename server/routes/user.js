import { Router } from "express";
import {createUser, getUsers, insertManyUsers, deleteUser} from "../controller/userController.js"

const router = Router();

router.post("/create-user", createUser)
router.get("/get-user", getUsers)
router.post("/inset-many-user", insertManyUsers)
router.delete("/delete-user/:id", deleteUser)




export default router