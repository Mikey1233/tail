import { Invoice } from './classes/invoice.js';
import { customer } from './classes/payment.js';
////////////////dom event in typescript
/*
let type = document.querySelector('#type')! as HTMLSelectElement
let formChildren = document.querySelector('form')!
let tofrom = document.querySelector('#tofrom')! as HTMLInputElement
let details = document.querySelector('#details')! as HTMLInputElement
let amount = document.querySelector('#amount')! as HTMLInputElement

let form = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form)
formChildren.addEventListener('submit',(e:Event)=>{
 e.preventDefault();
 console.log('it worked:')
 console.log(
 tofrom.value,
 details.value,
 amount.valueAsNumber,
 type.value
 )
})
*/
const Invoice1 = new Invoice('emma', 123);
const Invoice2 = new Invoice('mickey', 333);
const Invoice3 = new Invoice('lious', 555);
const inData = [];
inData.push(Invoice1);
inData.push(Invoice2);
inData.push(Invoice3);
console.log(inData);
console.log('hey');
console.log('hr');
Invoice3.format();
console.log('hey');
const me = {
    name: 'michael Odogwu',
    age: 18,
    skills: ['html', 'css', 'javasript'],
    speak(a) {
        console.log(`my  name is ${a}`);
    },
    spend(c) {
        console.log(`i have spend closed to ${c} today`);
    },
    mySelf() {
        console.log(`my name is ${this.name} and i am ${this.age} old`);
    },
    mySkills() {
        console.log(`my skills are ${this.skills.join(',')}`);
    }
};
me.mySelf();
me.speak('emmanuel');
me.spend(2300);
me.mySkills();
function newPerson(person) {
    console.log('my name is', person.name);
}
newPerson(me);
console.log(customer);
////////////////interface and classes
