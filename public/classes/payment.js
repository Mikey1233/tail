export class Payment {
    constructor(reciepient, detials, amount) {
        this.reciepient = reciepient;
        this.detials = detials;
        this.amount = amount;
    }
    format() {
        return ` $${this.amount} to ${this.reciepient} used for ${this.detials}`;
    }
}
