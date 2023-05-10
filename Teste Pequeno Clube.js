import { hSubmit } from "../pages/Jogo";
import Jogo from "../pages/Jogo"
test("A função tem que validar a palavra corretamente", () => {
  hSubmit("cachorro");
  expect(Jogo.acertou).toBe(true);
})
