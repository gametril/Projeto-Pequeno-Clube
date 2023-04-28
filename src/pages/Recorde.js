import Gametril from "../images/gametril.png";
import Otto from "../images/Otto.png";
import Tasuya from "../images/Tasuya.png";

const Recorde = () => {
  return (
    <>
      <div className="recorde-principal">
        <div className="pergunta-principal">
          <div className="perfil">
            <img src={Gametril}></img>
            <p> Gametril</p>
          </div>
          <div className="texto-resposta-forum">
            <p>Duvido que alguém bata meu recorde!</p>
          </div>
        </div>
        <div className="resposta-escrita">
          <div className="perfil">
            <img src={Otto}></img>
            <p>Otto</p>
          </div>
          <div className="texto-resposta-forum">
            <p>Em que jogo?</p>
          </div>
        </div>
        <div className="escrever-resposta">
          <img src={Tasuya}></img>
          <textarea
            type="text"
            placeholder="Digite sua resposta"
            className="msg-forum"
          />
          <button>Enviar</button>
        </div>
      </div>
    </>
  );
};

export default Recorde;
