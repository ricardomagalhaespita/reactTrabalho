// npm install react-router-dom
// Importando router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando componentes para essa pagina
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ListarCachorros from './pages/Cachorros';
import ImagensCachorros from './pages/Cachorros/imagens';
import Localizacao from './pages/Localizacao';



// Função da minha página
function RoutesApp(){

  // Visualização do usuário
  return(
     <BrowserRouter>
       <br />
       <Routes>
         <Route path="/" element={ <Home/> } />
         <Route path="/Sobre" element={ <Sobre/> } />
         <Route path="/Cachorros/" element={ <ListarCachorros/> } />
         <Route path="/Cachorros/imagens" element={ <ImagensCachorros/> } />
         <Route path="/Localizacao" element={ <Localizacao/> } />
       </Routes>
     </BrowserRouter>
  )
}


// Exportando essa função
export default RoutesApp;