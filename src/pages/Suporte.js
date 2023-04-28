const Suporte = () => {
  return (
    <>
      <div className="d-texto-suporte">
        <h1 className="texto-suporte">
          Passe o mouse sobre o problema para ver sua solução
        </h1>
      </div>
      <div className="suporte-geral">
        <div className="suporte-desce">
          <button className="botao-desce">
            Está tendo problemas em fazer login?
          </button>
          <div className="conteudo">
            <p>
              Verifique sua senha e seu nome de usuário, lembre-se de que o
              sistema diferencia maiúsculas e minúsculas, lembre-se também que é
              necessário criar uma conta caso seja sua primeira vez no site, na
              situação de saber que seus dados estão corretos e mesmo assim não
              consegue acessar sua conta mande uma mensagem para nós através da
              aba responsáveis.
            </p>
          </div>
        </div>
        <div className="suporte-desce">
          <button className="botao-desce">
            Não consegue criar uma conta nova?
          </button>
          <div className="conteudo">
            <p>
              Além de um endereço de email válido é necessário também uma senha
              de no mínimo 8 dígitos. O sistema não aceita senhas ou nomes de
              usuário que porventura contenham palavras de baixo calão, caso o
              sistema esteja barrando sua inscrição sem motivo mande uma
              mensagem para nós através da aba responsáveis.
            </p>
          </div>
        </div>
        <div className="suporte-desce">
          <button className="botao-desce">
            Não consegue carregar a página comunidade?
          </button>
          <div className="conteudo">
            <p>
              As páginas da aba comunidade são o centro do Pequeno Clube, já que
              com elas esperamos unir os pequenos em redes de amigos seguras
              para que eles possam brincar sem medo, contudo as vezes algumas
              contas podem ser banidas por ter postado conteúdo não adequado ao
              público infantil, outras vezes podemos estar realizando
              manutenções no site e deixar a aba temporariamente fora do ar,
              caso não haja nada em nossas redes sociais que mostre a manutenção
              e sua conta não tenha sido banida então sugiro que envie uma
              mensagem para nós na aba responsáveis.
            </p>
          </div>
        </div>
        <div className="suporte-desce">
          <button className="botao-desce">Problemas em abrir jogos?</button>
          <div className="conteudo">
            <p>
              Nossos jogos nem sempre são desenvolidos pela nossa equipe, é
              comum importarmos jogos de outros sites infantis, por isso se
              algum jogo estiver temporariamente indisponível sugiro que confira
              as redes sociais do site para ver se estamos realizando alguma
              manutenção, caso contrário sinta-se livre para nos mandar uma
              mensagem através da aba responsáveis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suporte;
