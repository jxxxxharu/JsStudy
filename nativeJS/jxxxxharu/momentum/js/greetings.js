const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    const hour = new Date().getHours();
    if(hour>=5 && hour<12) {
        greeting.innerText = `Good morning, ${username}.`;
    } else if(hour>=12 && hour<18) {
        greeting.innerText = `Good afternoon, ${username}.`;
    } else if(hour>=18) {
        greeting.innerText = `Good evening, ${username}.`;
    } else {
        greeting.innerText = `Hello, ${username}.`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
}
