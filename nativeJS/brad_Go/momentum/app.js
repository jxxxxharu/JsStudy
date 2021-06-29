// HTML 요소를 JS로 가져오기
const h1 = document.querySelector(".hello h1");

// 가져온 요소의 색깔 바꾸기
// h1.style.color = "blue";

console.dir(h1);

// 이벤트가 일어났을 때 결과를 반환하는 함수 작성
function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

//화면 크기가 바뀌게 될 경우에 document를 호출하고 배경색을 바꾸는 함수
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

// 사용자가 복사를 하려고 했을 때 경고창을 띄우는 함수
function handleWindowCopy() {
  alert("copier!!");
}

// wifi가 연결되지 않았을 때 
function handleWindowOffline() {
  alert("SOS no Wifi");
}

// wifi가 연결되었을 때
function handleWindowOnline() {
  alert("All good");
}

// 클릭하는 것을 감지한는 이벤트 설정하기
// 0. html요소 가져오기
// 1. addEventListenr 호출
// 2. 첫번째 인자로 listen 하고 싶은 event이름 알려주기
// 3. 두번째 인자로 event가 발생하면 호출할 function 전달하기, 함수의 ()(괄호)를 전달하지 않기!!
h1.addEventListener("click", handleTitleClick);

// 마우스가 올려져있을 때 반응하는 event listener호출
h1.addEventListener("mouseenter", handleMouseEnter);

// 마우스가 떠났을 때 반응하는 event listener 호출
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);