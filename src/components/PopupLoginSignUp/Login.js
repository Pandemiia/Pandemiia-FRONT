import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style/PopupLoginSignUp.scss";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login(props) {
  const [errors, setErrors] = useState({});
  const handleChange = ({ target: { pattern, value, name } }) => {
    if (!value) {
      setErrors({ ...errors, [name]: "Заповніть поле" });
      return;
    }
    const regex = new RegExp(pattern);
    if (!regex.test(value)) {
      setErrors({ ...errors, [name]: "Дані введено некоректно" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const handleSubmit = (evt) => {
    console.log(evt);
  };

  //const isDisabled = exactError(errors);
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Control
          required={true}
          type="text"
          placeholder="Логін"
          pattern="^[a-zA-Z0-9]+$"
          onChange={handleChange}
          name="name"
        />
        <p>{errors.name}</p>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control
          required
          type="password"
          placeholder="Пароль"
          pattern="^[0-9a-zA-Z]{6,}$"
          onChange={handleChange}
          name="password"
        />
      </Form.Group>

      <FontAwesomeIcon icon={faGoogle} />
      <FontAwesomeIcon icon={faFacebook} />

      <Button variant="primary" type="submit">
        Увійти
      </Button>
    </Form>
  );
}

Login.propTypes = {};

export default Login;
