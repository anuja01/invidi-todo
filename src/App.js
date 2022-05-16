import { Box, Container } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="md" style={{backgroundColor: 'beige', minHeight: '100vh', padding: '20px'}}>
      <Box sx={{ my: 4 }}>
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;
