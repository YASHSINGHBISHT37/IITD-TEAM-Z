function lenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  let backToUp = document.querySelector(".page1 .circle");
  backToUp.addEventListener("click", function () {
    lenis.scrollTo(0, {
      duration: 3.5,
    });
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

gsap.from(".page3 .top .elem h1", {
  y: 120,
  stagger: 0.06,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "bottom 68%",
    end: "bottom 86%",
    // markers: true,
    scrub: 2,
    // yoyo:true
  },
});

gsap.from(".loader .bar h1", {
  y: 120,
  stagger: 0.06,
  duration: 0.6,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "bottom 60%",
    end: "bottom 86%",
    // markers: true,
    scrub: 2,
    // yoyo:true
  },
});

function loader() {
  let bar = document.querySelectorAll(".loader .lbar");
  let loader = document.querySelectorAll(".loader");

  gsap.to(bar, {
    y: "-100%",
    duration: 0.5,
    delay: 2,
    stagger: 0.04,
    opacity: 0,
  });

  gsap.to(loader, {
    y: "-100%",
    duration: 0.4,
    delay: 2.7,
    // stagger: 0.04,
  });
}

function cursor() {
  let cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 0.6,
      ease: "back.out",
    });
  });
}

function TextReaveal() {
  const splitTypes = document.querySelectorAll(".reveal-type");

  splitTypes.forEach((char) => {
    const bg = char.dataset.bgColor;
    const fg = char.dataset.fgColor;

    const text = new SplitType(char, { types: "words" });

    gsap.fromTo(
      text.words,
      { color: fg },
      {
        color: bg,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: char,
          start: "top 70%",
          end: "top 0%",
          scrub: true,
          // markers: true,
          toggleActions: "play play reverse reverse",
        },
      }
    );
  });
}

function tl() {
  var tl = gsap.timeline();

  tl.from("nav .brandname img", {
    y: 10,
    stagger: 0.06,
    opacity: 0,
    duration: 0.4,
    delay:3.2,
  });

  tl.from(".backtoup", {
    y: 10,
    stagger: 0.06,
    opacity: 0,
    duration: 0.4,
  });

  tl.from("nav .brandname .name", {
    y: 10,
    stagger: 0.06,
    opacity: 0,
    duration: 0.4,
  });

  tl.from("nav a", {
    y: 10,
    stagger: 0.06,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".page1 .bgfont h1 span", {
    y: 530,
    stagger: 0.05,
    opacity: 0,
    duration: 0.5,
    delay: 0,
  });

  tl.from(".page1 .bgfont .circle", {
    // y: -1030,
    opacity: 0,
    duration: 1.4,
    ease: "bounce.out(1.2)",
  });
}

function tl1() {
  var tl1 = gsap.timeline();

  tl1.from(".whyus .top", {
    y: 200,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".whyus .top",
      scroll: "body",
      // markers:true,
      start: "top 98%",
      end: "top 50%",
      scrub: true,
    },
  });

  tl1.from(".whyus .top p", {
    y: 100,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".whyus .top p",
      scroll: "body",
      // markers:true,
      start: "top 120%",
      end: "top 70%",
      scrub: true,
    },
  });

  tl1.from(".whyuscont .cont", {
    y: 340,
    stagger: 0.9,
    duration: 6,
    scrollTrigger: {
      trigger: ".whyuscont .cont",
      scroll: "body",
      // markers:true,
      start: "top 130%",
      end: "top 40%",
      scrub: true,
    },
  });
}

gsap.from(".page2 img", {
  scale: 0,
  rotate: 360,
  duration: 2,
  scrollTrigger: {
    trigger: ".page2 img",
    scroll: "body",
    // markers:true,
    start: "top 86%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.to(".page1 .circle", {
  y: 100,
  x: 280,
  scale: 0.6,
  stagger: 0.2,
  duration: 5.4,
  scrollTrigger: {
    trigger: ".backtoup",
    scroll: "main",
    start: "bottom 94%",
    end: "top -100%",
    scrub: true,
  },
});

lenis();
cursor();
loader();
TextReaveal();
tl();
tl1();
