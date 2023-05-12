import { render, screen, fireEvent } from "@testing-library/react";
import { toHaveValue } from "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Jogo from "../pages/Jogo";
test("Deve retornar gato", () => {
  render(<Jogo />);
  const campoTexto = screen.getByPlaceholderText("Digite sua resposta aqui");
  fireEvent.change(campoTexto, { target: { value: "gato" } });
  expect(campoTexto).toHaveValue("gato");
});
