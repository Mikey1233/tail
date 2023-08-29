import {hasFormatter} from '../interfaces/hasFormattter.js'
export class Invoice implements hasFormatter{
   
    constructor ( readonly client: string,readonly detail:string,readonly amount:number){}
    format(){
        return ` $${this.amount} from ${this.client} used for ${this.detail}`
    }
}
