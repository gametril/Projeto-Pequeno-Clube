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
          <div className="content">
            <p> Fale conosco </p>
            <p> Email:</p>
            <input id="email" type="text" />
            <p>Mensagem:</p>
            <textarea type="text" className="msg" />
            <br />
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsaveis;
