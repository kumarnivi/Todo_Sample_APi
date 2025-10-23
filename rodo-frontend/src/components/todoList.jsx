import React from "react";


const TodoList = ({ todos }) => {
  if (!todos || todos.length === 0) {
    return <p>Todos Not Found</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id} style={{ border: "1px solid white", margin: "10px", padding: "10px" }}>
          <h3>{todo.title}</h3>
          <p>{todo.completed}</p>
        </div>
      ))}
    </div>
  );
};


export default TodoList;