import { Box, Container } from "@material-ui/core";
import "./App.css";
import { NavBar, CustomGrid, CovidChart } from "./listing";

function App() {
  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: 40 }}>
        <CustomGrid />
        <Box>
          <CovidChart />
        </Box>
      </Container>
    </div>
  );
}

export default App;
