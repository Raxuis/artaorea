export default [
  {
    target: ".mere-nature-container",
    options: {
      y: 100,
      scrollTrigger: {
        trigger: ".mere-nature-header",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    },
  },
  {
    target: ".arbre-container",
    options: {
      y: 100,
      scrollTrigger: {
        trigger: ".arbre-header",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    },
  },
  {
    target: ".fuite-container",
    options: {
      y: 100,
      scrollTrigger: {
        trigger: ".fuite-header",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    },
  },
  {
    target: ".mere-nature",
    options: {
      scrollTrigger: {
        trigger: ".mere-nature",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      scale: 1.2,
      ease: "power2.out",
    },
  },
  {
    target: ".arbre",
    options: {
      scrollTrigger: {
        trigger: ".arbre",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      scale: 1.2,
      ease: "power2.out",
    },
  },
  {
    target: ".fuite",
    options: {
      scrollTrigger: {
        trigger: ".fuite",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      scale: 1.2,
      ease: "power2.out",
    },
  },
  {
    target: ".bd-1",
    fromOptions: {
      x: -200,
    },
    toOptions: {
      scrollTrigger: {
        trigger: ".bd-1",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      x: 0,
      ease: "power2.out",
    },
  },
  {
    target: ".bd-3",
    fromOptions: {
      x: 200,
    },
    toOptions: {
      scrollTrigger: {
        trigger: ".bd-3",
        start: "top center",
        end: "center center",
        scrub: 1,
      },
      x: 0,
      ease: "power2.out",
    },
  },
];
