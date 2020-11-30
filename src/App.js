import { Box, Container, Typography } from "@material-ui/core";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { DataContext } from "./data/dataContext";
import { fetchData } from "./data/dataFunctions";
import CreateResource from "./data/resource";
import { NavBar, CustomGrid, CovidChart, SmallGrid } from "./listing";

function App() {
  let resource = CreateResource(fetchData);
  let { data } = useContext(DataContext);
  if (typeof data == "undefined") {
    data = { fullUrl: "World Wide" };
  }

  return (
    <div>
      <NavBar />
      <Typography
        style={{
          textAlign: "center",
          marginBlockStart: 30,
          marginBlockEnd: 0,
          fontSize: "4vw",
          fontFamily: "Monoton",
          textTransform: "uppercase",
          fontWeight: "700",
          color: "#f5f5f5",
          textShadow:
            "1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)",
          marginBottom: 60,
        }}
      >
        {data?.fullUrl} Corona Report
      </Typography>
      <Container style={{ marginTop: 20 }}>
        <CustomGrid resource={resource} />
        <SmallGrid resource={resource} />
        <Box>
          <CovidChart />
        </Box>
      </Container>
      <div>
        <ToastContainer limit={1} />
      </div>
    </div>
  );
}

export default App;
