const form = document.querySelector("form"),
input = document.querySelector("input"),
ul_unchecked = document.querySelector(".ul-unchecked");

let unchecked_todolist_array = [    
];


init();

function init() {
    form.addEventListener("submit", handleSubmit);
}


function handleSubmit(event){
    event.preventDefault();
    const submitInput = input.value;
    console.log("handleSubmit Active!");
    console.log(`input : ${submitInput}`);

    unchecked_todolist_array.push(submitInput);
    input.value='';

    printArray(submitInput);
}

function printArray(submitInput) {
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const li = document.createElement("li");
    span.innerText= submitInput;
    btn.innerText= "✔";
    li.appendChild(span);
    li.appendChild(btn);

    ul_unchecked.appendChild(li);
}