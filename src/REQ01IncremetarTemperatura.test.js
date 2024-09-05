import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona";
import App from "./App";

test("CT01 - verifica a apresentacao do titulo na interface", () => {
  //dado que a interface foi inicializada
  render(<App />);
  //quando consulto o titulo na interface
  const textElement = screen.getByText(/controlador de temperatura/i);
  //entao o titulo e localizado
  expect(textElement).toBeInTheDocument();
});

test("CT02- verifica o estado do contador na inicializacao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toBe(0);
});

test("CT03 - verifica a incremento do contador", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando clico no botao de incrementar
  const btnIncremento = screen.getByRole("button", { name: "Incremento" });
  fireEvent.click(btnIncremento);
  //entao o contador e incrementado
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toBe(1);
});

test("CT04 - verifica a decremento do contador", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando clico no botao de decrementar
  const btnDecremento = screen.getByRole("button", { name: "Decremento" });
  fireEvent.click(btnDecremento);
  //entao o contador e decrementado
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toBe(-1);
});

test("CT05 - verifica incremento e decremento do contador", () => {
   //dado que o contador foi inicializado
   render(<Adiciona />);
   // gera valor para o contador
   const btnIncremento = screen.getByRole("button", { name: "Incremento" });
   const btnDecremento = screen.getByRole("button", { name: "Decremento" });
   const numeroOperacoes = 100;
   let cont = 0;
   for (let i = 0; i < numeroOperacoes; i++) {
     if(Math.random() > 0.5){
        fireEvent.click(btnIncremento);
        cont++;
      }
     else{
        fireEvent.click(btnDecremento);
        cont--;
      }
   }
   //entao se verifica o valor do contador
   const valorContador = Number(screen.getByTestId("contador").textContent);
   expect(valorContador).toBe(cont);
});

test("CT06 - verifica a reinicializacao do contador", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  // gera valor para o contador
  const btnIncremento = screen.getByRole("button", { name: "Incremento" });
  const btnDecremento = screen.getByRole("button", { name: "Decremento" });
  const numeroOperacoes = 100;
  for (let i = 0; i < numeroOperacoes; i++) {
    if(Math.random() > 0.5) fireEvent.click(btnIncremento)
    else fireEvent.click(btnDecremento)
  }
  //quando clico no botao de reinicializar
  const btnReiniciar = screen.getByRole("button", { name: "Reset" });
  fireEvent.click(btnReiniciar);
  //entao o contador é reinicializado
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toBe(0);
});

test("CT07 - verifica a mudanca de cor do botao", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando o contador é incrementado
  const btnIncremento = screen.getByRole("button", { name: "Incremento" });
  for (let i = 0; i < 12; i++) {
    fireEvent.click(btnIncremento);
  }
  //depois decrementado
  const btnDecremento = screen.getByRole("button", { name: "Decremento" });
  fireEvent.click(btnDecremento);
  //entao a cor do botao permance vermelha
  const corBotao = screen.getByRole("button", { name: "Incremento" });
  expect(corBotao).toHaveStyle("color: red");
});