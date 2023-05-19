import React, { useState } from "react";
import ".././styles.css";

const Responsaveis = () => {
  return (
    <>
      <div className="caprincipal">
        <div className="contentgrid">
          <div className="item1">
            <p>Quem somos</p>
            <p>
              Somos uma equipe de alunos do curso técnico em desenvolvimento de
              sistemas do IFAL campus Maceió
            </p>
          </div>
          <div className="item2">
            <p>Nossa missão</p>
            <p>
              Nossa missão é tornar o aprendizado infantil lúdico e acessível
              para ascrianças de 0 a 5 anos
            </p>
          </div>
        </div>
        <div className="CaixaPrincipal item3">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              name="accessKey"
              value="f05595d8-75be-47a2-b570-c89a58113938"
            />
            <div className="content">
              <p> Fale conosco </p>
              <p> Email:</p>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Digite seu email aqui"
              />
              <p>Mensagem:</p>
              <textarea
                type="text"
                className="msg"
                placeholder="Digite sua mensagem aqui"
              />
              <br />
              <div className="Mec">Mensagem enviada</div>
              <input type="submit" value="Enviar" />
              <input
                type="hidden"
                name="redirectTo"
                value="https://snnivl.csb.app/responsaveisConfirmado"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Responsaveis;
