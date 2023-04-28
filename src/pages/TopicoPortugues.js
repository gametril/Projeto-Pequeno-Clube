import ".././styles.css";
import Gametril from "../images/gametril.png";
import Otto from "../images/Otto.png";
import { Link } from "react-router-dom";

const ForumPortugues = () => {
  return (
    <>
      <div className="containerflex">
        <div className="tp1">
          <p>Tópico:Jogos de Pôrtuguês</p>
        </div>
        <div className="contentflex">
          <div className="ct cf">
            <span>&#x2b;</span>
            <p>Cadastrar</p> <p>pergunta</p>
          </div>
          <div className="at cf">
            <span>&#9998;</span> <p>Alterar</p> <p>pergunta</p>
          </div>
          <div className="et cf">
            <span>&#10006;</span>
            <p>Excluir</p> <p>pergunta</p>
          </div>
        </div>
        <div className="contentflex2">
          <Link to="/recorde" style={{ textDecoration: "none" }}>
            <div className="pergunta-forum1">
              <img src={Gametril}></img>
              <div className="texto-pergunta-forum">
                <p>gametril</p>
                <p>Duvido que alguém bata meu recorde</p>
              </div>
            </div>
          </Link>
          <div className="pergunta-forum2">
            <img src={Otto}></img>
            <div className="texto-pergunta-forum">
              <p>Otto</p>
              <p>Alguma dica para passar mais fácil no jogo do alfabeto?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPortugues;
