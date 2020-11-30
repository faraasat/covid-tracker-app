import React, { Suspense } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Icon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as HeartBeatIcon } from "../assets/heart-beat.svg";
import { ReactComponent as ConfirmIcon } from "../assets/confirm.svg";
import { ReactComponent as GraveIcon } from "../assets/grave.svg";
import { Spinner } from "../listing";
import PrintData from "./PrintData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  svgIco: {
    fontSize: 90,
    marginTop: 20,
  },
  typo: {
    fontFamily: "Alfa Slab One",
    fontSize: 23,
    marginBlockStart: 10,
    letterSpacing: 3,
    color: "teal",
  },
  quan: {
    fontSize: 17,
    fontWeight: "bold",
    height: 80,
  },
}));

export default function CustomGrid({ resource }) {
  const classes = useStyles();
  const theme = useTheme();
  let val = "100%";
  if (useMediaQuery(theme.breakpoints.up("sm"))) {
    val = "67%";
  }
  if (useMediaQuery(theme.breakpoints.up("xl"))) {
    val = "80%";
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    val = "90%";
  }
  if (useMediaQuery(theme.breakpoints.up("md"))) {
    val = "100%";
  }

  return (
    <div className={classes.root}>
      <Box width={val}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box>
              <Paper elevation={7} className={classes.paper}>
                <Icon component={ConfirmIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Confirmed</Typography>
                <Suspense fallback={<Spinner />}>
                  <PrintData
                    resource={resource}
                    classes={classes.quan}
                    val="confirmed"
                  />
                </Suspense>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box>
              <Paper elevation={7} className={classes.paper}>
                <Icon component={HeartBeatIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Recovered</Typography>
                <Suspense fallback={<Spinner />}>
                  <PrintData
                    resource={resource}
                    classes={classes.quan}
                    val="Recovered"
                  />
                </Suspense>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Box>
              <Paper elevation={7} className={classes.paper}>
                <Icon component={GraveIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Deaths</Typography>
                <Suspense fallback={<Spinner />}>
                  <PrintData
                    resource={resource}
                    classes={classes.quan}
                    val="Death"
                  />
                </Suspense>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
