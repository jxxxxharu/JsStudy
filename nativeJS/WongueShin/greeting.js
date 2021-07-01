const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    resetname = document.querySelector(".reset-name");

const USER_LS = "currentUser",
    SHOWING_CN = 'showing';
    HIDE_CN = 'hide'

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        form.classList.add(SHOWING_CN);
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
} 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    localStorage.currentUser = currentValue;
    input.value = null;
    console.log(currentValue);
    paintGreeting(currentValue);
}

function askForName(){
    form.addEventListener("submit", handleSubmit);

}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    form.classList.add(HIDE_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function resetName(){

}

function init() {
    loadName();
}

function handleClick(){
    if (localStorage.getItem(`currentUser`) === null) {
        return
    }
    console.log('remove')
    localStorage.removeItem("currentUser");
    if(greeting.classList.contains("showing")) {
        greeting.classList.toggle("showing");
        form.classList.toggle('hide');
    }
    init();
}

resetname.addEventListener("click", handleClick);


init();

