import ".././styles.css";

const Recuperacao = () => {
  return (
    <>
      <div className="rec-container">
        <h3>Recuperar Senha</h3>
        <p> Email ou número de telefone:</p>
        <input type="text" />
        <p>
          Digite seu email ou número de telefone para enviarmos um código de
          recuperação
        </p>
        <br />
        <button>Clique aqui para receber o código</button>
      </div>
    </>
  );
};

export default Recuperacao;
