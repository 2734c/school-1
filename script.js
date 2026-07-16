const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  document.getElementById("pageNum").innerText =
    `${index + 1} / ${slides.length}`;

  document.getElementById("progressBar").style.width =
    ((index + 1) / slides.length * 100) + "%";
}

window.nextSlide = function() {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
};

window.prevSlide = function() {
  if (current > 0) {
    current--;
    showSlide(current);
  }
};

window.goHome = function() {
  current = 0;
  showSlide(current);
};

showSlide(0);

document.querySelectorAll(".toggle-box").forEach(box => {

  box.addEventListener("click", () => {

    box.classList.toggle("active");

  });

});
