import { Box, Container, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { DataContext } from "./data/dataContext";
import { fetchDailyData, fetchData } from "./data/dataFunctions";
import CreateResource from "./data/resource";
import { NavBar, CustomGrid, CovidChart, SmallGrid } from "./listing";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App({ hideLoader, showLoader }) {
  let resource = CreateResource(fetchData);
  let dailyData = CreateResource(fetchDailyData);
  let { data } = useContext(DataContext);

  let countryName;

  if (
    typeof data == "undefined" ||
    ((data.iso2 === null || "") && (data.fullUrl === null || ""))
  ) {
    countryName = "World - Wide";
  } else {
    countryName = data?.fullUrl + "'s";
  }

  useEffect(() => {
    hideLoader();
  });

  return (
    <div>
      <NavBar />
      <Typography
        style={{
          textAlign: "center",
          marginBlockStart: 30,
          marginBlockEnd: 0,
          fontSize: "4vw",
          fontFamily: "pacifico",
          textTransform: "uppercase",
          fontWeight: "700",
          color: "#f5f5f5",
          textShadow:
            "1px 1px 1px #999999, 1px 2px 1px #919191, 1px 3px 1px #919191, 1px 4px 1px #919191,1px 5px 1px #919191, 1px 6px 1px #919191, 1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191, 1px 10px 1px #919191, 1px 18px 6px rgba(16,16,16,0.4), 1px 22px 10px rgba(16,16,16,0.2), 1px 25px 35px rgba(16,16,16,0.2), 1px 30px 60px rgba(16,16,16,0.4)",
          marginBottom: 60,
        }}
      >
        {countryName}&nbsp;&nbsp;&nbsp;&nbsp;Corona&nbsp;&nbsp;Report
      </Typography>
      <Container style={{ marginTop: 20 }}>
        <CustomGrid resource={resource} />
        <SmallGrid resource={resource} />
        <Box>
          <CovidChart dailyData={dailyData} />
        </Box>
      </Container>
      <div>
        <ToastContainer limit={1} />
      </div>
    </div>
  );
}

export default App;
