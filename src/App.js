import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./components/drawer";
import routes from "./routes.config.json";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  pane: {
    flex: 1
  }
}));

export default function App({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer routes={routes} disableParentLink />
      <div className={classes.pane}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Theme
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
}
