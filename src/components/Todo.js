import { Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

const Todo = ({ toggleTodo, todo, completed, id }) => {
  console.log("---- completed", completed);
  return (
    <>
      <li onClick={toggleTodo}>
        {completed ? (
          <Typography variant="body2" gutterBottom>
            {todo} done
          </Typography>
        ) : (
          <Typography variant="subtitle2" gutterBottom component="div">
            {todo}
          </Typography>
        )}
      </li>
      <div>
        <Button variant="outlined" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Todo;
