import { Box, Container } from "@mui/material";
import TodoList from "./pages/TodoList";
import './App.css'
function App() {
  return (
    <Container maxWidth="md" className="App">
      <Box sx={{ my: 4 }}>
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;
