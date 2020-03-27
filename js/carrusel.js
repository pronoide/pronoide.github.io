//carousel
var phoneDevice = false;
const INTERVALO = 3000;

const sliderCourse = new Slider('myCourse');
const sliderProf = new Slider('myProf');

window.addEventListener("load", () => {
  changeClass();
  sliderCourse.showSlides(1);
  setInterval(function () { plusSlides(1, 'myCourse'); }, INTERVALO);
  sliderProf.showSlides(1);
  setInterval(function () { plusSlides(1, 'myProf'); }, INTERVALO);
})

// Next/previous controls
function plusSlides(n, className) {
  let slider = null;
  if (className === 'myCourse') {
    slider = sliderCourse;
  } else if (className === 'myProf') {
    slider = sliderProf;
  }
  slider.showSlides(slider.slideIndex + n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// n es el número de slide que se va a mostrar
// function showSlides(n, className) {
//   var i;
//   var slides = document.getElementsByClassName(className);
//   //console.log(slides)

//   //var slides = $(".mySlides");
//   //var dots = document.getElementsByClassName("dot");

//   if (n > slides.length) { slideIndex = 1; }
//   if (n < 1) { slideIndex = slides.length }

//   $("." + className).css("display", "none");
//   $(".dot").removeClass("active");
//   /*for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace("active", "");
//    }*/

//   $("." + className).eq(slideIndex - 1).css("display", "block");
//   $(".dot").eq(slideIndex - 1).addClass("active");
//   //slides[slideIndex-1].style.display = "block";
//   // dots[slideIndex-1].className += "active";
// } //termina la funcion
// Prog. Orientada. Objetos

// Ajuste pantalla móvil

function resizeWindow() {
  window.addEventListener("resize", changeClass)
}

function changeClass() {
  //console.log(window.innerWidth)
  if (window.innerWidth < 778 && !phoneDevice) {
    phoneDevice = true;
    const filas = document.querySelectorAll(".filaCurso, .filaProf")
    const cursos = document.querySelectorAll(".panel-curso")
    const profes = document.querySelectorAll(".panel-prof")
    filas.forEach(fila => {
      fila.classList.remove("myCourse")
      fila.classList.remove("myProf")
      fila.removeAttribute("style")
    })
    cursos.forEach(curso => { curso.classList.add("myCourse") })
    profes.forEach(profe => { profe.classList.add("myProf") })
    //console.log(cursos)
  } else if (window.innerWidth >= 778 && phoneDevice) {
    phoneDevice = false;
    const filasCurso = document.querySelectorAll(".filaCurso")
    const filasProf = document.querySelectorAll(".filaProf")
    const cursosyprofes = document.querySelectorAll(".panel-curso, .panel-prof")
    filasCurso.forEach(fila => { fila.classList.add("myCourse") })
    filasProf.forEach(fila => { fila.classList.add("myProf") })
    cursosyprofes.forEach(elem => {
      elem.classList.remove("myCourse")
      elem.classList.remove("myProf")
      elem.removeAttribute("style")
    })
    //console.log(cursos)
  }
}

resizeWindow()
