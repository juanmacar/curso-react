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
const linkStyle = {"textDecoration": "none", "color" : "white", "padding" : "10px"}

const BarraApp = ()=> {
const classes = useStyles();

    return (
        <AppBar position="static" style={{background: "#17005e"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <NavLink style={linkStyle} to={`/`}><img src="https://juanmacarlupu.com/wp-content/uploads/2021/07/logo.png" alt="logo"/></NavLink>
          </Typography>
          <NavLink style={linkStyle} to={`/category/lengua`}>De lengua</NavLink>
          <NavLink style={linkStyle} to={`/category/especialidad`}>De especialización</NavLink>
          <NavLink style={linkStyle} to={`/category/marketing`}>De marketing</NavLink>
          <CartButton/>
        </Toolbar>
      </AppBar>
    )
};

export default BarraApp;