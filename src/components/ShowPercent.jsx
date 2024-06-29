import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function ShowPercent({ resource, val }) {
  const data = resource.readData();
  const res =
    val === "active"
      ? ((data?.confirmed - data?.recovered - data?.deaths) / data?.confirmed) *
        100
      : val === "perRecover"
      ? (data?.recovered / data?.confirmed) * 100
      : (data?.deaths / data?.confirmed) * 100;

  return (
    <Typography
      style={{
        fontFamily: "Piedra",
        fontSize: 22,
        color: "DodgerBlue",
        letterSpacing: 2,
      }}
    >
      {res && res !== 0 ? (
        <CountUp
          start={0.0}
          duration={2.75}
          end={Math.round(res)}
          decimal="."
        />
      ) : (
        0
      )}
      &nbsp;%
    </Typography>
  );
}
