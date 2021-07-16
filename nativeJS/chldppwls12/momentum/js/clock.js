const clock = document.querySelector('.clock');
const greeting = document.querySelector('.greeting');

//로그인 후 null 나오는 부분 고치기
function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hour}:${min}`

  if (parseInt(hour) > 6 && parseInt(hour) < 12){
    greeting.innerHTML = `Good morning!<br/> ${savedName}`;
  }
  else if (parseInt(hour) < 18){
    greeting.innerHTML = `Good afternoon!<br/> ${savedName}`;
  }
  else if (parseInt(hour) < 22){
    greeting.innerHTML = `Good evening!<br/> ${savedName}`;
  }
  else {
    greeting.innerHTML = `Good night!<br/> ${savedName}`;
  }
}

getClock();
setInterval(getClock, 1000);