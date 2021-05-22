import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';

//import React, { useState } from 'react';




function App() {

  return (


    <div className="App">
      <BarraApp />
      <ItemListContainer nombre="Juan"/>
      <ItemCount cantidad={1} stock={10}/>
      <Item />
      </div>
  );



}

export default App;
