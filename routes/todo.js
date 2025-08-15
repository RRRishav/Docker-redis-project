import express from "express";
import { createTodo, getTodo, updateTodo, deleteTodo } from "../controller/todo.js";
import isAuth from "../middleware/isAuth.js";
const router = express.Router();

router.route("/create").post(isAuth, createTodo);
router.route("/get").get(isAuth, getTodo);
router.route("/:todoId").put(isAuth, updateTodo);
router.route("/:todoId").delete(isAuth, deleteTodo);

export default router;  