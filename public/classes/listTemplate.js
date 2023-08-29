let ul = document.querySelector('ul');
export class ListItemsOnUI {
    constructor() { }
    createLi(input, h) {
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        li.innerText = input;
        h4.innerText = h;
        li.append(h4);
        ul.appendChild(li);
    }
    addItemToLocalStorage(input, title) {
        let lisArr;
        if (localStorage.getItem('list') === null) {
            lisArr = [];
        }
        else {
            lisArr = JSON.parse(localStorage.getItem("list"));
        }
        let local = [input, title];
        lisArr.push(local);
        localStorage.setItem("list", JSON.stringify(lisArr));
    }
}
