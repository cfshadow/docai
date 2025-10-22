import { gsap } from "gsap";

export function initMarqueeAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    const marquees = document.querySelectorAll('.marquee');

    marquees.forEach(marquee => {
      const speed = parseFloat(marquee.getAttribute('data-speed')) || 10;
      const direction = marquee.getAttribute('data-direction') || 'rtl';
      const lists = marquee.querySelectorAll('.marquee_list');
      if (lists.length < 2) return;

      const dir = direction === 'ltr' ? 100 : -100;

      gsap.to(lists, {
        xPercent: dir,
        repeat: -1,
        duration: speed,
        ease: "none",
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0)
        }
      });
    });
  });
}
