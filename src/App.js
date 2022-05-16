import { Box, Container, Typography } from "@mui/material";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;
