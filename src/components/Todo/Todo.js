import { Button, Grid, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import "./styles.css";

const Todo = ({ toggleTodo, todo, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTodo);
    setIsEdit(false);
  };
  return (
    <Grid container className="Wrapper">
      {/* if your in trying to edit a todo, then show the input box with value pre populated */}
      {isEdit ? (
        <form onSubmit={handleUpdate} className={"FullWidthForm"}>
          <Grid item xs={8} className={"EditGrid"}>
            <TextField
              id="text-editTodo"
              inputProps={{ "data-testid": "textField-editTodo" }}
              label="Edit Todo"
              variant="outlined"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              style={{ width: "75%" }}
            />
            <Button type="submit" variant="contained">
              Save Todo
            </Button>
          </Grid>
        </form>
      ) : (
        <Grid item xs={8}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <li
              style={{ listStyleType: "none", cursor: "pointer" }}
              onClick={toggleTodo}
            >
              {todo}
            </li>
          </Typography>
        </Grid>
      )}

      {!isEdit && (
        <Grid item xs={4} className={"EditGrid"}>
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
        </Grid>
      )}
    </Grid>
  );
};

export default Todo;
