const h1 = document.querySelector(".hello h1");


function handleTitleClick() {

  // classList는 class 내용물을 조작하는 것을 허락한다.
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
