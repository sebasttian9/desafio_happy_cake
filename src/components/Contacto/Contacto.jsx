import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './contacto.css';

const Contacto = () => {
  return (
    <div className="container text-center">
      <p className='mt-4 bienvenido'>Cuentanos, ¿ en que podemos ayudarte ?</p>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="outline-danger">Enviar</Button>
    </Form>
    </div>
  )
}

export default Contacto