import { Box, Container } from "@mui/material";
import TodoList from "./pages/TodoList";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <Container maxWidth="md" className="App">
      <Box sx={{ my: 4 }}>
        <ErrorBoundary>
          <TodoList />
        </ErrorBoundary>
      </Box>
    </Container>
  );
}

export default App;
