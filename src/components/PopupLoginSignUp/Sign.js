import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Sign(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Введіть бажаний логін" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Введіть електронну пошту" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Введіть пароль" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Підтвердіть пароль" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Зареєструватися
      </Button>
    </Form>
  );
}

Sign.propTypes = {};

export default Sign;
