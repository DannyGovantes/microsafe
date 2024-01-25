export class DisplayController {
  currentMessage = "";
  currentCommand = "";
  commands = ["0A", "0B", "0C", "0D"];
  constructor() {}

  readCommandAndExecuteCommand(message) {
    const command = message.split(" ")[0];
    if (!this.commands.includes(command))
      throw new Error("Comando no reconocido");
    this.currentCommand = command;

    switch (command) {
      case "0A": {
        const desiredMessage = message.slice(1).split(" ");
        const newMessage = desiredMessage
          .map((hex) => String.fromCharCode(parseInt(hex, 16)))
          .join("");
        this.currentMessage = newMessage.replace(/(\r\n|\n|\r)/gm, "");
        break;
      }
      case "0B": {
        const blank = " ";
        const newMessage = blank.concat(this.currentMessage);
        this.currentMessage = newMessage;
        break;
      }
      case "0C": {
        const newMessage = this.currentMessage.slice(1);
        this.currentMessage = newMessage;
        break;
      }
      case "0D": {
        this.currentMessage = "";
        break;
      }
    }
  }
  readCommand(command) {
    if (!this.commands.includes(command))
      throw new Error("Comando no reconocido");
    this.currentCommand = command;
  }
  executeCommand(message) {
    if (!this.commands.includes(this.currentCommand))
      throw new Error("Comando no reconocido");

    switch (this.currentCommand) {
      case "0A": {
        const desiredMessage = message.slice(1).split(" ");
        this.currentMessage = desiredMessage
          .map((hex) => String.fromCharCode(parseInt(hex, 16)))
          .join("");
        break;
      }
      case "0B": {
        const blank = " ";
        this.currentMessage = blank.concat(this.currentMessage);
        break;
      }
      case "0C": {
        this.currentMessage = this.currentMessage.slice(1);
        break;
      }
      case "0D": {
        this.currentMessage = "";
        break;
      }
    }
  }

  getMessage() {
    return this.currentMessage;
  }
}
