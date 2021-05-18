import './App.css';
import BarraApp from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
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
