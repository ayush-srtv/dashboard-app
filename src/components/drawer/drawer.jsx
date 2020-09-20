import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
// import ExpandLess from "@material-ui/icons/ExpandLess";
// import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    position: "absolute",
    bottom: 0,
    width: "100%",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(10)
  }
}));

function SubMenu({ route, classes }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <ListItem
        button
        component={Link}
        to={route.route}
        value={route.route}
        onClick={handleOpen}
      >
        <ListItemIcon>
          {route.icon && <Icon color="primary">{route.icon}</Icon>}
        </ListItemIcon>
        <ListItemText primary={route.title} />
        {route.children &&
          (open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>)}
      </ListItem>
      {route.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.children.map((element, key) => (
              <ListItem
                button
                key={key}
                component={Link}
                to={element.route}
                value={element.route}
                className={classes.nested}
              >
                <ListItemText primary={element.title} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

function CustomDrawer({ routes = [] }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleToggleDrawer = () => setOpen(!open);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <Divider />
      <List>
        {routes.map((route, index) => (
          <SubMenu route={route} classes={classes} key={index} />
        ))}
      </List>
      <div className={classes.toolbar} onClick={handleToggleDrawer}>
        <IconButton>
          {open ? <Icon>chevron_left</Icon> : <Icon>chevron_right</Icon>}
        </IconButton>
      </div>
    </Drawer>
  );
}

export default CustomDrawer;
