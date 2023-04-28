import React, { useState } from "react";
import ".././styles.css";

function Jogo() {
  const words = ["gato", "cachorro", "pássaro", "peixe", "hamster"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [guesses, setGuesses] = useState([]);
  const currentWord = words[currentWordIndex];
  const letters = currentWord.split("", 3);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const hSubmit = (event) => {
    event.preventDefault();
    if (inputValue.toLowerCase() === currentWord.toLowerCase()) {
      alert(`Parabéns! Você acertou a palavra "${currentWord}".`);
      setInputValue("");
      setGuesses([]);
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setGuesses([...guesses, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div class="container_jogo_das_palavras">
      <h1>Adivinhe a palavra</h1>
      <p>Tente adivinhar as palavras pelas 3 primeiras letras (são animais):</p>
      <h2>{letters}</h2>
      <p>{guesses.length > 0 ? `Você já tentou: ${guesses.join(", ")}` : ""}</p>
      <form onSubmit={hSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite sua resposta aqui"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Jogo;
