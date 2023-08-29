export class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return ` $${this.amount} from ${this.client} used for ${this.detail}`;
    }
}
