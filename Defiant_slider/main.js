// line drawing animation for slide 1
var lineDraw1 = anime({
    targets: 'path.arrow_slide1', 
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    value: 0,
    duration: 3500,
    loop: false,
    delay: anime.stagger(8500)
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
    delay: anime.stagger(8500),
    easing: 'linear',
    duration: 3500,
    opacity: 0,
});

// line drawing animation for slide 2
var lineDraw2 = anime({
  targets: 'path.arrow_slide2', 
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  value: 0,
  duration: 3500,
  loop: false,
  delay: anime.stagger(16000)
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
  delay: anime.stagger(16000),
  easing: 'linear',
  duration: 3500,
  opacity: 0,
});

// object fade in animation for slide 3
var fadeIn3 = anime({
  targets: 'svg.text_slide3',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  delay: anime.stagger(2500),
  easing: 'linear',
  duration: 1500,
  opacity: 0,
});

// object fade in animation for slide 4
var fadeIn4 = anime({
  targets: 'svg.obj_slide4',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  delay: 2000,
  easing: 'linear',
  duration: 1500,
  opacity: 0,
});

// object fade in animation for slide 6
var fadeIn6 = anime({
  targets: 'svg.obj_slide6',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  delay: anime.stagger(3100, {start: 3100}),
  easing: 'linear',
  duration: 1500,
  opacity: 0,
});

var networkingDrawFade = anime.timeline({
  loop: false
})
.add({
  targets: 'path.internet_lines',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  value: 0,
  duration: 2100,
  delay: function(el, i, l){ return i * 750}
})
.add({
  targets: 'svg.obj_slide7',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  easing: 'linear',
  duration: 1500,
})
.add({
  targets: 'svg.text_slide7',
  keyframes: [
      {opacity: 0},
      {opacity: 0.25},
      {opacity: 0.50},
      {opacity: 0.75},
      {opacity: 1},
  ],
  easing: 'linear',
  duration: 1500,
});

// file sharing animations
var fileShare = anime.timeline({
  easing: 'easeInOutSine',
})
.add({
  targets: '.node_right',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 1500,
})
.add({
  targets: '.node_top',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 1500,
})
.add({
  targets: '.node_left',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 1500,
})
.add({ 
  targets: 'path.node_lines', 
  strokeDashoffset: [anime.setDashoffset, 0], 
  value: 0,  
  duration: 1500, 
  loop: false, 
  delay: function(el, i, l){ return i * 750} 
})

var fileShareLoop = anime.timeline({
  loop: true,
  delay: 4500
})
.add({
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
})
.add({
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
}, '-=8750')
.add({ 
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
}, '-=8750');

// blockchain sharing animation
var blockchainShare = anime.timeline({
  easing: 'easeInOutQuad',
  loop: true,
})
.add({
  targets: '.blockchain_symbol_bottom',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 715, duration: 2500 },
  ],
})
.add({ 
  targets: '.blockchain_symbol_right',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -340, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -350, duration: 2500 },
  ],
})
.add({
  targets: '.blockchain_symbol_left',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -340, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: 350, duration: 2500 },
  ],
});

// decentralized computing and storage animation
var computingStorage = anime.timeline({
  easing: 'easeInOutQuad',
  loop: true,
})
.add({
  targets: '.exe_left',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 340, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -350, duration: 2500 },
  ],
})
.add({
  targets: '.exe_bottom',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 720, duration: 2500 },
  ],
}, '-=4300')
.add({
  targets: '.storage_right',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -310, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -330, duration: 2500 },
  ],
})
.add({
  targets: '.storage_bottom',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: -720, duration: 2500 },
  ],
}, '-=4300');

// decentralized networking animation
var networkingTraffic = anime.timeline({
  easing: 'easeInOutQuad',
  loop: true
})
.add({
  targets: '.traffic_left',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 240, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -340, duration: 2500 },
  ],
})
.add({
  targets: '.traffic_bottom',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 380, duration: 2500 },
  ],
}, '-=4300')
.add({
  targets: '.traffic_top',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 400, duration: 2500 },
  ]
})
.add({
  targets: '.traffic_right',
  opacity: [
    { value: [0, 1], duration: 600 },
    { value: [1, 0], duration: 600, delay: 3100 }
  ],
  translateX: [
    { value: 0, duration: 600 },
    { value: 240, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 600 },
    { value: -340, duration: 2500 },
  ]
}, '-=4300');

