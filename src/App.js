import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App(props) {


  const [texto, setTexto] = useState([])

  const actualizarTextos = (generator) => {
    console.log(generator)
    setTexto([
      ...texto,
      generator
    ])
  }

  return (
    <div className="App">
      <Header
        src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
      />
      <MemeGenerator
        actualizarTextos={actualizarTextos}
      />
    </div>
  );
}

export default App;
