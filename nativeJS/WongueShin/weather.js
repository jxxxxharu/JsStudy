const API_KEY = 'YOUR_API_KEY_HERE';

function onGeo(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(`lat: ${latitude}\nlong: ${longitude}`);
    const queryurl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
    fetch(queryurl)
        .then(response => response.json())
        .then(data => {
            const weatherDataList = [data.name, data.weather[0].main, data.weather[0].icon, data.main.temp];
            //                        cityName  weather str           weatherIcon            currentTemp
            console.log(weatherDataList);
            makeWeatherInfo(weatherDataList);
            setWeatherStyle()
    });
}

function makeWeatherInfo(weatherDataList) {
    upline = document.querySelector('.upline');
    weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('id', 'weatherContainer');
    
    weatherContentList = [document.createElement('span'), document.createElement('span'), document.createElement('img'), document.createElement('span')];
    weatherContentList[0].setAttribute('id', 'cityName');
    weatherContentList[0].innerText = weatherDataList[0];
    weatherContentList[1].setAttribute('id', 'currentWeather');
    weatherContentList[1].innerText = weatherDataList[1];
    weatherContentList[2].setAttribute('id', 'wertherIcon');
    weatherContentList[2].setAttribute('src', `https://openweathermap.org/img/wn/${weatherDataList[2]}.png`);
    weatherContentList[3].setAttribute('id', 'currentTemp');
    weatherContentList[3].innerText = weatherDataList[3];

    weatherContentList.forEach(element => {
        weatherContainer.appendChild(element);
    });
    upline.appendChild(weatherContainer);
}

function setWeatherStyle(){
    weCon = document.querySelector('#weatherContainer');
    weCon.style.color = '#ecf0f1';
    weCon.style.textAlign = 'right';
}

function geoError() {
    alert('location authority error')
} 

navigator.geolocation.getCurrentPosition(onGeo, geoError);