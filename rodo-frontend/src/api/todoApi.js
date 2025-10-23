import axios from "axios";  

const API_URL = "http://localhost:5000";

const getAllTodos = () => axios.get(`${API_URL}/api/todos`)
const createTodo = (todo) => axios.post(`${API_URL}/api/todos`, todo);

export {getAllTodos, createTodo};