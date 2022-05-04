import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    markers: false, // help markers
  });

  gsap.registerPlugin(ScrollTrigger);

  /**
   * create a gsap timeline
   *
   * @param {string} trigger
   * @param {object} options
   * @returns
   */
  const createTimeline = (trigger, options) => {
    return gsap.timeline({
      scrollTrigger: {
        trigger,
        ...options,
      },
    });
  };

  return { createTimeline };
}
