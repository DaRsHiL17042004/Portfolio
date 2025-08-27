import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Text animation
export const textanimation = (textRef, textbody) => {
  if (!textRef?.current) return;


  gsap.to(textRef.current, {
    transform: "translateX(-250%)",
    ease: "none",
    duration: 5,
    scrollTrigger: {
      trigger: textbody.current,
      start: "31% 0%", // when the top of the trigger hits the bottom of the viewport
      end: "90% 60%", // when the bottom of the trigger hits the top of the viewport
      scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: true,
      pin: true,
    },
  });

};
