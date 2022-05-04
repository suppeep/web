<template>
  <section class="image-unmask relative">
    <svg
      id="svg"
      class="relative top-0 left-0 w-full"
      style="z-index: 99999999; height: 1000px"
    >
      <defs>
        <radialGradient id="darkGradient">
          <stop offset="20%" stop-color="#79acea" />
          <stop offset="100%" stop-color="rgb(165, 243, 252)" />
        </radialGradient>
      </defs>

      <rect id="whiteLayer" width="100%" height="100%" fill="#fff"></rect>

      <circle
        id="rectDiv"
        cx="420"
        cy="300"
        r="120"
        fill="url(#darkGradient)"
      />
    </svg>

    <div id="img">
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        markers: false, // help markers
      });

      const img = document.querySelector("#img");
      const circle = document.querySelector("#rectDiv");

      let radius = +circle.getAttribute("r");
      let imgWidth, imgHeight;

      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".image-unmask",
            pin: true,
            start: "top top",
            end: "+=550",
            scrub: 0.2,
          },
        })
        .to(
          circle,
          {
            attr: {
              r: () => radius,
            },
          },
          0
        )
        .to(
          img,
          {
            scale: 1,
            opacity: 1,
          },
          0
        );

      window.addEventListener("load", init);
      window.addEventListener("resize", resize);

      function init() {
        imgWidth = img.naturalWidth;
        imgHeight = img.naturalHeight;

        resize();
      }

      function resize() {
        tl.progress(0);

        const rectWidth = 820;
        const rectHeight = 820;
        const rx = rectWidth / imgWidth;
        const ry = rectHeight / imgHeight;

        const ratio = Math.max(rx, ry);

        const width = imgWidth * ratio;
        const height = imgHeight * ratio;

        const dx = rectWidth / 3;
        const dy = rectHeight / 3;
        radius = Math.sqrt(dx * dx + dy * dy);

        gsap.set(img, { width, height });

        tl.invalidate();

        ScrollTrigger.refresh();
      }
    });
  },
};
</script>
