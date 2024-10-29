// Ensure GSAP and ScrollTrigger are imported and registered
gsap.registerPlugin(ScrollTrigger);

gsap.from(".aboutHeading h1", {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "top 75%", // Start animation when the top of ".aboutUs" is 75% down the viewport
    toggleActions: "play none none none", // Play animation on scroll, no repeat
  },
  y: 50, // Start 50px below
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".aboutPara p", {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".aboutButton h2", {
  scrollTrigger: {
    trigger: ".aboutUs",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});


gsap.from(".hero-img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60,
});

gsap.from(".hero-img2", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  x: 60,
});

gsap.from(".hero-img3", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from(".hero-text h1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
});
