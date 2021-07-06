import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './contexts/CartContext';
import CartWidget from './components/CartWidget';



function App() {

  return (

    <BrowserRouter>
      <CartContextProvider>
      <BarraApp key={1}/>
      <Switch key={2}>
        <Route exact path="/" key={1}>
          <ItemListContainer/>
        </Route>
        <Route exact path="/detalles" key={2}>
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/detalles/:idurl" key={3}>
          <ItemDetailContainer/>
        </Route>        
        <Route exact path="/cart" key={6}>
          <CartWidget />
        </Route>
      </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );



}

export default App;
