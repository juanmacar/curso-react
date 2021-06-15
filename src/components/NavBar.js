import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
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
        <AppBar position="static" style={{background: "#e6b960"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <NavLink to={`/`}>Juan Macarlupu</NavLink>
          </Typography>
          <NavLink to={`/gratuitos`}><Button color="inherit">Cursos gratuitos</Button></NavLink>
          <NavLink to={`/intensivos`}><Button color="inherit">Cursos intensivos</Button></NavLink>
          <CartButton/>
        </Toolbar>
      </AppBar>
    )
};

export default BarraApp;