import { useEffect, useState } from "react";
import "./styles.css";

function Adiciona() {
  const valorInicial = 0;
  const [contador, setContador] = useState(valorInicial);
  const [corBotao, setCorBotao] = useState("black");

  // Verifica se o contador é maior que 10 e define a cor do botão
  useEffect(() => {
    if (contador > 10) {
      setCorBotao("red");
    } else {
      setCorBotao("black");
    }
  }, [contador]);

  const increment = () => {
    setContador(oldValue => oldValue + 1);
  };

  const decrement = () => {
    setContador(oldValue => oldValue - 1);
  };

  // Retorna o valor para zero
  const restart = () => {
    setContador(valorInicial);
  };

  return (
    <div>
      <h3 className="titulo"> Controlador de Temperatura </h3>
      <p data-testid="contador"> {contador}</p>
      <div>
        {/* Aplica a cor dinâmica ao botão */}
        <button
          className="button"
          name="incremento"
          style={{ color: corBotao }}
          onClick={increment}
        >
          Incremento
        </button>
        <button className="button" onClick={decrement}>
          {" "}
          Decremento{" "}
        </button>
        <button className="button" onClick={restart}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
export default Adiciona;
