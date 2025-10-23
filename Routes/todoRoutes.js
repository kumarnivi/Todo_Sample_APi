import express from "express";
import {
  createTodo ,
  getAllTodos ,
  getTodoById ,
  deleteTodoById,
  updateTodoById,
 bulkCreateTodos
} from "../controllers/toodController.js";

const router = express.Router();
export default router;

// Define routes


router.post("/", createTodo);
router.post("/bulk", bulkCreateTodos);
router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodoById);
