import Gametril from "../images/gametril.png";
import Otto from "../images/Otto.png";
import Tasuya from "../images/Tasuya.png";
import Xeirovisk from "../images/Xeirovisk.png";
import Zuri from "../images/Zuri.png";

const Placar = () => {
  return (
    <>
      <ul className="lista-placar">
        <li>
          <img src={Gametril}></img>
          <p>1°Lugar: Pontuação:5640 Gametril</p>
        </li>
        <li>
          <img src={Otto}></img>
          <p>2°Lugar: Pontuação:3220 Otto</p>
        </li>
        <li>
          <img src={Tasuya}></img>
          <p>3°Lugar: Pontuação:1190 Tasuya</p>
        </li>
        <li>
          <img src={Xeirovisk}></img>
          <p>4°Lugar: Pontuação:500 Xeiróvisk</p>
        </li>
        <li>
          <img src={Zuri}></img>
          <p>5°Lugar: Pontuação:325 Zuri</p>
        </li>
      </ul>
    </>
  );
};

export default Placar;
