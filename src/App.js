import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

//import React, { useState } from 'react';




function App() {

  return (


    <div className="App">
      <BarraApp />
      <ItemListContainer nombre="Juan"/>
      </div>
  );



}

export default App;
