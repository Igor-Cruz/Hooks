import { useState } from "react";
import "./styles.css";

export default function App() {
  //Situação do Jogo - Entrada - Rodando - Fim
  const [estado, setEstado] = useState("ENTRADA");

  //Palpite
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Iniciar o Jogo</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite + 1);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setPalpite(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "  FIM") {
    return <p>Acertou</p>;
  }

  // chutes 0 <> 300
  //palpite que a máquina deu
  return (
    <div className="App">
      <p>O seu n° é: {palpite} ?</p>
      <button onClick={menor}>Menor !</button>
      <button onClick={acertou}>Acertou !</button>
      <button onClick={maior}>Maior !</button>
      <p>
        Min: {min} | Máx: {max}
      </p>
    </div>
  );
}
