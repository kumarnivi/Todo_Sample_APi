import  { useState, useEffect } from "react";
import TodoList from "../components/todoList.jsx";
import {getAllTodos, createTodo} from "../api/todoApi.js";

const Homepage = () => {
 const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

//  write the function of the Fetch all Todos 
const fetchtodos = async () => {
 try {
    const res =  await getAllTodos();
    setTodos(res.data) 
    console.log(res.data, "TodoList")
} catch (error) {
    console.error (error)
}
}
useEffect ( () => {
    fetchtodos();
},[])
    
// Create Todo 
const handleAdd = async (e) => {
    e.preventDefault();
    await createTodo({ title });
    setTitle("");
    fetchtodos();
  };
  
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <h1>Todo List</h1> 
        {/* Render your todo list component here */}
        <TodoList todos = {todos} />


        {/* todo Form */}
        <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Homepage;
