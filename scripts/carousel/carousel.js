class Carousel {
  constructor() {
    this.carouselRightBtn = document.querySelector(".carousel_button-right");
    this.carouselLeftBtn = document.querySelector(".carousel_button-left");
    this.carouselContainer = document.querySelector(".carousel_container");
    this.digit = 0;
  }
  init() {
    this.eventlistner();
  }
  moveRight() {
    this.digit -= 1500;
    this.carouselContainer.style.transform = `translate3d(${this.digit}px, 0, 0)`;
    this.carouselContainer.style.transitionDuration = "500ms";
  }
  moveLeft() {
    this.digit += 1500;
    this.carouselContainer.style.transform = `translate3d(${this.digit}px, 0, 0)`;
    this.carouselContainer.style.transitionDuration = "500ms";
  }
  eventlistner() {
    this.carouselRightBtn.addEventListener("click", this.moveRight.bind(this));
    this.carouselLeftBtn.addEventListener("click", this.moveLeft.bind(this));
  }
}

export { Carousel };
