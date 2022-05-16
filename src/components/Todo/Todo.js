import {
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import './styles.css'

const Todo = ({ toggleTodo, todo, completed, id, removeTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateTodo(id, editTodo);
    setIsEdit(false);
  };
  return (
    <Grid
      container
      className="Wrapper"
    >
      {/* if your in trying to edit a todo, then show the input box with value pre populated */}
      {isEdit ? (
        <form onSubmit={handleUpdate} style={{ width: "100%" }}>
          <Grid
            item
            xs={8}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <TextField
              id="text-editTodo"
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
            variant="body2"
            gutterBottom
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <li style={{ listStyleType: "none", cursor: 'pointer' }} onClick={toggleTodo}>
              <Typography variant="h6" gutterBottom component="div">
                {todo}
              </Typography>
            </li>
          </Typography>
        </Grid>
      )}

      {!isEdit && (
        <Grid
          item
          xs={4}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
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
