import React, { useState } from "react";
import PopupLoginSignUp from "./components/PopupLoginSignUp";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outline-primary" onClick={handleShow}>
          Вхід
        </Button>{" "}
      </header>

      <PopupLoginSignUp show={show} handleClose={handleClose} />
    </div>
  );
}

export default App;
