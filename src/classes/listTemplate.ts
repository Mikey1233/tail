let ul = document.querySelector('ul')!
export class ListItemsOnUI {
    constructor (){}
    createLi (input:string,h:string){
        let li = document.createElement('li')
        let h4 = document.createElement('h4')
        li.innerText = input;
        h4.innerText = h
        li.append(h4)
        ul.appendChild(li)
    }
    addItemToLocalStorage(input:string,title:string){
        let lisArr: string[]
        if(localStorage.getItem('list') === null){
          lisArr = []
        }else{
          lisArr = JSON.parse(localStorage.getItem("list") as string);
        }
        let local = [input,title]
        lisArr.push(local as unknown as string)
        localStorage.setItem("list", JSON.stringify(lisArr))   
    }
}
