import React, { useContext, useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import { CountrySelector } from "../listing";
import { Button, Container } from "@material-ui/core";
import { DataContext } from "../data/dataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexGrow: 2,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  btn: {
    padding: 10,
  },
  mid: {
    flexGrow: 2,
  },
  media: {
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 0,
      minHeight: 130,
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      minHeight: 90,
    },
  },
}));

export default function NavBar() {
  const [loc, setLoc] = useState({});
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const { manageCountryData } = useContext(DataContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((data) => {
        setLoc(data);
      });
    setLoading(false);
  }, [setLoc]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.media}>
            <Typography className={classes.title} variant="h6" noWrap>
              COVID-19 Tracker App
            </Typography>
            <div className={classes.mid}>
              {loading ? (
                <h1>loading...</h1>
              ) : (
                <>
                  {loc.country && (
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btn}
                      onClick={() =>
                        manageCountryData({
                          iso2: loc.countryCode,
                          fullUrl: loc.country,
                        })
                      }
                    >
                      Click to Switch to Your Location to {loc.country}
                    </Button>
                  )}
                </>
              )}
            </div>
            <div className={classes.search}>
              <CountrySelector />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
