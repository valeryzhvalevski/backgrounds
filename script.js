const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const body = document.querySelector("body");

let backgrounds = [];

if (localStorage.backgrounds) {
  backgrounds = JSON.parse(localStorage.backgrounds);
  backgrounds.forEach((element) => {
    body.classList.add(element);
  });
}

img1.addEventListener("click", function () {
  body.classList.remove("img2", "img3");
  body.classList.add("img1");
  backgrounds = ['img1'];
  localStorage.backgrounds = JSON.stringify(backgrounds);
});

img2.addEventListener("click", function () {
  body.classList.remove("img1", "img3");
  body.classList.add("img2");
  backgrounds = ['img2'];
  localStorage.backgrounds = JSON.stringify(backgrounds);
});

img3.addEventListener("click", function () {
  body.classList.remove("img1", "img2");
  body.classList.add("img3");
  backgrounds = ['img3'];
  localStorage.backgrounds = JSON.stringify(backgrounds);
});

