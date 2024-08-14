const express = require("express");
const router = express.Router();
const { getTodos, createTodo, editTodo, deleteTodo } = require("../controllers/todo.controller");

router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", editTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
