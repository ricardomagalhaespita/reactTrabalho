// Importando biblioteca bootstrap
// npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// Função da minha página
function Sobre() {
    return (
    <Card>
      <Card.Header><h4>Localizacao</h4></Card.Header>
      <Card.Body>
        <Card.Title>Nosso restaurante</Card.Title>
          <Card.Text>
            Nosso restaurante é muito especial por isso...
          </Card.Text>
        <Button variant="primary" href="/">Voltar ao menu</Button>
      </Card.Body>
    </Card>
    );
}
  
// Exportando função
export default Sobre;
  
  

