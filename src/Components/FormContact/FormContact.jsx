import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <Form>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="email" placeholder="Pedro perez" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <button className='enviar ' >Enviar</button>
    </Form>
  );
}

export default TextControlsExample;