// HTML 요소를 JS로 가져오기
const title = document.querySelector("div.hello:frist-child h1");

// 가져온 요소의 색깔 바꾸기
// title.style.color = "blue";

console.dir(title);

// 이벤트가 일어났을 때 결과를 반환하는 함수 작성
function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

// 클릭하는 것을 감지한는 이벤트 설정하기
// 0. html요소 가져오기
// 1. addEventListenr 호출
// 2. 첫번째 인자로 listen 하고 싶은 event이름 알려주기
// 3. 두번째 인자로 event가 발생하면 호출할 function 전달하기, 함수의 ()(괄호)를 전달하지 않기!!
title.addEventListener("click", handleTitleClick);

// 마우스가 올려져있을 때 반응하는 event listener호출
title.addEventListener("mouseenter", handleMouseEnter);

// 마우스가 떠났을 때 반응하는 event listener 호출
title.addEventListener("mouseleave", handleMouseLeave);
