
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// js에서 html의 id greeting을 통해 h1 요소를 찾아서 가져오기
const greeting = document.querySelector("#greeting");

// string만 포함되는 변수는 대문자를 사용하고 string을 저장하고 싶을 때는 관습적으로 대문자를 사용한다!! 
// string이 오타가 나면 js는 지적하지 않는다. 그러므로 무조건 같아야 하는 string이 반복된다면 변수에 저장하자! 변수명은 지적해준다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 방금 일어난 event에 대한 정보를 지닌 argument event 작성
function onLoginSubmit(event) {
  // 브라우저의 기본 동작을 막는 eventListener 함수의 첫번째 인자의 기본함수 preventDefault 작성
  event.preventDefault();
  // 이벤트가 실행되면 form을 숨겨주는 CSS가 담긴 classname을 추가
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // username에 입력값 저장
  const username = loginInput.value;
  // id를 통해 가져온 h1 요소의 텍스트 추가하기
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 저장된 username을 가져오는 함수 작성, 위의 const username과 다른 매개변수 username 작성
function paintGreetings(username) {
  // h1의 텍스틑 존재 x. h1의 저장된 username을 추가
  // 위의 username 변수는 함수 안에 존재하므로 savedUsername 을 작성
  greeting.innerText = "Hello " + username;
  // h1의 hidden class를 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// local storage에 username이 있는지 확인하기
// local storge에 저장된 username을 변수에 저장
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // submit event 발생 시 event를 감지하고 함수를 실행하는 eventListenr 작성
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}