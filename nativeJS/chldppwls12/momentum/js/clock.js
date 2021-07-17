const clock = document.querySelector('.clock');
const greeting = document.querySelector('.greeting');

const media =matchMedia("screen and (min-width:768px)");

function getTimeCategory(hour){
  const h = parseInt(hour);
  if (h > 6 && h < 12){
    return 'morning';
  }
  else if (h < 18){
    return 'afternoon';
  }
  else if (h < 22){
    return 'evening';
  }
  else {
    return 'night';
  }
}

//로그인 후 null 나오는 부분 고치기
function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hour}:${min}`;

  const timeCategory = getTimeCategory(hour);

  if (media.matches){
    greeting.innerHTML = `Good ${timeCategory}!, ${savedName}`;
  }
  else{
    greeting.innerHTML = `Good ${timeCategory}! <br/> ${savedName}`;
  }
}

getClock();
setInterval(getClock, 1000);