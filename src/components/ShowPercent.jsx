import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function ShowPercent({ resource, val }) {
  const data = resource.readData();
  const res =
    val === "active"
      ? ((data?.confirmed?.value -
          data?.recovered?.value -
          data?.deaths?.value) /
          data?.confirmed?.value) *
        100
      : val === "perRecover"
      ? (data?.recovered?.value / data?.confirmed?.value) * 100
      : (data?.deaths?.value / data?.confirmed?.value) * 100;

  return (
    <Typography
      style={{
        fontFamily: "Piedra",
        fontSize: 22,
        color: "DodgerBlue",
        letterSpacing: 2,
      }}
    >
      <CountUp start={0.0} duration={2.75} end={Math.round(res)} decimal="." />
      &nbsp;%
    </Typography>
  );
}
