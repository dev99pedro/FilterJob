import Navbar from './components/Navbar/Navbar';
import './App.css';
import Card from './components/Cards/Cards';
import Input from './components/Input/Input';
import { Context } from './components/ContextApi/Context';
import Data from '../src/assets/data.json'
import { useState, useEffect } from 'react';

//fazer o estilo do card e deixar pronto
//retornar todos eles com o estilo pronto na api

function App() {

  const [job, setJob] = useState([])

  useEffect(() => {
    setJob(Data)
  }, [])
  return (
    <div className="App">
      <Context.Provider value={{ job, setJob }}>
        <Navbar></Navbar>
        <Card></Card>
      </Context.Provider>
    </div>
  );
}

export default App;
