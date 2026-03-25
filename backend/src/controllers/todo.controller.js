const ToDo = require("../models/todo.model");

const createTodo = async (req, res) => {
    try {
        const todo = await ToDo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await ToDo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTodo, getTodos };