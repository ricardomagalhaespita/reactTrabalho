// Importando função nativas do react js
import React, { useState, useEffect } from 'react';

// Importando componentes do bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


// Funão principal da minha página
function Cardapio() {

  // Criando variaveis
  const [moveis, setMovies] = useState([]);

  // Após o carregamento da página executar essa função
  // Estamos consumindo uma API
  useEffect (()=>{
    let url = "https://reactnative.dev/movies.json";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        setMovies(json.movies);
    })
  },  []);

  // Visualização do usuário
  return (
    <div>
      <h4>Segue os resultados da API:</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {moveis.map( movie => (
            <tr>
              <td>{movie.id}</td>
              <td>{movie.title}</td>
              <td>{movie.releaseYear}</td>
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
export default Cardapio;
  
  
