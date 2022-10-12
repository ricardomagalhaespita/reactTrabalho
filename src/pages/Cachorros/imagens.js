// Importando função nativas do react js
import React, { useState } from 'react';

// Importando componentes do bootstrap
import Card  from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


// Funão principal da minha página
function Imagens() {

  // Criando variaveis
  //const [imagens, setImagens] = useState('');
  const imagens = 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg';

  // Após o carregamento da página executar essa função
  // Estamos consumindo uma API
  // useEffect (()=>{
  //   let url = "https://dog.ceo/api/breed/hound/images";

  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((json) => {
  //       setImagens(json.message);
  //   })
  // },  []);

  // Visualização do usuário
  return (
    <div>
      <h4>Segue os resultados da API:</h4>

      <Card>
        <Card.Img variant="top" src={(imagens)}/>
        <Card.Body>
          <Card.Text>
            Essa API é responsavel por retornar imagem de um cachorro
          </Card.Text>
        </Card.Body>
      </Card>

      <hr></hr>
      <Button variant="primary" href="/">Voltar ao menu</Button>
        
    </div>
  );
}
  


// Exportando função
export default Imagens;
  
  
