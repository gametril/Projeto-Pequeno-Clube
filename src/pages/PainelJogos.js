import ".././styles.css";
import JogoLetras from "../images/Jogo_das_letras.png";
import JogoPalavras from "../images/Jogo_das_palavras.png";
import JogoSilabas from "../images/Jogo_das_silabas.png";
import JogoSoma from "../images/Jogo_da_soma.png";
import JogoSubtracao from "../images/Jogo_da_subtracao.png";
import JogoMultiplicacao from "../images/Jogo_da_multiplicacao.png";
import { Link } from "react-router-dom";

const PainelJogos = () => {
  return (
    <div className="containerHomer">
      <div className="grid-container">
        <div className="grid-item">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoLetras}></img>
            <p>Alfabeto</p>
          </Link>

          <Link to="/login"></Link>
        </div>
        <div className="grid-item">
          <Link to="/jogo" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoPalavras}></img>
            <p>Palavras</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoSilabas}></img>
            <p>Silabas</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoSoma}></img>
            <p>Soma</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoSubtracao}></img>
            <p>Subtração</p>
          </Link>
        </div>
        <div className="grid-item">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <img width="100%" height="100%" src={JogoMultiplicacao}></img>
            <p>Multiplicação</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PainelJogos;
