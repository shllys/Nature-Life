document.addEventListener("DOMContentLoaded", function () {
  const zone = document.querySelectorAll(".box");

  zone.forEach(function (item) {
    const card = item.querySelector(".boxInfo");
    const answer = item.querySelector(".info");
    const rot = item.querySelector(".fi");
    const rota = item.querySelector(".fis");

    card.addEventListener("click", () => {
      answer.classList.toggle("activeInfo");
      rot.classList.toggle("activeFle");
      rota.classList.toggle("activeFle");
      card.classList.toggle("activeBox");
    });
  });
});

// ----------------------------

const elementImg = document.querySelector('.carrusel');
const btnNext = document.querySelector('.fil')
const btnPrev = document.querySelector('.fix')

let images = elementImg.querySelectorAll('img')

let index = 1;

btnNext.addEventListener('click', function () {
    let porcentaje = index * -12.5;
    elementImg.style.transform = "translateX(" + porcentaje + "%)";
    index++;
    if (index > images.length - 6) {
      index = 0;
    }
})
btnPrev.addEventListener('click', function () {
  index--;
  if (index < 0) {
    index = images.length - 6;
  }
  let porcentaje = index * -12.5;
  elementImg.style.transform = "translateX(" + porcentaje + "%)";
})



