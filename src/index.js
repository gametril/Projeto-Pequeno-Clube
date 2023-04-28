import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarraPrincipal from "./pages/BarraPrincipal";
import Home from "./pages/Home";
import PainelJogos from "./pages/PainelJogos";
import Placar from "./pages/Placar";
import Login from "./pages/Login";
import Responsaveis from "./pages/Responsaveis";
import Forum from "./pages/Forum";
import Cadastro from "./pages/Cadastro";
import Jogo from "./pages/Jogo";
import Recuperacao from "./pages/Recuperacao";
import Suporte from "./pages/Suporte";
import Portugues from "./pages/TopicoPortugues";
import Recorde from "./pages/Recorde";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarraPrincipal />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="paineljogos" element={<PainelJogos />} />
          <Route path="recorde" element={<Recorde />} />
          <Route path="portugues" element={<Portugues />} />
          <Route path="placar" element={<Placar />} />
          <Route path="recuperacao" element={<Recuperacao />} />
          <Route path="responsaveis" element={<Responsaveis />} />
          <Route path="login" element={<Login />} />
          <Route path="jogo" element={<Jogo />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="forum" element={<Forum />} />
          <Route path="suporte" element={<Suporte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
