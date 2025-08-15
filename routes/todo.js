import express from "express";
import { createTodo, getTodo, updateTodo } from "../controller/todo.js";

const router = express.Router();

router.route("/create").post(createTodo);
router.route("/get").get(getTodo);
router.route("/:todoId").put(updateTodo);

export default router;  