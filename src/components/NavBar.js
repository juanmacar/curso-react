import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const BarraApp = ()=> {
const classes = useStyles();

    return (
        <AppBar position="static" style={{background: "#17005e"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <NavLink style={{"textDecoration": "none", "color" : "white"}} to={`/`}><img src="images/logo.png" alt="logo"/></NavLink>
          </Typography>
          <CartButton/>
        </Toolbar>
      </AppBar>
    )
};

export default BarraApp;