// decentralized name service animation
var nameService = anime.timeline({
  loop: false,
})
.add({
  targets: 'svg.user_requesting',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2500,
})
.add({
  targets: '.request_text',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2500,
})
.add({
  targets: '.query_right',
  opacity: [
    { value: [0, 1], duration: 1000 },
    { value: [1, 0], duration: 1000, delay: 3500 }
  ],
  translateX: [
    { value: 0, duration: 1000 },
    { value: -250, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 1000 },
    { value: -350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: '.query_bottom',
  opacity: [
    { value: [0, 1], duration: 1000 },
    { value: [1, 0], duration: 1000, delay: 3500 }
  ],
  translateX: [
    { value: 0, duration: 1000 },
    { value: -400, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
}, '-=5500')
.add({
  targets: '.ip_address',
  opacity: [
    { value: [0, 1], duration: 1000 },
    { value: [1, 0], duration: 1000, delay: 3500 }
  ],
  translateX: [
    { value: 0, duration: 1000 },
    { value: 250, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 1000 },
    { value: 350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: 'svg.decentralized_name',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: 'svg.text_slide8',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
});

// decentralized identity animation
var decentralizedIdentity = anime.timeline({
  loop: false,
})
.add({
  targets: '.user_requesting_id',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.decentralized_id_request',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.access_left',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: -240, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 800 },
    { value: 350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: '.access_right',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: 240, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 800 },
    { value: 350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
}, '-=4900')
.add({
  targets: '.approved',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: 250, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 800 },
    { value: -350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: '.decentralized_user',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.decentralized_id_text',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
});

// decentralized governance animation
var decentralizedGovernance = anime.timeline({
  loop: false,
})
.add({
  targets: '.user_governance_right',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.user_governance_top',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.user_governance_left',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.did_right_node',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.did_top_node',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.vote_left',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: 240, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 800 },
    { value: -350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: '.vote_bottom',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: 400, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
}, '-=4900')
.add({
  targets: '.recording_left',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: -260, duration: 2500 },
  ],
  translateY: [
    { value: 0, duration: 800 },
    { value: 350, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
})
.add({
  targets: '.recording_bottom',
  opacity: [
    { value: [0, 1], duration: 800 },
    { value: [1, 0], duration: 800, delay: 3300 }
  ],
  translateX: [
    { value: 0, duration: 800 },
    { value: -400, duration: 2500 },
  ],
  easing: 'easeInOutQuad',
}, '-=4900')
.add({
  targets: '.did_left_node',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})
.add({
  targets: '.governance_text',
  keyframes: [
    {opacity: 0},
    {opacity: 0.25},
    {opacity: 0.50},
    {opacity: 0.75},
    {opacity: 1},
  ],
  easing: 'linear',
  duration: 2000,
})

// resets all animations as all animations are loaded simultaneously
function animateAll() {
  fadeIn1.restart();
  lineDraw1.restart();
  fadeIn2.restart();
  lineDraw2.restart();
  fadeIn3.restart();
  fileShare.restart();
  fileShareLoop.restart();
  fadeIn4.restart();
  blockchainShare.restart();
  fadeIn6.restart();
  computingStorage.restart();
  networkingDrawFade.restart();
  networkingTraffic.restart();
  nameService.restart();
  decentralizedIdentity.restart();
  decentralizedGovernance.restart();
};

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
    
    // moves slide and resets animation to view each slide from beginning of animation
    goStep(dir) {
      let index = this.current + dir;
      let len = this.slidesLength;
      let currentIndex = (index + len) % len;
      this.goTo(currentIndex, dir);
      animateAll();
    }
  
    // goes to next slide
    goNext() {
      this.goStep(1);
    }
  
    // goes to prevous slide
    goPrev() {
      this.goStep(-1);
    }
  
    // handle clicks to next and previous slides
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
