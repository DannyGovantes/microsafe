import { pool } from "../../data/postgres/index.js";

export class ButtonController {
  limit = 0;
  initialValue = 0;
  currentValue = 0;
  counterValue = 0;

  constructor(limit, initialValue, currentValue, counterValue) {
    this.limit = limit;
    this.initialValue = initialValue;
    this.currentValue = currentValue;
    this.counterValue = counterValue;
    this.print();
  }

  reset() {
    this.currentValue = this.initialValue;
    this.print();
  }

  addToCounter() {
    if (this.currentValue + this.counterValue > this.limit) {
      this.reset();
      return;
    }

    this.currentValue += this.counterValue;
    this.writeStateToDatabase("PRESSED");
    this.print();
  }

  modifyButtonState(state, counterValue) {
    this.counterValue = counterValue;
    this.reset();
    this.writeStateToDatabase(state);
  }

  async writeStateToDatabase(state) {
    const client = await pool.connect();

    const insertQuery =
      "INSERT INTO buttonStates (state) VALUES($1) RETURNING *";
    const values = [`${state}`];

    const res = await client.query(insertQuery, values);
    client.release();
  }
  print() {
    console.log(`${this.currentValue}`);
  }
}
