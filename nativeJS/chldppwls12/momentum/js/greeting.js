const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginFormSubmit(event){
  event.preventDefault();  //어떤 event의 기본 행동 발생하지 않도록 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function onLinkClick(event){
  event.preventDefault();
  console.dir(event);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

//함수 위치 상관 x? => hoisting 공부하기
function paintGreetings(userName){
  greeting.innerText = `Hi! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginFormSubmit);
} else{
  paintGreetings(savedUserName);
}