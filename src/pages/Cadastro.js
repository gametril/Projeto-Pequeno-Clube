import axios from "axios";
import React from "react";
import ".././styles.css";

export default class Cadastro extends React.Component {
  usuario = {
    nomUsuario: "",
    codSenha: "",
    dscEmail: ""
  };

  registraUsuario = (event) => {
    this.setState({ nomUsuario: event.target.value });
  };

  registraSenha = (event) => {
    this.setState({ codSenha: event.target.value });
  };
  registraEmail = (event) => {
    this.setState({ dscEmail: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nomUsuario: this.state.nomUsuario,
      codSenha: this.state.codSenha,
      dscEmail: this.state.dscEmail
    };
    axios
      .post(`https://PCbackend.dimitritavares.repl.co/usuario`, user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("O usuário foi castrado com sucesso!");
      });
  };

  render() {
    return (
      <div className="container-cadastro">
        <form onSubmit={this.handleSubmit}>
          <h3>Cadastro</h3>
          <p>Usuário:</p>
          <input
            type="text"
            name="nomUsuario"
            onChange={this.registraUsuario}
          />
          <p>Email:</p>
          <input type="text" name="dscEmail" onChange={this.registraEmail} />
          <p>Senha:</p>
          <input
            type="password"
            name="codSenha"
            onChange={this.registraSenha}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
