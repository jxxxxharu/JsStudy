const clockContainer = document.querySelector('.js-clock'),
    clockTitle = clockContainer.querySelector('.clock-title'),
    mainDiv = document.querySelector('.main');


function getTime(){
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function setlocation(){
    console.log(`mainH: ${mainDiv.offsetHeight} mainW: ${mainDiv.offsetWidth}\nclockH: ${clockTitle.offsetHeight}   clockW: ${clockTitle.offsetWidth}`);
    //const heightValue = mainDiv.offsetHeight/2 - clockTitle.offsetHeight/2;
    const widthValue = mainDiv.offsetWidth/2 - clockTitle.offsetWidth/2;
    clockContainer.style.top = `22vh`//`${heightValue}px`;
    clockContainer.style.left = `${widthValue}px`;
}

function init(){
    getTime();
    setlocation();
    setInterval(getTime, 500);
}

init();
