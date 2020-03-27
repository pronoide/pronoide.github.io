class Slider {
  constructor(className, slideIndex = 1) {
    this.className = className;
    this.slideIndex = slideIndex;
  }

  getSlides() {
    return document.querySelectorAll('.' + this.className);
  }

  showSlides(numSlide) {
    const slides = this.getSlides();
    this.slideIndex = numSlide;

    if (numSlide > slides.length) { this.slideIndex = 1; }
    if (numSlide < 1) { this.slideIndex = slides.length; }

    slides.forEach((slide, i) => {
      if (this.slideIndex - 1 === i) {
        slide.style.display = 'block'
      } else {
        slide.style.display = 'none'
      }
    })
  }
}

// function Slider (className) {
//   let slideIndex = 1

//   function getSlideIndex() {
//     return slideIndex;
//   }

//   function setSlideIndex(newIndex) {
//     slideIndex = newIndex;
//   }

  // function showSlides(n) {
  //   let slides = document.getElementsByClassName(className);
  //   setSlideIndex(n);
  //   console.log('Slide: ', n);

  //   if (n > slides.length) { setSlideIndex(1); }
  //   if (n < 1) { setSlideIndex(slides.length) }

  //   $("." + className).css("display", "none");
  //   $("." + className).eq(slideIndex - 1).css("display", "block");
  // } //termina la funcion

//   return {
//     showSlides,
//     getSlideIndex,
//     setSlideIndex,
//   }
// }