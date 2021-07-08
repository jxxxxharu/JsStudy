//String 선언
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

//선택자 선언
const loginForm = document.querySelector("#login-form ");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//이벤트 제어 함수 선언부
//로그인 버튼
function onLoginSubmit(event) {
  const typedUserName = loginInput.value;

  event.preventDefault(); //브라우저의 기본동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, typedUserName);
  paintGreetings(typedUserName);
}

//중복코딩제거용 함수 선언부
//greeting에 hidden클래스 삭제 및 username 넣는 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//시작
const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}