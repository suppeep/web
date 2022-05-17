import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    markers: false, // help markers
  });

  gsap.registerPlugin(ScrollTrigger);

  /**
   * create a gsap timeline (from-to)
   *
   * @param {string} trigger
   * @param {object} options
   * @returns
   */
  const createTimelineFromTo = (trigger, animation) => {
    return ScrollTrigger.create({
      trigger,
      animation,
      toggleActions: "play none none none",
      once: true,
    });
  };

  return { createTimelineFromTo };
}
