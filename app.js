/*
-- project Requirment
-- click the the moon Icon and make the Dark Mode in your websit and change the moon icon to sun icon

steps:
step 1 : collect the all necessary element
step 2 : make a function that change the light them and change the icon
step 3 : handle click event that change the main photo

*/

const icon = document.getElementById("icon");
const body = document.body;
const img = document.getElementById("main_img");

icon.onclick = function () {
  body.classList.toggle("Light_them");
  if (body.classList.contains("Light_them")) {
    icon.className = "fa-solid fa-sun";
    img.src = "img/me.png";
  } else {
    icon.className = "fa-solid fa-moon";
    img.src = "img/me.png";
  }
};
