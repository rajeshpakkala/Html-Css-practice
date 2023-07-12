let container=document.createElement('div');
container.classList.add("bg-cont");
document.body.appendChild(container);


let headelement=document.createElement('h1');
headelement.textContent="My Friends";
headelement.classList.add("head");
container.appendChild(headelement);

let unorder=document.createElement("ul")
unorder.classList.add("un-order")
container.appendChild(unorder);

let brk2=document.createElement("br");
container.appendChild(brk2);

let inputbox=document.createElement('input');
inputbox.type="checkbox";
inputbox.id="mycheckbox";
inputbox.classList.add("padding");
container.appendChild(inputbox);


let label=document.createElement('label');
label.setAttribute("for","mycheckbox");
label.classList.add("padding1");
label.textContent="Shall they play cricket???";
container.appendChild(label);

let brk=document.createElement("br");
container.appendChild(brk);
let brk1=document.createElement("br");
container.appendChild(brk1);

let button=document.createElement('button');
button.textContent="Submit";
container.appendChild(button);


let arr=["varma","rajesh","brahmaji","nagendra","sunil","balu","pappy","murty bro"];

for(let list of arr){
    let listitems=document.createElement('li');
listitems.textContent=list;
unorder.appendChild(listitems);
}

