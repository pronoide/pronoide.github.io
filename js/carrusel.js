var carruselCursos, carruselProfes;

class Carrousel {
  constructor(className, numSlidesToShow = 4, intervalMs = 20000) {
    this.className = className;
    this.numSlidesToShow = numSlidesToShow;
    this.slides = document.querySelectorAll(`.${this.className}`);
    this.showing = new Array(numSlidesToShow).fill(0).map((v, pos) => pos);
    this.intervalMs = intervalMs;
    this.intervalId = null;
    this.showInitialSlides()
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.showSlides('next');
    }, this.intervalMs)
  }

  stopInterval() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }

  showInitialSlides() {
    this.addBtnListeners();
    document.querySelectorAll(`.${this.className}.hide`).forEach(s => s.classList.remove('hide'));
    this.slides.forEach((slide, pos) => {
      if (!this.showing.includes(pos)) {
        this.slides[pos].classList.add('hide');
      }
    });
    this.startInterval();
  }

  showSlides(direction = 'next') {
    const firstSlidePos = this.showing[0];
    const lastSlidePos = this.showing[this.numSlidesToShow-1];
    const isTheEnd = lastSlidePos === this.slides.length-1;
    const isTheStart = firstSlidePos === 0;
    if (direction === 'next') {
      this.hide(firstSlidePos);
      if (isTheEnd) {
        this.show(direction, 0);
      } else {
        this.show(direction, lastSlidePos+1);
      }
    } else if (direction === 'prev') {
      this.hide(lastSlidePos);
      if (isTheStart) {
        this.show(direction, this.slides.length-1);
      } else {
        this.show(direction, firstSlidePos-1);
      }
    }
  }

  hide(...posSlidesToHide) {
    posSlidesToHide.forEach(pos => {
      this.slides[pos].classList.add('hide');
    })
    this.showing = this.showing.filter(p => {

      return !posSlidesToHide.includes(p)
    });
  }

  show(direction, ...posSlidesToShow) {
    posSlidesToShow.forEach(pos => {
      this.slides[pos].classList.remove('hide');
    })
    this.showing = direction === 'next' ? [...this.showing, ...posSlidesToShow] : [...posSlidesToShow, ...this.showing];
  }

  clean() {
    this.removeBtnListeners();
    this.stopInterval();
  }

  prevBtnHandler(event) {
    this.showSlides('prev');
  }

  nextBtnHandler(event) {
    this.showSlides('next');
  }

  addBtnListeners() {
    document.querySelector(`button.btn-prev-${this.className}`).onclick = this.prevBtnHandler.bind(this);
    document.querySelector(`button.btn-next-${this.className}`).onclick = this.nextBtnHandler.bind(this);
  }

  removeBtnListeners() {
    document.querySelector(`button.btn-prev-${this.className}`).onclick = null;
    document.querySelector(`button.btn-next-${this.className}`).onclick = null;
  }
}

function getNumSlidesFormScreenWidth() {
  if (window.innerWidth > 1199) {
    return 4;
  } else if (window.innerWidth > 994) {
    return 3;
  } else if (window.innerWidth > 767) {
    return 2;
  }
  return 1;
}

window.addEventListener("resize", () => {
  initCarrusel();
})

function initCarrusel() {
  if (carruselCursos) {
    carruselCursos.clean();
  }
  if (carruselProfes) {
    carruselProfes.clean();
  }
  const numSlides = getNumSlidesFormScreenWidth()
  carruselProfes = new Carrousel('panel-profe', numSlides);
  carruselCursos = new Carrousel('panel-curso', numSlides);
}

initCarrusel();
