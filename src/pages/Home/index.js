import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
      <li> Home </li>
       <li> <Link to="/Sobre"> Sobre </Link> </li>
       <li> <Link to="/Cachorros"> Listar cães </Link> </li>
       <li> <Link to="/Cachorros/imagens"> Imagens alteatórias </Link> </li>
       <li> <Link to="/Localizacao"> Localização </Link> </li>
      </div>
    );
}
  
  
  export default Home;
  

