// Importando biblioteca bootstrap
// npm install react-bootstrap bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// Função da minha página
function Sobre() {
    return (
    <Card>
      <Card.Header><h4>Sobre</h4></Card.Header>
      <Card.Body>
        <Card.Title>Nosso site de API de cães</Card.Title>
          <Card.Text>
           ..........................................................
          </Card.Text>
        <Button variant="primary" href="/">Voltar ao menu</Button>
      </Card.Body>
    </Card>
    );
}
  
// Exportando função
export default Sobre;
  
  

