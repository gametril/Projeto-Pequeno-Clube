import { Outlet, Link } from "react-router-dom";
import ".././styles.css";

const Layout = () => {
  return (
    <>
      <div className="App">
        <div className="CaixaPrincipalSuperior">
          <div className="menuHam">&#9776;</div>
          <h1 className="barra_principal"> Pequeno</h1>
          <h1 className="barra_principal">Clube</h1>
          <div className="btns">
            <Link to="/home">
              <button className="btn">Home</button>
            </Link>
            <Link to="/paineljogos">
              <button className="btn">Jogos</button>
            </Link>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/responsaveis">
              <button className="btn">Responsáveis</button>
            </Link>
            <Link to="/forum">
              <button className="btn">Comunidade </button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
