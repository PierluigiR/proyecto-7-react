
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Inicio from './components/inicio';
import Discografia from './components/discografia';
import Noticias from './components/noticias';
import News from './components/Noticias/News';
import NavBarEjemplo from './layouts/navbar';


import "./imagenes/chemical-01.jpg";
import "./imagenes/chemical-02.jpg";



function App() {
  return (
    <div className="App">
      
      <NavBarEjemplo/>
      <Routes>
        
        <Route path='/' element={ <Inicio />} />
        <Route path='inicio' element={ <Inicio />} />
          <Route path='noticias' element={ <Noticias />} />
           
          <Route path='discografia' element={ <Discografia />} />
          
        
      </Routes>
      
      
      
    </div>
  );
}

export default App;
