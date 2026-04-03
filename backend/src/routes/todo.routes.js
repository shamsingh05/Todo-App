const express = require("express");

const router = express.Router();
const{getTodos, createTodo, deleteTodo, updateTodo} = require("../controllers/todo.controller");
const {validateToDo} = require("../middleware/validateTodo.middleware");
const auth = require("../middleware/auth.middleware");

router.get("/",getTodos)
router.post("/", validateToDo, createTodo);
router.put("/:id",updateTodo)
router.delete("/:id", deleteTodo);

module.exports = router; 