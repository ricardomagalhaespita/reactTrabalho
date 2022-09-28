import {Link} from 'react-router-dom';

function Home() {
    return (
      <div>
        <li> Home </li>
       <li> <Link to="/sobre"> Sobre </Link> </li>
       <li> <Link to="/Cardapio"> Cardapio </Link> </li>
        
      </div>
    );
}
  
  
  export default Home;
  

