// line drawing animation for slide 1
var lineDraw1 = anime({
    targets: 'path.arrow_slide1', 
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    value: 0,
    duration: 2100,
    loop: false,
    delay: function(el, i, l){ return i * 750}
});

// line drawing animation for slide 2
var lineDraw2 = anime({
  targets: 'path.arrow_slide2', 
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  value: 0,
  duration: 2100,
  loop: false,
  delay: function(el, i, l){ return i * 750}
});

var lineDraw3 = anime({
  targets: 'path.node_lines', 
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  value: 0,
  duration: 2100,
  loop: false,
  delay: function(el, i, l){ return i * 750}
});

// object fade in animation for slide 1
var fadeIn1 = anime({
    targets: 'svg.obj_slide1',
    keyframes: [
        {opacity: 0},
        {opacity: 0.25},
        {opacity: 0.50},
        {opacity: 0.75},
        {opacity: 1},
    ],
    delay: function(el, i, l){ return i * 1000},
    easing: 'linear',
    duration: 1500,
    opacity: 0,
});

// object fade in animation for slide 2
var fadeIn2 = anime({
  targets: 'svg.obj_slide2',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  delay: function(el, i, l){ return i * 1000},
  easing: 'linear',
  duration: 1500,
  opacity: 0,
});

var fadeIn3 = anime({
  targets: 'svg.obj_slide3',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  delay: function(el, i, l){ return i * 1000},
  easing: 'linear',
  duration: 1500,
  opacity: 0,
});

// file sharing animations
var fileShare_bottom = anime({
  targets: '.file_symbol_bottom',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 760, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
  loop: true
});

var fileShare_left = anime({
  targets: '.file_symbol_left',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -380, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: 390, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
  loop: true
});

var fileShare_right = anime({
  targets: '.file_symbol_right',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -380, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -390, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
  loop: true
});

// framework for navigating slides
class Slider {
    constructor(props) {
      this.rootElement = props.element;
      // creates array from amount of items with div class with slider-list
      this.slides = Array.from(
        this.rootElement.querySelectorAll(".slider-list__item")
      );
      this.slidesLength = this.slides.length;
      this.current = 0;
      this.isAnimating = false;
      this.direction = 1; // -1
      this.baseAnimeSettings = {
        duration: 750,
        elasticity: 0,
        easing: 'easeInOutCirc'
      };
      this.navBar = this.rootElement.querySelector(".slider__nav-bar");
      this.thumbs = Array.from(this.rootElement.querySelectorAll(".nav-control"));
      this.prevButton = this.rootElement.querySelector(".slider__arrow_prev");
      this.nextButton = this.rootElement.querySelector(".slider__arrow_next");
  
      this.slides[this.current].classList.add("slider-list__item_active");
      this.thumbs[this.current].classList.add("nav-control_active");
  
      this._bindEvents();
    }
  
    goTo(index, dir) {
      if (this.isAnimating) return;
      var self = this;
      let prevSlide = this.slides[this.current];
      let nextSlide = this.slides[index];
      
      self.isAnimating = true;
      self.current = index;
      nextSlide.classList.add("slider-list__item_active");
  
      anime(Object.assign({}, self.baseAnimeSettings, { 
        targets: nextSlide,
        translateX: [100 * dir + '%', 0]
      }));
      
      anime(Object.assign({}, self.baseAnimeSettings, {
        targets: prevSlide,
        translateX: [ 0, -100 * dir + '%'],
        complete: function(anim) {
          self.isAnimating = false;
          prevSlide.classList.remove("slider-list__item_active");
          self.thumbs.forEach((item, index) => {
            var action = index === self.current ? "add" : "remove";
            item.classList[action]("nav-control_active");
          });
        }
      }))
    }
    
    // moves slide. requires animation restart and to be seperated as all anime.js objects are loaded simultaneously
    goStep(dir) {
      let index = this.current + dir;
      let len = this.slidesLength;
      let currentIndex = (index + len) % len;
      this.goTo(currentIndex, dir);
      fadeIn1.restart();
      lineDraw1.restart();
      fadeIn2.restart();
      lineDraw2.restart();
      fadeIn3.restart();
      lineDraw3.restart();
      fileShare_bottom.restart();
      fileShare_left.restart();
      fileShare_right.restart();
    }
  
    goNext() {
      this.goStep(1);
    }
  
    goPrev() {
      this.goStep(-1);
    }
  
    _navClickHandler(e) {
      var self = this;
      if (self.isAnimating) return;    
      let target = e.target.closest(".nav-control");
      if (!target) return;    
      let index = self.thumbs.indexOf(target);
      if (index === self.current) return;
      let direction = index > self.current ? 1 : -1;
      self.goTo(index, direction);
    }
  
    _bindEvents() {
      var self = this;
      ["goNext", "goPrev", "_navClickHandler"].forEach(method => {
        self[method] = self[method].bind(self);
      });
      self.nextButton.addEventListener("click", self.goNext);
      self.prevButton.addEventListener("click", self.goPrev);
      self.navBar.addEventListener("click", self._navClickHandler);
    }
  }
  
  // ===== init ======
  let slider = new Slider({
    element: document.querySelector(".slider")
  });