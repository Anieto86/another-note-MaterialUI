import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import AddCircleOutlineOutlined from "@material-ui/icons/AddCircleOutlineOutlined";
import SubjectOutlined from "@material-ui/icons/SubjectOutlined";
import { useHistory, useLocation } from "react-router-dom";
import { format } from "date-fns";

const useStyle = makeStyles({
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: 240,
  },
  drawerPaper: {
    width: 240,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  appbar: {
    width: "87%",
  },
  toolbar: {
    marginTop: 90,
  },
  apptitle: {
    align: "alignCenter",
  },
});

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Crate Note",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/create",
  },
];

//desectructurar el children y pasarlo como prop me permite rederizar todo los que wrap el component <Layout>
export default function Layout({ children }) {
  const history = useHistory();
  const location = useLocation();

  console.log(location.pathname);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5">
            Today is {format(new Date(), "do MMMM Y")}
          </Typography>
        </Toolbar>
      </AppBar>

      {/*classes allow to overwrite the css classes builded in MaterialUI */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h4" className={classes.apptitle}>
            Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((items) => (
            <ListItem
              key={items.text}
              button
              onClick={() => history.push(items.path)}
              className={
                location.pathname === items.path ? classes.active : null
              }
            >
              <ListItemIcon>{items.icon}</ListItemIcon>
              <ListItemText>{items.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        {/* para bajar las notas despues del toolbar */}
        <div className={classes.toolbar}>{children}</div>
      </div>
    </div>
  );
}
