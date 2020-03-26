
//carousel
var slideIndex = 1;
var phoneDevice = false;
const INTERVALO = 5000;

//$(document).ready(function() {
    window.addEventListener("load", () => {
    changeClass()
    showSlides(slideIndex, "myCourse");
    setInterval(function() { plusSlides(1, "myCourse"); }, INTERVALO);
    showSlides(slideIndex, "myProf");
    setInterval(function() { plusSlides(1, "myProf"); }, INTERVALO);
})

// Next/previous controls
function plusSlides(n, className) {
  showSlides(slideIndex += n, className);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// n es el número de slide que se va a mostrar
function showSlides(n, className) {
  var i;
  var slides = document.getElementsByClassName(className);
  //console.log(slides)

  //var slides = $(".mySlides");
  //var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1; } 
  if (n < 1) {slideIndex = slides.length}

  $("." + className).css("display", "none");
  $(".dot").removeClass("active");
 /*for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  } 
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }*/

  $("." + className).eq(slideIndex-1).css("display", "block");
  $(".dot").eq(slideIndex-1).addClass("active");
  //slides[slideIndex-1].style.display = "block"; 
 // dots[slideIndex-1].className += "active";
} //termina la funcion
// Prog. Orientada. Objetos

// Ajuste pantalla móvil

function resizeWindow() {
  window.addEventListener("resize", changeClass)
}

function changeClass() {
  //console.log(window.innerWidth)
  if (window.innerWidth < 778 && !phoneDevice) {
    phoneDevice = true;
    const filas = document.querySelectorAll(".filaCurso")
    const cursos = document.querySelectorAll(".panel-curso")
    filas.forEach(fila => { fila.classList.remove("myCourse") })
    cursos.forEach(curso => { curso.classList.add("myCourse") })
    console.log(cursos)
  } else if (window.innerWidth >= 778 && phoneDevice) {
      phoneDevice = false;
      const filas = document.querySelectorAll(".filaCurso")
      const cursos = document.querySelectorAll(".panel-curso")
      filas.forEach(fila => { fila.classList.add("myCourse") })  
      cursos.forEach(curso => { curso.classList.remove("myCourse") })
      console.log(cursos)
  }
}

resizeWindow()
