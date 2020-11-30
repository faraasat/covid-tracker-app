import React, { Suspense } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {
  Box,
  ButtonBase,
  Icon,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { ReactComponent as RecoveredIcon } from "../assets/patient.svg";
import { ReactComponent as HospitalIcon } from "../assets/hospital.svg";
import { ReactComponent as DeathRateIcon } from "../assets/death.svg";
import { ShowPercent, LinearProgression } from "../listing";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBlockStart: 20,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  svgIco: {
    fontSize: 85,
  },
  typo: {
    fontSize: 21,
    color: "rgb(97, 247, 184)",
  },
  gap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
            <ButtonBase style={{ width: "100%" }}>
              <Paper
                elevation={5}
                style={{ width: "100%" }}
                className={classes.paper}
              >
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Icon component={HospitalIcon} className={classes.svgIco} />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    className={classes.gap}
                  >
                    <Typography variant="subtitle2" className={classes.typo}>
                      % of active Cases
                    </Typography>
                    <Suspense fallback={<LinearProgression />}>
                      <ShowPercent resource={resource} val="active" />
                    </Suspense>
                  </Grid>
                </Grid>
              </Paper>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ButtonBase style={{ width: "100%" }}>
              <Paper
                elevation={5}
                style={{ width: "100%" }}
                className={classes.paper}
              >
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Icon
                      component={RecoveredIcon}
                      className={classes.svgIco}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    className={classes.gap}
                  >
                    <Typography variant="subtitle2" className={classes.typo}>
                      Rate of Recovery
                    </Typography>
                    <Suspense fallback={<LinearProgression />}>
                      <ShowPercent resource={resource} val="perRecover" />
                    </Suspense>
                  </Grid>
                </Grid>
              </Paper>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ButtonBase style={{ width: "100%" }}>
              <Paper
                elevation={5}
                style={{ width: "100%" }}
                className={classes.paper}
              >
                <Grid container item xs={12} spacing={1}>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Icon
                      component={DeathRateIcon}
                      className={classes.svgIco}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    className={classes.gap}
                  >
                    <Typography variant="subtitle2" className={classes.typo}>
                      Rate of Death
                    </Typography>
                    <Suspense fallback={<LinearProgression />}>
                      <ShowPercent resource={resource} />
                    </Suspense>
                  </Grid>
                </Grid>
              </Paper>
            </ButtonBase>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
