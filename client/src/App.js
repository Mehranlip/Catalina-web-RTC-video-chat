import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./App.css"



import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";



const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    color: "white",


    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBar id="Appbar" className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Catalina Video Chat
        </Typography>
      </AppBar>

      < VideoPlayer />

      <Options >
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
