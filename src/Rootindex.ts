import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { hasFormatter } from "./interfaces/hasFormattter.js";
import { ListItemsOnUI } from "./classes/listTemplate.js";
////////////////dom event in typescript
let ul = document.querySelector('ul')!

let type = document.querySelector("#type")! as HTMLSelectElement;
let form = document.querySelector("form")!;
let tofrom = document.querySelector("#tofrom")! as HTMLInputElement;
let details = document.querySelector("#details")! as HTMLInputElement;
let amount = document.querySelector("#amount")! as HTMLInputElement;
let alertBox = document.querySelector(".alert-container")! as HTMLDivElement;
let blur = document.querySelector(".blur-effect")! as HTMLDivElement;
let canCelAlert = document.querySelector(".cancel-alert")! as HTMLDivElement;
///check errors

// let form = document.querySelector('.new-item-form') as HTMLFormElement
canCelAlert.addEventListener("click", () => {
  alertBox.classList.remove("hidden");
  blur.classList.remove('hidden')
});
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  if (tofrom.value === null || details.value === "" || amount.value === "") {
    alertBox.classList.add("hidden");
    blur.classList.add("hidden");
  } else {
    if (amount.valueAsNumber < 0) {
      tofrom.value = details.value = amount.value = "";

      return alert("number input has to be positive");
    }

    let docOne: hasFormatter;
    let list = new ListItemsOnUI();
    if (type.value === "recieved") {
      docOne = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
      list.createLi(docOne.format(), type.value);
    } else {
      docOne = new Payment(tofrom.value, details.value, amount.valueAsNumber);
      list.createLi(docOne.format(), type.value);
    }
    list.addItemToLocalStorage(docOne.format(),type.value)
    tofrom.value = details.value = amount.value = "";
  }
});
//////display saved items when the page is reloaded
  let lis:string[]
 //  let li =  document.createElement('li')
 let li:HTMLLIElement;
 let h4:HTMLHeadingElement;
window.addEventListener('load',function(){
 
  lis = JSON.parse(localStorage.getItem('list') as string)
  
  if(lis!== null){
    lis.forEach((arr)=>{
      console.log(arr)
       li = document.createElement('li')
       h4 = document.createElement('h4')
      li.innerText = arr[0];
      h4.innerText = arr[1]
      li.append(h4)
      ul.appendChild(li)
    })
  }
  
 
})
/*
const Invoice1 = new Invoice("emma", 123);
const Invoice2 = new Invoice("mickey", 333);
const Invoice3 = new Invoice("lious", 555);

const inData: Invoice[] = [];
inData.push(Invoice1);
inData.push(Invoice2);
inData.push(Invoice3);

console.log(inData);
console.log("hey");
console.log("hr");
Invoice3.format();
console.log("hey");

//////typescirpt interfaces
interface IsPerson {
  name: string;
  age: Number;
  skills: (string | number | boolean)[];
  speak(a: string): void;
  spend(b: number): void;
  mySelf(): void;
  mySkills(): void;
}
const him: IsPerson  = {
  name: "michael O",
  age: 18,
  skills: ["html", "css", "javasript"],
  speak(a: string): void {
    console.log(`my  name is ${a}`);
  },
  spend(c: number): void {
    console.log(`i have spend closed to ${c} today`);
  },
  mySelf(): void {
    console.log(`my name is ${this.name} and i am ${this.age} old`);
  },
  mySkills(): void {
    console.log(`my skills are ${this.skills.join(",")}`);
  },
};
console.log(him);
const me: IsPerson = {
  name: "michael Odogwu",
  age: 18,
  skills: ["html", "css", "javasript"],
  speak(a: string): void {
    console.log(`my  name is ${a}`);
  },
  spend(c: number): void {
    console.log(`i have spend closed to ${c} today`);
  },
  mySelf(): void {
    console.log(`my name is ${this.name} and i am ${this.age} old`);
  },
  mySkills(): void {
    console.log(`my skills are ${this.skills.join(",")}`);
  },
};
me.mySelf();
me.speak("emmanuel");
me.spend(2300);
me.mySkills();
function newPerson(person: IsPerson): void {
  console.log("my name is", person.name);
}
newPerson(me);

////////////////interface and classes
*/
