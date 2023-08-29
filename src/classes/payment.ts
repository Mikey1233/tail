import { hasFormatter } from "../interfaces/hasFormattter.js";
export class Payment implements hasFormatter {
  constructor(
    readonly reciepient: string,
    readonly detials: string,
    readonly amount: number
  ) {}
  format() {
    return ` $${this.amount} to ${this.reciepient} used for ${this.detials}`;
  }
}
