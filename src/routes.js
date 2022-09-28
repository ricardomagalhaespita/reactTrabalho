// npm install react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cardapio from './pages/Cardapio';


function RoutesApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/sobre" element={ <Sobre/> } />
        <Route path="/cardapio" element={ <Cardapio/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp;