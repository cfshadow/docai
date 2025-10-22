import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


  document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 767) return;

    const subNav = document.querySelector(".sub_nav_wrapper");
    const heroMedia = document.querySelector(".home_hero_media_wrapper");

    if (!subNav || !heroMedia) return; // safety check

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".subnav",
      start: "top 10%",
      end: "bottom 0%",
      toggleClass: { targets: [subNav, heroMedia], className: "is-expanded" },
      toggleActions: "play reverse play reverse",
      // markers: true,
    });
  });

