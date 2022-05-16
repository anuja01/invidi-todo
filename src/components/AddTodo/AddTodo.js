import { Button, FormControl, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

const AddTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit} className="AddTodoForm">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              id="text-enterTodo"
              inputProps={{ "data-testid": "textField-addTodo" }}
              label="Enter Todo"
              variant="outlined"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button type="submit" variant="contained">
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
