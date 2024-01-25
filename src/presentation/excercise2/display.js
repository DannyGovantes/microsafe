export class Display {
  controller;
  charactersLimit = 0;

  constructor(controller, charactersLimit) {
    this.controller = controller;
    this.charactersLimit = charactersLimit;
  }

  displayMessage() {
    if (this.controller) {
      const messageDisplay = this.controller.getMessage();
      if (messageDisplay.length > this.charactersLimit) {
        console.log(messageDisplay.substring(0, this.charactersLimit));
      } else {
        console.log(messageDisplay);
      }
    }
  }
}
