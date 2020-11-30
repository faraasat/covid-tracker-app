import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

export default function PrintData({ resource, classes, val }) {
  const { confirmed, recovered, deaths, lastUpdate } = resource.readData();
  let date = new Date(lastUpdate?.split("T")[0]).toDateString();
  const time = new Date(lastUpdate).toTimeString("hh:mm:ss");
  let fullTime = time.split(" ")[0];
  let gmt = time.split(" ")[1];
  if (fullTime === "Invalid" || date === "Invalid" || gmt === "Invalid") {
    date = "No Date To show";
    fullTime = "00:00:00";
  }

  return (
    <>
      <Typography className={classes}>
        <CountUp
          start={0}
          end={
            val === "confirmed"
              ? confirmed
              : val === "Recovered"
              ? recovered
              : deaths
          }
          duration={2.5}
          separator=","
        />
        <br />
        <span
          style={{
            fontWeight: "bolder",
            fontFamily: "Staatliches",
            color: "skyblue",
            letterSpacing: 2,
          }}
        >
          Last Updated:&nbsp;&nbsp;
        </span>
        {date}
        <br />
        <span
          style={{
            fontWeight: "bolder",
            fontFamily: "Staatliches",
            color: "skyblue",
            letterSpacing: 2,
          }}
        >
          At:&nbsp;&nbsp;
        </span>
        {fullTime + " " + gmt}
      </Typography>
    </>
  );
}
