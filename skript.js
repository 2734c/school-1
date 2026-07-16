const slides = document.querySelectorAll(".slide");

let current = 0;

function showSlide(index){

  slides.forEach(slide =>
    slide.classList.remove("active")
  );

  slides[index].classList.add("active");

  document.getElementById("pageNum").textContent =
    `${index + 1} / ${slides.length}`;

  document.getElementById("progressBar").style.width =
    `${((index + 1) / slides.length) * 100}%`;
}

function nextSlide(){
  if(current < slides.length - 1){
    current++;
    showSlide(current);
  }
}

function prevSlide(){
  if(current > 0){
    current--;
    showSlide(current);
  }
}

function goHome(){
  current = 0;
  showSlide(current);
}

document.addEventListener("keydown",(e)=>{
  if(e.key==="ArrowRight") nextSlide();
  if(e.key==="ArrowLeft") prevSlide();
});

showSlide(0);
