const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
}
function startClock() {
  const clockUsername = localStorage.getItem(USERNAME_KEY);
  //시작
  if (clockUsername === null) {
    clock.classList.add(HIDDEN_CLASSNAME);
  } else {
    setInterval(getClock, 1000);

    clock.classList.remove(HIDDEN_CLASSNAME);
  }
}

// setInterval(sayHello, 5000); //정해진 밀리초마다 함수실행
// setTimeout(sayHello, 5000);// 정해진 밀리초 후에 함수 한번실행
// padstart(2,"0") //자릿수 체크후 자릿수가 채워질때까지 앞에 해당문자 삽입 *주의점* type이 String이여야한다.
// padEnd(2,"0") //자릿수 체크후 자릿수가 채워질때까지 뒤에 해당문자 삽입 *주의점* type이 String이여야한다.
