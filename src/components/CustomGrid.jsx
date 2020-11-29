import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Icon, Typography, useMediaQuery } from "@material-ui/core";
import { ReactComponent as HeartBeatIcon } from "../assets/heart-beat.svg";
import { ReactComponent as ConfirmIcon } from "../assets/confirm.svg";
import { ReactComponent as GraveIcon } from "../assets/grave.svg";

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
    fontWeight: 'bold'
  }
}));

export default function CustomGrid() {
  const classes = useStyles();
  const theme = useTheme();
  let val = "100%";
  if (useMediaQuery(theme.breakpoints.up("xl"))) {
    val = "80%";
  }
  if (useMediaQuery(theme.breakpoints.up("lg"))) {
    val = "90%";
  }

  return (
    <div className={classes.root}>
      <Box width={val}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box>
              <Paper className={classes.paper}>
                <Icon component={ConfirmIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Confirmed</Typography>
                <Typography className={classes.quan}>62369397</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box>
              <Paper className={classes.paper}>
                <Icon component={HeartBeatIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Recovered</Typography>
                <Typography className={classes.quan}>62369397</Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Box>
              <Paper className={classes.paper}>
                <Icon component={GraveIcon} className={classes.svgIco} />
                <Typography className={classes.typo}>Deaths</Typography>
                <Typography className={classes.quan}>62369397</Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
