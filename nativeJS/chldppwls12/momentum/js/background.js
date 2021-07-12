const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement('img');
bgImage.setAttribute('src', `img/${chosenImage}`);

//append랑 appendChild 차이점?
//document.body.prepend(bgImage);
document.body.appendChild(bgImage);