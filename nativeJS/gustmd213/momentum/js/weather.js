const API_KEY = config.weatherApiKey; //put your Api key
const weather = document.querySelector("#weather");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url).then((response) => {
    response.json().then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}


if (savedUserName === null) {
  
  weather.classList.add(HIDDEN_CLASSNAME);
} else {
  weather.classList.remove(HIDDEN_CLASSNAME);
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

}