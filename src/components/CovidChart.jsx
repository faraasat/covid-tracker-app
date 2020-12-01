import { Typography } from "@material-ui/core";
import React, { Suspense } from "react";
import { HashLoader } from "react-spinners";
import { ShowGraph } from "../listing";
import AnimatedLoader from "./AnimatedLoader";

export default function CovidChart({ dailyData }) {
  return (
    <div
      style={{ marginTop: "50px", marginBottom: "50px", textAlign: "center" }}
    >
      <Typography
        variant="h3"
        style={{
          marginBottom: 40,
          marginTop: 60,
          fontWeight: "bold",
          // background: "linear-gradient(to right, #6190e8, #a7bfe8)",
          // background: "linear-gradient(to right, #4568dc, #b06ab3)",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(249,112,0,1) 31%, rgba(247,230,35,1) 45%, rgba(113,255,0,1) 55%, rgba(49,200,224,0.40689779329700626) 66%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "pacifico",
          fontSize: "8vw",
          letterSpacing: 7,
        }}
      >
        Covid Chart
      </Typography>
      <Suspense
        fallback={
          <AnimatedLoader
            loading={true}
            color={"blue"}
            Type={HashLoader}
            size={"40vw"}
          />
        }
      >
        <ShowGraph dailyData={dailyData} />
      </Suspense>
    </div>
  );
}
