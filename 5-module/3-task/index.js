function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel__inner');
  const carouselSlides = carousel.querySelectorAll('.carousel__slide');
  const leftArrow = carousel.querySelector('.carousel__arrow_left');
  const rightArrow = carousel.querySelector('.carousel__arrow_right');

  const slideWidth = carouselInner.offsetWidth;
  carouselInner.style.transform = `translateX(0px)`;
  leftArrow.style.display = 'none';

  carousel.addEventListener('click', (evt) => {
    if (evt.target.closest('.carousel__arrow')) {
      let translateNum = parseNum(carouselInner.style.transform);

      if (evt.target.closest('.carousel__arrow_left')) {
        translateNum += slideWidth;
      }

      if (evt.target.closest('.carousel__arrow_right')) {
        translateNum -= slideWidth;
      }

      carouselInner.style.transform = `translateX(${translateNum}px)`;
      checkArrowsVisibility(translateNum);
    }
  });

  function parseNum(value) {
    const validChars = '0123456789-';
    let numStr = '';
  
    for (const char of value) {
      if (validChars.includes(char)) {
        numStr += char;
      }
    }
  
    return parseInt(numStr);
  }

  function checkArrowsVisibility (value) {
    if (value === 0) {
      leftArrow.style.display = 'none';
    } else {
      leftArrow.removeAttribute('style');
    }

    if (value === -(carouselSlides.length - 1) * slideWidth) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.removeAttribute('style');
    }
  }
}