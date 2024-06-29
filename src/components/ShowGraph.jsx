import { Line } from "react-chartjs-2";

export default function ShowGraph({ dailyData }) {
  const { resData, data } = dailyData?.readData() || {
    resData: [],
    data: "None",
  };

  let idx = [],
    act = [],
    conf = [],
    rec = [],
    dea = [];
  let myDate = new Date("2020-01-21");
  if (data === "None") {
    resData?.map((data, index) => {
      myDate.setDate(myDate.getDate() + 1);
      idx[index] =
        myDate.toDateString().split(" ")[2] +
        " " +
        myDate.toDateString().split(" ")[1] +
        " " +
        myDate.toDateString().split(" ")[3];
      act[index] =
        Number(data?.TotalConfirmed) +
        Number(data?.NewConfirmed) -
        Number(data?.TotalDeaths) -
        Number(data?.NewDeaths) +
        Number(data?.NewRecovered) -
        Number(data?.TotalRecovered);
      conf[index] = data?.TotalConfirmed;
      rec[index] = data?.TotalRecovered;
      dea[index] = data?.TotalDeaths;
      return { act, conf, rec, dea };
    });
  } else {
    resData?.map((data, index) => {
      myDate.setDate(myDate.getDate() + 1);
      idx[index] =
        myDate.toDateString().split(" ")[2] +
        " " +
        myDate.toDateString().split(" ")[1] +
        " " +
        myDate.toDateString().split(" ")[3];
      act[index] = data?.Active;
      conf[index] = data?.Confirmed;
      rec[index] = data?.Recovered;
      dea[index] = data?.Deaths;
      return { act, conf, rec, dea };
    });
  }

  const datum = {
    labels: idx,

    datasets: [
      {
        label: "Active",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 216, 0,0.4)",
        borderColor: "rgba(255, 216, 0,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(255, 216, 0,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(255, 216, 0,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: act,
      },
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
        data: conf,
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
        data: rec,
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
        data: dea,
      },
    ],
  };

  return (
    <div>
      <Line data={datum} />
    </div>
  );
}
