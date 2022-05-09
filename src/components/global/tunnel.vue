<template>
  <div class="relative flex justify-center">
    <svg id="tunnelSVG" viewBox="0 0 800 1000">
      <image
        mask="url('#tunnelMaskSVG')"
        preserveAspectRatio="xMidYMid slice"
        href="../../assets/images/stollen.jpg"
        height="100vh"
        width="100vh"
        id="tunnel-image"
      />

      <mask id="tunnelMaskSVG">
        <path
          id="wobble"
          d="M53.48-414.83C-36.82-373-33.76-278.17-19.91-194c12.17,74,66.56,136.46,2.05,205.61s-109.6,66-153.69,147.16,31,143.15-55,230.15-274,14.62-267,206S-750.66,726.14-680.2,819.76c75,99.68,487.9,207.62,632,282.55,342.19,177.9,764,148.24,902.86-42.68C994.14,867.89,1031.26,327.21,819.11-35.12,647.45-328.3,300.19-406.44,276.48-428.27,223.48-477.07,92.55-432.94,53.48-414.83Z"
          fill="yellow"
        />
      </mask>
    </svg>

    <!-- <h2
      id="tunnel-header"
      class="absolute text-5xl font-bold top-[42%] opacity-0 text-white"
    >
      IMAGE OVER TEXT
    </h2> -->
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import timeline from "../../modules/gsap/timeline";

import gsap from "gsap";

export default defineComponent({
  setup() {
    onMounted(() => {
      const { createTimeline } = timeline();

      const tl = createTimeline("#tunnel", {
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        pin: true,
      });

      tl.from("#wobble", {
        xPercent: 100,
        yPercent: 100,
        ease: "power2.out",
        duration: 2,
        onComplete: exampleCallback,
      });

      function exampleCallback() {}
    });
  },
});
</script>


