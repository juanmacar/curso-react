import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './contexts/cartContext';



function App() {

  return (

    <BrowserRouter>
      <BarraApp />
      <Switch>
        <CartContext.Provider value={"Juan"}>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/detalles">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/gratuitos">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/intensivos">
          <ItemDetailContainer/>
        </Route>
        </CartContext.Provider>
      </Switch>
    </BrowserRouter>
  );



}

export default App;
