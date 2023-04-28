import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "../styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "gametril",
      password: "projeto4500"
    },
    {
      username: "ottokyo",
      password: "232512"
    }
  ];

  const errors = {
    uname: "Usuario invalido",
    pass: "Senha inválida"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        window.location.assign("./paineljogos");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="CaixaPrincipal">
      <div className="content">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <h3>Log-in</h3>
              <p>Usuário:</p>
              <input id="userbox" type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <p>Senha:</p>
              <input id="passbox" type="password" name="pass" required />
              <Link to="/recuperacao">
                <h5>esqueceu a senha</h5>
              </Link>
              {renderErrorMessage("pass")}
            </div>
            <Link to="/cadastro">
              <button>Cadastro</button>
            </Link>
            <input id="enviar" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>Usuário autenticado com sucesso, carregando</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
