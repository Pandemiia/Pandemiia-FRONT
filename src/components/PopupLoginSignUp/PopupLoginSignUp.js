import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Login from "./Login";
import Sign from "./Sign";
import "./scss/style.scss";

const PopupLoginSignUp = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Title>
        <Tabs
          defaultActiveKey="login"
          transition={false}
          id="noanim-tab-example"
        >
          {" "}
          <Tab eventKey="login" title="Авторизація">
            <Login />
          </Tab>
          <Tab eventKey="profile" title="Реєстрація">
            <Sign />
          </Tab>
        </Tabs>
      </Modal.Title>
    </Modal>
  );
};

PopupLoginSignUp.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
};

export default PopupLoginSignUp;
