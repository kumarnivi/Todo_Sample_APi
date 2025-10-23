
import Todo from '../Models/todo.js';
import mongoose from 'mongoose';

const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: "Error creating todo", error });
    }
};

const bulkCreateTodos = async (req, res) => {
    try {
        const todosData = req.body.todos; // expects { "todos": [{ "title": "Task1" }, { "title": "Task2" }] }

        if (!Array.isArray(todosData) || todosData.length === 0) {
            return res.status(400).json({ message: "Please provide an array of todos" });
        }

        const createdTodos = await Todo.insertMany(todosData);
        res.json({
            message: `${createdTodos.length} tasks added successfully!`,
            todos: createdTodos,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
};

const getTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todo", error });
    }
};

const updateTodoById = async (req, res) => {
     try {
        const { id } = req.params;

        //  Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Todo ID" });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                completed: req.body.completed,
                updatedAt: Date.now(),
            },
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json({ message: "Task updated successfully!", todo: updatedTodo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTodoById = async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
};

export { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById, bulkCreateTodos };