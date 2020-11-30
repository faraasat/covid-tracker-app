import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function ShowPercent({ resource, val }) {
  const { confirmed, recovered, deaths } = resource.readData();
  const data =
    val === "active"
      ? ((confirmed - recovered - deaths) / confirmed) * 100
      : val === "perRecover"
      ? (recovered / confirmed) * 100
      : (deaths / confirmed) * 100;

  return (
    <Typography style={{ fontFamily: "Piedra", fontSize: 22, color: 'DodgerBlue', letterSpacing: 2 }}>
      <CountUp start={0.0} duration={2.75} end={Math.round(data)} decimal="." />
      &nbsp;%
    </Typography>
  );
}
