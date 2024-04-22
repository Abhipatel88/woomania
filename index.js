// code for swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// the below code animation :
function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveScroll();

gsap.from(".nav .t img,.nav .r .img,.nav .b a", {
  duration: 1,
  y: -100,
});
gsap.from(".page1 .l h1,.page1 .l p,.page1 .l .Browse, .page1 .l h2", {
  x: -500,
  duration: 1,
});
gsap.from(".page1 .brands .b1", {
  x: -1000,
  duration: 1,
  delay: 0.5,
  stagger: 0.2,
});
gsap.from(".page1 .r .box", {
  y: -1000,
  duration: 1,
});
gsap.from(".page2 h1", {
  x: -10000,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page2 h1",
    start: "top 70%",
    scrub: 1,

    end: "bottom bottom",
    // markers: true
  },
});
gsap.from(".page2 .t,.page2 .b .l,.page2 .b .r", {
  y: 100,
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page2 .t",
    start: "top 60%",
    end: "bottom bottom",
    // markers: true
    scrub: 1,
  },
});
gsap.from(".page3>h1", {
  x: -10000,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page3 h1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,

    // markers: true
  },
});
gsap.from(".page3 .bar .box", {
  scale: 0,
  x: -10000,

  duration: 0.8,
  delay: 0.5,
  stagger: 0.3,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page3 .bar .box",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,

    // markers: true,
  },
});
gsap.from(".page4 img", {
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page4 img",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page4 .box1,.page4 .box1 h1,.page4 .box1 p,.page4 .box1 .u", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page4 .box1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page5 h1", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page5 h1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page5 .swiper .swiper-slide", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scale: 0,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page5 h1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page6 h1", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page6 h1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page6 .main-box .boxs", {
  opacity: 0,
  y: 10,

  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page6 h1",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page7 img", {
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page7 img",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page7 .box", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page7 .box",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page8 .l", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page8 .l",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from(".page8 .r", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page8 .r",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});
gsap.from("footer ", {
  y: 100,
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  scrollTrigger: {
    scroller: "#main",
    trigger: ".page8 .r",
    start: "top 70%",
    end: "bottom bottom",
    scrub: 1,
  },
});







// code for nav bar menu button

const mobile_btns = document.querySelector(".mobile-bar");
const navs = document.querySelector(".nav");
let toogglenav = () => {
  navs.classList.toggle("active");
};
mobile_btns.addEventListener("click", () => toogglenav());
