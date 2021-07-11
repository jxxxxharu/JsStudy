const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username"; 

function onSubmit(event) { 
    event.preventDefault(); 
    localStorage.setItem(KEY_USERNAME, loginInput.value); 
    const username = loginInput.value;
    paintGreeting(username); 
    }
 
function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
} 

const savedUsername = localStorage.getItem(KEY_USERNAME);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else {
    paintGreeting(savedUsername);
}