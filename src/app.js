import { ButtonController } from "./presentation/excercise1/controller.js";
import { DisplayController } from "./presentation/excercise2/controller.js";
import { Display } from "./presentation/excercise2/display.js";
const buttonFunction = new ButtonController(15, 1, 1, 1);
const displayControllerFunction = new DisplayController();
const displayFunction = new Display(displayController, 20);

function ButtonState(lectura) {
  if (lectura > 1) return;
  if (!lectura) {
    buttonFunction.addToCounter();
  } else {
    buttonFunction.modifyButtonState("LONG PRESSED", 3);
  }
}

function SRMessage(message, Tipo) {
  if (Tipo === 1) {
    displayFunction.displayMessage();
  } else if (Tipo === 2) {
    displayControllerFunction.currentCommand(message.split(" ")[0]);
    displayControllerFunction.currentMessage(message);
  } else {
    throw new Error("Tipo de mensaje equivocado");
  }
}

(() => {
  main();
})();
function main() {
  console.log("SIMULACIÓN DE EJERCICIOS:");
  console.log("EJERCICIO 1:");
  console.log("PRESIONAR EL BOTÓN PASO A PASO HASTA LLEGAR AL LÍMITE:");
  const button = new ButtonController(15, 1, 1, 1);
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  console.log("PRESIONAR EL BOTÓN DOS SEGUNDOS:");
  button.modifyButtonState("LONGER PRESS", 3);
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  button.addToCounter();
  console.log("PRESIONAR EL BOTÓN 5 SEGUNDOS:");
  button.reset();

  const displayController = new DisplayController();
  const display = new Display(displayController, 20);
  console.log("EJERCICIO 2:");
  console.log("INGRESAR COMANDO DE MENSAJE:");
  displayController.readCommandAndExecuteCommand("0A 4D 45 4E 53 41 4A 45");
  display.displayMessage();
  console.log("INGRESAR COMANDO MOVER A LA DERECHA:");
  displayController.readCommandAndExecuteCommand("0B");
  display.displayMessage();
  console.log(
    "INGRESAR COMANDO MOVER A LA IZQUIERDA (2 VECES PARA QUE SEA VISIBLE):"
  );
  displayController.readCommandAndExecuteCommand("0C");
  displayController.readCommandAndExecuteCommand("0C");
  display.displayMessage();
  console.log("INGRESAR COMANDO RESET");
  displayController.readCommandAndExecuteCommand("0D");
  display.displayMessage();
}
