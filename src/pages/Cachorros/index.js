// Importando função nativas do react js
import React, { useState, useEffect } from 'react';

// Importando componentes do bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


// Funão principal da minha página
function Moedas() {

  // Criando variaveis
  const [listaMoedas, setMoedas] = useState([]);

  // Após o carregamento da página executar essa função
  // Estamos consumindo uma API
  useEffect (()=>{
    let url = "https://dog.ceo/api/breeds/list/all";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.message.terrier);
        setMoedas(json.message.terrier);
    })

  },  []);

  // Visualização do usuário
  return (
    <div>
      <h4>Todas as raças de cachorros:</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Raças</th>
          </tr>
        </thead>
        <tbody>
          {listaMoedas.map( md => (
            <tr>
              <td>{md}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <hr></hr>
      <Button variant="primary" href="/">Voltar ao menu</Button>
        
    </div>
  );
}
  


// Exportando função
export default Moedas;
  
  
