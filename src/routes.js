// npm install react-router-dom
// Importando router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando componentes para essa pagina
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cardapio from './pages/Cardapio';


// Função da minha página
function RoutesApp(){

  // Visualização do usuário
  return(
     <BrowserRouter>
       <br />
       <Routes>
         <Route path="/" element={ <Home/> } />
         <Route path="/sobre" element={ <Sobre/> } />
         <Route path="/cardapio" element={ <Cardapio/> } />
       </Routes>
     </BrowserRouter>
  )
}


// Exportando essa função
export default RoutesApp;