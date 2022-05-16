import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

const Todo = ({ toggleTodo, todo, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);
  const handleUpdate = (e) => {
    // console.log("test test");
    e.preventDefault();
    // console.log('id: ', id, 'editTodo: ', editTodo)
    updateTodo(id, editTodo);
    setIsEdit(false);
  };
  console.log('----- editTodo', editTodo)
  return (
    <>
      {isEdit ? (
        <form onSubmit={handleUpdate}>
          <TextField
            id="text-editTodo"
            label="Edit Todo"
            variant="outlined"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Save Todo
          </Button>
        </form>
      ) : (
        <Typography
          variant="body2"
          gutterBottom
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          <li onClick={toggleTodo}>{todo}</li>
        </Typography>
      )}

      <div>
        <Button
          variant="outlined"
          onClick={() => setIsEdit(true)}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={removeTodo}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Todo;
