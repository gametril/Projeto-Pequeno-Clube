import Responsaveis from "../pages/Responsaveis";
import { render, screen, fireEvent } from "@testing-library/react";
import { toHaveValue } from "@testing-library/jest-dom";

test("Deve retornar a mensagem escrita", () => {
  render(<Responsaveis />);
  const campoTexto = screen.getByPlaceholderText("Digite sua mensagem aqui");
  fireEvent.change(campoTexto, { target: { value: "gato" } });
  expect(campoTexto).toHaveValue("gato");
});
