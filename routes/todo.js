import express from "express";
import { createTodo, getTodo, updateTodo, deleteTodo } from "../controller/todo.js";

const router = express.Router();

router.route("/create").post(createTodo);
router.route("/get").get(getTodo);
router.route("/:todoId").put(updateTodo);
router.route("/:todoId").delete(deleteTodo);

export default router;  