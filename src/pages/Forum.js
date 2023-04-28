import ".././styles.css";
import { Link } from "react-router-dom";
import portugues from "../images/topico-portugues.png";
import matematica from "../images/topico-matematica.png";
import placar from "../images/topico-placar.png";

const Forum = () => {
  return (
    <>
      <div className="containerflex">
        <div className="contentflex">
          <div className="ct cf">
            <span>&#x2b;</span>
            <p>Cadastrar</p> <p>tópico</p>
          </div>
          <div className="at cf">
            <span>&#9998;</span> <p>Alterar</p> <p>tópico</p>
          </div>
          <div className="et cf">
            <span>&#10006;</span>
            <p>Excluir</p> <p>tópico</p>
          </div>
        </div>
        <Link to="/portugues" style={{ textDecoration: "none" }}>
          <div className="tp1">
            <img src={portugues}></img>
            <p>Tópico:Jogos de Pôrtuguês</p>
          </div>
        </Link>
        <div className="tp2">
          <img src={matematica}></img>
          <p>Tópico:Jogos de Matemática</p>
        </div>
        <div className="tp3">
          <img src={placar}></img>
          <p>Tópico:Placar</p>
        </div>
      </div>
    </>
  );
};

export default Forum;
