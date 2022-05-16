import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo)
    createTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="text-enterTodo"
        label="Enter Todo"
        variant="outlined"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit" variant="contained">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
