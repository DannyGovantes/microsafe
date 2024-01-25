export class Display {
  controller;
  charactersLimit = 0;

  constructor(controller, charactersLimit) {
    this.controller = controller;
    this.charactersLimit = charactersLimit;
  }

  displayMessage() {
    if (this.controller) {
      console.log(this.controller.getMessage());
    }
  }
}
