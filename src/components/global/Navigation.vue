<template>
  <ul class="w-8/12 flex items-center justify-end space-x-8">
    <li
      v-for="(item, index) in ['Personal', 'Qualities', 'Projects', 'Contact']"
      :key="index"
    >
      <button
        @click="scrollToSection(item.toLocaleLowerCase())"
        class="text-base cursor-none"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  setup() {
    gsap.registerPlugin(ScrollToPlugin);

    const scrollToSection = (id) => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: document.getElementById(id),
          offset: -10,
        },
      });
    };

    return {
      scrollToSection,
    };
  },
};
</script>