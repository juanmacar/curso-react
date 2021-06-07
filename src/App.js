import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './contexts/cartContext';



function App() {

  return (

    <BrowserRouter>
      <BarraApp />
      <Switch>
        <CartContextProvider>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/detalles">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/detalles/:idurl">
          <ItemDetailContainer/>
        </Route>        
        <Route exact path="/gratuitos">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/intensivos">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
        </Route>
        </CartContextProvider>
      </Switch>
    </BrowserRouter>
  );



}

export default App;
