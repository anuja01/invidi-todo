import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          TODO list
        </Typography>
        <TodoList />
        {/* <ProTip /> */}
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}

export default App;
