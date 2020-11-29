import { Typography } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Confirmed",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(87, 255, 90,0.4)",
      borderColor: "rgba(87, 255, 90,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(87, 255, 90,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(87, 255, 90,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 45, 56, 55, 23],
    },
    {
      label: "Recovered",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(87, 104, 255,0.4)",
      borderColor: "rgba(87, 104, 255,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(87, 104, 255,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(87, 104, 255,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [78, 59, 34, 81, 56, 55, 40],
    },
    {
      label: "Death",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(255, 20, 20,0.4)",
      borderColor: "rgba(255, 20, 20,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(255, 20, 20,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(255, 20, 20,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 76, 80, 81, 87, 55, 40],
    },
  ],
};

export default function CovidChart() {
  return (
    <div style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}>
      <Typography
        variant="h3"
        style={{ marginBottom: 20, fontWeight: "bold", color: "violet" }}
      >
        Covid Chart
      </Typography>
      <Line data={data} />
    </div>
  );
}
