import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import CartWidget from "./CartWidget";


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
          <Typography variant="h5" className={classes.title}>
            Juan Macarlupu - Capacitación para traductores
          </Typography>
          <Button color="inherit">Cursos gratuitos</Button>
          <Button color="inherit">Cursos intensivos</Button>
          <Button color="inherit">Trayecto de formación</Button>
          <Button color="inherit">Cursos regulares</Button>
          <CartWidget/>
        </Toolbar>
      </AppBar>
    )
};

export default BarraApp;